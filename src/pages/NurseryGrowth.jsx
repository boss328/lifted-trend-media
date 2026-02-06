import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sprout, Package, TrendingUp } from 'lucide-react';

export default function NurseryGrowth() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sprout className="w-16 h-16 text-green-800 mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Marketing Systems for Nurseries & Plant Growers
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Stop answering "Do you have [plant name]?" 100 times a day. Let your inventory page do it for you.
          </p>
          <Link to={createPageUrl('FarmGrowthAudit')}>
            <Button size="lg" className="bg-green-800 hover:bg-green-900 text-white">
              Get Your Free Nursery Audit <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Nursery-Specific Problems */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Nursery Pipeline Problem</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-600">
              <h3 className="font-bold text-gray-900 mb-2">Inventory Chaos</h3>
              <p className="text-gray-700 text-sm">
                "Do you have [plant]?" asked 50 times. You check. You reply. They ghost. No inventory system. No preorders. Just chaos.
              </p>
            </div>
            <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-600">
              <h3 className="font-bold text-gray-900 mb-2">Seasonal Drops Flop</h3>
              <p className="text-gray-700 text-sm">
                You post "Spring drop live!" 200 DMs flood in. You can't keep up. Orders get lost. Customers get frustrated. Revenue leaks.
              </p>
            </div>
            <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-600">
              <h3 className="font-bold text-gray-900 mb-2">Wholesale Guesswork</h3>
              <p className="text-gray-700 text-sm">
                Landscapers ask for bulk pricing. You don't have a wholesale kit. They buy from someone who does.
              </p>
            </div>
            <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-600">
              <h3 className="font-bold text-gray-900 mb-2">Rare Plant FOMO</h3>
              <p className="text-gray-700 text-sm">
                You have rare stock. You post it. Sells out in 24 hours. 80 people missed it. No waitlist. No next-drop system. Lost revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How We Fix It</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <Package className="w-8 h-8 text-green-800 mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Live Inventory Page</h3>
              <p className="text-gray-700 text-sm mb-4">
                Searchable, filterable inventory. Customers find plants themselves. "Do you have X?" becomes "Add to cart."
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Update once, it updates everywhere</li>
                <li>• Mark items as "Preorder" or "Waitlist"</li>
                <li>• Filter by size, price, availability</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <TrendingUp className="w-8 h-8 text-blue-800 mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Drop Management System</h3>
              <p className="text-gray-700 text-sm mb-4">
                Preorder forms with capacity caps. Waitlist for sold-out stock. Email automation for next drops.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Cap orders at your actual capacity</li>
                <li>• Waitlist captures overflow demand</li>
                <li>• Auto-notify for next drop</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <Sprout className="w-8 h-8 text-green-800 mb-4" />
              <h3 className="font-bold text-gray-900 mb-3">Wholesale Pipeline</h3>
              <p className="text-gray-700 text-sm mb-4">
                Wholesale kit with bulk pricing, availability calendar, and auto-qualification for landscapers.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Tiered pricing by volume</li>
                <li>• Minimum order enforcement</li>
                <li>• Qualified buyers only</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Real Results: Rare Plant Nursery</h2>
          <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-green-800">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Before:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Posted drops on Instagram stories</li>
                <li>• 200+ DMs per drop, manually replied to each</li>
                <li>• Lost 30-40% of orders in DM chaos</li>
                <li>• No waitlist, just "check back next month"</li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">After:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Built: inventory page + preorder form + waitlist automation</li>
                <li>• First drop: 47 orders in 72 hours (all processed automatically)</li>
                <li>• Waitlist captured 80 more for next drop</li>
                <li>• Time spent on admin: 2 hours (down from 15+ hours)</li>
              </ul>
            </div>
            <div className="bg-green-100 rounded-lg p-4">
              <p className="font-bold text-green-900">Result: 3x more revenue per drop, 85% less admin time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Stop Drowning in DMs?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Get a free audit of your current setup. We'll show you exactly what's leaking revenue and how to fix it.
          </p>
          <Link to={createPageUrl('FarmGrowthAudit')}>
            <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100">
              Get Free Nursery Audit <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}