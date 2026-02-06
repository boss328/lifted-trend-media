import React from 'react';
import { CheckCircle, Shield } from 'lucide-react';

export default function PackagesSection() {
  const packages = [
    {
      name: 'Foundation System',
      tagline: 'Get the pipeline running',
      duration: '30 days',
      minTerm: 'One-time build',
      includes: [
        'Intake forms with auto-qualification',
        'Landing pages (wholesale kit or product page)',
        'CRM pipeline with stages',
        'Email automation (confirmation + follow-up)',
        'Performance tracking setup',
        'Training + handoff'
      ],
      revisions: '2 rounds per deliverable',
      support: '30 days post-launch',
      bestFor: 'Farms ready to automate buyer qualification'
    },
    {
      name: 'Growth System',
      tagline: 'Foundation + traffic',
      duration: '60 days',
      minTerm: 'Build + 2 months',
      includes: [
        'Everything in Foundation',
        'Content strategy + shot list',
        'Social media templates',
        'Weekly posting guidance',
        'Performance reporting',
        'Monthly optimization calls'
      ],
      revisions: '2 rounds per deliverable',
      support: 'Ongoing during term',
      bestFor: 'Farms that need content + systems'
    },
    {
      name: 'Scale System',
      tagline: 'Growth + paid ads',
      duration: '90 days',
      minTerm: 'Build + 3 months minimum',
      includes: [
        'Everything in Growth',
        'Paid ads setup (Meta/Google)',
        'Ad creative templates',
        'Weekly ad monitoring',
        'Conversion rate optimization',
        'Weekly optimization calls'
      ],
      revisions: '2 rounds per deliverable',
      support: 'Ongoing during term',
      bestFor: 'Farms ready to scale via paid traffic'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">System Packages</h2>
        <p className="text-gray-600">Choose based on where you are, not where you want to be.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {packages.map((pkg, idx) => (
          <div key={idx} className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-green-800 transition-all">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-gray-900">{pkg.name}</h3>
              <p className="text-gray-600">{pkg.tagline}</p>
            </div>
            
            <div className="mb-4 pb-4 border-b border-gray-200">
              <div className="text-sm text-gray-600">Timeline: <span className="font-semibold text-gray-900">{pkg.duration}</span></div>
              <div className="text-sm text-gray-600">Minimum Term: <span className="font-semibold text-gray-900">{pkg.minTerm}</span></div>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Includes:</h4>
              <ul className="space-y-2">
                {pkg.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-800 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-4 pb-4 border-b border-gray-200 space-y-1">
              <div className="text-sm text-gray-600">Revisions: <span className="font-semibold text-gray-900">{pkg.revisions}</span></div>
              <div className="text-sm text-gray-600">Support: <span className="font-semibold text-gray-900">{pkg.support}</span></div>
            </div>

            <div className="bg-green-50 rounded-lg p-3">
              <div className="text-xs font-semibold text-green-800 mb-1">BEST FOR:</div>
              <div className="text-sm text-gray-700">{pkg.bestFor}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-900 text-white rounded-xl p-6">
        <div className="flex items-start gap-3 mb-3">
          <Shield className="w-6 h-6 text-green-400 flex-shrink-0" />
          <div>
            <h4 className="font-bold mb-2">Scope Wall (Applies to All Packages)</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>• 2 revision rounds per deliverable (changes after that require change order)</li>
              <li>• 48-hour response time required from both sides</li>
              <li>• Deliverables auto-accepted after 7 days if no feedback</li>
              <li>• One 30-day pause allowed (more = restart or refund minus work completed)</li>
              <li>• Monthly packages can be paused or cancelled with 30 days notice</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-600">
        <p>Pricing provided on strategy call after we audit your setup.</p>
        <p className="mt-1">Foundation typically $5K-$15K depending on complexity. Growth/Scale include monthly retainer.</p>
      </div>
    </div>
  );
}