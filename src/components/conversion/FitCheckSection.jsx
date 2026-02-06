import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function FitCheckSection() {
  return (
    <div className="bg-green-50 border-l-4 border-green-800 rounded-r-xl p-6">
      <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
        <CheckCircle className="w-5 h-5 text-green-800" />
        You're a GREAT fit if:
      </h3>
      <ul className="space-y-2 text-sm text-gray-700">
        <li>• You have a proven product that sells (just need more buyers)</li>
        <li>• You're tired of answering the same questions over and over</li>
        <li>• You want a system that runs without you during harvest</li>
        <li>• You're willing to follow a process (we've done this before)</li>
        <li>• You need buyers now, not brand building</li>
        <li>• You're ready to invest in infrastructure, not just content</li>
      </ul>
    </div>
  );
}