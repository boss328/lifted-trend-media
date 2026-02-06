import React, { useState } from 'react';
import { Calculator, Clock, AlertTriangle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ROIFraming() {
  const [avgOrder, setAvgOrder] = useState(500);
  const [ordersPerMonth, setOrdersPerMonth] = useState(4);
  const [hoursPerWeek, setHoursPerWeek] = useState(10);

  const accountValue = avgOrder * ordersPerMonth * 12;
  const timeSaved = hoursPerWeek * 4 * 12;
  const timeSavedValue = timeSaved * 50;

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">The Real Cost of Not Having a System</h2>
        <p className="text-gray-600">Calculate what you're losing right now.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Wholesale Account Value */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <Calculator className="w-6 h-6 text-green-800" />
            <h3 className="font-bold text-gray-900">Wholesale Account Value</h3>
          </div>
          <div className="space-y-4">
            <div>
              <Label>Avg Order Size ($)</Label>
              <Input
                type="number"
                value={avgOrder}
                onChange={(e) => setAvgOrder(Number(e.target.value))}
              />
            </div>
            <div>
              <Label>Orders/Month</Label>
              <Input
                type="number"
                value={ordersPerMonth}
                onChange={(e) => setOrdersPerMonth(Number(e.target.value))}
              />
            </div>
            <div className="pt-4 border-t border-gray-200">
              <div className="text-sm text-gray-600">Annual Value Per Account:</div>
              <div className="text-3xl font-bold text-green-800">
                ${accountValue.toLocaleString()}
              </div>
              <p className="text-sm text-gray-600 mt-2">
                One qualified account pays for the system. How many are you missing?
              </p>
            </div>
          </div>
        </div>

        {/* Time Saved Calculator */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-6 h-6 text-blue-800" />
            <h3 className="font-bold text-gray-900">Time Saved Value</h3>
          </div>
          <div className="space-y-4">
            <div>
              <Label>Hours/Week on Admin</Label>
              <Input
                type="number"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
              />
            </div>
            <div className="pt-4 border-t border-gray-200">
              <div className="text-sm text-gray-600">Hours Saved/Year:</div>
              <div className="text-3xl font-bold text-blue-800">{timeSaved}</div>
              <div className="text-sm text-gray-600 mt-2">Value at $50/hr:</div>
              <div className="text-2xl font-bold text-blue-800">
                ${timeSavedValue.toLocaleString()}
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Time you get back to grow, not answer emails.
              </p>
            </div>
          </div>
        </div>

        {/* Cost of Missed Harvest */}
        <div className="bg-red-50 rounded-xl border border-red-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-red-600" />
            <h3 className="font-bold text-gray-900">Missed Harvest Window</h3>
          </div>
          <p className="text-gray-700 mb-4">
            Your season is 6-8 weeks. Every week without a pipeline is lost revenue.
          </p>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="bg-white rounded p-3">
              <strong>Week 1:</strong> No system. No leads. $0 in pipeline.
            </div>
            <div className="bg-white rounded p-3">
              <strong>Week 4:</strong> Still building manually. 2 inquiries. 1 converts.
            </div>
            <div className="bg-white rounded p-3">
              <strong>Week 8:</strong> Harvest ends. You made it work, but left money on table.
            </div>
          </div>
          <p className="text-sm font-bold text-red-600 mt-4">
            Cost: 30-50% of potential season revenue.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            The system pays for itself in one season by capturing orders you'd otherwise miss.
          </p>
        </div>
      </div>
    </div>
  );
}