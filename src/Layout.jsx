import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

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
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to={createPageUrl('Home')} className="text-2xl font-bold text-gray-900">
              [LOGO] Lifted Trend Media
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
                    className="text-gray-700 hover:text-gray-900 font-medium"
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <Link to={createPageUrl('FarmGrowthAudit')}>
                <Button className="bg-green-800 hover:bg-green-900 text-white">
                  Book 15-Min Audit Call
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
                <Button className="w-full bg-green-800 hover:bg-green-900 text-white">
                  Book 15-Min Audit Call
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Lifted Trend Media</h3>
              <p className="text-gray-400 text-sm">
                Marketing systems and content engines for farms, growers, and local food brands.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to={createPageUrl('WholesaleGrowth')} className="hover:text-white">Wholesale Growth</Link></li>
                <li><Link to={createPageUrl('B2CConversion')} className="hover:text-white">B2C Conversion</Link></li>
                <li><Link to={createPageUrl('Process')} className="hover:text-white">How It Works</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to={createPageUrl('About')} className="hover:text-white">About</Link></li>
                <li><Link to={createPageUrl('CaseStudies')} className="hover:text-white">Case Studies</Link></li>
                <li><Link to={createPageUrl('Resources')} className="hover:text-white">Resources</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>[CONTACT_EMAIL]</li>
                <li>[PHONE]</li>
                <li>[ADDRESS]</li>
                <li className="flex gap-3 mt-4">
                  [SOCIAL_LINKS]
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2026 Lifted Trend Media. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <Link to={createPageUrl('Privacy')} className="hover:text-white">Privacy Policy</Link>
              <Link to={createPageUrl('Terms')} className="hover:text-white">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}