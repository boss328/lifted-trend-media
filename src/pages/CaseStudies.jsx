import React, { useEffect, useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';

export default function CaseStudies() {
  const { data: caseStudies = [], isLoading } = useQuery({
    queryKey: ['caseStudies'],
    queryFn: () => base44.entities.CaseStudy.filter({ is_published: true }, '-created_date')
  });

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Proof: Real Farms, Real Results
          </h1>
          <p className="text-xl text-gray-600">
            See how we've helped farms build buyer pipelines, qualify leads, and scale without adding chaos.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2].map((n) => (
                <div key={n} className="bg-gray-100 rounded-xl h-96 animate-pulse" />
              ))}
            </div>
          ) : caseStudies.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                  {study.image_url && (
                    <div className="h-48 bg-gray-100">
                      <img src={study.image_url} alt={study.client_name} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="p-8">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full mb-3">
                      {study.client_type}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{study.client_name}</h3>
                    <p className="text-gray-600 mb-4">{study.goal}</p>
                    {study.metrics && (
                      <div className="bg-gray-50 rounded-lg p-4 mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                        <p className="text-gray-700 text-sm">{study.metrics}</p>
                      </div>
                    )}
                    <Button variant="outline" className="border-green-800 text-green-800 hover:bg-green-50">
                      View Full Case Study <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {/* Example Case Studies */}
              <div className="bg-white rounded-xl border border-gray-200 p-8">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full mb-3">
                  Organic Orchard
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Organic Citrus Farm</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Goal:</strong> Reduce time-wasting inquiries, increase qualified wholesale accounts
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">What We Built</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Wholesale-focused website + buyer intake form</li>
                    <li>• Automated wholesale kit delivery</li>
                    <li>• CRM pipeline with qualification stages</li>
                    <li>• Google Tag Manager conversion tracking</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Results (90 days)</h4>
                  <p className="text-sm text-gray-700">
                    Inquiry quality improved by 60%. Owner saved 10+ hours/week by automating qualification. 3 new restaurant accounts onboarded.
                  </p>
                </div>
                <p className="text-xs text-gray-500 italic">*Example format</p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-8">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full mb-3">
                  Specialty Nursery
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Rare Plant Nursery</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Goal:</strong> Convert DM inquiries into preorder drops
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">What We Built</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• B2C landing page with preorder flow</li>
                    <li>• Content strategy + shot list (phone-filmable)</li>
                    <li>• Email automation for drop announcements</li>
                    <li>• Conversion tracking (orders, not vanity metrics)</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Results (60 days)</h4>
                  <p className="text-sm text-gray-700">
                    First drop: 47 preorders in 72 hours. Email list grew 3x. Clear data on which content drives orders vs. vanity reach.
                  </p>
                </div>
                <p className="text-xs text-gray-500 italic">*Example format</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to build your success story?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Book a strategy call and we'll show you exactly what to build first.
            </p>
            <Link to={createPageUrl('Contact')}>
              <Button size="lg" className="bg-green-800 hover:bg-green-900 text-white">
                Book Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}