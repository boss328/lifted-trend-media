import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  // LocalBusiness structured data for SEO
  React.useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Lifted Trend Media",
      "description": "Marketing systems and content engines for farms, growers, and local food brands",
      "email": "ahron@mydragonplug.com",
      "telephone": "+1-858-752-0666",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "San Diego",
        "addressRegion": "CA",
        "postalCode": "92122",
        "addressCountry": "US"
      },
      "areaServed": [
        {
          "@type": "Place",
          "name": "San Diego County"
        },
        {
          "@type": "Place",
          "name": "Southern California"
        }
      ],
      "url": window.location.origin,
      "priceRange": "$$"
    });
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);

  const navigation = [
    { name: 'Home', path: createPageUrl('Home') },
    { 
      name: 'Solutions', 
      path: createPageUrl('Solutions'),
      dropdown: [
        { name: 'Wholesale Growth System', path: createPageUrl('WholesaleGrowth') },
        { name: 'B2C Conversion System', path: createPageUrl('B2CConversion') }
      ]
    },
    { name: 'Process', path: createPageUrl('Process') },
    { name: 'Case Studies', path: createPageUrl('CaseStudies') },
    { name: 'Resources', path: createPageUrl('Resources') },
    { name: 'About', path: createPageUrl('About') }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to={createPageUrl('Home')} className="flex items-center">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698551da80e812d304a5c6a1/11c28eae0_unnamed.png" 
                alt="Lifted Trend Media logo"
                className="h-11 md:h-11 w-auto"
              />
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                item.dropdown ? (
                  <div key={item.name} className="relative group">
                    <button className="text-gray-700 hover:text-gray-900 font-medium flex items-center gap-1">
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="text-gray-700 hover:text-[#AED354] font-semibold transition-colors"
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <Link to={createPageUrl('FarmGrowthAudit')}>
                <Button className="bg-[#0B0B0B] hover:bg-[#0B0B0B] hover:outline hover:outline-2 hover:outline-[#AED354] text-white font-semibold transition-all">
                  Book a 15-Min Farm Growth Audit
                </Button>
              </Link>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-3">
              {navigation.map((item) => (
                item.dropdown ? (
                  <div key={item.name}>
                    <button
                      onClick={() => setSolutionsOpen(!solutionsOpen)}
                      className="w-full text-left text-gray-700 font-medium flex items-center justify-between"
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {solutionsOpen && (
                      <div className="mt-2 ml-4 space-y-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-sm text-gray-600 hover:text-gray-900"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-gray-700 font-medium"
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <Link to={createPageUrl('FarmGrowthAudit')} onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-[#0B0B0B] hover:bg-[#0B0B0B] hover:outline hover:outline-2 hover:outline-[#AED354] text-white font-semibold">
                  Book a 15-Min Farm Growth Audit
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-[#0B0B0B] text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698551da80e812d304a5c6a1/11c28eae0_unnamed.png" 
                alt="Lifted Trend Media logo"
                className="h-10 w-auto mb-4"
              />
              <p className="text-gray-400 text-sm">
                Marketing systems and content engines for farms, growers, and local food brands.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to={createPageUrl('WholesaleGrowth')} className="hover:text-[#AED354] transition-colors">Wholesale Growth</Link></li>
                <li><Link to={createPageUrl('B2CConversion')} className="hover:text-[#AED354] transition-colors">B2C Conversion</Link></li>
                <li><Link to={createPageUrl('Process')} className="hover:text-[#AED354] transition-colors">How It Works</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to={createPageUrl('About')} className="hover:text-[#AED354] transition-colors">About</Link></li>
                <li><Link to={createPageUrl('CaseStudies')} className="hover:text-[#AED354] transition-colors">Case Studies</Link></li>
                <li><Link to={createPageUrl('Resources')} className="hover:text-[#AED354] transition-colors">Resources</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="mailto:ahron@mydragonplug.com" className="hover:text-[#AED354] transition-colors">ahron@mydragonplug.com</a></li>
                <li><a href="tel:858-752-0666" className="hover:text-[#AED354] transition-colors">858-752-0666</a></li>
                <li>San Diego, CA 92122</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2026 Lifted Trend Media. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <Link to={createPageUrl('Privacy')} className="hover:text-[#AED354] transition-colors">Privacy Policy</Link>
              <Link to={createPageUrl('Terms')} className="hover:text-[#AED354] transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}