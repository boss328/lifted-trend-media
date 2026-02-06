import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import { createPageUrl } from '../utils';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    goal: '',
    notes: '',
    honeypot: ''
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Honeypot spam protection
    if (formData.honeypot) {
      return;
    }
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.goal) {
      alert('Please fill in all required fields.');
      return;
    }
    
    setLoading(true);
    
    try {
      const { honeypot, ...cleanData } = formData;
      await base44.entities.BookingRequest.create(cleanData);
      
      // Send notification email
      await base44.integrations.Core.SendEmail({
        from_name: 'Lifted Trend Media - Contact Form',
        to: 'ahron@mydragonplug.com',
        subject: `New Contact Form: ${cleanData.goal} - ${cleanData.name}`,
        body: `
New contact form submission:

Name: ${cleanData.name}
Email: ${cleanData.email}
Phone: ${cleanData.phone || 'Not provided'}
Business: ${cleanData.business || 'Not provided'}
Goal: ${cleanData.goal}

Notes:
${cleanData.notes || 'None'}
        `
      });
      
      base44.analytics.track({ eventName: 'booking_request_submit', properties: { success: true } });
      setSubmitted(true);
    } catch (error) {
      alert('Error submitting request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="max-w-2xl text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Request Received</h1>
          <p className="text-xl text-gray-600 mb-8">
            Thanks for reaching out. We'll review your request and get back to you within 1 business day.
          </p>
          <p className="text-gray-600 mb-8">
            Check your email for a confirmation. If you don't see it, check your spam folder.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <p className="text-gray-900 font-semibold mb-3">Want to skip the wait?</p>
            <p className="text-gray-700 mb-4">Book a 15-minute Farm Growth Audit and get started right away.</p>
            <a href={createPageUrl('FarmGrowthAudit')} className="inline-flex items-center gap-2 text-green-800 hover:text-green-900 font-semibold">
              Book Your Audit Now →
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#F7F3E8] to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Book a Strategy Call
          </h1>
          <p className="text-xl text-gray-600">
            Tell us about your farm and we'll show you exactly what to build first.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-[#E6E0D5] p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-[#EEF3EC] rounded-lg">
                    <Mail className="w-5 h-5 text-[#1F3D2B]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A1A1A] mb-1">Email</h3>
                  <a href="mailto:ahron@mydragonplug.com" className="text-[#1F3D2B] hover:text-[#2A553A] font-medium">
                    ahron@mydragonplug.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-[#EEF3EC] rounded-lg">
                    <Phone className="w-5 h-5 text-[#1F3D2B]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A1A1A] mb-1">Phone</h3>
                  <a href="tel:8587520666" className="text-[#1F3D2B] hover:text-[#2A553A] font-medium">
                    858-752-0666
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-[#EEF3EC] rounded-lg">
                    <MapPin className="w-5 h-5 text-[#1F3D2B]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A1A1A] mb-1">Service Area</h3>
                  <p className="text-gray-700">San Diego County + Southern California</p>
                  <p className="text-sm text-gray-500 mt-1">Based in San Diego, CA 92122</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-[#EEF3EC] rounded-lg">
                    <CheckCircle className="w-5 h-5 text-[#1F3D2B]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A1A1A] mb-1">Response Time</h3>
                  <p className="text-gray-700">We reply within 1 business day.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-[#F7F3E8]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 border border-[#E6E0D5] shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Request a Strategy Call</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="business">Farm/Business Name</Label>
                <Input
                  id="business"
                  value={formData.business}
                  onChange={(e) => handleChange('business', e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="goal">Primary Goal *</Label>
                <Select value={formData.goal} onValueChange={(val) => handleChange('goal', val)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your primary goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Wholesale Growth">Wholesale Growth (B2B buyers)</SelectItem>
                    <SelectItem value="B2C Conversion">B2C Conversion (direct-to-consumer)</SelectItem>
                    <SelectItem value="Both">Both Wholesale + B2C</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Tell us about your current setup, biggest challenges, or goals"
                  value={formData.notes}
                  onChange={(e) => handleChange('notes', e.target.value)}
                  rows={4}
                />
              </div>

              {/* Honeypot field for spam protection */}
              <div style={{ position: 'absolute', left: '-9999px' }}>
                <Input
                  type="text"
                  name="website"
                  tabIndex="-1"
                  autoComplete="off"
                  value={formData.honeypot}
                  onChange={(e) => handleChange('honeypot', e.target.value)}
                />
              </div>

              <Button type="submit" disabled={loading} className="w-full bg-[#1F3D2B] hover:bg-[#2A553A] text-white">
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Request Strategy Call
                  </>
                )}
              </Button>
            </form>
          </div>


        </div>
      </section>
    </div>
  );
}