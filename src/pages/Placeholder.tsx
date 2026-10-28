import { Card, Icon } from '../components/ui';

const pageConfigs: Record<string, { description: string; sections: string[]; icon: string; color: string }> = {
  providers: {
    description: 'Manage service providers across all categories — homestays, guides, trek organizers, rentals and more.',
    sections: ['Homestays', 'Hotels', 'Guides', 'Cabs', 'Scooties', 'Bike Rentals', 'Photographers', 'Tour Operators', 'Trek Organizers', 'Camping Hosts'],
    icon: 'building', color: 'text-violet-600 bg-violet-50',
  },
  trips: {
    description: 'View, manage and moderate all trips across the platform. Monitor safety, members, and activity.',
    sections: ['Active Trips', 'Draft Trips', 'Completed Trips', 'Flagged Trips', 'Trip Analytics'],
    icon: 'map', color: 'text-blue-600 bg-blue-50',
  },
  'travel-date': {
    description: 'Monitor Travel Date profiles, matches, reports and safety flags.',
    sections: ['Travel Date Profiles', 'Matches', 'Reports', 'Conversations', 'Safety Flags'],
    icon: 'heart', color: 'text-rose-600 bg-rose-50',
  },
  bookings: {
    description: 'Centralized booking management across all service types. Confirm, cancel, and manage disputes.',
    sections: ['Homestays', 'Hotels', 'Rental Services', 'Guides', 'Trekking', 'Camping', 'Photography', 'Creator Trips'],
    icon: 'calendar', color: 'text-emerald-600 bg-emerald-50',
  },
  wallet: {
    description: 'Manage user and provider wallets, escrow balances, and pending payouts.',
    sections: ['User Wallets', 'Provider Wallets', 'Pending Payouts', 'Escrow Balance', 'Withdrawals'],
    icon: 'wallet', color: 'text-amber-600 bg-amber-50',
  },
  subscriptions: {
    description: 'Manage subscription plans, renewals, cancellations and revenue tracking.',
    sections: ['TripMates Plus', 'Travel Date Premium', 'Provider Premium', 'Creator Plans', 'Enterprise Plans'],
    icon: 'layers', color: 'text-blue-600 bg-blue-50',
  },
  marketplace: {
    description: 'Approve and manage marketplace listings across gear, services, and experiences.',
    sections: ['Gear', 'Homestays', 'Rentals', 'Guides', 'Camping', 'Photography'],
    icon: 'store', color: 'text-violet-600 bg-violet-50',
  },
  community: {
    description: 'Moderate community content including posts, photos, videos, and comments.',
    sections: ['Posts', 'Photos', 'Videos', 'Comments', 'Reviews', 'Stories'],
    icon: 'message-circle', color: 'text-blue-600 bg-blue-50',
  },
  disputes: {
    description: 'Manage trip, booking, payment and provider disputes with full evidence review.',
    sections: ['Trip Disputes', 'Booking Disputes', 'Payment Disputes', 'Refund Requests', 'Provider Complaints'],
    icon: 'alert-triangle', color: 'text-amber-600 bg-amber-50',
  },
  reviews: {
    description: 'Monitor, flag and manage user, trip, provider and marketplace reviews.',
    sections: ['User Reviews', 'Trip Reviews', 'Provider Reviews', 'Marketplace Reviews'],
    icon: 'star', color: 'text-amber-600 bg-amber-50',
  },
  notifications: {
    description: 'Create and manage push notifications, emails, SMS and in-app campaigns.',
    sections: ['Push Notifications', 'Emails', 'Announcements', 'SMS', 'In-App'],
    icon: 'bell', color: 'text-blue-600 bg-blue-50',
  },
  settings: {
    description: 'Configure platform-wide settings, commission rates, policies and feature flags.',
    sections: ['Commission Rates', 'Subscription Pricing', 'Booking Policies', 'Marketplace Rules', 'AI Settings', 'Feature Flags'],
    icon: 'settings', color: 'text-slate-600 bg-slate-100',
  },
  'admin-management': {
    description: 'Manage admin roles, permissions and access control across the platform.',
    sections: ['Super Admin', 'Operations Admin', 'Support Agent', 'Verification Agent', 'Finance Manager', 'Moderator', 'Safety Officer'],
    icon: 'user-check', color: 'text-violet-600 bg-violet-50',
  },
  'audit-logs': {
    description: 'Full audit trail of every admin action across the platform.',
    sections: ['User Modified', 'Provider Approved', 'Refund Processed', 'Ticket Closed', 'Verification Approved', 'Admin Login Activity'],
    icon: 'file-text', color: 'text-slate-600 bg-slate-100',
  },
  'knowledge-base': {
    description: 'Create, edit and manage help articles across all user and provider categories.',
    sections: ['Traveler Help', 'Provider Help', 'Travel Date Help', 'Payments', 'Verification', 'Support'],
    icon: 'book', color: 'text-emerald-600 bg-emerald-50',
  },
  emergency: {
    description: 'Critical incident response desk for traveler emergencies, safety incidents and law enforcement requests.',
    sections: ['Traveler Emergency', 'Safety Incidents', 'Fraud Alerts', 'Harassment Cases', 'Provider Misconduct', 'Law Enforcement'],
    icon: 'alert-octagon', color: 'text-red-700 bg-red-100',
  },
};

export default function Placeholder({ page }: { page: string }) {
  const config = pageConfigs[page];
  if (!config) return <div className="p-6 text-slate-500">Page not found</div>;

  return (
    <div className="p-6 space-y-5 animate-fade-in">
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-xl ${config.color} flex items-center justify-center shrink-0`}>
          <Icon name={config.icon} className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-slate-900 capitalize">{page.replace(/-/g, ' ')}</h1>
          <p className="text-sm text-slate-500 mt-0.5 max-w-xl">{config.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
        {config.sections.map((section, i) => (
          <Card key={i} className="p-4 hover:shadow-md transition-shadow cursor-pointer group">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-800 group-hover:text-slate-900">{section}</span>
              <Icon name="chevron-right" className="w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors" />
            </div>
            <div className="mt-3 skeleton h-2 w-16 rounded" />
            <div className="mt-1.5 skeleton h-2 w-10 rounded opacity-60" />
          </Card>
        ))}
      </div>

      <Card className="p-8 text-center border-dashed">
        <div className={`w-12 h-12 rounded-xl ${config.color} flex items-center justify-center mx-auto mb-3`}>
          <Icon name={config.icon} className="w-6 h-6" />
        </div>
        <div className="text-sm font-semibold text-slate-600">This section is ready for data</div>
        <div className="text-xs text-slate-400 mt-1">Connect your API to populate live content</div>
      </Card>
    </div>
  );
}
