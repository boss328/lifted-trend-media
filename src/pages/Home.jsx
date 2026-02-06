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
      <section className="relative py-32 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="[VIDEO_URL]" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Turn your farm's story into buyers.
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8">
            We build the website + SEO + video content system that captures leads, qualifies them, and converts both B2B and B2C—without you living on your phone.
          </p>
          <Link to={createPageUrl('FarmGrowthAudit')}>
            <Button size="lg" className="bg-[#0B0B0B] hover:bg-[#0B0B0B] hover:outline hover:outline-2 hover:outline-[#AED354] text-white text-lg px-8 py-6 font-semibold transition-all">
              Book a 15-Min Farm Growth Audit <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#AED354] mt-1 flex-shrink-0" />
              <p className="text-sm text-white"><strong>Web + SEO foundation</strong> that ranks and converts</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#AED354] mt-1 flex-shrink-0" />
              <p className="text-sm text-white"><strong>Intake forms + automation</strong> so leads don't get lost</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#AED354] mt-1 flex-shrink-0" />
              <p className="text-sm text-white"><strong>Video content</strong> that drives inquiries (not vanity views)</p>
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
            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:border-[#AED354] transition-colors">
              <Target className="w-8 h-8 text-[#AED354] mb-4" />
              <h3 className="text-xl font-bold text-[#0B0B0B] mb-3">Website + SEO Foundation</h3>
              <p className="text-gray-700 mb-4">
                Conversion-focused site built for farms (not a brochure). Local SEO setup, landing pages, tracking, and clear CTAs.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:border-[#AED354] transition-colors">
              <Package className="w-8 h-8 text-[#AED354] mb-4" />
              <h3 className="text-xl font-bold text-[#0B0B0B] mb-3">Lead Pipeline (B2B + B2C)</h3>
              <p className="text-gray-700 mb-4">
                Separate intake flows, auto-confirmations, and follow-up that runs. You only talk to qualified buyers/customers.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:border-[#AED354] transition-colors">
              <TrendingUp className="w-8 h-8 text-[#AED354] mb-4" />
              <h3 className="text-xl font-bold text-[#0B0B0B] mb-3">Video Content Engine</h3>
              <p className="text-gray-700 mb-4">
                Short-form storytelling that proves quality, harvest, and process. Designed to drive inquiries and orders—not just views.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">Add-Ons (when you're ready)</h2>
          <p className="text-gray-600 mb-10 text-center">Scale after the foundation is live.</p>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Video Content (Editing + Posting)</h3>
              <p className="text-gray-700">
                We turn your footage into consistent short-form content that converts.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">On-Location Filming + Directing</h3>
              <p className="text-gray-700">
                Half-day / full-day shoot to capture harvest, packing, and story—done right.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Paid Ads (Google Search + Meta)</h3>
              <p className="text-gray-700 mb-2">
                Only after the foundation is live and tracking works. High-intent buyers, not cheap clicks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO/Google */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">Get Found on Google</h2>
          <p className="text-lg text-gray-600 mb-10 text-center">Where high-intent buyers already search</p>
          
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-8 mb-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#AED354] mt-0.5 flex-shrink-0" />
                <span><strong>Local rankings:</strong> "farm near me", "wholesale [product]", "[city] [product]"</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#AED354] mt-0.5 flex-shrink-0" />
                <span><strong>Google Business Profile</strong> optimization + weekly updates</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#AED354] mt-0.5 flex-shrink-0" />
                <span><strong>On-page SEO</strong> + landing pages by product + location</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#AED354] mt-0.5 flex-shrink-0" />
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

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="bg-[#0B0B0B] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
              <div>
                <h3 className="text-xl font-bold text-[#0B0B0B] mb-2">Diagnose (Week 1)</h3>
                <p className="text-gray-700">15-min audit call. We review your current setup, identify leaks, and map out what to build first. 2 hours of your time total for info gathering.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-[#0B0B0B] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
              <div>
                <h3 className="text-xl font-bold text-[#0B0B0B] mb-2">Build (Weeks 2-4)</h3>
                <p className="text-gray-700">We build: intake forms, landing pages, email automation, CRM pipeline, tracking. You focus on harvest. System launches in 30 days.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-[#0B0B0B] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
              <div>
                <h3 className="text-xl font-bold text-[#0B0B0B] mb-2">Optimize (Ongoing)</h3>
                <p className="text-gray-700">Training + handoff. You own the system. Optional: we monitor performance and optimize monthly (Growth/Scale packages only).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Investment (ballpark)</h2>
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-8">
            <p className="text-gray-700 mb-6">
              Most farms invest based on season timing, capacity, and how much you want us to handle.
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span><strong>Foundation (Website + SEO + Lead Intake):</strong> starting at $_____</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>Most clients choose a monthly system to run content + lead conversion</span>
              </li>
            </ul>
            <div className="bg-[#F5F5F5] border-l-4 border-[#AED354] rounded-r-lg p-6">
              <p className="font-semibold text-[#0B0B0B] mb-2">To get exact pricing:</p>
              <p className="text-gray-700">
                Submit the 60-second intake and we'll send the exact options that fit your operation.
              </p>
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
                a: 'Yes. Season Sprint: 10-day build. Landing page, intake form, tracking, and automation live before first harvest. Full system optimization continues post-launch.'
              },
              {
                q: 'What if leads don\'t come in right away?',
                a: 'That\'s normal. We launch with tracking so we can see exactly where the bottleneck is: traffic (visibility) or conversion (site/forms/follow-up). You get a post-launch optimization window included, where we improve pages, CTAs, forms, and follow-up based on real data. If you want faster volume, we can add Google Search or Meta once tracking is live.'
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
                q: 'I already have a website. Do I need to rebuild?',
                a: 'Maybe. We audit it first. If it has intake forms, automation, and tracking, we optimize. If not, rebuild is faster.'
              }
            ].map((faq, idx) => (
              <details key={idx} className="bg-white rounded-lg p-6 border border-gray-200 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  <span>{faq.q}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-3 pl-4 border-l-4 border-[#AED354]">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#0B0B0B] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Booking Side */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Book a 15-Min Farm Growth Audit</h2>
              <p className="text-gray-300 mb-6">We review your setup and show you exactly what to build first.</p>
              <Link to={createPageUrl('FarmGrowthAudit')}>
                <Button size="lg" className="bg-white text-[#0B0B0B] hover:bg-gray-100 hover:outline hover:outline-2 hover:outline-[#AED354] w-full font-semibold transition-all">
                  Book a 15-Min Farm Growth Audit <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <p className="text-sm text-gray-400 mt-4">Or call: [PHONE] | Email: [EMAIL]</p>
            </div>

            {/* Quick Intake Side */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
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
        <CheckCircle className="w-12 h-12 text-[#AED354] mx-auto mb-3" />
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
        <option value="B2B Growth">B2B Growth</option>
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
      <Button type="submit" disabled={loading} className="w-full bg-white text-[#0B0B0B] hover:bg-gray-100 hover:outline hover:outline-2 hover:outline-[#AED354] font-semibold transition-all">
        {loading ? 'Sending...' : 'Get Quote'}
      </Button>
    </form>
  );
}