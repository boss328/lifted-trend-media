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

export default function WholesaleIntakeForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    business_name: '',
    contact_name: '',
    contact_role: '',
    email: '',
    phone: '',
    website: '',
    socials: '',
    location: '',
    delivery_radius: '',
    product_category: '',
    products_varieties: '',
    seasonality: '',
    has_wholesale_buyers: '',
    current_buyers_details: '',
    target_buyers: [],
    weekly_volume_capacity: '',
    packaging_options: '',
    certifications: '',
    pricing_structure: '',
    biggest_bottleneck: '',
    bottleneck_details: '',
    success_90_days: '',
    is_decision_maker: false,
    budget_range: '',
    season_start_date: '',
    season_end_date: '',
    response_speed: 'Within 24 hours',
    score: 'Warm',
    source: 'Website Form',
    stage: 'New',
    tags: ['Wholesale'],
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
    if (!formData.business_name || !formData.contact_name || !formData.email) {
      alert('Please fill in all required fields.');
      return;
    }
    
    setLoading(true);
    
    try {
      // Auto-score based on criteria
      let score = 'Warm';
      if (formData.is_decision_maker && formData.budget_range && formData.budget_range !== 'Under $5K' && formData.response_speed === 'Within 24 hours') {
        score = 'Hot';
      } else if (!formData.is_decision_maker || formData.budget_range === 'Under $5K') {
        score = 'Cold';
      }
      
      const { honeypot, ...cleanData } = formData;
      const leadData = { ...cleanData, score };
      await base44.entities.WholesaleLead.create(leadData);
      
      // Send notification email
      await base44.integrations.Core.SendEmail({
        from_name: 'Lifted Trend Media - Wholesale Lead',
        to: 'ahron@mydragonplug.com',
        subject: `New Wholesale Lead: ${leadData.business_name} (${score})`,
        body: `
New wholesale intake submission:

Business: ${leadData.business_name}
Contact: ${leadData.contact_name}
Email: ${leadData.email}
Phone: ${leadData.phone || 'Not provided'}
Location: ${leadData.location || 'Not provided'}

Product Category: ${leadData.product_category || 'Not provided'}
Products: ${leadData.products_varieties || 'Not provided'}
Weekly Volume: ${leadData.weekly_volume_capacity || 'Not provided'}

Has Wholesale Buyers: ${leadData.has_wholesale_buyers || 'Not provided'}
Biggest Bottleneck: ${leadData.biggest_bottleneck || 'Not provided'}

Budget: ${leadData.budget_range || 'Not provided'}
Decision Maker: ${leadData.is_decision_maker ? 'Yes' : 'No'}
Lead Score: ${score}

90-day success: ${leadData.success_90_days || 'Not provided'}
        `
      });
      
      base44.analytics.track({ eventName: 'wholesale_intake_submit', properties: { success: true, score } });
      navigate(createPageUrl('ThankYouWholesale'));
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
          <Label htmlFor="business_name">Farm/Brand Name *</Label>
          <Input
            id="business_name"
            required
            value={formData.business_name}
            onChange={(e) => handleChange('business_name', e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="contact_name">Contact Name *</Label>
          <Input
            id="contact_name"
            required
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
        <Label htmlFor="location">Location(s)</Label>
        <Input
          id="location"
          placeholder="City, State"
          value={formData.location}
          onChange={(e) => handleChange('location', e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="product_category">Product Category</Label>
        <Select value={formData.product_category} onValueChange={(val) => handleChange('product_category', val)}>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Fruit">Fruit</SelectItem>
            <SelectItem value="Vegetables">Vegetables</SelectItem>
            <SelectItem value="Nursery">Nursery</SelectItem>
            <SelectItem value="Livestock">Livestock</SelectItem>
            <SelectItem value="Dairy">Dairy</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="products_varieties">Products + Varieties</Label>
        <Textarea
          id="products_varieties"
          placeholder="List your products and varieties"
          value={formData.products_varieties}
          onChange={(e) => handleChange('products_varieties', e.target.value)}
          rows={3}
        />
      </div>

      <div>
        <Label htmlFor="seasonality">Seasonality / Availability</Label>
        <Textarea
          id="seasonality"
          placeholder="When are your products available?"
          value={formData.seasonality}
          onChange={(e) => handleChange('seasonality', e.target.value)}
          rows={2}
        />
      </div>

      <div>
        <Label htmlFor="has_wholesale_buyers">Do you currently have wholesale buyers?</Label>
        <Select value={formData.has_wholesale_buyers} onValueChange={(val) => handleChange('has_wholesale_buyers', val)}>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Yes">Yes</SelectItem>
            <SelectItem value="No">No</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {formData.has_wholesale_buyers === 'Yes' && (
        <div>
          <Label htmlFor="current_buyers_details">Current Buyers Details</Label>
          <Textarea
            id="current_buyers_details"
            placeholder="Tell us about your current wholesale relationships"
            value={formData.current_buyers_details}
            onChange={(e) => handleChange('current_buyers_details', e.target.value)}
            rows={2}
          />
        </div>
      )}

      <div>
        <Label htmlFor="weekly_volume_capacity">Average Weekly Volume Capacity</Label>
        <Select value={formData.weekly_volume_capacity} onValueChange={(val) => handleChange('weekly_volume_capacity', val)}>
          <SelectTrigger>
            <SelectValue placeholder="Select range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Under 100 units">Under 100 units</SelectItem>
            <SelectItem value="100–500 units">100–500 units</SelectItem>
            <SelectItem value="500–2,000 units">500–2,000 units</SelectItem>
            <SelectItem value="2,000–10,000 units">2,000–10,000 units</SelectItem>
            <SelectItem value="10,000+">10,000+</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="certifications">Certifications (organic, GAP, etc.)</Label>
        <Input
          id="certifications"
          value={formData.certifications}
          onChange={(e) => handleChange('certifications', e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="biggest_bottleneck">Biggest Bottleneck</Label>
        <Select value={formData.biggest_bottleneck} onValueChange={(val) => handleChange('biggest_bottleneck', val)}>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="No website or online presence">No website or online presence</SelectItem>
            <SelectItem value="Unqualified inquiries waste time">Unqualified inquiries waste time</SelectItem>
            <SelectItem value="Pricing confusion">Pricing confusion</SelectItem>
            <SelectItem value="No follow-up system">No follow-up system</SelectItem>
            <SelectItem value="Can't track what's working">Can't track what's working</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="success_90_days">What does success look like in 90 days?</Label>
        <Textarea
          id="success_90_days"
          placeholder="Describe your ideal outcome"
          value={formData.success_90_days}
          onChange={(e) => handleChange('success_90_days', e.target.value)}
          rows={3}
        />
      </div>

      <div>
        <Label htmlFor="season_start_date">Season Start Date</Label>
        <Input
          id="season_start_date"
          type="date"
          value={formData.season_start_date}
          onChange={(e) => handleChange('season_start_date', e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="season_end_date">Season End Date</Label>
        <Input
          id="season_end_date"
          type="date"
          value={formData.season_end_date}
          onChange={(e) => handleChange('season_end_date', e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="budget_range">Budget Range</Label>
        <Select value={formData.budget_range} onValueChange={(val) => handleChange('budget_range', val)}>
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
          id="decision_maker"
          checked={formData.is_decision_maker}
          onChange={(e) => handleChange('is_decision_maker', e.target.checked)}
          className="w-4 h-4"
        />
        <Label htmlFor="decision_maker" className="cursor-pointer">
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
            Submit Wholesale Intake
          </>
        )}
      </Button>
    </form>
  );
}