import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function ThankYouB2C() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">B2C Audit Received</h1>
        <p className="text-xl text-gray-600 mb-6">
          Thanks for submitting your B2C audit. We'll review your current setup and send you a conversion plan within 48 hours.
        </p>
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">What Happens Next</h2>
          <ol className="text-left text-gray-700 space-y-2">
            <li className="flex items-start gap-2">
              <span className="font-semibold text-green-600">1.</span>
              <span>Check your email for a confirmation (check spam if you don't see it)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold text-green-600">2.</span>
              <span>We'll analyze your conversion leaks and prepare a custom B2C plan</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold text-green-600">3.</span>
              <span>You'll receive our plan within 48 hours with clear action steps</span>
            </li>
          </ol>
        </div>
        <p className="text-gray-600 mb-6">
          Want to talk sooner? Book a strategy call below:
        </p>
        <Link to={createPageUrl('Contact')}>
          <Button size="lg" className="bg-green-800 hover:bg-green-900 text-white">
            Book Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
}