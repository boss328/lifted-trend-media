import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, X } from 'lucide-react';
import B2CIntakeForm from '../components/forms/B2CIntakeForm';

export default function B2CConversion() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Views don't pay rent. Conversions do.
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Turn DMs, comments, and inquiries into preorders, drops, and pickup appointments—with landing pages, offers, and follow-up automation built for action.
          </p>
          <a href="#b2c-form">
            <Button size="lg" className="bg-green-800 hover:bg-green-900 text-white">
              Start B2C Audit <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Problem</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'No landing page for inquiries to convert on',
              'No follow-up system after someone DMs or comments',
              'Weak offer positioning (unclear what to buy and when)',
              'No tracking on what content drives orders',
              "Capacity leaks: promising deliveries you can't fulfill"
            ].map((problem, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-100">
                <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">The Solution: B2C Conversion System</h2>
          <p className="text-center text-gray-600 mb-12">
            Landing pages, offer positioning, and content designed to drive orders—not vanity reach.
          </p>
          
          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">What You Get</h3>
            <div className="space-y-4">
              {[
                { title: 'Conversion-focused landing page(s)', desc: 'Built for preorders, drops, pickup scheduling, or waitlists' },
                { title: 'Offer positioning + hooks', desc: 'What to say, when to post, and how to drive click/DM/order' },
                { title: 'Lead capture form + automation', desc: 'Capture inquiries and follow up automatically' },
                { title: 'Tracking events (verified)', desc: 'Track orders, not vanity metrics' },
                { title: 'Content engine', desc: 'Short-form videos designed to drive action, not views' },
                { title: 'Operational clarity', desc: 'Only promise what you can operationally fulfill' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Drop Playbook CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-800 text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Free Download: Drop Playbook</h2>
            <p className="text-green-100 mb-6">
              A 30-day launch plan for preorder drops: content hooks, offer positioning, and post-purchase follow-up.
            </p>
            <Link to={createPageUrl('Resources')}>
              <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100">
                Download Playbook <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* B2C Intake Form */}
      <section id="b2c-form" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your B2C Audit</h2>
            <p className="text-gray-600">
              Tell us about your current setup and we\'ll send you a conversion plan within 48 hours.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <B2CIntakeForm />
          </div>
        </div>
      </section>
    </div>
  );
}