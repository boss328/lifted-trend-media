import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Download, FileText, Video, CheckSquare, Loader2 } from 'lucide-react';

export default function Resources() {
  const [selectedResource, setSelectedResource] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ email: '', farm_name: '', role: '' });

  const resources = [
    {
      title: 'Wholesale Buyer Qualification Checklist',
      desc: 'A simple checklist to qualify buyers before the first call—volume, frequency, payment terms, and more.',
      icon: CheckSquare,
      type: 'Wholesale Checklist',
      color: 'blue'
    },
    {
      title: 'Farm Content Shot List',
      desc: 'Phone-filmable content ideas designed to drive orders, not vanity reach. No crew needed.',
      icon: Video,
      type: 'Content Shot List',
      color: 'purple'
    },
    {
      title: 'Seasonal Launch Checklist',
      desc: '30-day ramp plan for seasonal product launches: content, offers, and follow-up workflows.',
      icon: FileText,
      type: 'Seasonal Launch Checklist',
      color: 'green'
    }
  ];

  const handleDownload = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await base44.entities.Resource.create({
        ...formData,
        resource_type: selectedResource.type,
        downloaded_date: new Date().toISOString()
      });
      base44.analytics.track({ 
        eventName: 'resource_download', 
        properties: { resource: selectedResource.type } 
      });
      setSubmitted(true);
    } catch (error) {
      alert('Error submitting. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({ email: '', farm_name: '', role: '' });
    setSelectedResource(null);
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Free Resources for Farm Marketers
          </h1>
          <p className="text-xl text-gray-600">
            Practical guides, checklists, and playbooks to help you build systems that work.
          </p>
        </div>
      </section>

      {/* Resource Cards */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, idx) => (
              <Dialog key={idx} onOpenChange={(open) => !open && resetForm()}>
                <DialogTrigger asChild>
                  <div 
                    onClick={() => setSelectedResource(resource)}
                    className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-${resource.color}-100 rounded-lg mb-4`}>
                      <resource.icon className={`w-8 h-8 text-${resource.color}-600`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                    <p className="text-gray-600 mb-4">{resource.desc}</p>
                    <Button variant="outline" className="w-full border-green-800 text-green-800 hover:bg-green-50">
                      <Download className="mr-2 w-4 h-4" />
                      Download
                    </Button>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>{submitted ? 'Download Ready' : `Download: ${resource.title}`}</DialogTitle>
                  </DialogHeader>
                  {!submitted ? (
                    <form onSubmit={handleDownload} className="space-y-4">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="farm_name">Farm/Business Name *</Label>
                        <Input
                          id="farm_name"
                          required
                          value={formData.farm_name}
                          onChange={(e) => setFormData({ ...formData, farm_name: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="role">Role</Label>
                        <Input
                          id="role"
                          placeholder="Owner, Marketing, etc."
                          value={formData.role}
                          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        />
                      </div>
                      <Button type="submit" disabled={loading} className="w-full bg-green-800 hover:bg-green-900 text-white">
                        {loading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          <>
                            <Download className="mr-2 h-4 w-4" />
                            Get Free Download
                          </>
                        )}
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                        <Download className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Check Your Email</h3>
                      <p className="text-gray-600">
                        We've sent the download link to {formData.email}. Check your inbox (and spam folder).
                      </p>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest from the Blog</h2>
            <p className="text-gray-600">Practical insights on building buyer pipelines and conversion systems.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Wholesale pricing ladder basics', category: 'Wholesale' },
              { title: 'What to include in a wholesale line sheet', category: 'Wholesale' },
              { title: 'How to qualify buyers fast', category: 'Operations' },
              { title: 'Tracking basics for farms', category: 'Operations' },
              { title: 'B2C drops vs subscriptions', category: 'B2C' },
              { title: 'Content that drives orders, not views', category: 'Content' }
            ].map((post, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-gray-200 p-6">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4">Coming soon</p>
                <Button variant="outline" size="sm" className="border-green-800 text-green-800 hover:bg-green-50">
                  Read More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}