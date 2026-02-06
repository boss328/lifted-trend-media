import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '../../utils';

export default function B2CIntakeForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    business_name: '',
    contact_name: '',
    email: '',
    phone: '',
    offer_product: '',
    monthly_revenue_range: '',
    traffic_sources: [],
    post_inquiry_process: '',
    biggest_conversion_leak: '',
    desired_outcome_30: '',
    desired_outcome_60: '',
    desired_outcome_90: '',
    is_decision_maker: false,
    budget_range: '',
    response_speed: 'Within 24 hours',
    score: 'Warm',
    source: 'Website Form',
    stage: 'New',
    tags: ['B2C'],
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
    if (!formData.business_name || !formData.email) {
      alert('Please fill in all required fields.');
      return;
    }
    
    setLoading(true);
    
    try {
      // Auto-score based on criteria
      let score = 'Warm';
      if (formData.is_decision_maker && formData.budget_range && formData.budget_range !== 'Under $5K' && formData.monthly_revenue_range && formData.monthly_revenue_range !== 'Under $5K') {
        score = 'Hot';
      } else if (!formData.is_decision_maker || formData.monthly_revenue_range === 'Under $5K') {
        score = 'Cold';
      }
      
      const { honeypot, ...cleanData } = formData;
      const leadData = { ...cleanData, score };
      await base44.entities.B2CLead.create(leadData);
      
      // Send notification email
      await base44.integrations.Core.SendEmail({
        from_name: 'Lifted Trend Media - B2C Lead',
        to: 'ahron@mydragonplug.com',
        subject: `New B2C Lead: ${leadData.business_name} (${score})`,
        body: `
New B2C intake submission:

Business: ${leadData.business_name}
Contact: ${leadData.contact_name || 'Not provided'}
Email: ${leadData.email}
Phone: ${leadData.phone || 'Not provided'}

Offer/Product: ${leadData.offer_product || 'Not provided'}
Monthly Revenue: ${leadData.monthly_revenue_range || 'Not provided'}
Biggest Leak: ${leadData.biggest_conversion_leak || 'Not provided'}

Budget: ${leadData.budget_range || 'Not provided'}
Decision Maker: ${leadData.is_decision_maker ? 'Yes' : 'No'}
Lead Score: ${score}

30-day outcome: ${leadData.desired_outcome_30 || 'None'}
60-day outcome: ${leadData.desired_outcome_60 || 'None'}
90-day outcome: ${leadData.desired_outcome_90 || 'None'}
        `
      });
      
      base44.analytics.track({ eventName: 'b2c_audit_submit', properties: { success: true, score } });
      navigate(createPageUrl('ThankYouB2C'));
    } catch (error) {
      alert('Error submitting form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="business_name">Business Name *</Label>
          <Input
            id="business_name"
            required
            value={formData.business_name}
            onChange={(e) => handleChange('business_name', e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="contact_name">Contact Name</Label>
          <Input
            id="contact_name"
            value={formData.contact_name}
            onChange={(e) => handleChange('contact_name', e.target.value)}
          />
        </div>
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
        <Label htmlFor="offer_product">Main Offer or Product</Label>
        <Input
          id="offer_product"
          placeholder="What are you selling?"
          value={formData.offer_product}
          onChange={(e) => handleChange('offer_product', e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="monthly_revenue_range">Average Monthly Revenue Range</Label>
        <Select value={formData.monthly_revenue_range} onValueChange={(val) => handleChange('monthly_revenue_range', val)}>
          <SelectTrigger>
            <SelectValue placeholder="Select range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Under $5K">Under $5K</SelectItem>
            <SelectItem value="$5K–$15K">$5K–$15K</SelectItem>
            <SelectItem value="$15K–$50K">$15K–$50K</SelectItem>
            <SelectItem value="$50K–$100K">$50K–$100K</SelectItem>
            <SelectItem value="$100K+">$100K+</SelectItem>
            <SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="post_inquiry_process">What happens after someone inquires?</Label>
        <Textarea
          id="post_inquiry_process"
          placeholder="Describe your current follow-up process"
          value={formData.post_inquiry_process}
          onChange={(e) => handleChange('post_inquiry_process', e.target.value)}
          rows={3}
        />
      </div>

      <div>
        <Label htmlFor="biggest_conversion_leak">Biggest Conversion Leak</Label>
        <Select value={formData.biggest_conversion_leak} onValueChange={(val) => handleChange('biggest_conversion_leak', val)}>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="No landing page">No landing page</SelectItem>
            <SelectItem value="No follow-up system">No follow-up system</SelectItem>
            <SelectItem value="Weak offer positioning">Weak offer positioning</SelectItem>
            <SelectItem value="No tracking">No tracking</SelectItem>
            <SelectItem value="Content doesn't convert">Content doesn't convert</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="desired_outcome_30">Desired Outcome in 30 Days</Label>
        <Textarea
          id="desired_outcome_30"
          placeholder="What would success look like in 30 days?"
          value={formData.desired_outcome_30}
          onChange={(e) => handleChange('desired_outcome_30', e.target.value)}
          rows={2}
        />
      </div>

      <div>
        <Label htmlFor="desired_outcome_60">Desired Outcome in 60 Days</Label>
        <Textarea
          id="desired_outcome_60"
          placeholder="What would success look like in 60 days?"
          value={formData.desired_outcome_60}
          onChange={(e) => handleChange('desired_outcome_60', e.target.value)}
          rows={2}
        />
      </div>

      <div>
        <Label htmlFor="desired_outcome_90">Desired Outcome in 90 Days</Label>
        <Textarea
          id="desired_outcome_90"
          placeholder="What would success look like in 90 days?"
          value={formData.desired_outcome_90}
          onChange={(e) => handleChange('desired_outcome_90', e.target.value)}
          rows={2}
        />
      </div>

      <div>
        <Label htmlFor="budget_range">Budget Range</Label>
        <Select value={formData.budget_range} onValueChange={(val) => setFormData({...formData, budget_range: val})}>
          <SelectTrigger>
            <SelectValue placeholder="Select budget range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Under $5K">Under $5K</SelectItem>
            <SelectItem value="$5K-$10K">$5K-$10K</SelectItem>
            <SelectItem value="$10K-$20K">$10K-$20K</SelectItem>
            <SelectItem value="$20K+">$20K+</SelectItem>
            <SelectItem value="Not sure">Not sure</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="decision_maker_b2c"
          checked={formData.is_decision_maker}
          onChange={(e) => setFormData({...formData, is_decision_maker: e.target.checked})}
          className="w-4 h-4"
        />
        <Label htmlFor="decision_maker_b2c" className="cursor-pointer">
          I am the decision-maker for this project
        </Label>
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
            Submit B2C Audit
          </>
        )}
      </Button>
    </form>
  );
}