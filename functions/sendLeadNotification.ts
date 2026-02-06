import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { leadData, leadType } = await req.json();

    // Send immediate confirmation to lead
    await base44.asServiceRole.integrations.Core.SendEmail({
      to: leadData.email,
      subject: `Thanks for your ${leadType} inquiry`,
      body: `Hi ${leadData.contact_name},

Thanks for reaching out. We received your information and will review it within 24 hours.

In the meantime, here's what happens next:

1. We'll audit your setup (takes 2-4 hours on our end)
2. You'll get an email with our assessment + next steps
3. If it's a fit, we'll send a calendar link to book a strategy call

No spam. No sales pitch unless you're a fit.

Looking forward to reviewing your inquiry,
Lifted Trend Media

---
Book a call directly: [CALENDAR_LINK]`
    });

    // Send internal alert to admin
    await base44.asServiceRole.integrations.Core.SendEmail({
      to: '[ADMIN_EMAIL]',
      subject: `🔥 New ${leadType} Lead: ${leadData.business_name}`,
      body: `New lead just submitted:

Business: ${leadData.business_name}
Contact: ${leadData.contact_name}
Email: ${leadData.email}
Score: ${leadData.score || 'Warm'}
Source: ${leadData.source || 'Website Form'}

View in CRM: [DASHBOARD_LINK]

Response SLA: 24 hours`
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});