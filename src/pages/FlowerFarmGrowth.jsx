import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, Flower2 } from 'lucide-react';

export default function FlowerFarmGrowth() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-pink-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Flower2 className="w-16 h-16 text-pink-600 mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Marketing Systems for Flower Farms
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Wedding season booking. Florist wholesale. CSA bouquets. U-pick days. Your pipeline needs to handle all of it.
          </p>
          <Link to={createPageUrl('FarmGrowthAudit')}>
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
              Get Your Free Flower Farm Audit <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Flower Farm Pipeline Problems</h2>
          <div className="space-y-6">
            <div className="bg-pink-50 rounded-xl p-6 border-l-4 border-pink-600">
              <h3 className="font-bold text-gray-900 mb-2">Wedding Inquiry Chaos</h3>
              <p className="text-gray-700">
                Bride DMs: "How much for wedding flowers?" You ask 15 questions. She ghosts. You wasted 30 minutes. No intake form = no qualification.
              </p>
            </div>
            <div className="bg-pink-50 rounded-xl p-6 border-l-4 border-pink-600">
              <h3 className="font-bold text-gray-900 mb-2">Florist Wholesale Guesswork</h3>
              <p className="text-gray-700">
                Florists want: availability calendars, pricing sheets, order minimums. You have: Instagram DMs. They buy from wholesalers instead.
              </p>
            </div>
            <div className="bg-pink-50 rounded-xl p-6 border-l-4 border-pink-600">
              <h3 className="font-bold text-gray-900 mb-2">CSA Bouquet Logistics</h3>
              <p className="text-gray-700">
                Weekly bouquet CSA. 40 signups. By week 6, down to 28. No waitlist. No way to fill slots mid-season. Revenue drops every week.
              </p>
            </div>
            <div className="bg-pink-50 rounded-xl p-6 border-l-4 border-pink-600">
              <h3 className="font-bold text-gray-900 mb-2">U-Pick Event Overload</h3>
              <p className="text-gray-700">
                Post "U-pick this Saturday!" 150 people show up. Parking chaos. Flowers trampled. No capacity control. Bad experience for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Flower Farm System</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Wedding Inquiry Qualification</h3>
              <p className="text-gray-700 mb-3">
                Intake form asks: date, guest count, budget, style. Unqualified inquiries filtered out. Serious brides get pricing guide automatically.
              </p>
              <p className="text-sm text-gray-600">Result: You only talk to brides ready to book.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Florist Wholesale Portal</h3>
              <p className="text-gray-700 mb-3">
                Availability calendar + pricing sheet + order minimums. Florists submit orders. You approve. Auto-confirmation sent. Zero manual follow-up.
              </p>
              <p className="text-sm text-gray-600">Result: 3-5 new florist accounts in 60 days.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">CSA + Subscription Management</h3>
              <p className="text-gray-700 mb-3">
                Weekly bouquet signups with payment automation. Waitlist for sold-out weeks. Auto-renewals for next season. Churn drops by 40%.
              </p>
              <p className="text-sm text-gray-600">Result: Predictable weekly revenue.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">U-Pick Booking System</h3>
              <p className="text-gray-700 mb-3">
                Time slots with capacity caps. Payment collected upfront. Reminders sent automatically. No-shows drop to near zero.
              </p>
              <p className="text-sm text-gray-600">Result: Smooth events, happy customers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Stop Losing Wedding Bookings to DM Chaos</h2>
          <p className="text-xl text-pink-100 mb-8">
            Get a system that qualifies brides, automates florist orders, and caps U-pick capacity. All in one place.
          </p>
          <Link to={createPageUrl('FarmGrowthAudit')}>
            <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
              Get Free Flower Farm Audit <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}