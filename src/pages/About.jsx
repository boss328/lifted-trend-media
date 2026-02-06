import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Shield, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Built for Growers. Focused on Systems.
          </h1>
          <p className="text-xl text-gray-600">
            Lifted Trend Media builds marketing systems for farms, ranches, and local food brands—so you can spend less time chasing buyers and more time growing.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Most farms don't have a marketing problem. They have a <strong>pipeline problem</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Inquiries come in through DMs, email, phone calls—but there\'s no system to qualify buyers, follow up automatically, or track what\'s working. The owner ends up answering the same questions 20 times a week.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              That\'s where we come in. We build the pipeline: website, intake forms, automation, tracking, and content designed to drive action—not vanity reach.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We\'re operations-first. We don\'t promise viral videos or "going wide." We promise clarity, premium positioning, and systems that work while you grow.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How We Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Boundaries + Clarity',
                desc: 'We don't take every project. We only work with farms that are ready to build a system, not just chase content.'
              },
              {
                icon: Shield,
                title: 'Ownership',
                desc: 'You own everything: website, content, tracking setup, logins. No lock-in. No proprietary systems.'
              },
              {
                icon: Users,
                title: 'Partnership',
                desc: 'We\'re not just a vendor. We\'re a partner in your growth—strategy, execution, and optimization.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 border border-gray-200 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <item.icon className="w-8 h-8 text-green-800" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Let's build your buyer pipeline.
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book a strategy call and we\'ll show you exactly what to build first.
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