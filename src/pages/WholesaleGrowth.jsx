import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, X } from 'lucide-react';
import WholesaleIntakeForm from '../components/forms/WholesaleIntakeForm';
import NotAFitSection from '../components/conversion/NotAFitSection';
import FitCheckSection from '../components/conversion/FitCheckSection';

export default function WholesaleGrowth() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Qualify Wholesale Buyers Before You Pick Up the Phone
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Intake form asks volume, frequency, delivery zone, pricing tier. Unqualified buyers never reach you. Serious buyers get your wholesale kit automatically.
          </p>
          <a href="#wholesale-form">
            <Button size="lg" className="bg-green-800 hover:bg-green-900 text-white">
              See How It Works <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Why Wholesale Inquiries Die</h2>
          <p className="text-center text-gray-600 mb-10">You spend 20 minutes explaining minimums. They ghost. Every single time.</p>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              '"Can you do 5 cases?" No. Minimum is 50. Call ends.',
              '"What\'s your pricing?" Depends on volume and frequency. They never follow up.',
              '"Can you deliver to San Francisco?" No. You\'re 300 miles south. Wasted call.',
              'Buyer sounds excited. You send pricing. Crickets for 3 weeks. Deal dies.'
            ].map((problem, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
                <p className="text-gray-900 font-medium">{problem}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="#wholesale-form">
              <Button className="bg-green-800 hover:bg-green-900 text-white">
                Fix This With Automated Intake <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* The System */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">How the Wholesale System Works</h2>
          <p className="text-center text-gray-600 mb-12">Three steps. All automated. Runs without you.</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="text-green-800 font-bold text-sm mb-3">STEP 1: QUALIFICATION</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Buyer Fills Intake Form</h3>
              <p className="text-gray-700 mb-4">They answer: volume needed, frequency, delivery zone, order timeline, business type.</p>
              <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">Unqualified buyers get filtered out before they waste your time.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="text-green-800 font-bold text-sm mb-3">STEP 2: AUTOMATION</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">System Sends Wholesale Kit</h3>
              <p className="text-gray-700 mb-4">Line sheet, pricing tiers, pack sizes, delivery terms, order minimums—all sent automatically.</p>
              <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">Serious buyers get everything they need. You haven\'t typed a word yet.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="text-green-800 font-bold text-sm mb-3">STEP 3: FOLLOW-UP</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">You Get Notified</h3>
              <p className="text-gray-700 mb-4">Lead goes into your CRM. System reminds you when to follow up. You call when they\'re ready to buy.</p>
              <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">Talk to buyers, not tire-kickers. Close deals faster.</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-10">
            <h3 className="font-bold text-gray-900 mb-3">What Happens During Peak Season?</h3>
            <p className="text-gray-700">System keeps running. Buyers submit forms. They get wholesale kits. CRM tracks everything. You focus on harvest. Follow up when you have bandwidth.</p>
          </div>

          <div className="text-center">
            <a href="#wholesale-form">
              <Button size="lg" className="bg-green-800 hover:bg-green-900 text-white">
                Start Wholesale Intake <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Objections */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Common Objections</h2>
          <div className="space-y-6 mb-10">
            <div className="bg-gray-50 border-l-4 border-green-800 p-6 rounded-r-lg">
              <p className="font-bold text-gray-900 mb-2">"I already have 2-3 wholesale accounts. Why do I need this?"</p>
              <p className="text-gray-700">Those 3 accounts came from months of networking. This system finds the next 3 in weeks—without you leaving the field.</p>
            </div>
            <div className="bg-gray-50 border-l-4 border-green-800 p-6 rounded-r-lg">
              <p className="font-bold text-gray-900 mb-2">"My product sells itself. I don\'t need marketing."</p>
              <p className="text-gray-700">Great product gets you the first order. The system gets you recurring orders from 10+ accounts instead of 3.</p>
            </div>
            <div className="bg-gray-50 border-l-4 border-green-800 p-6 rounded-r-lg">
              <p className="font-bold text-gray-900 mb-2">"What if I can\'t fulfill large orders?"</p>
              <p className="text-gray-700">We set volume caps in your intake form. Buyers only see minimums you can actually hit. No overselling.</p>
            </div>
          </div>
          <div className="text-center">
            <Link to={createPageUrl('Contact')}>
              <Button size="lg" className="bg-green-800 hover:bg-green-900 text-white">
                Talk Through Your Situation <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Fit Check */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Are You a Fit?</h2>
          <div className="space-y-6">
            <FitCheckSection />
            <NotAFitSection />
          </div>
        </div>
      </section>

      {/* Wholesale Intake Form */}
      <section id="wholesale-form" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your Wholesale Intake</h2>
            <p className="text-gray-600">
              Fill out the form below and we\'ll send you a custom plan within 48 hours.
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