import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { createPageUrl } from '../utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { CheckCircle, Video, FileText, ArrowRight, AlertCircle } from 'lucide-react';

export default function FarmGrowthAudit() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    farm_business_name: '',
    email: '',
    phone: '',
    website: '',
    goal: '',
    weekly_capacity: '',
    current_situation: '',
    biggest_bottleneck: '',
    honeypot: ''
  });

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.farm_business_name.trim()) {
      errors.farm_business_name = 'Farm/Business name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }
    
    if (!formData.current_situation.trim()) {
      errors.current_situation = 'Please describe your current situation';
    }
    
    if (!formData.biggest_bottleneck.trim()) {
      errors.biggest_bottleneck = 'Please describe your biggest bottleneck';
    }
    
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setFieldErrors({});
    
    // Honeypot spam protection
    if (formData.honeypot) {
      return;
    }
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    
    try {
      const { honeypot, ...cleanData } = formData;
      
      // Save lead to database (primary action - must succeed)
      await base44.entities.Lead.create({
        name: cleanData.name,
        farm_business_name: cleanData.farm_business_name,
        email: cleanData.email,
        phone: cleanData.phone || null,
        website: cleanData.website || null,
        goal: cleanData.goal || null,
        weekly_capacity: cleanData.weekly_capacity || null,
        current_situation: cleanData.current_situation,
        biggest_bottleneck: cleanData.biggest_bottleneck,
        lead_source: 'Farm Growth Audit',
        status: 'New'
      });
      
      // Send notification email (secondary - don't fail submission if this fails)
      try {
        await base44.integrations.Core.SendEmail({
          from_name: 'Lifted Trend Media - Farm Audit',
          to: 'ahron@mydragonplug.com',
          subject: `New Farm Growth Audit Request: ${cleanData.farm_business_name}`,
          body: `
New farm growth audit request:

Name: ${cleanData.name}
Business: ${cleanData.farm_business_name}
Email: ${cleanData.email}
Phone: ${cleanData.phone || 'Not provided'}
Website: ${cleanData.website || 'Not provided'}
Goal: ${cleanData.goal || 'Not specified'}
Weekly Capacity: ${cleanData.weekly_capacity || 'Not specified'}

Current Situation:
${cleanData.current_situation}

Biggest Bottleneck:
${cleanData.biggest_bottleneck}
          `
        });
      } catch (emailError) {
        console.error('Email notification failed (lead was saved):', emailError);
      }
      
      setSubmitted(true);
      // Redirect to thank you page after 2 seconds
      setTimeout(() => {
        navigate(createPageUrl('ThankYouAudit'));
      }, 2000);
      
    } catch (error) {
      console.error('Submission error:', error);
      setError('There was an error submitting your request. Please try again or contact us directly at ahron@mydragonplug.com');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="max-w-2xl text-center">
          <CheckCircle className="w-16 h-16 text-[#6B8F71] mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-[#1A1A1A] mb-4">Audit Request Received!</h1>
          <p className="text-xl text-gray-600 mb-8">
            We'll review your setup and send you a Loom video audit + 1-page action plan within 48 hours.
          </p>
          <p className="text-gray-600 mb-6">Check your email for confirmation.</p>
          <p className="text-sm text-gray-500">Redirecting to next steps...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#F7F3E8] to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Free Farm Growth Audit
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Get a Loom video audit + 1-page action plan showing exactly what to fix first.
          </p>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What You Get (Free)</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Video className="w-6 h-6 text-green-800" />
                <h3 className="font-bold text-gray-900">10-Min Loom Video Audit</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• We review your current setup (or lack of one)</li>
                <li>• Point out exactly where leads are dying</li>
                <li>• Show you what to build first</li>
                <li>• Compare you to farms doing $50K-$200K/year</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-blue-800" />
                <h3 className="font-bold text-gray-900">1-Page Action Plan</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Top 3 fixes (prioritized by ROI)</li>
                <li>• Timeline: what to do in 30/60/90 days</li>
                <li>• Estimated cost + time investment</li>
                <li>• DIY vs. hire decision framework</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#EEF3EC] border-l-4 border-[#6B8F71] rounded-r-xl p-6 mb-12">
            <p className="text-gray-900 font-semibold mb-2">No Pitch. No Sales Call.</p>
            <p className="text-gray-700">
              We send the audit. You decide if you want to work with us. If not, you still have the plan.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-[#F7F3E8]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 border border-[#E6E0D5] shadow-sm">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">Request Your Free Audit</h2>
            
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label>Your Name *</Label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={fieldErrors.name ? 'border-red-500' : ''}
                />
                {fieldErrors.name && <p className="text-sm text-red-600 mt-1">{fieldErrors.name}</p>}
              </div>

              <div>
                <Label>Farm/Business Name *</Label>
                <Input
                  value={formData.farm_business_name}
                  onChange={(e) => setFormData({...formData, farm_business_name: e.target.value})}
                  className={fieldErrors.farm_business_name ? 'border-red-500' : ''}
                />
                {fieldErrors.farm_business_name && <p className="text-sm text-red-600 mt-1">{fieldErrors.farm_business_name}</p>}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label>Email *</Label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className={fieldErrors.email ? 'border-red-500' : ''}
                  />
                  {fieldErrors.email && <p className="text-sm text-red-600 mt-1">{fieldErrors.email}</p>}
                </div>
                <div>
                  <Label>Phone (optional)</Label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="Any format"
                  />
                </div>
              </div>

              <div>
                <Label>Website (optional)</Label>
                <Input
                  value={formData.website}
                  onChange={(e) => setFormData({...formData, website: e.target.value})}
                  placeholder="yourfarm.com or https://yourfarm.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label>Primary Goal (optional)</Label>
                  <select
                    value={formData.goal}
                    onChange={(e) => setFormData({...formData, goal: e.target.value})}
                    className="w-full h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
                  >
                    <option value="">Select a goal</option>
                    <option value="B2B Growth">B2B Growth</option>
                    <option value="B2C Conversion">B2C Conversion</option>
                    <option value="Both">Both</option>
                  </select>
                </div>
                <div>
                  <Label>Weekly Capacity (optional)</Label>
                  <Input
                    value={formData.weekly_capacity}
                    onChange={(e) => setFormData({...formData, weekly_capacity: e.target.value})}
                    placeholder="e.g., 500-2000 units"
                  />
                </div>
              </div>

              <div>
                <Label>Current Situation *</Label>
                <Textarea
                  value={formData.current_situation}
                  onChange={(e) => setFormData({...formData, current_situation: e.target.value})}
                  placeholder="e.g., Selling to 3 wholesale accounts, want to scale to 10. Getting DMs but they don't convert. No system for follow-up."
                  rows={4}
                  className={fieldErrors.current_situation ? 'border-red-500' : ''}
                />
                {fieldErrors.current_situation && <p className="text-sm text-red-600 mt-1">{fieldErrors.current_situation}</p>}
              </div>

              <div>
                <Label>Biggest Bottleneck *</Label>
                <Textarea
                  value={formData.biggest_bottleneck}
                  onChange={(e) => setFormData({...formData, biggest_bottleneck: e.target.value})}
                  placeholder="e.g., Spending 10 hours/week answering the same questions. No tracking on what works. Orders come in chaotically."
                  rows={4}
                  className={fieldErrors.biggest_bottleneck ? 'border-red-500' : ''}
                />
                {fieldErrors.biggest_bottleneck && <p className="text-sm text-red-600 mt-1">{fieldErrors.biggest_bottleneck}</p>}
              </div>

              {/* Honeypot field for spam protection */}
              <div style={{ position: 'absolute', left: '-9999px' }}>
                <Input
                  type="text"
                  name="website_url"
                  tabIndex="-1"
                  autoComplete="off"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({...formData, honeypot: e.target.value})}
                />
              </div>

              <Button type="submit" disabled={loading} className="w-full bg-[#1F3D2B] hover:bg-[#2A553A] text-white">
                {loading ? 'Submitting...' : 'Get My Free Audit'}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}