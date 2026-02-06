import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from '@/components/ui/button';
import { CheckCircle, Calendar, Mail, Phone, ArrowRight } from 'lucide-react';

export default function ThankYouAudit() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F7F3E8] to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <CheckCircle className="w-20 h-20 text-[#6B8F71] mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-[#1A1A1A] mb-4">
            Your Free Audit Request is Confirmed!
          </h1>
          <p className="text-xl text-gray-600">
            We'll send your personalized video audit + action plan within 48 hours.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-[#E6E0D5] p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">What Happens Next</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-[#EEF3EC] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                <span className="text-[#1F3D2B] font-bold">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#1A1A1A] mb-1">We Review Your Setup</h3>
                <p className="text-gray-600">We'll analyze your current situation and identify the biggest opportunities.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#EEF3EC] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                <span className="text-[#1F3D2B] font-bold">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#1A1A1A] mb-1">You Get Your Video Audit</h3>
                <p className="text-gray-600">10-minute Loom walkthrough showing exactly where leads are dying and what to fix first.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#EEF3EC] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                <span className="text-[#1F3D2B] font-bold">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#1A1A1A] mb-1">Plus a 1-Page Action Plan</h3>
                <p className="text-gray-600">Prioritized roadmap with timeline, costs, and DIY vs. hire recommendations.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#EEF3EC] border border-[#6B8F71] rounded-xl p-8 mb-8">
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-[#1F3D2B]" />
            Want to Talk Sooner?
          </h2>
          <p className="text-gray-700 mb-6">
            Book a 15-minute strategy call to discuss your situation directly and get immediate guidance.
          </p>
          <Link to={createPageUrl('Contact')}>
            <Button className="bg-[#1F3D2B] hover:bg-[#2A553A] text-white">
              Book a Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="text-center space-y-4">
          <p className="text-gray-600">Check your email for confirmation and next steps.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-600">
            <a href="mailto:ahron@mydragonplug.com" className="flex items-center gap-2 hover:text-[#1F3D2B]">
              <Mail className="w-4 h-4" />
              ahron@mydragonplug.com
            </a>
            <a href="tel:8587520666" className="flex items-center gap-2 hover:text-[#1F3D2B]">
              <Phone className="w-4 h-4" />
              858-752-0666
            </a>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to={createPageUrl('Home')} className="text-[#1F3D2B] hover:text-[#2A553A] font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}