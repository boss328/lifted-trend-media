import React from 'react';

export default function ClosingFAQ() {
  const faqs = [
    {
      q: 'My season starts in 4 weeks. Can you build it in time?',
      a: 'If you can provide all info within 3 days, yes. Otherwise, we build it for next season. Rushing guarantees mistakes.'
    },
    {
      q: 'What if I can only fulfill 50 orders and get 200?',
      a: 'We cap your forms at your capacity. When you hit 50, new orders join the waitlist. No overselling. Ever.'
    },
    {
      q: 'Do you run ads?',
      a: 'Only after your pipeline works. 90% of farms waste money on ads before the foundation is ready. We fix that first.'
    },
    {
      q: 'How do I know this will work for my farm?',
      a: "If you have a product that sells and buyers exist, the system works. If you're still validating product-market fit, you're not ready."
    },
    {
      q: 'I already have a website. Do I need to rebuild?',
      a: 'Maybe. We audit it first. If it has intake forms, automation, and tracking, we optimize. If not, rebuild is faster.'
    },
    {
      q: "What if I don't have time to make content?",
      a: "Growth package requires 20 min/week. If you can't commit that, stick with Foundation. Content is optional, not required."
    },
    {
      q: 'Can I pause mid-project if harvest gets crazy?',
      a: 'Yes. One 30-day pause allowed. After that, project restarts from scratch or refund (minus work completed).'
    },
    {
      q: 'What if you build it and no leads come in?',
      a: 'Performance Extension kicks in. We optimize for free until you get qualified leads. But you must drive traffic per our plan.'
    },
    {
      q: 'Do I pay monthly or one-time?',
      a: 'One-time for Foundation. Optional monthly for Growth/Scale if you want ongoing content + optimization. No lock-in.'
    },
    {
      q: 'What if I need changes after handoff?',
      a: 'You own the code. Make changes yourself or hire us hourly. Training includes how to edit forms, content, and tracking.'
    },
    {
      q: "Can you guarantee I'll get X new accounts?",
      a: 'No. We guarantee the system launches and works. Results depend on your product, pricing, and market. We control the pipeline, not the market.'
    },
    {
      q: 'What makes you different from [other agency]?',
      a: 'We don\'t do branding, creative, or "storytelling." We build pipelines that qualify buyers and automate follow-up. That\'s it.'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">12 Questions That Kill Deals</h2>
        <p className="text-gray-600">Straight answers. No fluff.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <details key={idx} className="bg-white rounded-lg p-6 border-2 border-gray-200 group">
            <summary className="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">
              <span>{faq.q}</span>
              <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="text-gray-700 mt-4 pl-4 border-l-4 border-green-800">{faq.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}