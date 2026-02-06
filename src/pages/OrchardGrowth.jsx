import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cherry } from 'lucide-react';

export default function OrchardGrowth() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-purple-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Cherry className="w-16 h-16 text-purple-700 mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Marketing Systems for Specialty Orchards
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Premium fruit. Short harvest window. High-value buyers. You need a pipeline that matches your product.
          </p>
          <Link to={createPageUrl('FarmGrowthAudit')}>
            <Button size="lg" className="bg-purple-700 hover:bg-purple-800 text-white">
              Get Your Free Orchard Audit <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Premium Orchard Challenges</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-700">
              <h3 className="font-bold text-gray-900 mb-2">Limited Harvest Window</h3>
              <p className="text-gray-700 text-sm">
                Cherry/stone fruit season: 3-4 weeks. Every day without wholesale buyers lined up is lost revenue.
              </p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-700">
              <h3 className="font-bold text-gray-900 mb-2">Premium Positioning</h3>
              <p className="text-gray-700 text-sm">
                Your fruit is $6-$12/lb retail. Buyers expect polish: availability calendars, pre-orders, clean checkout.
              </p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-700">
              <h3 className="font-bold text-gray-900 mb-2">Wholesale Logistics</h3>
              <p className="text-gray-700 text-sm">
                Restaurants need lead time. You need volume commitments. Manual coordination breaks down fast.
              </p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-700">
              <h3 className="font-bold text-gray-900 mb-2">U-Pick Premium Experience</h3>
              <p className="text-gray-700 text-sm">
                Charging $8-$12/lb for U-pick. No booking system. Customers show up, fruit's gone. Bad experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Premium Orchard System</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Pre-Season Booking System</h3>
              <p className="text-gray-700">
                "Reserve Your Week" calendar goes live 60 days before harvest. Wholesale buyers and U-pick slots fill before season starts.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Wholesale Availability Dashboard</h3>
              <p className="text-gray-700">
                Chefs log in, see: available weeks, expected volume, varietals, pricing. They submit orders. You approve. Done.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Premium U-Pick Experience</h3>
              <p className="text-gray-700">
                Booking system with time slots, capacity caps, payment collection, and automated reminders. Show up ready to pick.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Premium Fruit Needs a Premium System</h2>
          <p className="text-xl text-purple-100 mb-8">
            Your product is $10/lb. Your pipeline should match.
          </p>
          <Link to={createPageUrl('FarmGrowthAudit')}>
            <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
              Get Free Orchard Audit <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}