import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, X } from 'lucide-react';
import B2CIntakeForm from '../components/forms/B2CIntakeForm';
import NotAFitSection from '../components/conversion/NotAFitSection';
import FitCheckSection from '../components/conversion/FitCheckSection';

export default function B2CConversion() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Turn DMs Into Orders. Not "I'll Think About It."
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Landing page captures the order. Preorder form processes payment. Pickup scheduler books the slot. Waitlist holds the next round. All automated.
          </p>
          <a href="#b2c-form">
            <Button size="lg" className="bg-green-800 hover:bg-green-900 text-white">
              See the System <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Why DMs Don't Convert</h2>
          <p className="text-center text-gray-600 mb-10">Interest doesn't equal orders. You need a system that closes.</p>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              '"How much?" You reply with pricing. They disappear.',
              '"Do you deliver?" You say yes. They ask 4 more questions. Never buy.',
              '"When\'s your next drop?" You tell them. They forget. No reminder system.',
              '200 likes on your post. 3 DMs. 0 orders. No way to track what actually converts.'
            ].map((problem, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
                <p className="text-gray-900 font-medium">{problem}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="#b2c-form">
              <Button className="bg-green-800 hover:bg-green-900 text-white">
                See the Conversion System <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* The System */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">How the B2C System Works</h2>
          <p className="text-center text-gray-600 mb-12">Content drives traffic. Landing page converts. Automation follows up.</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="text-green-800 font-bold text-sm mb-3">STEP 1: CONTENT</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Post With Purpose</h3>
              <p className="text-gray-700 mb-4">We give you the shot list. Film on your phone. 2-minute videos. Every post ends with: "Link in bio to order."</p>
              <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">No guessing. No "build your brand." Every post drives action.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="text-green-800 font-bold text-sm mb-3">STEP 2: CONVERSION</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Landing Page Closes</h3>
              <p className="text-gray-700 mb-4">They click. They see: product, price, pickup/delivery options, order form. They buy or join waitlist.</p>
              <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">No back-and-forth. No "send me your info." Buy button or waitlist button. That's it.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="text-green-800 font-bold text-sm mb-3">STEP 3: FOLLOW-UP</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Automation Handles It</h3>
              <p className="text-gray-700 mb-4">Order confirmation sent. Pickup reminder sent. Waitlist notified for next drop. You don't touch any of it.</p>
              <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">System runs itself. You focus on growing + fulfilling orders.</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-10">
            <h3 className="font-bold text-gray-900 mb-3">What If I'm Too Busy to Make Content?</h3>
            <p className="text-gray-700">You film once a week. 15 minutes. We give you the exact shots to capture. Post 2-3 times per week from that batch. Zero daily commitment.</p>
          </div>

          <div className="text-center">
            <a href="#b2c-form">
              <Button size="lg" className="bg-green-800 hover:bg-green-900 text-white">
                Start B2C Audit <ArrowRight className="ml-2 w-5 h-5" />
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
              <p className="font-bold text-gray-900 mb-2">"I don't know how to make content. I'm a farmer, not a videographer."</p>
              <p className="text-gray-700">You film on your phone. We tell you exactly what to capture. No editing. No fancy gear. Post raw clips. Authenticity converts better than production quality.</p>
            </div>
            <div className="bg-gray-50 border-l-4 border-green-800 p-6 rounded-r-lg">
              <p className="font-bold text-gray-900 mb-2">"What if I get too many orders and can't fulfill them?"</p>
              <p className="text-gray-700">We cap your order form at your actual capacity. When you hit the limit, new customers join the waitlist. No overselling. No chaos.</p>
            </div>
            <div className="bg-gray-50 border-l-4 border-green-800 p-6 rounded-r-lg">
              <p className="font-bold text-gray-900 mb-2">"Posting on social media takes too much time."</p>
              <p className="text-gray-700">Film once a week (15 min). That batch gives you 2-3 posts. Schedule them in advance. Total weekly time: 20 minutes.</p>
            </div>
          </div>
          <div className="text-center">
            <Link to={createPageUrl('Contact')}>
              <Button size="lg" className="bg-green-800 hover:bg-green-900 text-white">
                Talk Through Your Constraints <ArrowRight className="ml-2 w-5 h-5" />
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

      {/* B2C Intake Form */}
      <section id="b2c-form" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your B2C Audit</h2>
            <p className="text-gray-600">
              Tell us about your current setup and we'll send you a conversion plan within 48 hours.
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