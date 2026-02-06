import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from '@/components/ui/button';
import { FileText, BarChart, CheckSquare, MessageSquare, ArrowRight, Eye } from 'lucide-react';

export default function ProofLibrary() {
  const deliverables = [
    { icon: FileText, title: 'Wholesale Kit', desc: 'Line sheet + pricing tiers + delivery terms', preview: 'PDF + landing page' },
    { icon: BarChart, title: 'CRM Pipeline', desc: 'Kanban board with stages and notifications', preview: 'Blurred dashboard' },
    { icon: CheckSquare, title: 'Intake Form', desc: 'Smart qualification logic + routing', preview: 'Live form demo' },
    { icon: MessageSquare, title: 'Email Automation', desc: 'Confirmation + follow-up sequences', preview: 'Template library' }
  ];

  const auditExamples = [
    {
      type: 'Wholesale',
      farm: 'Organic Citrus Farm',
      findings: ['No buyer qualification', 'Manual follow-up', 'Lost 40% of inquiries'],
      recommendation: 'Foundation System + intake automation',
      result: '3 new accounts in 60 days, 10 hrs/week saved'
    },
    {
      type: 'B2C',
      farm: 'Rare Plant Nursery',
      findings: ['No landing page for drops', 'DMs went unanswered', 'No waitlist system'],
      recommendation: 'Growth System + preorder workflow',
      result: '47 preorders in 72 hours, sold out'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Proof Library
          </h1>
          <p className="text-xl text-gray-600">
            See what you're actually getting. Deliverables, audits, and results.
          </p>
        </div>
      </section>

      {/* Sample Deliverables */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sample Deliverables</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {deliverables.map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-green-100 rounded-lg p-3">
                    <item.icon className="w-6 h-6 text-green-800" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border-2 border-dashed border-gray-300 text-center">
                  <Eye className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">{item.preview}</p>
                  <p className="text-xs text-gray-400 mt-2">(Example available on strategy call)</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Examples */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Real Audit Examples</h2>
          <div className="space-y-6">
            {auditExamples.map((audit, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
                    {audit.type}
                  </span>
                  <h3 className="font-bold text-gray-900">{audit.farm}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">What We Found:</h4>
                    <ul className="space-y-1">
                      {audit.findings.map((finding, i) => (
                        <li key={i} className="text-sm text-gray-600">• {finding}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">Recommendation:</h4>
                    <p className="text-sm text-gray-600">{audit.recommendation}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-800">
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Result:</h4>
                    <p className="text-sm text-gray-700">{audit.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Farms Say</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-green-800">
              <p className="text-gray-700 italic mb-4">
                "Before: 15 hours/week answering the same questions. After: intake form filters them out. I only talk to buyers ready to order."
              </p>
              <p className="font-semibold text-gray-900">— Organic citrus, 40 acres, Central Valley</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-green-800">
              <p className="text-gray-700 italic mb-4">
                "Built it in March. Launched in April. Had 3 new wholesale accounts by June. System ran itself during harvest."
              </p>
              <p className="font-semibold text-gray-900">— Mixed vegetable farm, Ventura County</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-green-800">
              <p className="text-gray-700 italic mb-4">
                "First drop: 47 preorders in 72 hours. Waitlist captured 80 more for next round. I didn't answer a single DM."
              </p>
              <p className="font-semibold text-gray-900">— Rare plant nursery, LA</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Want Your Own Proof?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Book a call. We'll audit your setup and show you exactly what we'd build.
          </p>
          <Link to={createPageUrl('Contact')}>
            <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100">
              Book Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}