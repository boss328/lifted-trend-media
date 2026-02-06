import React from 'react';

export default function Terms() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last Updated:</strong> February 6, 2026
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Agreement to Terms</h2>
          <p className="text-gray-700 mb-6">
            By accessing our website or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Services</h2>
          <p className="text-gray-700 mb-6">
            Lifted Trend Media provides marketing systems, website development, content strategy, and related services for agricultural businesses. Specific deliverables, timelines, and pricing are defined in individual service agreements.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Client Responsibilities</h2>
          <p className="text-gray-700 mb-4">
            Clients are responsible for:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6">
            <li>Providing accurate information and materials needed for project completion</li>
            <li>Timely review and feedback on deliverables</li>
            <li>Payment according to agreed terms</li>
            <li>Compliance with all applicable laws and regulations</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Intellectual Property</h2>
          <p className="text-gray-700 mb-6">
            Upon full payment, clients own all custom deliverables created specifically for them (websites, content, designs, etc.). We retain the right to showcase work in our portfolio unless otherwise agreed in writing.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Payment Terms</h2>
          <p className="text-gray-700 mb-6">
            Payment terms are specified in individual service agreements. Late payments may result in project delays or suspension of services. All fees are non-refundable unless otherwise stated in the service agreement.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
          <p className="text-gray-700 mb-6">
            Lifted Trend Media shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid for services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Termination</h2>
          <p className="text-gray-700 mb-6">
            Either party may terminate services with written notice. Upon termination, client is responsible for payment of all work completed to date.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to Terms</h2>
          <p className="text-gray-700 mb-6">
            We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact</h2>
          <p className="text-gray-700 mb-6">
            Questions about these Terms of Service should be directed to [CONTACT_EMAIL].
          </p>
        </div>
      </div>
    </div>
  );
}