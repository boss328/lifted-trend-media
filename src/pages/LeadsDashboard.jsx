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
  const [filterScore, setFilterScore] = useState('all');
  const [emailTemplate, setEmailTemplate] = useState('');
  const [showEmailDialog, setShowEmailDialog] = useState(false);

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
    if (filterScore !== 'all' && lead.score !== filterScore) return false;
    return true;
  });

  const emailTemplates = {
    wholesale: `Subject: Following up on your wholesale inquiry

Hi [Contact Name],

Thanks for filling out our wholesale intake form. I reviewed your information and wanted to follow up personally.

Based on what you shared:
• Target volume: [Volume]
• Target buyers: [Buyer types]
• Timeline: [Timeline]

I'd like to schedule a quick 15-minute call to discuss pricing tiers and delivery options that fit your operation.

Are you available [Day] or [Day] this week?

Looking forward to connecting,
[Your Name]`,
    b2c: `Subject: Your B2C conversion audit is ready

Hi [Contact Name],

I reviewed your B2C audit submission and have some specific recommendations for [Business Name].

Quick takeaways:
• Biggest opportunity: [Specific leak they mentioned]
• Quick win: [Actionable first step]
• Timeline: [What can be done in 30/60/90 days]

Would you be open to a 20-minute call to walk through the plan?

Let me know what works for your schedule.

Best,
[Your Name]`,
    notfit: `Subject: Re: Your inquiry

Hi [Contact Name],

Thanks for reaching out and sharing details about [Business Name].

After reviewing your situation, I don't think we're the right fit right now. Here's why:

[Specific reason - e.g., "Your current volume is under our minimum threshold" or "You need X before building a pipeline"]

What I'd recommend instead:
[Specific actionable advice or referral]

Feel free to reach back out in [timeframe] once [milestone].

All the best,
[Your Name]`
  };

  const getScoreColor = (score) => {
    const colors = {
      'Hot': 'bg-red-100 text-red-800',
      'Warm': 'bg-yellow-100 text-yellow-800',
      'Cold': 'bg-blue-100 text-blue-800'
    };
    return colors[score] || 'bg-gray-100 text-gray-800';
  };

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
          <div className="flex items-center gap-4 flex-wrap">
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
            <Select value={filterScore} onValueChange={setFilterScore}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Score" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Scores</SelectItem>
                <SelectItem value="Hot">🔥 Hot</SelectItem>
                <SelectItem value="Warm">☀️ Warm</SelectItem>
                <SelectItem value="Cold">❄️ Cold</SelectItem>
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
                             {lead.score && (
                               <Badge className={`text-xs ${getScoreColor(lead.score)}`}>
                                 {lead.score === 'Hot' ? '🔥' : lead.score === 'Warm' ? '☀️' : '❄️'}
                               </Badge>
                             )}
                           </div>
                           <h4 className="font-semibold text-sm text-gray-900 mb-1">
                             {lead.business_name || lead.name || lead.business}
                           </h4>
                           <p className="text-xs text-gray-600">{lead.email}</p>
                           {lead.source && (
                             <p className="text-xs text-gray-500 mt-1">Source: {lead.source}</p>
                           )}
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
                              {lead.source && (
                                <div>
                                  <span className="font-semibold">Source:</span> {lead.source}
                                </div>
                              )}
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
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

                              {lead.score !== undefined && (
                                <div>
                                  <label className="text-sm font-semibold block mb-2">Score</label>
                                  <Select
                                    value={lead.score || 'Warm'}
                                    onValueChange={(newScore) => {
                                      if (lead.type === 'Wholesale') {
                                        updateWholesaleLead.mutate({ id: lead.id, data: { score: newScore } });
                                      } else if (lead.type === 'B2C') {
                                        updateB2CLead.mutate({ id: lead.id, data: { score: newScore } });
                                      }
                                    }}
                                  >
                                    <SelectTrigger>
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="Hot">🔥 Hot</SelectItem>
                                      <SelectItem value="Warm">☀️ Warm</SelectItem>
                                      <SelectItem value="Cold">❄️ Cold</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                              )}
                            </div>

                            {(lead.type === 'Wholesale' || lead.type === 'B2C') && (
                              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                <label className="text-sm font-semibold block mb-3">Email Templates</label>
                                <div className="flex gap-2">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => {
                                      setEmailTemplate(emailTemplates.wholesale);
                                      setShowEmailDialog(true);
                                    }}
                                  >
                                    Wholesale Follow-up
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => {
                                      setEmailTemplate(emailTemplates.b2c);
                                      setShowEmailDialog(true);
                                    }}
                                  >
                                    B2C Follow-up
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => {
                                      setEmailTemplate(emailTemplates.notfit);
                                      setShowEmailDialog(true);
                                    }}
                                  >
                                    Not a Fit
                                  </Button>
                                </div>
                              </div>
                            )}

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
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Score</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Source</th>
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
                        {lead.score ? (
                          <Badge className={getScoreColor(lead.score)}>
                            {lead.score === 'Hot' ? '🔥' : lead.score === 'Warm' ? '☀️' : '❄️'} {lead.score}
                          </Badge>
                        ) : (
                          <span className="text-xs text-gray-400">—</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {lead.source || '—'}
                      </td>
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

        {/* Email Template Dialog */}
        <Dialog open={showEmailDialog} onOpenChange={setShowEmailDialog}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Email Template</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Textarea
                value={emailTemplate}
                onChange={(e) => setEmailTemplate(e.target.value)}
                rows={15}
                className="font-mono text-sm"
              />
              <div className="flex justify-end gap-3">
                <Button variant="outline" onClick={() => setShowEmailDialog(false)}>
                  Close
                </Button>
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText(emailTemplate);
                    alert('Template copied to clipboard!');
                  }}
                >
                  Copy to Clipboard
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}