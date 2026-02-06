import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';

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
    website: '' // Honeypot field
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Honeypot spam protection
    if (formData.website) {
      return;
    }
    
    setLoading(true);
    
    try {
      await base44.entities.BookingRequest.create(formData);
      
      // Send email notification
      await base44.integrations.Core.SendEmail({
        from_name: 'Lifted Trend Media Website',
        to: 'ahron@mydragonplug.com',
        subject: `New Strategy Call Request: ${formData.name}`,
        body: `
New strategy call request:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Business: ${formData.business || 'Not provided'}
Goal: ${formData.goal}

Notes: ${formData.notes || 'None'}
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
            Thanks for reaching out. We'll get back to you within 1 business day with next steps.
          </p>
          <p className="text-gray-600 mb-6">
            Check your email for a confirmation.
          </p>
          <Link to={createPageUrl('FarmGrowthAudit')}>
            <Button size="lg" className="bg-green-800 hover:bg-green-900 text-white">
              Or Book a 15-Min Farm Growth Audit <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                <Mail className="w-6 h-6 text-green-800" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
              <a href="mailto:ahron@mydragonplug.com" className="text-gray-600 hover:text-green-800 transition-colors">ahron@mydragonplug.com</a>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                <Phone className="w-6 h-6 text-green-800" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
              <a href="tel:858-752-0666" className="text-gray-600 hover:text-green-800 transition-colors">858-752-0666</a>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                <MapPin className="w-6 h-6 text-green-800" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Service Area</h3>
              <p className="text-gray-600">San Diego County + Southern California</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                <Mail className="w-6 h-6 text-green-800" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Response Time</h3>
              <p className="text-gray-600">We reply within 1 business day</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 border border-gray-200">
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

              {/* Honeypot field - hidden from users */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={(e) => handleChange('website', e.target.value)}
                style={{ position: 'absolute', left: '-9999px' }}
                tabIndex="-1"
                autoComplete="off"
              />

              <Button type="submit" disabled={loading} className="w-full bg-green-800 hover:bg-green-900 text-white">
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

          {/* Scheduler Embed Placeholder */}
          <div className="mt-12 p-8 bg-white rounded-xl border-2 border-dashed border-gray-300 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Prefer to schedule directly?</h3>
            <p className="text-gray-600 mb-4">Use our calendar scheduler below:</p>
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-gray-500">[SCHEDULER_LINK - Embed Calendly or similar here]</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}