import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Users, TrendingUp, Clock, Target } from 'lucide-react';
import { base44 } from '@/api/base44Client';

export default function Home() {
  const trackEvent = (eventName) => {
    base44.analytics.track({ eventName, properties: { page: 'home' } });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-green-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Stop answering the same questions.<br />Start closing qualified buyers.
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Automated intake forms. Buyer qualification. Follow-up that runs itself. Track what converts. You focus on harvest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('Contact')} onClick={() => trackEvent('hero_book_call_click')}>
                <Button size="lg" className="bg-green-800 hover:bg-green-900 text-white w-full sm:w-auto">
                  Book 30-Min Call <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to={createPageUrl('Contact')} onClick={() => trackEvent('hero_get_plan_click')}>
                <Button size="lg" variant="outline" className="border-2 border-green-800 text-green-800 hover:bg-green-50 w-full sm:w-auto">
                  See Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">You're Losing Sales Every Week</h2>
          <p className="text-center text-gray-600 mb-12">Most farms lose buyers because the system breaks down before the sale closes.</p>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              "Inquiries come in through 5 different channels. You miss half of them.",
              "Buyer asks about volume, pricing, delivery. You answer. They ghost.",
              "Peak season hits. You're too busy to follow up. Sales die.",
              "You post content. Views go up. Orders don't. No tracking to prove what works."
            ].map((problem, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 font-medium">{problem}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to={createPageUrl('Contact')}>
              <Button className="bg-green-800 hover:bg-green-900 text-white">
                Fix This in 30 Days <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">What You Actually Get</h2>
          <p className="text-center text-gray-600 mb-12">Not theory. Not templates. A system that runs without you.</p>
          <div className="grid md:grid-cols-2 gap-12 mb-10">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">For Wholesale (B2B)</h3>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-gray-900 font-semibold">Intake form qualifies buyers automatically</span>
                    <p className="text-sm text-gray-600 mt-1">Volume, frequency, delivery, pricing tier—answered before you pick up the phone</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-gray-900 font-semibold">Wholesale kit sends itself</span>
                    <p className="text-sm text-gray-600 mt-1">Line sheets, pricing, terms—delivered automatically when they submit</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-gray-900 font-semibold">Follow-up reminders built in</span>
                    <p className="text-sm text-gray-600 mt-1">Never forget to close a deal. System reminds you when to follow up</p>
                  </div>
                </li>
              </ul>
              <Link to={createPageUrl('WholesaleGrowth')}>
                <Button className="w-full bg-green-800 hover:bg-green-900 text-white">
                  See Wholesale System <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">For Direct Sales (B2C)</h3>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-gray-900 font-semibold">Landing page converts inquiries</span>
                    <p className="text-sm text-gray-600 mt-1">Preorder form, pickup scheduler, waitlist—ready to capture orders</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-gray-900 font-semibold">Content system you can actually do</span>
                    <p className="text-sm text-gray-600 mt-1">Phone-filmable shot list. Post schedule. Hooks that drive orders, not likes</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-gray-900 font-semibold">Know what converts</span>
                    <p className="text-sm text-gray-600 mt-1">Track orders back to content. Stop guessing what works</p>
                  </div>
                </li>
              </ul>
              <Link to={createPageUrl('B2CConversion')}>
                <Button className="w-full bg-green-800 hover:bg-green-900 text-white">
                  See B2C System <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Objections */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">"But I Don't Have Time for This"</h2>
          <div className="space-y-6 mb-10">
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-green-800">
              <p className="font-bold text-gray-900 mb-2">"Harvest season is 6 weeks. I can't pause to build a website."</p>
              <p className="text-gray-700">We build it while you harvest. You give us product info + photos once. We handle the rest. Launch in 30 days or we refund you.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-green-800">
              <p className="font-bold text-gray-900 mb-2">"I already have 3 buyers. Why do I need a system?"</p>
              <p className="text-gray-700">Those 3 buyers took you months to find. The system finds the next 3 in weeks—while you're working the field, not chasing leads.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-green-800">
              <p className="font-bold text-gray-900 mb-2">"What if I can't fulfill the orders?"</p>
              <p className="text-gray-700">We build capacity limits into your intake form. Buyers only see what you can deliver. No overselling. No chaos.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-green-800">
              <p className="font-bold text-gray-900 mb-2">"I'm not a marketer. I don't know what content to make."</p>
              <p className="text-gray-700">We give you the exact shot list. Film on your phone. 2-minute videos. Post once a week. No guessing.</p>
            </div>
          </div>
          <div className="text-center">
            <Link to={createPageUrl('Contact')}>
              <Button size="lg" className="bg-green-800 hover:bg-green-900 text-white">
                Talk Through Your Situation <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">30-Day Build. Lifetime Ownership.</h2>
          <p className="text-center text-gray-600 mb-12">No monthly fees after launch. You own everything.</p>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="text-green-800 font-bold text-sm mb-2">WEEK 1</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Information Gathering</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Product list + pricing</li>
                <li>• Photos/videos you already have</li>
                <li>• Capacity + delivery zones</li>
                <li>• 1 hour total of your time</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="text-green-800 font-bold text-sm mb-2">WEEKS 2-3</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">We Build Everything</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Website goes live</li>
                <li>• Forms + automation working</li>
                <li>• Tracking installed</li>
                <li>• Zero hours from you</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="text-green-800 font-bold text-sm mb-2">WEEK 4</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">You Take Over</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Training call (30 min)</li>
                <li>• All logins transferred</li>
                <li>• Content shot list delivered</li>
                <li>• System starts working</li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <Link to={createPageUrl('Contact')}>
              <Button size="lg" className="bg-green-800 hover:bg-green-900 text-white">
                Start in 7 Days <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Real Farms. Real Numbers.</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-green-800">
              <div className="text-3xl font-bold text-green-800 mb-2">10 hrs/week saved</div>
              <p className="text-gray-700 mb-4">"Intake form filters out tire-kickers. I only talk to buyers ready to place orders."</p>
              <p className="text-sm text-gray-600">— Organic citrus, 40 acres</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-green-800">
              <div className="text-3xl font-bold text-green-800 mb-2">3 new accounts in 60 days</div>
              <p className="text-gray-700 mb-4">"System brought qualified restaurant buyers. No cold calling. No chasing."</p>
              <p className="text-sm text-gray-600">— Mixed vegetable farm, Ventura County</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-green-800">
              <div className="text-3xl font-bold text-green-800 mb-2">47 preorders in 72 hours</div>
              <p className="text-gray-700 mb-4">"First drop sold out. Waitlist system captured 80+ for next round."</p>
              <p className="text-sm text-gray-600">— Rare plant nursery, LA</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-green-800">
              <div className="text-3xl font-bold text-green-800 mb-2">$0 wasted ad spend</div>
              <p className="text-gray-700 mb-4">"Built the system first. Now we know exactly what converts before spending a dollar on ads."</p>
              <p className="text-sm text-gray-600">— Heritage pork ranch, San Diego</p>
            </div>
          </div>
          <div className="text-center">
            <Link to={createPageUrl('CaseStudies')}>
              <Button className="bg-green-800 hover:bg-green-900 text-white">
                Read Full Case Studies <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Straight Answers</h2>
          <div className="space-y-6 mb-10">
            {[
              { q: 'How much time do I need to give you?', a: '1 hour in week 1. 30 minutes in week 4 for training. That\'s it. We do the rest.' },
              { q: 'What if harvest starts before we finish?', a: 'We build while you harvest. You give us info once, we execute. System launches whether you\'re available or not.' },
              { q: 'Do I need to know marketing?', a: 'No. We tell you exactly what to film, when to post, what to say. You follow the checklist.' },
              { q: 'What if I get more orders than I can handle?', a: 'We build capacity caps into every form. Buyers only see what you can actually deliver. No overselling.' },
              { q: 'Do you run ads?', a: 'Only after your system is proven. Most farms waste money on ads before the pipeline works. We fix the foundation first.' },
              { q: 'What if my season is only 6 weeks long?', a: 'Perfect. We build it before season starts. You launch day 1 of harvest with buyers already in the pipeline.' },
              { q: 'Do I own this or pay monthly forever?', a: 'You own it. One-time build fee. Optional monthly support if you want ongoing content + optimization.' }
            ].map((faq, idx) => (
              <details key={idx} className="bg-white rounded-lg p-6 border border-gray-200">
                <summary className="font-semibold text-gray-900 cursor-pointer">{faq.q}</summary>
                <p className="text-gray-700 mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="text-center">
            <Link to={createPageUrl('Contact')}>
              <Button size="lg" className="bg-green-800 hover:bg-green-900 text-white">
                Ask Your Specific Question <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Stop Losing Buyers. Start Closing Deals.
          </h2>
          <p className="text-xl text-green-100 mb-8">
            30-minute call. We'll tell you exactly what to build and how long it takes. No pitch. Just a plan.
          </p>
          <Link to={createPageUrl('Contact')} onClick={() => trackEvent('footer_cta_click')}>
            <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100">
              Book 30-Min Call (Free) <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}