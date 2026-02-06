import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, Beef } from 'lucide-react';

export default function RanchGrowth() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-red-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Beef className="w-16 h-16 text-red-700 mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Marketing Systems for Ranches & Livestock Farms
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Stop fielding "How much for a quarter cow?" DMs. Let your order form handle it.
          </p>
          <Link to={createPageUrl('FarmGrowthAudit')}>
            <Button size="lg" className="bg-red-700 hover:bg-red-800 text-white">
              Get Your Free Ranch Audit <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Ranch Problem</h2>
          <div className="space-y-6">
            <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-700">
              <h3 className="font-bold text-gray-900 mb-2">Bulk Order Confusion</h3>
              <p className="text-gray-700">
                "How much for half a cow?" You explain: hanging weight vs. take-home, processing fees, cut options. They ghost. Every. Single. Time.
              </p>
            </div>
            <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-700">
              <h3 className="font-bold text-gray-900 mb-2">CSA Churn</h3>
              <p className="text-gray-700">
                Monthly meat CSA starts with 40 members. By month 3, down to 25. No way to fill slots mid-season. Revenue bleeds out.
              </p>
            </div>
            <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-700">
              <h3 className="font-bold text-gray-900 mb-2">Restaurant Orders</h3>
              <p className="text-gray-700">
                Chefs want consistent supply. You don't have a wholesale system. They order from distributors instead.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What We Build for Ranches</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Bulk Order Calculator</h3>
              <p className="text-gray-700">
                Customer selects: quarter/half/whole, hanging weight estimate shown, total cost calculated automatically (including processing).
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Cut Sheet Workflow</h3>
              <p className="text-gray-700">
                After order confirmed, customer gets cut sheet form. They select cuts. Auto-sent to processor. No back-and-forth.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Deposit + Balance System</h3>
              <p className="text-gray-700">
                Deposit collected upfront. Balance due at pickup. Email automation handles reminders. Zero manual follow-up.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Stop Explaining Bulk Orders Over DM</h2>
          <p className="text-xl text-red-100 mb-8">
            Get a system that calculates, confirms, and collects. Automatically.
          </p>
          <Link to={createPageUrl('FarmGrowthAudit')}>
            <Button size="lg" className="bg-white text-red-700 hover:bg-gray-100">
              Get Free Ranch Audit <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}