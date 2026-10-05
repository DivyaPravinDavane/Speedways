export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  detailedDesc: string;
  audience: string;
  iconName: string;
  link: string;
  category: "Rental" | "Commute" | "Executive" | "Sustainable";
  features: string[];
}

export interface FleetTier {
  id: string;
  category: string;
  models: string;
  description: string;
  deploymentContext: string;
  passengers: string;
  luggage: string;
  acType: string;
  fuelType: string;
  highlights: string[];
}

export interface ClientTestimonial {
  quote: string;
  client: string;
  category: string;
  designation?: string;
}

export const CLIENT_LOGOS = [
  "Tata Steel",
  "Volvo",
  "Aditya Birla Group",
  "DBS Bank",
  "Merck",
  "Mu Sigma",
  "CMS Info Systems",
  "BCD Travel",
  "Lux Industries",
  "Abbott",
  "Vedic",
  "Embassy",
  "Quona India Advisors LLP",
];

export const SCALE_METRICS = [
  { value: "1,200+", label: "Vehicles Network", desc: "Owned & Managed Fleet Pan-India" },
  { value: "185+", label: "Cities Covered", desc: "Tier-1, Tier-2 & Tier-3 Coverage" },
  { value: "108+", label: "Enterprise Accounts", desc: "Fortune 500 & MNCs Empanelled" },
  { value: "5", label: "Metro Direct Hubs", desc: "Mumbai, BLR, HYD, MAA, DEL" },
  { value: "2012", label: "Established Year", desc: "Over a Decade of Operational Trust" },
  { value: "24×7", label: "Command Centre", desc: "Centralised Telemetry & Escalation" },
  { value: "5%", label: "GST Billing Model", desc: "Direct Corporate Tax Credit Compliance" },
  { value: "EV Ready", label: "Green Fleet", desc: "ICE & Electric Hybrid Transition" },
];

export const EXECUTIVE_QUESTIONS = [
  {
    id: "who",
    question: "Who Are You?",
    headline: "Enterprise Mobility Partner Established in 2012",
    description:
      "A specialised corporate mobility company delivering structured fleet and travel management solutions to corporate travel desks, procurement heads, and admin managers across India with single and multi-city governance.",
    iconName: "Settings",
    badge: "Heritage & Structure",
  },
  {
    id: "scale",
    question: "Can You Handle Scale?",
    headline: "1,200+ Fleet Across 185+ Pan-India Cities",
    description:
      "Operational depth supporting high-volume spot rentals, airport movements, daily employee commutes, and outstation corporate travel backed by 5 direct metro hubs and an integrated partner network.",
    iconName: "Network",
    badge: "Scale & Reach",
  },
  {
    id: "safety",
    question: "Safe & Compliant?",
    headline: "100% Police-Verified Chauffeurs & ISO Systems",
    description:
      "Rigorous statutory and safety protocols including driver background verification, commercial vehicle fitness certification, real-time GPS telemetry, and SOS emergency response escalation.",
    iconName: "ShieldCheck",
    badge: "Zero-Compromise Safety",
  },
  {
    id: "tech",
    question: "What is the Technology?",
    headline: "Indecab-Enabled End-to-End SaaS Automation",
    description:
      "Complete trip lifecycle digitized from self-booking and automated allocation to GPS live tracking, contactless digital duty slips, and reconciliation-ready MIS billing exports.",
    iconName: "Cpu",
    badge: "Digital Efficiency",
  },
];

export const TESTIMONIALS: ClientTestimonial[] = [
  {
    quote: "Dependable execution across locations with responsive coordination.",
    client: "Tata Steel",
    category: "Operational Reliability",
    designation: "Corporate Travel & Administration",
  },
  {
    quote: "Professional chauffeurs, clean vehicles and consistent service quality.",
    client: "Merck",
    category: "Service Quality",
    designation: "Procurement & Facility Management",
  },
  {
    quote: "Strong operational support with prompt responses and clear communication.",
    client: "Embassy",
    category: "Responsiveness",
    designation: "Enterprise Administration Desk",
  },
  {
    quote: "Reliable airport transfers and smooth mobility management for leadership and teams.",
    client: "Quona India Advisors LLP",
    category: "Executive Mobility",
    designation: "Executive Operations",
  },
];

export const SERVICES_CATALOG: ServiceItem[] = [
  {
    id: "chauffeur-driven",
    name: "Corporate Chauffeur-Driven",
    shortDesc: "Daily executive travel, client meetings, and punctuality-critical business trips.",
    detailedDesc:
      "End-to-end chauffeur-driven vehicles for daily corporate tasks, client meetings, and executive transit across all major business hubs.",
    audience: "Daily executive travel, leadership meetings, and business trips across India",
    iconName: "Compass",
    link: "/services/chauffeur-drive",
    category: "Rental",
    features: [
      "Strict on-time SLA",
      "Groomed professional chauffeurs",
      "Sanitized fleet guaranteed",
      "Digital duty slip closure",
    ],
  },
  {
    id: "airport-transfers",
    name: "Airport Transfers",
    shortDesc: "Flight-tracked terminal pickups and drop-offs with dedicated paging service.",
    detailedDesc:
      "Punctual, stress-free airport mobility with live flight radar tracking, automated chauffeur reporting, and meet-and-greet support.",
    audience: "Domestic & international business travelers, VIP arrivals, delegation flights",
    iconName: "Plane",
    link: "/services/chauffeur-drive",
    category: "Rental",
    features: [
      "Flight delay tracking",
      "Name-board paging service",
      "Terminal curb assistance",
      "Zero chauffeur no-show guarantee",
    ],
  },
  {
    id: "local-rentals",
    name: "Local / Short-Term Rentals",
    shortDesc: "Structured 4-hour / 40 km and 8-hour / 80 km in-city packages.",
    detailedDesc:
      "Flexible hourly packages tailored for multi-stop corporate client meetings, site inspections, and citywide administrative transit.",
    audience: "Half-day & full-day in-city travel with dedicated chauffeur at disposal",
    iconName: "Clock",
    link: "/services/chauffeur-drive",
    category: "Rental",
    features: [
      "4h/40km and 8h/80km tiers",
      "Transparent excess km/hr rate",
      "Chauffeur at dedicated disposal",
      "Multiple stops permitted",
    ],
  },
  {
    id: "outstation-travel",
    name: "Intercity / Outstation Travel",
    shortDesc: "Point-to-point and round-trip highway transit with transparent per-km billing.",
    detailedDesc:
      "Cross-city corporate journeys connecting industrial belts, manufacturing corridors, and regional branch visits with zero surprise charges.",
    audience: "Smooth intercity corporate visits with transparent outstation billing",
    iconName: "Navigation",
    link: "/services/chauffeur-drive",
    category: "Rental",
    features: [
      "Transparent per-km tariffs",
      "Night driver allowance clarity",
      "Highway toll & permit transparency",
      "Highway-tested premium vehicles",
    ],
  },
  {
    id: "long-term-rentals",
    name: "Long-Term Fixed Rentals (LTR)",
    shortDesc: "Dedicated monthly and multi-year vehicle allocations for senior leadership.",
    detailedDesc:
      "Customised corporate lease programs providing dedicated vehicle, chauffeur, maintenance, and replacement vehicles for senior management.",
    audience: "Monthly or multi-year dedicated leased fleet for senior leaders & CXOs",
    iconName: "Calendar",
    link: "/services/chauffeur-drive",
    category: "Rental",
    features: [
      "Dedicated chauffeur deployment",
      "24-hour backup vehicle guarantee",
      "Preventive fleet maintenance",
      "Single monthly consolidated billing",
    ],
  },
  {
    id: "employee-transport",
    name: "Employee Transportation (ETS)",
    shortDesc: "Turnkey shift-based staff commute, intelligent route planning & women safety.",
    detailedDesc:
      "Scalable employee transportation operations for IT/ITES, manufacturing, and financial campuses with geofenced tracking and automated rostering.",
    audience: "Shift-based home-to-office daily transfers for enterprise workforces",
    iconName: "Users",
    link: "/services/employee-transport",
    category: "Commute",
    features: [
      "Shift-based route optimization",
      "Women safety escort protocols",
      "Mobile OTP boarding & drop verification",
      "Transport desk admin portal",
    ],
  },
  {
    id: "vip-movement",
    name: "Executive / VIP Movement",
    shortDesc: "C-suite, board directors, and visiting international dignitaries protocol.",
    detailedDesc:
      "White-glove executive transit with verified English-speaking chauffeurs, defensive driving compliance, and strict confidentiality.",
    audience: "C-suite, board directors, and visiting international dignitaries",
    iconName: "Shield",
    link: "/services/vip-luxury-events",
    category: "Executive",
    features: [
      "Discreet, protocol-trained drivers",
      "Full NDA & confidentiality sign-off",
      "Pre-trip sanitized inspection",
      "Real-time route oversight",
    ],
  },
  {
    id: "luxury-fleet",
    name: "Premium & Luxury Vehicles",
    shortDesc: "Mercedes-Benz, BMW, Audi, and Toyota Fortuner for corporate milestone events.",
    detailedDesc:
      "High-end luxury vehicles deployed for annual shareholder meetings, investor summits, VIP partner visits, and executive board movement.",
    audience: "Mercedes, BMW, Audi, and Fortuner deployments for milestone visits",
    iconName: "Gem",
    link: "/services/vip-luxury-events",
    category: "Executive",
    features: [
      "Flagship German luxury sedans",
      "Executive SUVs for visiting board members",
      "In-cabin amenities & high comfort",
      "Dedicated on-ground fleet marshal",
    ],
  },
  {
    id: "events-conferences",
    name: "Events, Conferences & Bulk (MICE)",
    shortDesc: "Large-scale MICE summits, delegate transport, and on-ground logistics desks.",
    detailedDesc:
      "Complete event transport management deploying 10 to 100+ vehicles simultaneously with on-site transport coordinators and digital dispatch.",
    audience: "Large-scale MICE summits, delegate transport, and bulk operations",
    iconName: "Building",
    link: "/services/vip-luxury-events",
    category: "Executive",
    features: [
      "On-site transport desk manager",
      "Airport arrival desk & reception",
      "Mass delegate shuttle coordination",
      "Centralised real-time manifest tracking",
    ],
  },
  {
    id: "ev-mobility",
    name: "EV Mobility (Green Fleet)",
    shortDesc: "Clean ICE-to-EV fleet transition supporting enterprise ESG sustainability targets.",
    detailedDesc:
      "Zero-tailpipe-emission electric mobility solutions with charging infrastructure support and monthly carbon abatement reporting for corporate ESG compliance.",
    audience: "Clean ICE-to-EV fleet transition supporting enterprise ESG targets",
    iconName: "Zap",
    link: "/sustainability",
    category: "Sustainable",
    features: [
      "Tata Tigor EV & Nexon EV deployment",
      "Route feasibility analysis",
      "Dedicated charging depot access",
      "Monthly CO2 emissions avoided report",
    ],
  },
  {
    id: "guest-transportation",
    name: "Guest Transportation",
    shortDesc: "Hotel transfers, client delegates, and specialized corporate hospitality travel.",
    detailedDesc:
      "Courteous hospitality transportation ensuring visiting business guests, auditors, and overseas partners receive a welcoming first impression.",
    audience: "Hotel transfers, client delegates, and specialized hospitality travel",
    iconName: "HandMetal",
    link: "/services/chauffeur-drive",
    category: "Rental",
    features: [
      "Airport to hotel transfers",
      "Concierge liaison coordination",
      "Premium interior presentation",
      "Direct company guest billing",
    ],
  },
];

export const FLEET_PORTFOLIO: FleetTier[] = [
  {
    id: "economy-sedan",
    category: "Economy Sedan",
    models: "Maruti Dzire / Hyundai Aura / Honda Amaze",
    description: "Reliable, high-efficiency compact sedans ideal for daily corporate transit.",
    deploymentContext: "Daily business travel, point-to-point duties, airport transfers",
    passengers: "4 Passengers",
    luggage: "2 Bags (Standard)",
    acType: "Climate Controlled AC",
    fuelType: "Petrol / CNG / Hybrid",
    highlights: [
      "Cost-effective daily transit",
      "Clean sanitized interiors",
      "GPS tracking & emergency button",
      "Professional chauffeur",
    ],
  },
  {
    id: "executive-sedan",
    category: "Executive Sedan",
    models: "Maruti Ciaz / Honda City / Hyundai Verna",
    description: "Spacious legroom and premium comfort for mid-to-senior corporate staff and client visits.",
    deploymentContext: "Senior employees, client visits, executive guest movement",
    passengers: "4 Passengers",
    luggage: "3 Bags (Standard)",
    acType: "Dual Zone Auto AC",
    fuelType: "Petrol / Smart Hybrid",
    highlights: [
      "Generous rear legroom",
      "Leatherette seating",
      "Quiet executive cabin",
      "Complimentary water & sanitizers",
    ],
  },
  {
    id: "muv",
    category: "MUV",
    models: "Maruti Ertiga / Kia Carens",
    description: "Flexible multi-utility vehicle designed for team transfers and heavy luggage runs.",
    deploymentContext: "Mid-size team transit, airport runs with heavy luggage requirements",
    passengers: "6 Passengers",
    luggage: "4 Bags",
    acType: "Roof Mounted Rear AC Vents",
    fuelType: "Petrol / Smart Hybrid",
    highlights: [
      "Flexible 3-row seating",
      "Generous luggage capacity",
      "Comfortable team transit",
      "High fuel efficiency",
    ],
  },
  {
    id: "premium-muv",
    category: "Premium MUV",
    models: "Toyota Innova Crysta / Innova Hycross",
    description: "The gold standard of corporate business mobility across Indian cities and highways.",
    deploymentContext: "Leadership travel, VIP delegates, high-comfort outstation journeys",
    passengers: "6-7 Passengers",
    luggage: "5 Bags",
    acType: "Automatic Multi-Zone AC",
    fuelType: "Diesel / Strong Hybrid",
    highlights: [
      "Captain seat luxury comfort",
      "Unmatched highway stability",
      "Long-distance endurance",
      "Preferred choice of Fortune 500 executives",
    ],
  },
  {
    id: "luxury-suv",
    category: "SUV / Luxury",
    models: "Toyota Fortuner / Mercedes-Benz E-Class / BMW 5 Series / Audi A6",
    description: "Flagship luxury sedans and commanding SUVs for CXO board members and state visits.",
    deploymentContext: "CXO, board members, corporate delegate summits & state visits",
    passengers: "4-7 Passengers",
    luggage: "4-6 Bags",
    acType: "Multi-Zone Automatic Climate Control",
    fuelType: "Diesel / Petrol / Strong Hybrid",
    highlights: [
      "Flagship boardroom luxury",
      "Executive soundproofing",
      "White-glove chauffeur protocol",
      "Pre-trip deep sanitation audit",
    ],
  },
  {
    id: "ev-coaches",
    category: "EV & Coaches",
    models: "Tata Tigor EV / Nexon EV / Tempo Traveller (13-26 Seater) / Luxury Volvo Coaches",
    description: "Zero-emission electric cars for corporate ESG goals and large group corporate transfers.",
    deploymentContext: "ESG sustainability programs, group conferences, bulk staff transport",
    passengers: "4 to 45 Passengers",
    luggage: "High-Capacity Cargo",
    acType: "High-Efficiency Central AC",
    fuelType: "100% Electric / Clean Diesel",
    highlights: [
      "Zero tailpipe carbon emissions (EVs)",
      "Bulk employee shift transit",
      "Corporate offsite delegation movement",
      "Integrated speed governors & tracking",
    ],
  },
];

export const INDECAB_STAGES = [
  {
    step: "01",
    title: "Booking Portal",
    subtitle: "Self-service corporate portal & admin bulk upload",
    desc: "Corporate employees book trips via mobile app or company travel desk. Batch uploads supported for shifts.",
    details: [
      "Single-click corporate booking",
      "Department cost-center tagging",
      "Custom corporate policy guardrails",
      "Real-time SMS & email confirmation",
    ],
  },
  {
    step: "02",
    title: "Automated Allocation",
    subtitle: "Intelligent chauffeur & vehicle pairing",
    desc: "Indecab algorithms match the nearest verified driver and compliant vehicle to maximize on-time reliability.",
    details: [
      "Proximity-based auto dispatch",
      "Vehicle compliance pre-check",
      "Chauffeur roster alignment",
      "Automated lead-time buffers",
    ],
  },
  {
    step: "03",
    title: "Live GPS Tracking",
    subtitle: "Real-time visibility & OTP verification",
    desc: "End-to-end trip telemetry with live map view, passenger OTP verification to start trip, and geofence tracking.",
    details: [
      "Live passenger link tracking",
      "Secure OTP trip start & end",
      "Emergency SOS button broadcast",
      "Real-time ETA recalculation",
    ],
  },
  {
    step: "04",
    title: "Digital Duty Slip",
    subtitle: "Instant paperless trip closure",
    desc: "Chauffeur and employee sign off digitally on the mobile terminal with geofence, distance, and time timestamps.",
    details: [
      "100% paperless digital sign-off",
      "Automated km & toll capture",
      "Zero dispute over trip timings",
      "Instant email receipt dispatch",
    ],
  },
  {
    step: "05",
    title: "MIS & Automated Billing",
    subtitle: "Reconciliation-ready digital invoicing",
    desc: "Automated aggregation into GST-compliant invoices with line-item duty slips and monthly MIS reporting.",
    details: [
      "Consolidated monthly invoicing",
      "5% GST input tax credit clarity",
      "Cost-center spend breakdown",
      "Direct ERP / SAP export support",
    ],
  },
];

export const SLA_BENCHMARKS = [
  { metric: "4 Hours", title: "Local Booking Lead Time", desc: "Guaranteed dispatch for in-city travel" },
  { metric: "6 Hours", title: "Network City Lead Time", desc: "Outstation and Tier-2 hub readiness" },
  { metric: "< 2 Hours", title: "Booking Confirmation", desc: "Rapid reservation acknowledgment" },
  { metric: "90 Mins", title: "Driver Details Prior", desc: "Chauffeur name, phone & vehicle SMS" },
  { metric: "24×7", title: "Live Command Centre", desc: "Active human oversight around the clock" },
  { metric: "99.8%", title: "Trip On-Time Reporting", desc: "Industry-leading punctuality benchmark" },
];

export const COMMAND_CENTRE_PILLARS = [
  {
    title: "Booking Monitoring",
    desc: "Continuous monitoring of all incoming reservation requests, flight schedules, and timetable adjustments.",
    iconName: "MonitorCheck",
  },
  {
    title: "Driver Reporting Oversight",
    desc: "Tracking driver dispatch 90 minutes prior to reporting time with proactive substitute mobilization if needed.",
    iconName: "UserCheck",
  },
  {
    title: "Continuous GPS Telemetry",
    desc: "Live route tracking with speed alerts, route deviation monitoring, and geofence validation.",
    iconName: "Radio",
  },
  {
    title: "Customer Support Desk",
    desc: "Trained corporate desk executives available 24×7 to assist bookers, passengers, and admin coordinators.",
    iconName: "Headphones",
  },
  {
    title: "Emergency SOS Escalation",
    desc: "Dedicated safety desk with direct linkage to local police, medical emergency, and corporate security.",
    iconName: "AlertTriangle",
  },
  {
    title: "Multi-City Harmonization",
    desc: "Centralised standard operating procedures across all 185+ cities ensuring identical service quality nationwide.",
    iconName: "Globe",
  },
];

export const SAFETY_PILLARS = [
  {
    title: "Chauffeur Standards & Verification",
    points: [
      "100% Police verification & permanent address check",
      "Valid commercial driving license & medical fitness",
      "Defensive driving and highway safety training",
      "Corporate etiquette, grooming, and non-disclosure standards",
    ],
  },
  {
    title: "Vehicle Readiness & Compliance",
    points: [
      "Yellow board commercial registration & valid fitness certificate",
      "Comprehensive commercial passenger insurance & active PUC",
      "Routine 50-point preventive maintenance logs",
      "In-cabin fire extinguisher, first-aid kit & emergency tools",
    ],
  },
  {
    title: "Passenger Safety & Women Protocols",
    points: [
      "Secure OTP verification prior to trip start",
      "Dedicated night escort drop protocol for women staff",
      "Emergency SOS button broadcast linked to Command Centre",
      "Night trip confirmation calls to ensure safe arrival",
    ],
  },
  {
    title: "Statutory & ISO Management Systems",
    points: [
      "ISO 9001: Quality Management Systems",
      "ISO 27001: Information Security & Data Protection",
      "ISO 45001: Occupational Health and Safety",
      "ISO 14001: Environmental Management Systems",
      "ISO 22301: Business Continuity Management",
    ],
  },
];

export const EV_ROADMAP_STEPS = [
  {
    phase: "Phase 1: Assess",
    badge: "Feasibility Analysis",
    title: "Route Density & Duty Cycle Assessment",
    desc: "Analyze corporate travel patterns, daily commute distances, route density, and campus charging grid feasibility.",
  },
  {
    phase: "Phase 2: Pilot",
    badge: "Low-Risk Deployment",
    title: "Pilot EV Deployment on Fixed Corridors",
    desc: "Introduce electric sedans (Tata Tigor/Nexon EV) on predictable airport routes and fixed office-to-office shuttle runs.",
  },
  {
    phase: "Phase 3: Scale",
    badge: "Fleet Expansion",
    title: "Expand EV Share with Charging Infrastructure",
    desc: "Scale fleet share up to 30-50% backed by dedicated enterprise charging hubs and smart battery management.",
  },
  {
    phase: "Phase 4: Report",
    badge: "ESG Compliance",
    title: "Monthly Carbon Emissions Avoided Analytics",
    desc: "Deliver auditable monthly carbon abatement reports and ESG documentation for corporate sustainability filings.",
  },
];

export const DIRECT_BRANCHES = [
  {
    city: "Mumbai (Head Office)",
    address: "Wing D 301, Neelkanth Business Park, Nathani Road, Vidyavihar West, Mumbai 400 086",
    phone: "9820630817",
    email: "mumbai@speedwaysftm.com",
    role: "Corporate Head Office & Central 24×7 Command Centre",
  },
  {
    city: "Bengaluru",
    address: "Prestige Meridian, M.G. Road, Bengaluru 560 001",
    phone: "9820630817",
    email: "blr@speedwaysftm.com",
    role: "South India Operations Hub & IT Corridor Desk",
  },
  {
    city: "Hyderabad",
    address: "HITEC City Phase 2, Madhapur, Hyderabad 500 081",
    phone: "9820630817",
    email: "hyd@speedwaysftm.com",
    role: "Telangana & AP Operations Desk",
  },
  {
    city: "Chennai",
    address: "Old Mahabalipuram Road (OMR), Perungudi, Chennai 600 096",
    phone: "9820630817",
    email: "chennai@speedwaysftm.com",
    role: "Automotive & Manufacturing Corridor Desk",
  },
  {
    city: "Delhi NCR",
    address: "DLF Cyber City, Sector 24, Gurugram, Haryana 122 002",
    phone: "9820630817",
    email: "delhi@speedwaysftm.com",
    role: "North India Regional Hub & Diplomatic Movement",
  },
];
