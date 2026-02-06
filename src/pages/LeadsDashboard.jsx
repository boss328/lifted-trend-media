import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Users, Package, TrendingUp, Filter } from 'lucide-react';

export default function LeadsDashboard() {
  const queryClient = useQueryClient();
  const [selectedLead, setSelectedLead] = useState(null);
  const [filterType, setFilterType] = useState('all');
  const [filterStage, setFilterStage] = useState('all');

  const { data: wholesaleLeads = [] } = useQuery({
    queryKey: ['wholesaleLeads'],
    queryFn: () => base44.entities.WholesaleLead.list('-created_date')
  });

  const { data: b2cLeads = [] } = useQuery({
    queryKey: ['b2cLeads'],
    queryFn: () => base44.entities.B2CLead.list('-created_date')
  });

  const { data: bookingRequests = [] } = useQuery({
    queryKey: ['bookingRequests'],
    queryFn: () => base44.entities.BookingRequest.list('-created_date')
  });

  const updateWholesaleLead = useMutation({
    mutationFn: ({ id, data }) => base44.entities.WholesaleLead.update(id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['wholesaleLeads'] })
  });

  const updateB2CLead = useMutation({
    mutationFn: ({ id, data }) => base44.entities.B2CLead.update(id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['b2cLeads'] })
  });

  const allLeads = [
    ...wholesaleLeads.map(l => ({ ...l, type: 'Wholesale' })),
    ...b2cLeads.map(l => ({ ...l, type: 'B2C' })),
    ...bookingRequests.map(l => ({ ...l, type: 'Booking', stage: l.status }))
  ];

  const filteredLeads = allLeads.filter(lead => {
    if (filterType !== 'all' && lead.type !== filterType) return false;
    if (filterStage !== 'all' && lead.stage !== filterStage) return false;
    return true;
  });

  const stages = ['New', 'Qualified', 'Call Booked', 'Proposal Sent', 'Negotiation', 'Won', 'Lost'];

  const getStageColor = (stage) => {
    const colors = {
      'New': 'bg-blue-100 text-blue-800',
      'Qualified': 'bg-purple-100 text-purple-800',
      'Call Booked': 'bg-yellow-100 text-yellow-800',
      'Proposal Sent': 'bg-orange-100 text-orange-800',
      'Negotiation': 'bg-pink-100 text-pink-800',
      'Won': 'bg-green-100 text-green-800',
      'Lost': 'bg-gray-100 text-gray-800'
    };
    return colors[stage] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Lead Dashboard</h1>
          <p className="text-gray-600">Manage all your leads in one place</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Leads</CardTitle>
              <Users className="w-4 h-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{allLeads.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Wholesale</CardTitle>
              <Package className="w-4 h-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{wholesaleLeads.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">B2C</CardTitle>
              <TrendingUp className="w-4 h-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{b2cLeads.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Won</CardTitle>
              <TrendingUp className="w-4 h-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {allLeads.filter(l => l.stage === 'Won').length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
          <div className="flex items-center gap-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Wholesale">Wholesale</SelectItem>
                <SelectItem value="B2C">B2C</SelectItem>
                <SelectItem value="Booking">Booking</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterStage} onValueChange={setFilterStage}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Stage" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Stages</SelectItem>
                {stages.map(stage => (
                  <SelectItem key={stage} value={stage}>{stage}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Kanban View */}
        <Tabs defaultValue="kanban">
          <TabsList>
            <TabsTrigger value="kanban">Kanban</TabsTrigger>
            <TabsTrigger value="table">Table</TabsTrigger>
          </TabsList>

          <TabsContent value="kanban" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-7 gap-4">
              {stages.map(stage => (
                <div key={stage} className="bg-gray-100 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">{stage}</h3>
                  <div className="space-y-3">
                    {filteredLeads.filter(l => l.stage === stage).map(lead => (
                      <Dialog key={lead.id}>
                        <DialogTrigger asChild>
                          <div
                            onClick={() => setSelectedLead(lead)}
                            className="bg-white rounded-lg p-3 border border-gray-200 cursor-pointer hover:shadow-md transition-shadow"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <Badge className="text-xs">{lead.type}</Badge>
                            </div>
                            <h4 className="font-semibold text-sm text-gray-900 mb-1">
                              {lead.business_name || lead.name || lead.business}
                            </h4>
                            <p className="text-xs text-gray-600">{lead.email}</p>
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle>{lead.business_name || lead.name || lead.business}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="font-semibold">Type:</span> {lead.type}
                              </div>
                              <div>
                                <span className="font-semibold">Email:</span> {lead.email}
                              </div>
                              {lead.phone && (
                                <div>
                                  <span className="font-semibold">Phone:</span> {lead.phone}
                                </div>
                              )}
                              {lead.location && (
                                <div>
                                  <span className="font-semibold">Location:</span> {lead.location}
                                </div>
                              )}
                            </div>

                            <div>
                              <label className="text-sm font-semibold block mb-2">Stage</label>
                              <Select
                                value={lead.stage}
                                onValueChange={(newStage) => {
                                  if (lead.type === 'Wholesale') {
                                    updateWholesaleLead.mutate({ id: lead.id, data: { stage: newStage } });
                                  } else if (lead.type === 'B2C') {
                                    updateB2CLead.mutate({ id: lead.id, data: { stage: newStage } });
                                  }
                                }}
                              >
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {stages.map(s => (
                                    <SelectItem key={s} value={s}>{s}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>

                            {lead.notes !== undefined && (
                              <div>
                                <label className="text-sm font-semibold block mb-2">Notes</label>
                                <Textarea
                                  value={lead.notes || ''}
                                  onChange={(e) => {
                                    if (lead.type === 'Wholesale') {
                                      updateWholesaleLead.mutate({ id: lead.id, data: { notes: e.target.value } });
                                    } else if (lead.type === 'B2C') {
                                      updateB2CLead.mutate({ id: lead.id, data: { notes: e.target.value } });
                                    }
                                  }}
                                  rows={4}
                                />
                              </div>
                            )}

                            {lead.success_90_days && (
                              <div className="bg-gray-50 rounded p-3">
                                <span className="text-sm font-semibold">90-Day Goal:</span>
                                <p className="text-sm text-gray-700 mt-1">{lead.success_90_days}</p>
                              </div>
                            )}
                          </div>
                        </DialogContent>
                      </Dialog>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="table" className="mt-6">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Type</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Business</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Email</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Stage</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredLeads.map(lead => (
                    <tr key={lead.id} className="hover:bg-gray-50 cursor-pointer">
                      <td className="px-4 py-3">
                        <Badge className="text-xs">{lead.type}</Badge>
                      </td>
                      <td className="px-4 py-3 text-sm">{lead.business_name || lead.name || lead.business}</td>
                      <td className="px-4 py-3 text-sm">{lead.email}</td>
                      <td className="px-4 py-3">
                        <Badge className={getStageColor(lead.stage)}>{lead.stage}</Badge>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {new Date(lead.created_date).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}