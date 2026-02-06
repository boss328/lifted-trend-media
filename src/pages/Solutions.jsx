import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, Video, MapPin, DollarSign } from 'lucide-react';

export default function Solutions() {
  const pillars = [
    {
      icon: Globe,
      title: 'Website + Lead Pipeline',
      desc: 'The foundation: intake forms, routing, automation, tracking, and handoff.',
      deliverables: [
        'Custom website (wholesale-ready or B2C-optimized)',
        'Lead capture forms with qualification logic',
        'Email automation (confirmation + follow-up)',
        'CRM pipeline stages + notifications',
        'Google Tag Manager + conversion tracking setup',
        'Documentation + training'
      ],
      timeline: {
        '30 days': 'Site live, forms working, tracking verified',
        '60 days': 'Automation running, CRM organized',
        '90 days': 'First conversion data + optimization plan'
      }
    },
    {
      icon: Video,
      title: 'Organic Content Engine',
      desc: 'Short-form system designed to drive DMs, comments, and orders—not vanity reach.',
      deliverables: [
        'Content strategy based on your offer + capacity',
        'Shot list (phone-filmable, no crew needed)',
        'Posting schedule + hooks that drive action',
        'DM/comment conversion templates',
        "Performance review (what drives orders vs. what doesn't)",
        'Iteration based on conversion data'
      ],
      timeline: {
        '30 days': 'Strategy + shot list delivered',
        '60 days': 'First batch posted, conversion tracking live',
        '90 days': "Optimized based on what's working"
      }
    },
    {
      icon: MapPin,
      title: 'Local + Search Discovery',
      desc: 'On-page SEO + Google presence so buyers find you when they search.',
      deliverables: [
        'On-page SEO (titles, headers, schema)',
        'Google Business Profile optimization',
        'Location pages (if multi-site)',
        'Local keyword strategy',
        'Review management setup',
        'Monthly search performance report'
      ],
      timeline: {
        '30 days': 'On-page SEO complete, GBP optimized',
        '60 days': 'Indexing + rankings improving',
        '90 days': 'Consistent local visibility'
      }
    },
    {
      icon: DollarSign,
      title: 'Paid Search / Meta Ads',
      desc: "Only once your pipeline is ready. We don't run ads before the foundation is built.",
      deliverables: [
        'Conversion-ready landing pages',
        'Google Ads (Search + Performance Max)',
        'Meta Ads (IG + FB with conversion focus)',
        'A/B testing on offers + creative',
        'Weekly budget + performance review',
        'CPA optimization (cost per qualified lead)'
      ],
      timeline: {
        '30 days': 'Campaigns live, conversion tracking verified',
        '60 days': 'A/B tests running, CPA improving',
        '90 days': 'Predictable cost-per-lead + scaling plan'
      }
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Systems That Save Time and Move Volume
          </h1>
          <p className="text-xl text-gray-600">
            We build four core pillars. Most farms start with the foundation (website + pipeline), then layer in content, discovery, and paid as capacity allows.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 p-8 lg:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-green-100 rounded-lg p-3">
                    <pillar.icon className="w-8 h-8 text-green-800" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{pillar.title}</h2>
                    <p className="text-gray-600">{pillar.desc}</p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">What You Get</h3>
                    <ul className="space-y-2">
                      {pillar.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Timeline</h3>
                    <div className="space-y-3">
                      {Object.entries(pillar.timeline).map(([period, outcome], i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="bg-green-800 text-white text-xs font-semibold px-2 py-1 rounded">{period}</span>
                          <span className="text-gray-700">{outcome}</span>
                        </div>
                      ))}
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
            Not sure where to start?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book a strategy call. We\'ll diagnose your current setup and recommend which pillars to build first.
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