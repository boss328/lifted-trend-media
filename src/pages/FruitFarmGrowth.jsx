import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, Apple, Package, TrendingUp } from 'lucide-react';

export default function FruitFarmGrowth() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Apple className="w-16 h-16 text-orange-600 mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Marketing Systems for Fruit Farms & Orchards
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your harvest window is 6-8 weeks. Every week without a pipeline is lost revenue. We fix that.
          </p>
          <Link to={createPageUrl('FarmGrowthAudit')}>
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
              Get Your Free Fruit Farm Audit <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Problems */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Fruit Farms Lose Revenue</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-600">
              <h3 className="font-bold text-gray-900 mb-2">Late Season Start</h3>
              <p className="text-gray-700 text-sm">
                Harvest starts. No buyers lined up. Week 1: scrambling. Week 4: finally getting orders. Week 8: harvest ends. Revenue left on the table.
              </p>
            </div>
            <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-600">
              <h3 className="font-bold text-gray-900 mb-2">CSA Drop-Off</h3>
              <p className="text-gray-700 text-sm">
                30 CSA members at season start. 18 by week 6. No way to fill slots mid-season. Revenue gap widens every week.
              </p>
            </div>
            <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-600">
              <h3 className="font-bold text-gray-900 mb-2">Wholesale Timing</h3>
              <p className="text-gray-700 text-sm">
                Restaurants want fruit. But they need lead time, minimums, and delivery schedules. You don't have a system. They buy elsewhere.
              </p>
            </div>
            <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-600">
              <h3 className="font-bold text-gray-900 mb-2">U-Pick Inconsistency</h3>
              <p className="text-gray-700 text-sm">
                Some weekends 50 people show up. Other weekends 5. No booking system. No capacity control. Just hope and pray.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pre-Season Pipeline System</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Build Before Harvest (Weeks 1-4)</h3>
              <p className="text-gray-700 mb-4">
                We build your intake forms, wholesale kit, and CSA signup pages 30 days before season starts. Launch day 1 with buyers ready.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Pre-Season Lead Gen (Weeks 5-8)</h3>
              <p className="text-gray-700 mb-4">
                Run "Reserve Your Spot" campaign. CSA members commit early. Wholesale buyers submit orders. U-pick slots fill via booking system.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">In-Season Automation (Harvest Weeks)</h3>
              <p className="text-gray-700 mb-4">
                System handles confirmations, reminders, and follow-up. You focus on harvest and fulfillment. No manual admin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale Kit */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Fruit Farm Wholesale Kit</h2>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4">What's Included:</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Variety Sheet:</strong> List of available fruits with harvest dates and pack sizes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Pricing Tiers:</strong> Volume-based pricing (e.g., 1-10 cases, 10-50 cases, 50+ cases)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Ordering Process:</strong> Minimums, lead time, delivery/pickup options</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Intake Form:</strong> Auto-qualifies buyers by volume, frequency, and location</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Don't Wait Until Harvest Starts
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Get your system built now. Launch day 1 of harvest with a full pipeline.
          </p>
          <Link to={createPageUrl('FarmGrowthAudit')}>
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              Get Free Fruit Farm Audit <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}