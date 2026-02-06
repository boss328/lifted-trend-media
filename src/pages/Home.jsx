import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Users, TrendingUp, Clock, Target } from 'lucide-react';
import { base44 } from '@/api/base44Client';

export default function Home() {
  const trackEvent = (eventName) => {
    base44.analytics.track({ eventName, properties: { page: 'home' } });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-green-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Wholesale buyers on repeat.<br />B2C leads that actually convert.
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Lifted Trend Media builds the pipeline: website + intake + automation + tracking + content. Less chasing. More buyers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('Contact')} onClick={() => trackEvent('hero_book_call_click')}>
                <Button size="lg" className="bg-green-800 hover:bg-green-900 text-white w-full sm:w-auto">
                  Book a Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to={createPageUrl('Contact')} onClick={() => trackEvent('hero_get_plan_click')}>
                <Button size="lg" variant="outline" className="border-2 border-green-800 text-green-800 hover:bg-green-50 w-full sm:w-auto">
                  Get a Plan
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Who This Is For</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'Certified organic farms and growers', desc: 'Premium product stories that command wholesale pricing.' },
              { icon: TrendingUp, title: 'Nurseries and ag brands moving volume', desc: 'Clear buyer qualification systems that save hours per week.' },
              { icon: Target, title: 'Local businesses needing conversion', desc: 'Preorders, drops, and subscriptions that actually close—not vanity reach.' }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <item.icon className="w-8 h-8 text-green-800" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What We Build</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Wholesale Buyer Pipeline</h3>
              <ul className="space-y-3">
                {[
                  'Wholesale-focused website pages',
                  'Buyer intake form with qualification logic',
                  'Wholesale kit (PDF + landing page + email delivery)',
                  'CRM pipeline stages + notifications',
                  'Tracking plan + verified conversions',
                  'Handoff: logins, documentation, training'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to={createPageUrl('WholesaleGrowth')} className="mt-6 inline-block">
                <Button variant="outline" className="border-green-800 text-green-800 hover:bg-green-50">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">B2C Conversion System</h3>
              <ul className="space-y-3">
                {[
                  'Conversion-focused landing pages',
                  'Lead capture forms + follow-up automation',
                  'Offer positioning + hooks that drive action',
                  'Tracking events (verified, not vanity)',
                  'Content engine: videos designed to drive orders',
                  'Preorder, drop, and pickup workflows'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to={createPageUrl('B2CConversion')} className="mt-6 inline-block">
                <Button variant="outline" className="border-green-800 text-green-800 hover:bg-green-50">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Outcomes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'More qualified inquiries', desc: 'Buyer intake forms that filter volume, pricing tier, and timeline before you pick up the phone.' },
              { title: 'Faster quoting + less back-and-forth', desc: 'Automated lead routing and wholesale kits so you\'re not answering the same questions all day.' },
              { title: 'Tracking that proves what\'s working', desc: 'Verified conversion events, pipeline stages, and cost-per-lead data—not vanity reach.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Diagnose', desc: 'Audit + goals + offer positioning' },
              { num: '02', title: 'Build', desc: 'Site + forms + tracking + automations' },
              { num: '03', title: 'Launch', desc: 'QA + handoff + training' },
              { num: '04', title: 'Scale', desc: 'Content engine + optimization' }
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="text-5xl font-bold text-green-200 mb-3">{step.num}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to={createPageUrl('Process')}>
              <Button variant="outline" className="border-green-800 text-green-800 hover:bg-green-50">
                See Full Process <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Proof / Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Proof</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <p className="text-gray-600 italic mb-4">
                "Before, we were answering the same questions 15 times a week. Now buyers get the wholesale kit automatically, and we only talk to qualified accounts."
              </p>
              <p className="font-semibold text-gray-900">— Organic citrus farm, CA</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <p className="text-gray-600 italic mb-4">
                "We went from sporadic DM orders to a waitlist system that actually converts. The content plan is simple and we can film everything on our phones."
              </p>
              <p className="font-semibold text-gray-900">— Specialty nursery, Southern CA</p>
            </div>
          </div>
          <div className="text-center">
            <Link to={createPageUrl('CaseStudies')}>
              <Button variant="outline" className="border-green-800 text-green-800 hover:bg-green-50">
                View Case Studies <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Common Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'Do you run ads?', a: 'We can, but we build the system first: website, intake forms, tracking, and content. Ads are an optional add-on once your pipeline is ready to scale.' },
              { q: 'How fast can we launch?', a: 'Foundation (site + forms + tracking) typically launches in 30–45 days. Content and optimization are ongoing after that.' },
              { q: 'What do you need from me?', a: "Product info, photos/videos (we'll give you a shot list), your availability windows, and clarity on capacity constraints. We handle the rest." },
              { q: 'Do you work with both wholesale and B2C?', a: 'Yes. Some clients need both systems, others focus on one. We build what matches your operational reality.' },
              { q: 'Do I own everything?', a: 'Yes. Website, content, tracking setup, and all login credentials transfer to you. No lock-in.' },
              { q: 'What if I already have a website?', a: 'We\'ll audit it first. Sometimes we improve what\'s there; other times a rebuild makes more sense. We\'ll tell you which.' },
              { q: 'What about seasonality?', a: 'We build systems that work year-round. Off-season content builds your list; peak season content drives orders. Timing is everything.' }
            ].map((faq, idx) => (
              <details key={idx} className="bg-white rounded-lg p-6 border border-gray-200">
                <summary className="font-semibold text-gray-900 cursor-pointer">{faq.q}</summary>
                <p className="text-gray-600 mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to build a buyer pipeline that works while you grow?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Book a strategy call. We\'ll audit your current setup and show you exactly what to build first.
          </p>
          <Link to={createPageUrl('Contact')} onClick={() => trackEvent('footer_cta_click')}>
            <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100">
              Book Your Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}