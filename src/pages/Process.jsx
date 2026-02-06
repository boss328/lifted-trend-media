import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, Wrench, Rocket, TrendingUp } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: '01',
      icon: Search,
      title: 'Diagnose',
      desc: 'We audit your current setup, clarify your offer positioning, and align on goals.',
      details: [
        'Review your current website, content, and buyer flow',
        'Identify conversion leaks and capacity constraints',
        'Define your premium positioning and pricing tiers',
        'Set 30/60/90-day goals',
        'Deliverable: Strategy doc with prioritized build plan'
      ],
      timeline: '1–2 weeks'
    },
    {
      num: '02',
      icon: Wrench,
      title: 'Build Foundation',
      desc: 'We build your website, intake forms, tracking, and automation so the system works without you.',
      details: [
        'Custom website (wholesale-ready or B2C-optimized)',
        'Lead capture forms with qualification logic',
        'Email automation (confirmation + follow-up)',
        'CRM pipeline stages + notifications',
        'Google Tag Manager + conversion tracking setup',
        'Documentation + credentials handoff'
      ],
      timeline: '30–45 days'
    },
    {
      num: '03',
      icon: Rocket,
      title: 'Launch Content + Conversion System',
      desc: 'We build your content engine and conversion workflows so inquiries turn into buyers.',
      details: [
        'Content strategy based on your offer + capacity',
        'Shot list (phone-filmable, no crew needed)',
        'Posting schedule + hooks that drive action',
        'DM/comment conversion templates',
        'Landing pages for preorders, drops, or pickup',
        'Performance review: what drives orders vs. what doesn\'t'
      ],
      timeline: '30–60 days'
    },
    {
      num: '04',
      icon: TrendingUp,
      title: 'Optimize + Scale',
      desc: 'Once the system is working, we layer in paid ads, local SEO, and iteration based on data.',
      details: [
        'A/B test offers, hooks, and landing pages',
        'Google Ads + Meta Ads (optional, once pipeline is ready)',
        'Local SEO + Google Business Profile optimization',
        'Monthly performance review + iteration',
        'Scaling plan based on capacity and conversion data'
      ],
      timeline: 'Ongoing'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            How We Build Your Buyer Pipeline
          </h1>
          <p className="text-xl text-gray-600">
            A proven 4-step process that turns inquiries into qualified buyers—without eating up your time.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute left-8 top-24 bottom-0 w-0.5 bg-gray-200" />
                )}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        {step.num}
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-green-100 rounded-full p-2">
                        <step.icon className="w-6 h-6 text-green-800" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 bg-white rounded-xl border border-gray-200 p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h2 className="text-2xl font-bold text-gray-900">{step.title}</h2>
                      <span className="text-sm text-gray-500 mt-2 sm:mt-0">{step.timeline}</span>
                    </div>
                    <p className="text-gray-600 mb-6">{step.desc}</p>
                    
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 mb-3">What Happens</h3>
                      <ul className="space-y-2">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to start building?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book a strategy call and we\'ll walk through your current setup, identify conversion leaks, and show you exactly what to build first.
          </p>
          <Link to={createPageUrl('Contact')}>
            <Button size="lg" className="bg-green-800 hover:bg-green-900 text-white">
              Book Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}