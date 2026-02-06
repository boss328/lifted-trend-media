import React from 'react';
import { Calendar, Target, TrendingUp } from 'lucide-react';

export default function NinetyDayRoadmap() {
  const phases = [
    {
      icon: Calendar,
      weeks: 'Weeks 1-4',
      title: 'Foundation System Launch',
      milestones: [
        'Week 1: Information gathering (2 hours of your time)',
        'Week 2-3: Site + forms + automation built',
        'Week 4: Training, handoff, system goes live'
      ],
      outcome: 'Pipeline is running. Leads are qualifying themselves.'
    },
    {
      icon: Target,
      weeks: 'Weeks 5-8',
      title: 'Traffic + Content System',
      milestones: [
        'Week 5: Content strategy + shot list delivered',
        'Week 6: First batch of content posted',
        'Week 7-8: Performance tracking installed, first data comes in'
      ],
      outcome: 'You know what content drives orders vs. what doesn\'t.'
    },
    {
      icon: TrendingUp,
      weeks: 'Weeks 9-12',
      title: 'Scale + Optimization',
      milestones: [
        'Week 9-10: Refine based on conversion data',
        'Week 11: Paid ads launch (if applicable)',
        'Week 12: Review results, plan next quarter'
      ],
      outcome: 'Predictable lead flow. You control growth via ad spend.'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">90-Day System Roadmap</h2>
        <p className="text-gray-600">Every project follows this timeline. No surprises.</p>
      </div>
      
      {phases.map((phase, idx) => (
        <div key={idx} className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-green-100 rounded-lg p-3">
              <phase.icon className="w-6 h-6 text-green-800" />
            </div>
            <div>
              <div className="text-sm font-semibold text-green-800 mb-1">{phase.weeks}</div>
              <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
            </div>
          </div>
          <ul className="space-y-2 mb-4">
            {phase.milestones.map((milestone, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-green-800 mt-1">•</span>
                <span>{milestone}</span>
              </li>
            ))}
          </ul>
          <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-800">
            <span className="text-sm font-semibold text-gray-900">Outcome: </span>
            <span className="text-sm text-gray-700">{phase.outcome}</span>
          </div>
        </div>
      ))}
    </div>
  );
}