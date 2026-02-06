import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Package, TrendingUp, Target } from 'lucide-react';
import { base44 } from '@/api/base44Client';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Turn your farm's story into buyers.
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8">
            We build the website + SEO + video content system that captures leads, qualifies them, and converts both B2B (wholesale) and B2C—without you living on your phone.
          </p>
          <Link to={createPageUrl('FarmGrowthAudit')}>
            <Button size="lg" className="bg-green-800 hover:bg-green-900 text-white text-lg px-8 py-6">
              Book a 15-Min Farm Growth Audit <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-800 mt-1 flex-shrink-0" />
              <p className="text-sm text-gray-700"><strong>Web + SEO foundation</strong> that ranks and converts</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-800 mt-1 flex-shrink-0" />
              <p className="text-sm text-gray-700"><strong>Intake forms + automation</strong> so leads don't get lost</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-800 mt-1 flex-shrink-0" />
              <p className="text-sm text-gray-700"><strong>Video content</strong> that drives inquiries (not vanity views)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">You're Losing Revenue in 3 Places</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-600">
              <h3 className="font-bold text-gray-900 mb-2">Missed Inquiries</h3>
              <p className="text-sm text-gray-700">DMs sit unanswered for 48 hours. By then, they bought elsewhere.</p>
            </div>
            <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-600">
              <h3 className="font-bold text-gray-900 mb-2">Buyer Ghosting</h3>
              <p className="text-sm text-gray-700">You answer questions. They say "sounds good." Then crickets. No follow-up system.</p>
            </div>
            <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-600">
              <h3 className="font-bold text-gray-900 mb-2">No Tracking</h3>
              <p className="text-sm text-gray-700">You don't know what's working. Wasting time on channels that don't convert.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offer */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">What We Build</h2>
            <p className="text-lg text-gray-600">The complete system that turns your farm's story into revenue.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <Target className="w-8 h-8 text-green-800 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Website + SEO Foundation</h3>
              <p className="text-gray-700 mb-4">
                Conversion-focused site built for farms (not a brochure). Local SEO setup, landing pages, tracking, and clear CTAs.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <Package className="w-8 h-8 text-green-800 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lead Pipeline (B2B + B2C)</h3>
              <p className="text-gray-700 mb-4">
                Separate intake flows, auto-confirmations, and follow-up that runs. You only talk to qualified buyers/customers.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <TrendingUp className="w-8 h-8 text-green-800 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Video Content Engine</h3>
              <p className="text-gray-700 mb-4">
                Short-form storytelling that proves quality, harvest, and process. Designed to drive inquiries and orders—not just views.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO/Google */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">Get Found on Google</h2>
          <p className="text-lg text-gray-600 mb-10 text-center">Where high-intent buyers already search</p>
          
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-8 mb-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-800 mt-0.5 flex-shrink-0" />
                <span><strong>Local rankings:</strong> "farm near me", "wholesale [product]", "[city] [product]"</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-800 mt-0.5 flex-shrink-0" />
                <span><strong>Google Business Profile</strong> optimization + weekly updates</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-800 mt-0.5 flex-shrink-0" />
                <span><strong>On-page SEO</strong> + landing pages by product + location</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-800 mt-0.5 flex-shrink-0" />
                <span><strong>Tracking:</strong> calls, forms, direction clicks, and booked calls</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-2">Optional: Google Shopping / Merchant Center</h3>
            <p className="text-sm text-gray-700">
              Best for farms selling shippable products (plants, cuttings, boxes, packaged goods). We set up the feed and listings so products show up when people search to buy.
            </p>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What We Ship</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Organic Citrus Farm, Central Valley</h3>
              <p className="text-sm text-gray-700 mb-4">
                Before: 15 hours/week answering wholesale inquiries manually. After: intake form filters unqualified buyers. Only talks to decision-makers.
              </p>
              <div className="bg-green-100 rounded-lg p-3">
                <p className="text-sm font-semibold text-green-900">Result: 3 new wholesale accounts in 60 days. 10 hrs/week saved.</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Rare Plant Nursery, LA</h3>
              <p className="text-sm text-gray-700 mb-4">
                Before: Posted drops on Instagram. 200 DMs per drop. Lost 40% of orders in chaos. After: preorder form + waitlist automation.
              </p>
              <div className="bg-green-100 rounded-lg p-3">
                <p className="text-sm font-semibold text-green-900">Result: 47 preorders in 72 hours. Waitlist captured 80 more.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="bg-green-800 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Diagnose (Week 1)</h3>
                <p className="text-gray-700">15-min audit call. We review your current setup, identify leaks, and map out what to build first. 2 hours of your time total for info gathering.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-green-800 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Build (Weeks 2-4)</h3>
                <p className="text-gray-700">We build: intake forms, landing pages, email automation, CRM pipeline, tracking. You focus on harvest. System launches in 30 days.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-green-800 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Optimize (Ongoing)</h3>
                <p className="text-gray-700">Training + handoff. You own the system. Optional: we monitor performance and optimize monthly (Growth/Scale packages only).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Anchor */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing</h2>
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-gray-900 mb-2">$8K–$15K</div>
              <p className="text-gray-600">Foundation System (one-time build fee)</p>
            </div>
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">What affects price:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Complexity (single product vs. 50+ SKUs)</li>
                  <li>• Channels (B2B only vs. B2B + B2C + CSA + U-pick)</li>
                  <li>• Integrations (payment processing, scheduling, inventory sync)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Add-ons:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Wholesale Growth: +$3K–$5K</li>
                  <li>• B2C Conversion: +$3K–$5K</li>
                  <li>• Ongoing optimization: $1.5K–$3K/month (optional)</li>
                </ul>
              </div>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-600 rounded-r-lg p-4">
              <p className="text-sm text-gray-900"><strong>Minimum engagement:</strong> Foundation System (30 days). Growth/Scale require 2-3 month minimum for optimization cycles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Common Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'My season starts in 4 weeks. Can you build it in time?',
                a: 'If you provide all info within 3 days, yes. Otherwise, we build it for next season. Rushing guarantees mistakes.'
              },
              {
                q: 'What if I get more orders than I can handle?',
                a: 'We cap your forms at your capacity. When you hit the limit, new orders join the waitlist. No overselling.'
              },
              {
                q: 'Do I own this or pay monthly forever?',
                a: 'You own it. One-time build fee. Optional monthly support for ongoing optimization (Growth/Scale only).'
              },
              {
                q: 'What if you build it and no leads come in?',
                a: '90-day performance extension. We optimize for free until you get qualified leads. But you must drive traffic per our plan.'
              },
              {
                q: 'I already have a website. Do I need to rebuild?',
                a: 'Maybe. We audit it first. If it has intake forms, automation, and tracking, we optimize. If not, rebuild is faster.'
              }
            ].map((faq, idx) => (
              <details key={idx} className="bg-white rounded-lg p-6 border border-gray-200 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  <span>{faq.q}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-3 pl-4 border-l-4 border-green-800">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-green-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Booking Side */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Book Your Audit Call</h2>
              <p className="text-green-100 mb-6">15 minutes. We review your setup and show you exactly what to build first.</p>
              <Link to={createPageUrl('FarmGrowthAudit')}>
                <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100 w-full">
                  Book 15-Min Audit <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <p className="text-sm text-green-100 mt-4">Or call: [PHONE] | Email: [EMAIL]</p>
            </div>

            {/* Quick Intake Side */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Or Get a Quote</h3>
              <QuickIntakeForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function QuickIntakeForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    farm: '',
    email: '',
    phone: '',
    goal: '',
    capacity: '',
    season_start: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await base44.entities.WholesaleLead.create({
        business_name: formData.farm,
        contact_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        success_90_days: formData.goal,
        weekly_volume_capacity: formData.capacity,
        season_start_date: formData.season_start,
        source: 'Homepage Quick Form',
        stage: 'New',
        score: 'Warm'
      });
      setSubmitted(true);
    } catch (error) {
      alert('Error submitting. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-12 h-12 text-green-300 mx-auto mb-3" />
        <p className="text-white font-semibold">Thanks! We'll send you a quote within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        placeholder="Your Name *"
        required
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        className="w-full px-4 py-2 rounded bg-white/20 border border-white/30 text-white placeholder-green-100"
      />
      <input
        type="text"
        placeholder="Farm/Business Name *"
        required
        value={formData.farm}
        onChange={(e) => setFormData({...formData, farm: e.target.value})}
        className="w-full px-4 py-2 rounded bg-white/20 border border-white/30 text-white placeholder-green-100"
      />
      <input
        type="email"
        placeholder="Email *"
        required
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        className="w-full px-4 py-2 rounded bg-white/20 border border-white/30 text-white placeholder-green-100"
      />
      <input
        type="tel"
        placeholder="Phone"
        value={formData.phone}
        onChange={(e) => setFormData({...formData, phone: e.target.value})}
        className="w-full px-4 py-2 rounded bg-white/20 border border-white/30 text-white placeholder-green-100"
      />
      <select
        required
        value={formData.goal}
        onChange={(e) => setFormData({...formData, goal: e.target.value})}
        className="w-full px-4 py-2 rounded bg-white/20 border border-white/30 text-white"
      >
        <option value="">Goal *</option>
        <option value="Wholesale Growth">Wholesale Growth</option>
        <option value="B2C Conversion">B2C Conversion</option>
        <option value="Both">Both</option>
      </select>
      <input
        type="text"
        placeholder="Weekly Capacity (optional)"
        value={formData.capacity}
        onChange={(e) => setFormData({...formData, capacity: e.target.value})}
        className="w-full px-4 py-2 rounded bg-white/20 border border-white/30 text-white placeholder-green-100"
      />
      <input
        type="date"
        placeholder="Season Start Date"
        value={formData.season_start}
        onChange={(e) => setFormData({...formData, season_start: e.target.value})}
        className="w-full px-4 py-2 rounded bg-white/20 border border-white/30 text-white"
      />
      <Button type="submit" disabled={loading} className="w-full bg-white text-green-800 hover:bg-gray-100">
        {loading ? 'Sending...' : 'Get Quote'}
      </Button>
    </form>
  );
}