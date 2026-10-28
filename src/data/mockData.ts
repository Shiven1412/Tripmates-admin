export const kpiData = [
  { label: 'Total Users', value: 2847391, delta: '+12.4%', up: true, color: 'info' },
  { label: 'Active Users', value: 184209, delta: '+8.7%', up: true, color: 'success' },
  { label: 'Service Providers', value: 14832, delta: '+5.2%', up: true, color: 'purple' },
  { label: 'Active Trips', value: 3921, delta: '+18.3%', up: true, color: 'info' },
  { label: 'Completed Trips', value: 284710, delta: '+22.1%', up: true, color: 'success' },
  { label: "Today's Bookings", value: 1847, delta: '+3.9%', up: true, color: 'info' },
  { label: 'Monthly Revenue', value: 4218340, delta: '+14.6%', up: true, color: 'success', currency: true },
  { label: 'Pending Verifications', value: 892, delta: '-2.1%', up: false, color: 'warning' },
  { label: 'Open Tickets', value: 347, delta: '+1.4%', up: false, color: 'warning' },
  { label: 'Reported Users', value: 128, delta: '-8.3%', up: true, color: 'danger' },
  { label: 'Pending Refunds', value: 214, delta: '+0.8%', up: false, color: 'danger' },
  { label: 'Pending Disputes', value: 89, delta: '-5.2%', up: true, color: 'warning' },
];

export const userGrowthData = [
  { month: 'Apr', users: 1820000, providers: 9400 },
  { month: 'May', users: 2010000, providers: 10200 },
  { month: 'Jun', users: 2180000, providers: 11100 },
  { month: 'Jul', users: 2340000, providers: 12400 },
  { month: 'Aug', users: 2510000, providers: 13600 },
  { month: 'Sep', users: 2847391, providers: 14832 },
];

export const revenueData = [
  { month: 'Apr', gross: 2840000, net: 2120000, commission: 720000 },
  { month: 'May', gross: 3120000, net: 2310000, commission: 810000 },
  { month: 'Jun', gross: 3480000, net: 2590000, commission: 890000 },
  { month: 'Jul', gross: 3720000, net: 2740000, commission: 980000 },
  { month: 'Aug', gross: 3940000, net: 2910000, commission: 1030000 },
  { month: 'Sep', gross: 4218340, net: 3120000, commission: 1098340 },
];

export const bookingsTrendData = [
  { day: 'Mon', bookings: 1420 },
  { day: 'Tue', bookings: 1680 },
  { day: 'Wed', bookings: 1540 },
  { day: 'Thu', bookings: 1890 },
  { day: 'Fri', bookings: 2210 },
  { day: 'Sat', bookings: 2840 },
  { day: 'Sun', bookings: 1847 },
];

export const users = [
  { id: 'U-18472', name: 'Aanya Sharma', email: 'aanya.sharma@gmail.com', location: 'Mumbai, IN', joined: '14 Mar 2024', trips: 12, trustScore: 94, status: 'active', verified: true, avatar: 'AS' },
  { id: 'U-18473', name: 'Rohan Mehta', email: 'rohan.m@outlook.com', location: 'Delhi, IN', joined: '02 Apr 2024', trips: 7, trustScore: 81, status: 'active', verified: true, avatar: 'RM' },
  { id: 'U-18474', name: 'Priya Nair', email: 'priya.nair@yahoo.com', location: 'Bangalore, IN', joined: '18 Apr 2024', trips: 3, trustScore: 72, status: 'suspended', verified: false, avatar: 'PN' },
  { id: 'U-18475', name: 'Vikram Patel', email: 'vikram.p@gmail.com', location: 'Ahmedabad, IN', joined: '01 May 2024', trips: 18, trustScore: 97, status: 'active', verified: true, avatar: 'VP' },
  { id: 'U-18476', name: 'Sneha Kapoor', email: 'sneha.k@gmail.com', location: 'Pune, IN', joined: '12 May 2024', trips: 5, trustScore: 68, status: 'under_review', verified: false, avatar: 'SK' },
  { id: 'U-18477', name: 'Arjun Reddy', email: 'arjun.r@gmail.com', location: 'Hyderabad, IN', joined: '22 May 2024', trips: 9, trustScore: 88, status: 'active', verified: true, avatar: 'AR' },
  { id: 'U-18478', name: 'Kavya Menon', email: 'kavya.m@gmail.com', location: 'Chennai, IN', joined: '03 Jun 2024', trips: 2, trustScore: 59, status: 'flagged', verified: false, avatar: 'KM' },
  { id: 'U-18479', name: 'Rahul Gupta', email: 'rahul.g@gmail.com', location: 'Kolkata, IN', joined: '14 Jun 2024', trips: 14, trustScore: 91, status: 'active', verified: true, avatar: 'RG' },
];

export const providers = [
  { id: 'P-4821', name: 'Himalayan Trails Co.', category: 'Trek Organizers', location: 'Manali, HP', rating: 4.8, bookings: 1284, earnings: 4820000, status: 'approved', verified: true },
  { id: 'P-4822', name: 'GoaStays Premium', category: 'Homestays', location: 'Panaji, GA', rating: 4.6, bookings: 892, earnings: 2140000, status: 'approved', verified: true },
  { id: 'P-4823', name: 'Desert Safari Experts', category: 'Tour Operators', location: 'Jaisalmer, RJ', rating: 4.3, bookings: 447, earnings: 890000, status: 'pending', verified: false },
  { id: 'P-4824', name: 'Kerala Backwaters Tours', category: 'Guides', location: 'Alleppey, KL', rating: 4.9, bookings: 2140, earnings: 6320000, status: 'approved', verified: true },
  { id: 'P-4825', name: 'MountainBike Ladakh', category: 'Bike Rentals', location: 'Leh, LA', rating: 4.1, bookings: 218, earnings: 320000, status: 'suspended', verified: false },
  { id: 'P-4826', name: 'NorthEast Explorers', category: 'Camping Hosts', location: 'Gangtok, SK', rating: 4.7, bookings: 634, earnings: 1480000, status: 'approved', verified: true },
];

export const trips = [
  { id: 'T-9284', title: 'Spiti Valley Winter Drive', creator: 'Vikram Patel', destination: 'Spiti, HP', dates: '15–22 Dec 2024', members: 8, maxMembers: 10, status: 'active', bookings: 6, safety: 'clear' },
  { id: 'T-9285', title: 'Goa Monsoon Vibes', creator: 'Aanya Sharma', destination: 'Goa, GA', dates: '20–25 Jul 2024', members: 12, maxMembers: 15, status: 'active', bookings: 10, safety: 'clear' },
  { id: 'T-9286', title: 'Leh-Ladakh Bike Expedition', creator: 'Arjun Reddy', destination: 'Leh, LA', dates: '10–20 Aug 2024', members: 6, maxMembers: 8, status: 'active', bookings: 5, safety: 'flagged' },
  { id: 'T-9287', title: 'Rajasthan Royal Heritage Tour', creator: 'Rahul Gupta', destination: 'Jaipur, RJ', dates: '01–07 Nov 2024', members: 4, maxMembers: 20, status: 'draft', bookings: 0, safety: 'clear' },
  { id: 'T-9288', title: 'Kerala Backwaters Houseboat', creator: 'Priya Nair', destination: 'Alleppey, KL', dates: '14–17 Sep 2024', members: 3, maxMembers: 6, status: 'paused', bookings: 2, safety: 'under_review' },
  { id: 'T-9289', title: 'Coorg Coffee Plantation Trek', creator: 'Sneha Kapoor', destination: 'Coorg, KA', dates: '05–08 Oct 2024', members: 7, maxMembers: 12, status: 'active', bookings: 6, safety: 'clear' },
];

export const bookings = [
  { id: 'B-28471', user: 'Aanya Sharma', provider: 'GoaStays Premium', type: 'Homestay', trip: 'Goa Monsoon Vibes', date: '20 Jul 2024', amount: 8400, status: 'confirmed', payment: 'paid' },
  { id: 'B-28472', user: 'Vikram Patel', provider: 'Himalayan Trails Co.', type: 'Trek', trip: 'Spiti Valley Winter Drive', date: '15 Dec 2024', amount: 18900, status: 'pending', payment: 'pending' },
  { id: 'B-28473', user: 'Rohan Mehta', provider: 'Kerala Backwaters Tours', type: 'Guide', trip: 'Kerala Backwaters Houseboat', date: '14 Sep 2024', amount: 5200, status: 'confirmed', payment: 'paid' },
  { id: 'B-28474', user: 'Kavya Menon', provider: 'Desert Safari Experts', type: 'Tour', trip: 'Rajasthan Royal Heritage', date: '01 Nov 2024', amount: 12800, status: 'cancelled', payment: 'refunded' },
  { id: 'B-28475', user: 'Arjun Reddy', provider: 'MountainBike Ladakh', type: 'Rental', trip: 'Leh-Ladakh Bike Expedition', date: '10 Aug 2024', amount: 3600, status: 'dispute', payment: 'held' },
  { id: 'B-28476', user: 'Sneha Kapoor', provider: 'NorthEast Explorers', type: 'Camping', trip: 'Coorg Coffee Plantation Trek', date: '05 Oct 2024', amount: 6800, status: 'confirmed', payment: 'paid' },
];

export const tickets = [
  { id: 'TK-4821', user: 'Priya Nair', subject: 'Unable to cancel booking B-28473', category: 'Bookings', priority: 'high', status: 'open', agent: 'Deepak S.', created: '2h ago', sla: '2h left' },
  { id: 'TK-4822', user: 'Kavya Menon', subject: 'Refund not received after 7 days', category: 'Payments', priority: 'urgent', status: 'escalated', agent: 'Meera R.', created: '5h ago', sla: 'Overdue' },
  { id: 'TK-4823', user: 'Rohan Mehta', subject: 'Verification documents rejected', category: 'Verification', priority: 'medium', status: 'assigned', agent: 'Karan V.', created: '1d ago', sla: '4h left' },
  { id: 'TK-4824', user: 'Vikram Patel', subject: 'Trip member not responding', category: 'Safety Reports', priority: 'high', status: 'open', agent: 'Unassigned', created: '3h ago', sla: '1h left' },
  { id: 'TK-4825', user: 'Aanya Sharma', subject: 'Provider listing has wrong prices', category: 'Marketplace', priority: 'low', status: 'resolved', agent: 'Deepak S.', created: '2d ago', sla: 'Resolved' },
  { id: 'TK-4826', user: 'Arjun Reddy', subject: 'AI trip planner giving wrong dates', category: 'Technical Issues', priority: 'medium', status: 'pending_user', agent: 'Tech Team', created: '6h ago', sla: '8h left' },
];

export const safetyReports = [
  { id: 'SR-1047', reporter: 'Aanya Sharma', reported: 'Kavya Menon', category: 'Harassment', severity: 'high', status: 'investigating', date: '18 Sep 2024', evidence: 3 },
  { id: 'SR-1048', reporter: 'Rohan Mehta', reported: 'Unknown Provider', category: 'Scam', severity: 'critical', status: 'escalated', date: '17 Sep 2024', evidence: 5 },
  { id: 'SR-1049', reporter: 'Sneha Kapoor', reported: 'Arjun Reddy', category: 'Fake Identity', severity: 'medium', status: 'pending', date: '16 Sep 2024', evidence: 2 },
  { id: 'SR-1050', reporter: 'Vikram Patel', reported: 'MountainBike Ladakh', category: 'Fraud', severity: 'high', status: 'resolved', date: '15 Sep 2024', evidence: 7 },
  { id: 'SR-1051', reporter: 'Kavya Menon', reported: 'Desert Safari Experts', category: 'Inappropriate Content', severity: 'low', status: 'reviewing', date: '14 Sep 2024', evidence: 1 },
];

export const payments = [
  { id: 'PAY-82741', from: 'Aanya Sharma', to: 'GoaStays Premium', amount: 8400, type: 'Booking', status: 'completed', method: 'UPI', date: '20 Jul 2024' },
  { id: 'PAY-82742', from: 'Kavya Menon', to: 'TripMates', amount: 12800, type: 'Refund', status: 'processing', method: 'Card', date: '18 Sep 2024' },
  { id: 'PAY-82743', from: 'Rohan Mehta', to: 'Kerala Backwaters Tours', amount: 5200, type: 'Booking', status: 'completed', method: 'Netbanking', date: '14 Sep 2024' },
  { id: 'PAY-82744', from: 'Vikram Patel', to: 'Himalayan Trails Co.', amount: 18900, type: 'Booking', status: 'pending', method: 'UPI', date: '12 Sep 2024' },
  { id: 'PAY-82745', from: 'TripMates', to: 'GoaStays Premium', amount: 71400, type: 'Settlement', status: 'completed', method: 'NEFT', date: '11 Sep 2024' },
  { id: 'PAY-82746', from: 'Arjun Reddy', to: 'TripMates', amount: 3600, type: 'Dispute Hold', status: 'held', method: 'Card', date: '10 Sep 2024' },
];

export const activityFeed = [
  { type: 'signup', user: 'Tanvi Iyer', location: 'Chennai', time: '2m ago', icon: '👤' },
  { type: 'trip', user: 'Karan Bajaj', action: 'created trip "Andaman Adventure"', time: '8m ago', icon: '✈️' },
  { type: 'booking', user: 'Priya Sharma', action: 'booked Homestay in Coorg', time: '14m ago', icon: '🏠' },
  { type: 'provider', user: 'Himalayan Guides Ltd.', action: 'registered as provider', time: '22m ago', icon: '🏔️' },
  { type: 'safety', user: 'Anonymous', action: 'reported safety concern on Trip T-9286', time: '31m ago', icon: '⚠️' },
  { type: 'ticket', user: 'Meera Nair', action: 'opened support ticket TK-4827', time: '45m ago', icon: '🎫' },
  { type: 'payment', user: 'System', action: 'processed ₹2.4L settlement to Kerala Backwaters', time: '1h ago', icon: '💰' },
  { type: 'signup', user: 'Rahul Verma', location: 'Lucknow', time: '1h ago', icon: '👤' },
];

export const fraudAlerts = [
  { id: 'FR-892', user: 'Unknown User (multiple IPs)', risk: 'critical', type: 'Duplicate Account', accounts: 4, lastSeen: '10m ago', action: 'auto-flagged' },
  { id: 'FR-893', user: 'Fake Provider Listing', risk: 'high', type: 'Fake Identity', accounts: 1, lastSeen: '2h ago', action: 'pending review' },
  { id: 'FR-894', user: 'Suspicious Payment Cluster', risk: 'high', type: 'Payment Fraud', accounts: 7, lastSeen: '4h ago', action: 'investigating' },
  { id: 'FR-895', user: 'Review Manipulation Ring', risk: 'medium', type: 'Fake Reviews', accounts: 12, lastSeen: '1d ago', action: 'pending review' },
];

export const aiMetrics = [
  { module: 'Trip Planner AI', requests: 48291, tokens: 128400000, cost: 18420, status: 'healthy', accuracy: 94.2 },
  { module: 'AI Assistant', requests: 182840, tokens: 891200000, cost: 128400, status: 'healthy', accuracy: 91.8 },
  { module: 'Compatibility Engine', requests: 29481, tokens: 48200000, cost: 6820, status: 'healthy', accuracy: 88.4 },
  { module: 'Travel Date Matching', requests: 74820, tokens: 210400000, cost: 29840, status: 'degraded', accuracy: 79.1 },
  { module: 'Content Moderation', requests: 248100, tokens: 182000000, cost: 21480, status: 'healthy', accuracy: 96.7 },
];

export const verifications = [
  { id: 'VR-4021', user: 'Priya Nair', type: 'Identity Verification', documents: ['Aadhaar', 'Selfie'], status: 'pending', submitted: '2h ago', risk: 'low' },
  { id: 'VR-4022', user: 'Desert Safari Experts', type: 'Business Verification', documents: ['GST', 'PAN', 'Bank Statement'], status: 'review_required', submitted: '5h ago', risk: 'medium' },
  { id: 'VR-4023', user: 'Kavya Menon', type: 'Face Verification', documents: ['Selfie', 'Video'], status: 'escalated', submitted: '1d ago', risk: 'high' },
  { id: 'VR-4024', user: 'Rahul Gupta', type: 'Traveler Verification', documents: ['PAN', 'Aadhaar'], status: 'approved', submitted: '2d ago', risk: 'low' },
  { id: 'VR-4025', user: 'MountainBike Ladakh', type: 'Provider Verification', documents: ['Business License', 'GST'], status: 'rejected', submitted: '3d ago', risk: 'high' },
];

export const navGroups = [
  {
    label: 'Overview',
    items: [{ id: 'dashboard', label: 'Dashboard', icon: 'grid' }],
  },
  {
    label: 'Users & Providers',
    items: [
      { id: 'users', label: 'Users', icon: 'users' },
      { id: 'providers', label: 'Providers', icon: 'building' },
      { id: 'verification', label: 'Verification', icon: 'shield-check' },
    ],
  },
  {
    label: 'Operations',
    items: [
      { id: 'trips', label: 'Trips', icon: 'map' },
      { id: 'travel-date', label: 'Travel Date', icon: 'heart' },
      { id: 'bookings', label: 'Bookings', icon: 'calendar' },
    ],
  },
  {
    label: 'Finance',
    items: [
      { id: 'payments', label: 'Payments', icon: 'credit-card' },
      { id: 'wallet', label: 'Wallet', icon: 'wallet' },
      { id: 'subscriptions', label: 'Subscriptions', icon: 'layers' },
    ],
  },
  {
    label: 'Marketplace',
    items: [{ id: 'marketplace', label: 'Marketplace', icon: 'store' }],
  },
  {
    label: 'Safety & Trust',
    items: [
      { id: 'trust-safety', label: 'Trust & Safety', icon: 'shield' },
      { id: 'community', label: 'Community', icon: 'message-circle' },
      { id: 'disputes', label: 'Disputes', icon: 'alert-triangle' },
      { id: 'fraud', label: 'Fraud Detection', icon: 'zap' },
    ],
  },
  {
    label: 'Support',
    items: [
      { id: 'support', label: 'Support Desk', icon: 'headphones' },
      { id: 'reviews', label: 'Reviews', icon: 'star' },
      { id: 'notifications', label: 'Notifications', icon: 'bell' },
    ],
  },
  {
    label: 'Intelligence',
    items: [
      { id: 'analytics', label: 'Analytics', icon: 'bar-chart' },
      { id: 'ai-center', label: 'AI Center', icon: 'cpu' },
    ],
  },
  {
    label: 'Admin',
    items: [
      { id: 'settings', label: 'Settings', icon: 'settings' },
      { id: 'admin-management', label: 'Admin Management', icon: 'user-check' },
      { id: 'audit-logs', label: 'Audit Logs', icon: 'file-text' },
      { id: 'knowledge-base', label: 'Knowledge Base', icon: 'book' },
      { id: 'emergency', label: 'Emergency Response', icon: 'alert-octagon' },
    ],
  },
];
