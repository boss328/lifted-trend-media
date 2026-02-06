import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function ThankYouWholesale() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Wholesale Intake Received</h1>
        <p className="text-xl text-gray-600 mb-6">
          Thanks for submitting your wholesale intake. We'll review your information and send you a custom plan within 48 hours.
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
              <span>We'll review your intake and prepare a custom wholesale growth plan</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold text-green-600">3.</span>
              <span>You'll receive our plan within 48 hours with clear next steps</span>
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