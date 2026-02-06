import React from 'react';
import { X } from 'lucide-react';

export default function NotAFitSection() {
  return (
    <div className="bg-red-50 border-l-4 border-red-600 rounded-r-xl p-6 mb-6">
      <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
        <X className="w-5 h-5 text-red-600" />
        You're NOT a fit if:
      </h3>
      <ul className="space-y-2 text-sm text-gray-700">
        <li>• You're looking for "brand awareness" or "going viral"</li>
        <li>• You need a website redesign only (no pipeline or automation)</li>
        <li>• You want unlimited revisions or ongoing support included</li>
        <li>• Your season starts in under 14 days</li>
        <li>• You can't commit 2 hours in the first week for information gathering</li>
        <li>• You expect results without following the system</li>
      </ul>
    </div>
  );
}