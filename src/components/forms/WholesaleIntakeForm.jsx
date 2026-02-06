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
    tags: ['Wholesale']
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Auto-score based on criteria
      let score = 'Warm';
      if (formData.is_decision_maker && formData.budget_range && formData.budget_range !== 'Under $5K' && formData.response_speed === 'Within 24 hours') {
        score = 'Hot';
      } else if (!formData.is_decision_maker || formData.budget_range === 'Under $5K') {
        score = 'Cold';
      }
      
      const leadData = { ...formData, score };
      await base44.entities.WholesaleLead.create(leadData);
      
      // Trigger notification automation
      await base44.functions.invoke('sendLeadNotification', {
        leadData,
        leadType: 'Wholesale'
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

      <Button type="submit" disabled={loading} className="w-full bg-green-800 hover:bg-green-900 text-white">
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