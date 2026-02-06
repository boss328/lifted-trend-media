import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { base44 } from '@/api/base44Client';

export default function QuoteModal({ open, onOpenChange }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    farm: '',
    email: '',
    goal: '',
    honeypot: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.honeypot) {
      return;
    }
    
    setLoading(true);
    try {
      await base44.entities.WholesaleLead.create({
        business_name: formData.farm,
        contact_name: formData.name,
        email: formData.email,
        success_90_days: formData.goal,
        source: 'Homepage Quote Modal',
        stage: 'New',
        score: 'Warm'
      });
      
      await base44.integrations.Core.SendEmail({
        from_name: 'Lifted Trend Media Website',
        to: 'ahron@mydragonplug.com',
        subject: `New Quote Request: ${formData.name} - ${formData.farm}`,
        body: `
New quote request from homepage modal:

Name: ${formData.name}
Farm/Business: ${formData.farm}
Email: ${formData.email}
Goal: ${formData.goal}
        `
      });
      
      setSubmitted(true);
    } catch (error) {
      alert('Error submitting. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setFormData({ name: '', farm: '', email: '', goal: '', honeypot: '' });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {submitted ? (
          <div className="text-center py-6">
            <CheckCircle className="w-12 h-12 text-[#AED354] mx-auto mb-4" />
            <DialogTitle className="text-2xl font-bold mb-2">Quote Request Sent</DialogTitle>
            <p className="text-gray-600 mb-6">We'll send you a custom quote within 24 hours.</p>
            <Button onClick={handleClose} className="bg-[#0B0B0B] hover:bg-[#0B0B0B]/90 text-white">
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">Get a Quote (60 seconds)</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <Label htmlFor="name">Your Name *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="border-gray-300 focus:border-[#AED354] focus:ring-[#AED354]"
                />
              </div>

              <div>
                <Label htmlFor="farm">Farm/Business Name *</Label>
                <Input
                  id="farm"
                  required
                  value={formData.farm}
                  onChange={(e) => setFormData({...formData, farm: e.target.value})}
                  className="border-gray-300 focus:border-[#AED354] focus:ring-[#AED354]"
                />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="border-gray-300 focus:border-[#AED354] focus:ring-[#AED354]"
                />
              </div>

              <div>
                <Label htmlFor="goal">Primary Goal *</Label>
                <Select value={formData.goal} onValueChange={(val) => setFormData({...formData, goal: val})} required>
                  <SelectTrigger className="border-gray-300 focus:border-[#AED354] focus:ring-[#AED354]">
                    <SelectValue placeholder="Select your goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="B2B Growth">B2B Growth</SelectItem>
                    <SelectItem value="B2C Conversion">B2C Conversion</SelectItem>
                    <SelectItem value="Both">Both</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={(e) => setFormData({...formData, honeypot: e.target.value})}
                style={{ position: 'absolute', left: '-9999px' }}
                tabIndex="-1"
                autoComplete="off"
              />

              <Button 
                type="submit" 
                disabled={loading} 
                className="w-full bg-[#0B0B0B] hover:bg-[#0B0B0B]/90 text-white font-semibold"
              >
                {loading ? 'Sending...' : 'Get Quote'}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}