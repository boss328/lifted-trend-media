import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, X } from 'lucide-react';
import WholesaleIntakeForm from '../components/forms/WholesaleIntakeForm';

export default function WholesaleGrowth() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Stop relying on DMs. Build a wholesale pipeline that qualifies buyers for you.
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Turn wholesale inquiries into qualified accounts with automated intake, buyer kits, and clear pricing tiers—so you're not answering the same questions all day.
          </p>
          <a href="#wholesale-form">
            <Button size="lg" className="bg-green-800 hover:bg-green-900 text-white">
              Start Wholesale Intake <ArrowRight className="ml-2 w-5 h-5" />
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
              'Time-wasting inquiries from buyers who can't meet your minimums',
              'Unclear pricing, pack sizes, and availability',
              'No buyer qualification before the first call',
              'No follow-up automation after inquiries',
              'No tracking on which channels drive qualified buyers'
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">The Solution: Wholesale Growth System</h2>
          <p className="text-center text-gray-600 mb-12">
            A complete buyer pipeline that works while you grow. Here's what you get:
          </p>
          
          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Deliverables</h3>
            <div className="space-y-4">
              {[
                { title: 'Wholesale-focused website pages', desc: 'Home, Wholesale, About, Proof, Contact—all optimized for buyer clarity' },
                { title: 'Wholesale Buyer Intake form', desc: 'Captures volume, frequency, pickup/delivery, pricing tier, and timeline' },
                { title: 'Wholesale Kit', desc: 'PDF + landing page + email delivery automation' },
                { title: 'Basic CRM pipeline', desc: 'Stages + notifications so you never miss a follow-up' },
                { title: 'Tracking plan + verified conversions', desc: 'Know which channels drive qualified buyers' },
                { title: 'Handoff', desc: 'Logins, documentation, and training so you own everything' }
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

      {/* Wholesale Buyer Checklist CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-800 text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Free Download: Wholesale Buyer Qualification Checklist</h2>
            <p className="text-green-100 mb-6">
              A simple checklist to qualify buyers before the first call—volume, frequency, payment terms, and more.
            </p>
            <Link to={createPageUrl('Resources')}>
              <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100">
                Download Checklist <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Wholesale Intake Form */}
      <section id="wholesale-form" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your Wholesale Intake</h2>
            <p className="text-gray-600">
              Fill out the form below and we'll send you a custom plan within 48 hours.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <WholesaleIntakeForm />
          </div>
        </div>
      </section>
    </div>
  );
}