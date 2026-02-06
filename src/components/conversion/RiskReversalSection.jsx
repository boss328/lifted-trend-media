import React from 'react';
import { Shield, Clock } from 'lucide-react';

export default function RiskReversalSection() {
  return (
    <div className="bg-gray-50 rounded-xl p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Two Risk Reversal Options
      </h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border-2 border-green-800 p-6">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-green-800" />
            <h4 className="font-bold text-gray-900">30-Day Delivery Guarantee</h4>
          </div>
          <p className="text-gray-700 mb-4">
            Foundation System launches in 30 days or you get a full refund.
          </p>
          <div className="text-sm text-gray-600 space-y-2">
            <p><strong>Conditions:</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>You provide info within 7 days of kickoff</li>
              <li>You respond to revision requests within 48 hours</li>
              <li>No scope changes after week 1</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg border-2 border-blue-800 p-6">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-6 h-6 text-blue-800" />
            <h4 className="font-bold text-gray-900">90-Day Performance Extension</h4>
          </div>
          <p className="text-gray-700 mb-4">
            If your system doesn't generate qualified leads in 90 days, we work for free until it does.
          </p>
          <div className="text-sm text-gray-600 space-y-2">
            <p><strong>Conditions:</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>You follow the content posting schedule</li>
              <li>System has been live and promoted for 90 days</li>
              <li>You've driven traffic per our plan</li>
              <li>Extension covers optimization only, not new builds</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}