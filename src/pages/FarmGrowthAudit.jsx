import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { CheckCircle, Video, FileText, ArrowRight } from 'lucide-react';

export default function FarmGrowthAudit() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    business_name: '',
    contact_name: '',
    email: '',
    website: '',
    current_situation: '',
    biggest_bottleneck: '',
    honeypot: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Honeypot spam protection
    if (formData.honeypot) {
      return;
    }
    
    // Basic validation
    if (!formData.business_name || !formData.contact_name || !formData.email) {
      alert('Please fill in all required fields.');
      return;
    }
    
    setLoading(true);
    try {
      const { honeypot, ...cleanData } = formData;
      await base44.entities.WholesaleLead.create({
        ...cleanData,
        stage: 'New',
        score: 'Warm',
        source: 'Free Audit',
        tags: ['Audit Request']
      });
      
      // Send notification email
      await base44.integrations.Core.SendEmail({
        from_name: 'Lifted Trend Media - Farm Audit',
        to: 'ahron@mydragonplug.com',
        subject: `New Farm Growth Audit Request: ${cleanData.business_name}`,
        body: `
New farm growth audit request:

Business: ${cleanData.business_name}
Contact: ${cleanData.contact_name}
Email: ${cleanData.email}
Website: ${cleanData.website || 'Not provided'}

Current Situation:
${cleanData.current_situation}

Biggest Bottleneck:
${cleanData.biggest_bottleneck}
        `
      });
      
      setSubmitted(true);
    } catch (error) {
      alert('Error submitting. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="max-w-2xl text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Audit Request Received</h1>
          <p className="text-xl text-gray-600 mb-8">
            We'll review your setup and send you a Loom video audit + 1-page action plan within 48 hours.
          </p>
          <p className="text-gray-600">Check your email for confirmation.</p>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Your Free Audit</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label>Farm/Business Name *</Label>
                <Input
                  required
                  value={formData.business_name}
                  onChange={(e) => setFormData({...formData, business_name: e.target.value})}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label>Your Name *</Label>
                  <Input
                    required
                    value={formData.contact_name}
                    onChange={(e) => setFormData({...formData, contact_name: e.target.value})}
                  />
                </div>
                <div>
                  <Label>Email *</Label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <Label>Website (if you have one)</Label>
                <Input
                  value={formData.website}
                  onChange={(e) => setFormData({...formData, website: e.target.value})}
                  placeholder="https://yourfarm.com"
                />
              </div>

              <div>
                <Label>Current Situation *</Label>
                <Textarea
                  required
                  value={formData.current_situation}
                  onChange={(e) => setFormData({...formData, current_situation: e.target.value})}
                  placeholder="e.g., Selling to 3 wholesale accounts, want to scale to 10. Getting DMs but they don't convert. No system for follow-up."
                  rows={4}
                />
              </div>

              <div>
                <Label>Biggest Bottleneck *</Label>
                <Textarea
                  required
                  value={formData.biggest_bottleneck}
                  onChange={(e) => setFormData({...formData, biggest_bottleneck: e.target.value})}
                  placeholder="e.g., Spending 10 hours/week answering the same questions. No tracking on what works. Orders come in chaotically."
                  rows={4}
                />
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