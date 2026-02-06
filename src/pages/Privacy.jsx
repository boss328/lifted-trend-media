import React from 'react';

export default function Privacy() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last Updated:</strong> February 6, 2026
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
          <p className="text-gray-700 mb-4">
            We collect information you provide directly to us, including when you:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6">
            <li>Fill out a contact form, intake form, or booking request</li>
            <li>Download resources or guides</li>
            <li>Subscribe to our email list</li>
            <li>Communicate with us via email or phone</li>
          </ul>
          <p className="text-gray-700 mb-6">
            This may include your name, email address, phone number, business name, and other information relevant to providing our services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6">
            <li>Respond to your inquiries and provide requested services</li>
            <li>Send you resources, guides, and educational content you requested</li>
            <li>Improve our website and services</li>
            <li>Send you marketing communications (you can opt out at any time)</li>
            <li>Analyze website usage and conversion data</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information Sharing</h2>
          <p className="text-gray-700 mb-6">
            We do not sell, trade, or rent your personal information to third parties. We may share your information with:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6">
            <li>Service providers who assist us in operating our website and conducting our business</li>
            <li>Professional advisors (lawyers, accountants, etc.) when necessary</li>
            <li>Law enforcement or regulatory authorities when required by law</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Security</h2>
          <p className="text-gray-700 mb-6">
            We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Rights</h2>
          <p className="text-gray-700 mb-4">
            You have the right to:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt out of marketing communications</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookies and Tracking</h2>
          <p className="text-gray-700 mb-6">
            We use cookies and similar tracking technologies to analyze website usage, track conversions, and improve user experience. You can control cookies through your browser settings.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-6">
            If you have questions about this Privacy Policy, please contact us at [CONTACT_EMAIL].
          </p>
        </div>
      </div>
    </div>
  );
}