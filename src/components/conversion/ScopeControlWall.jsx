import React from 'react';
import { Shield, Clock, CheckSquare, AlertCircle } from 'lucide-react';

export default function ScopeControlWall() {
  return (
    <div className="bg-gray-900 text-white rounded-xl p-8">
      <h3 className="text-2xl font-bold mb-2 text-center">Project Boundaries</h3>
      <p className="text-gray-400 text-center mb-8">Clear expectations = smooth projects.</p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Revision Limits */}
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <CheckSquare className="w-5 h-5 text-green-400" />
            <h4 className="font-bold">Revision Limits</h4>
          </div>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>• 2 revision rounds per deliverable</li>
            <li>• Major scope changes require change order</li>
            <li>• Revisions must be submitted within 48 hours of delivery</li>
            <li>• After 7 days, deliverable is auto-accepted</li>
          </ul>
        </div>

        {/* Response SLAs */}
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-5 h-5 text-blue-400" />
            <h4 className="font-bold">Response Times</h4>
          </div>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>• Our response time: 24-48 hours (business days)</li>
            <li>• Your response time: 48 hours for feedback</li>
            <li>• Delays over 7 days pause project timeline</li>
            <li>• No responses = no support after handoff</li>
          </ul>
        </div>

        {/* Client Responsibilities */}
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-5 h-5 text-yellow-400" />
            <h4 className="font-bold">Your Responsibilities</h4>
          </div>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>• Product info + photos within 7 days</li>
            <li>• Respond to revision requests within 48 hours</li>
            <li>• Follow content posting schedule (Growth/Scale)</li>
            <li>• Provide access to domains, email, payment tools</li>
          </ul>
        </div>

        {/* Pause/Restart Rules */}
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="w-5 h-5 text-red-400" />
            <h4 className="font-bold">Pause/Restart Policy</h4>
          </div>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>• Project pauses after 7 days of no response</li>
            <li>• Resume requires 7-day notice</li>
            <li>• Max 1 pause per project (up to 30 days)</li>
            <li>• Refunds only if we miss delivery guarantee</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 bg-yellow-900 border border-yellow-700 rounded-lg p-4 text-sm">
        <strong className="text-yellow-400">Auto-Accept Rule:</strong> If you don't respond to a deliverable within 7 days, it's automatically accepted and we move to the next phase. No exceptions.
      </div>
    </div>
  );
}