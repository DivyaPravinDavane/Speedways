export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  detailedDesc: string;
  audience: string;
  iconName: string;
  link: string;
  category: "Rental" | "Commute" | "Executive" | "Sustainable" | "Management";
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
  "Merck Group",
  "Newspace",
  "ATPI",
  "DABICO Airport",
  "Kimberly-Clark",
  "BCD Travel",
  "CMS Info Systems",
  "Mu Sigma",
  "LUX INDUSTRY",
  "Quona India Advisors LLP",
];

export const SCALE_METRICS = [
  { value: "1,200+", label: "Verified Vehicles", desc: "Sedans, MPVs, buses, tempo travellers and coaches" },
  { value: "185+", label: "Cities Covered", desc: "Tier-1, Tier-2 & Tier-3 Coverage" },
  { value: "156+", label: "Enterprise Accounts", desc: "Fortune 500 & MNCs Empanelled" },
  { value: "6", label: "Metro Direct Hubs", desc: "Mumbai, Bengaluru, Hyderabad, Chennai, Delhi NCR, Pune" },
  { value: "2012", label: "Established Year", desc: "Over a Decade of Operational Trust" },
  { value: "24×7", label: "Command Centre", desc: "Centralised Telemetry & Escalation" },
  { value: "5%", label: "GST Billing Model", desc: "Standardized Corporate Tax Compliance" },
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
      "Operational depth supporting high-volume spot rentals, airport movements, daily employee commutes, and outstation corporate travel backed by 6 direct metro hubs (Mumbai, Bengaluru, Hyderabad, Chennai, Delhi NCR, Pune) and an integrated partner network.",
    iconName: "Network",
    badge: "Scale & Reach",
  },
  {
    id: "safety",
    question: "Safe & Compliant?",
    headline: "Verified Chauffeurs & ISO Systems",
    description:
      "Rigorous statutory and safety protocols including chauffeur background clearance, commercial vehicle fitness certification, real-time GPS telemetry, and SOS emergency response escalation.",
    iconName: "ShieldCheck",
    badge: "Zero-Compromise Safety",
  },
  {
    id: "tech",
    question: "What is the Technology?",
    headline: "Enterprise Cloud-Enabled SaaS Automation",
    description:
      "Complete trip lifecycle digitized from self-booking and automated allocation to GPS live tracking, contactless digital duty slips, and reconciliation-ready MIS billing exports via our technology platform.",
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
    quote: "Flawless airport transfers, corporate delegations, and dedicated 24×7 account management.",
    client: "ATPI",
    category: "Global Travel Logistics",
    designation: "Corporate Travel Management Desk",
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
    id: "corporate-car-rental",
    name: "Corporate Car Rental",
    shortDesc: "Chauffeur-driven point-to-point & daily executive rentals with strict on-time SLA.",
    detailedDesc:
      "Enterprise chauffeur-driven vehicles for daily corporate tasks, client meetings, audits, and leadership movement across all Tier-1 and Tier-2 business hubs in India.",
    audience: "Daily executive travel, leadership meetings, and business trips across India",
    iconName: "Compass",
    link: "/#enquiry",
    category: "Rental",
    features: [
      "Strict 99.4% on-time SLA",
      "Groomed 100% police-verified chauffeurs",
      "Sanitized fleet guaranteed",
      "Paperless e-DTR digital duty slip closure",
    ],
  },
  {
    id: "airport-transfers",
    name: "Airport Transfers",
    shortDesc: "Reliable airport mobility with live flight monitoring and proactive chauffeur coordination.",
    detailedDesc:
      "Predictable airport pickup and drop services across 185+ cities featuring flight radar tracking, meet-and-greet terminal assistance, zero surge pricing, and dedicated VIP buffer dispatch.",
    audience: "Domestic & international corporate executives, VIP delegates, and board arrivals",
    iconName: "Plane",
    link: "/#enquiry",
    category: "Rental",
    features: [
      "Live flight delay & gate monitoring",
      "Proactive chauffeur details shared 2h prior",
      "Terminal meet-and-greet assistance",
      "Zero surge pricing guarantee",
    ],
  },
  {
    id: "employee-transport",
    name: "Employee Transport (ETS)",
    shortDesc: "Turnkey shift-based staff commute, intelligent route planning & automated lady traveller safety.",
    detailedDesc:
      "Scalable employee transportation services for IT/ITES, BFSI, and manufacturing campuses with geofenced routing, mobile OTP boarding verification, and automated transport desk oversight.",
    audience: "Shift-based daily office commute for enterprise workforces (24×7 operations)",
    iconName: "Users",
    link: "/#enquiry",
    category: "Commute",
    features: [
      "Shift-based dynamic route optimization",
      "Specialized lady traveller safety protocols",
      "Mobile OTP boarding & drop verification",
      "Real-time central command desk monitoring",
    ],
  },
  {
    id: "monthly-long-term-leasing",
    name: "Monthly & Long-Term Leasing",
    shortDesc: "Dedicated monthly and multi-year vehicle allocations with zero balance sheet liability.",
    detailedDesc:
      "Comprehensive corporate car subscription and leasing programs offering dedicated executive cars, trained chauffeurs, full preventive maintenance, and rapid vehicle replacement and recovery backup.",
    audience: "Corporate leadership, expatriates, and long-term project team dedicated transport",
    iconName: "Calendar",
    link: "/#enquiry",
    category: "Rental",
    features: [
      "Flexible 1, 2, or 3-year contract tenures",
      "Preventive maintenance & insurance included",
      "Guaranteed backup vehicle deployment",
      "Unified monthly consolidated GST billing",
    ],
  },
  {
    id: "vip-cxo-movement",
    name: "VIP & CXO Movement",
    shortDesc: "White-glove executive transit with verified English-speaking chauffeurs and NDA compliance.",
    detailedDesc:
      "Elite protocol transport for C-suite executives, visiting overseas board directors, and high-profile dignitaries featuring premium sedans (Mercedes-Benz, BMW, Camry) and executive SUVs (Fortuner).",
    audience: "C-suite, board directors, and visiting international dignitaries",
    iconName: "Shield",
    link: "/#enquiry",
    category: "Executive",
    features: [
      "Discreet protocol-trained executive chauffeurs",
      "Strict confidentiality & non-disclosure compliance",
      "Pre-trip sanitized vehicle inspection",
      "24×7 dedicated VIP desk oversight",
    ],
  },
  {
    id: "mice-event-transport",
    name: "MICE & Event Transportation",
    shortDesc: "Large-scale conferences, annual summits, and multi-vehicle delegate logistics coordination.",
    detailedDesc:
      "Turnkey mobility management deploying 10 to 100+ vehicles simultaneously for corporate conferences, exhibitions, global summits, and annual general meetings with on-site desk marshals.",
    audience: "Large-scale MICE summits, industry expos, and corporate conferences",
    iconName: "Building",
    link: "/#enquiry",
    category: "Executive",
    features: [
      "On-site transport desk manager & marshals",
      "Airport arrival desk & reception facilitation",
      "Mass delegate shuttle & coach coordination",
      "Centralised real-time manifest tracking",
    ],
  },
  {
    id: "intercity-outstation",
    name: "Intercity & Outstation",
    shortDesc: "Enterprise-grade intercity mobility with vetted highway chauffeurs and transparent mileage.",
    detailedDesc:
      "Seamless highway and intercity travel connecting metro headquarters to industrial manufacturing plants, regional offices, and client sites with transparent per-km billing and AIS-140 telemetry.",
    audience: "Cross-city executive visits, plant inspections, and regional business audits",
    iconName: "Navigation",
    link: "/#enquiry",
    category: "Rental",
    features: [
      "Trained senior highway chauffeurs",
      "Audited vehicles with safety inspections",
      "Continuous 24×7 command centre journey tracking",
      "Transparent per-km tariffs & automated toll capture",
    ],
  },
  {
    id: "fleet-management-services",
    name: "Fleet Management Services",
    shortDesc: "End-to-end corporate fleet outsourcing, chauffeur management, statutory audits & telematics.",
    detailedDesc:
      "Complete outsourced fleet management taking over client-owned or leased fleets. Speedways manages driver payroll, statutory compliances, maintenance schedules, fuel reconciliation, and telematics.",
    audience: "Enterprises seeking to outsource in-house transport departments and fleet assets",
    iconName: "Clock",
    link: "/#enquiry",
    category: "Management",
    features: [
      "Complete driver recruitment & payroll management",
      "Statutory compliance & document audit management",
      "Preventive fleet maintenance scheduling",
      "Integrated telematics & fuel reconciliation",
    ],
  },
  {
    id: "ev-mobility-solutions",
    name: "EV Mobility Solutions",
    shortDesc: "Zero-tailpipe-emission electric fleet transition supporting enterprise ESG targets.",
    detailedDesc:
      "Clean electric mobility operations featuring EV sedans, campus charging infrastructure setup, real-time battery telemetry, and auditable monthly carbon abatement certificates for corporate ESG reporting.",
    audience: "Enterprises targeting Scope 1 & Scope 2 carbon neutrality and green commute",
    iconName: "Zap",
    link: "/#enquiry",
    category: "Sustainable",
    features: [
      "Fleet of electric sedans & campus shuttles",
      "Corporate campus charging station deployment",
      "Real-time battery SOC & range monitoring",
      "Monthly verified CO2 savings certification",
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
    id: "ev-fleet",
    category: "EV Green Fleet",
    models: "Tata Tigor EV / Tata Nexon EV / MG ZS EV / BYD e6",
    description: "Zero-tailpipe-emission electric cars for corporate ESG decarbonization goals.",
    deploymentContext: "Corporate ESG programs, intra-city executive commute, campus green transfers",
    passengers: "4 Passengers",
    luggage: "2-3 Bags",
    acType: "Climate Controlled AC",
    fuelType: "100% Electric (Zero Tailpipe CO2)",
    highlights: [
      "Zero tailpipe carbon emissions",
      "Auditable ESG carbon abatement reports",
      "Regenerative smooth electric drive",
      "Fast-charging depot integration",
    ],
  },
  {
    id: "bus-tempo-coaches",
    category: "Bus – Tempo Travellers – Coaches",
    models: "Force Urbania & Tempo Traveller (12 - 26 Seater) / BharatBenz & Volvo Coaches (35 - 55 Seater)",
    description: "High-capacity group transportation for corporate offsites, campus shift commutes, and delegations.",
    deploymentContext: "Group employee shifts, annual offsites, MICE delegates, bulk airport transits",
    passengers: "12 to 55 Passengers",
    luggage: "Dedicated High-Capacity Luggage Bays",
    acType: "Centralized High-Capacity Air Conditioning",
    fuelType: "Clean Diesel / Smart Euro-VI",
    highlights: [
      "Ergonomic pushback reclining seats",
      "AIS-140 GPS & speed governors certified",
      "Experienced commercial heavy-vehicle drivers",
      "PA audio system & individual reading lamps",
    ],
  },
];

export const PLATFORM_STAGES = [
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
    desc: "Our technology platform algorithms match the nearest verified driver and compliant vehicle to maximize on-time reliability.",
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
      "Statutory 5% GST billing clarity",
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
    address: "Serenity, 1176/A, HBR 1st Stage, 4th Block, Bengaluru - 560043",
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
  {
    city: "Pune",
    address: "Magarpatta Cybercity / Hinjawadi IT Park, Pune 411 028",
    phone: "9820630817",
    email: "pune@speedwaysftm.com",
    role: "Automotive, Engineering & Tech Hub Operations",
  },
];

export interface LeaderProfile {
  name: string;
  role: string;
  titleBadge?: string;
  experience?: string;
  about: string;
  coreExpertise: string[];
  pastBrands?: string[];
  image?: string;
}

export const LEADERSHIP_TEAM: LeaderProfile[] = [
  {
    name: "Nikhil Desai",
    role: "CEO",
    titleBadge: "Founder & Chief Executive Officer",
    experience: "14+ Years Leading Speedways",
    image: "/images/leadership/nikhil-desai.png",
    about:
      "The Founder & CEO of Speedways Fleet & Travel Management Pvt. Ltd. is a visionary leader with extensive experience in Corporate Mobility and Transportation Services. Since 2012 Speedways has been instrumental in building a professionally managed, technology-driven and customer-centric organization focused on reliability, service excellence and long-term partnerships. With a strong understanding of fleet operations and corporate travel management, he continues to lead the organization with a progressive vision towards innovation, operational efficiency and sustainable growth across India’s mobility sector.",
    coreExpertise: [
      "Corporate Mobility Vision",
      "Fleet Operations",
      "Corporate Travel Management",
      "Technology & Innovation",
      "Sustainable Growth",
      "Enterprise Partnerships",
    ],
  },
  {
    name: "C K Balram",
    role: "COO",
    titleBadge: "Chief Operating Officer",
    experience: "23 Years Industry Veteran",
    image: "/images/leadership/ck-balram.png",
    pastBrands: ["Avis India (18 Years)", "Orix India", "Carzonrent", "Emirates"],
    about:
      "An accomplished mobility industry professional with 23 years of expertise in corporate car rentals, branch operations, and large-scale transportation management. He has held leadership roles with leading brands including Orix India, Carzonrent, and Avis, and successfully managed Mumbai and Bengaluru operations for Avis for nearly 18 years. He also played a key role in establishing Emirates operations in India and has been recognized with Best Manager awards for operational excellence and business performance.",
    coreExpertise: [
      "Multi-city operations",
      "Revenue growth",
      "Profitability",
      "Service delivery",
      "Operational efficiency",
      "Client retention",
      "Team management",
    ],
  },
  {
    name: "Srinivas Krishna",
    role: "National Head – Sales",
    titleBadge: "National Head – Sales",
    experience: "18 Years Sales Strategist",
    image: "/images/leadership/srinivas-krishna.png",
    pastBrands: ["Avis India", "Premier People Logistic Solutions"],
    about:
      "A dynamic sales and business development professional with 18 years of experience across corporate mobility, car rentals, automotive sales, and enterprise account management. He has a proven track record in driving revenue growth, strategic client acquisition, key account management, contract negotiations, and profitability enhancement across multiple territories. He has successfully managed large corporate portfolios for prominent mobility brands including Avis India and Premier People Logistic Solutions, while strengthening customer retention, utilization, and long-term strategic partnerships with enterprise clients.",
    coreExpertise: [
      "National sales strategy",
      "Corporate acquisitions",
      "Key account management",
      "Pricing strategy",
      "Enterprise relationship management",
      "Sales training",
      "Pipeline development",
      "Business planning",
    ],
  },
  {
    name: "A S Kumaresh",
    role: "Fleet Head – India",
    titleBadge: "Fleet Head – India",
    experience: "25 Years Fleet Maestro",
    image: "/images/leadership/as-kumaresh.png",
    about:
      "A seasoned fleet and transportation professional with 25 years of experience in corporate mobility, nationwide fleet management, operations control, chauffeur management, client servicing, and strategic planning. He leads nationwide operations and fleet management for Speedways across India. He is responsible for strategic planning, branch coordination, resource allocation, operational efficiency, fleet utilization, vendor development, chauffeur management, client escalation handling, and implementation of process-driven transportation operations.",
    coreExpertise: [
      "Fleet governance",
      "Vendor management",
      "Process optimization",
      "Cost control",
      "Operational excellence",
      "Service continuity",
    ],
  },
  {
    name: "Sreejit Nair",
    role: "Head of Operations – Pan India",
    titleBadge: "Head of Operations – Pan India",
    experience: "Operations & SLA Director",
    image: "/images/leadership/sreejit.png",
    about:
      "An experienced operations professional with strong expertise in nationwide transportation operations, corporate mobility management, fleet coordination, client servicing, and process-driven operational execution across multiple locations in India. He oversees pan-India operations with a strong focus on consistent service delivery and execution excellence. He is responsible for branch coordination, operational planning, client management, fleet deployment, vendor coordination, service delivery standards, escalation management, and smooth day-to-day transportation operations across regions.",
    coreExpertise: [
      "Operational planning",
      "Branch coordination",
      "Customer servicing",
      "Fleet deployment",
      "Compliance",
      "Escalation management",
    ],
  },
];

export interface SafetyPillar {
  num?: string;
  title: string;
  subtitle?: string;
  description: string;
  badge?: string;
  iconName?: string;
}

export const SAFETY_COMPLIANCE_PILLARS: SafetyPillar[] = [
  {
    num: "01",
    title: "Chauffeur Verification",
    subtitle: "Police-Verified Chauffeurs",
    description: "Every chauffeur undergoes police verification, identity validation and mandatory background screening before being approved for passenger deployment.",
    badge: "Police-Verified Chauffeurs",
    iconName: "UserCheck",
  },
  {
    num: "02",
    title: "SOS & Emergency Alert",
    subtitle: "In-Vehicle SOS & Panic Button",
    description: "A discreet, easily accessible emergency alert system enables passengers to request immediate assistance and trigger a coordinated response whenever a safety concern arises during the journey.",
    badge: "In-Vehicle SOS & Panic Button",
    iconName: "AlertTriangle",
  },
  {
    num: "03",
    title: "GPS Journey Tracking",
    subtitle: "Live GPS Journey Tracking",
    description: "Real-time GPS tracking provides continuous visibility of vehicle location, route progress and journey status, enabling proactive monitoring and timely intervention throughout every Journey.",
    badge: "Live GPS Journey Tracking",
    iconName: "Navigation",
  },
  {
    num: "04",
    title: "Command Centre",
    subtitle: "24×7 Command Centre Monitoring",
    description: "Our 24×7 Command Centre provides continuous oversight of active journeys, enabling proactive monitoring, rapid intervention and coordinated escalation whenever an operational or safety exception arises.",
    badge: "24×7 Command Centre Monitoring",
    iconName: "Radio",
  },
  {
    num: "05",
    title: "Women Traveller Safety",
    subtitle: "Women Safety Protocol",
    description: "A proactive safety framework for women travellers, combining verified chauffeur deployment, continuous journey visibility and defined escalation protocols. Every alert is treated with priority, enabling prompt intervention and coordinated assistance throughout the journey.",
    badge: "Women Safety Protocol",
    iconName: "ShieldAlert",
  },
  {
    num: "06",
    title: "Preventive Maintenance",
    subtitle: "Preventive Vehicle Maintenance",
    description: "Our fleet is managed through a proactive preventive-maintenance programme, with scheduled inspections, manufacturer-recommended servicing and safety-critical checks designed to identify and address potential issues before deployment. This helps ensure every vehicle is roadworthy, reliable and ready for safe passenger operations.",
    badge: "Preventive Vehicle Maintenance",
    iconName: "Wrench",
  },
  {
    num: "07",
    title: "Statutory & Safety Compliance",
    subtitle: "Statutory Compliance-Driven Operations",
    description: "A structured statutory compliance framework governs every vehicle and chauffeur deployment, covering applicable permits, licences, insurance, fitness and safety requirements. Compliance validity is continuously monitored, with defined controls for renewal, exception management and deployment clearance.",
    badge: "Statutory Compliance-Driven Operations",
    iconName: "FileCheck",
  },
  {
    num: "08",
    title: "Audit Trail",
    subtitle: "Trip & Chauffeur Audit Trail",
    description: "Digital trip records provide visibility into chauffeur allocation, journey details, vehicle movement, and operational events—supporting corporate governance and audits.",
    badge: "Trip & Chauffeur Audit Trail",
    iconName: "History",
  },
  {
    num: "09",
    title: "Emergency Response & Business Continuity",
    subtitle: "24×7 Emergency Management Framework",
    description: "A proactive 24×7 emergency management framework designed to protect passengers, mobilize the right resources quickly and maintain service continuity through unexpected events. From the first alert to final closure, every critical situation follows a defined process of assessment, escalation, intervention, recovery and review.",
    badge: "Emergency Response & Business Continuity",
    iconName: "Siren",
  },
  {
    num: "10",
    title: "Chauffeur Training & Safety Standards",
    subtitle: "Chauffeur Training & Safety Standards",
    description: "Chauffeurs are trained in professional conduct, defensive driving, passenger handling, emergency response, and corporate service standards.",
    badge: "Chauffeur Training & Safety Standards",
    iconName: "Award",
  },
];

export interface EmergencyResponseStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  iconName?: string;
}

export const EMERGENCY_RESPONSE_WORKFLOW: EmergencyResponseStep[] = [
  {
    step: "01",
    title: "24×7 Command & Control",
    tagline: "Centralized oversight for faster, informed decisions.",
    description: "The Command Centre provides continuous visibility of active journeys and critical alerts, enabling the operations team to assess the situation, establish passenger status and activate the appropriate response based on the nature and severity of the event.",
    iconName: "Radio",
  },
  {
    step: "02",
    title: "Immediate Passenger Protection",
    tagline: "Passenger welfare remains the first priority.",
    description: "Every safety alert or unexpected event is treated with priority. The response begins by establishing passenger safety, confirming the vehicle location and determining the assistance required before coordinating the next intervention.",
    iconName: "ShieldCheck",
  },
  {
    step: "03",
    title: "Structured Escalation & Coordination",
    tagline: "The right people are engaged at the right time.",
    description: "A defined escalation matrix connects operations teams with designated client stakeholders and relevant support agencies. Escalation is based on incident severity, passenger impact and the level of assistance required.",
    iconName: "Users",
  },
  {
    step: "04",
    title: "Emergency & On-Ground Assistance",
    tagline: "Coordinated support where the incident occurs.",
    description: "Where required, Speedways coordinates with appropriate medical services, roadside assistance, towing partners and relevant emergency authorities to facilitate timely on-ground intervention and passenger support.",
    iconName: "LifeBuoy",
  },
  {
    step: "05",
    title: "Rapid Recovery & Replacement",
    tagline: "Minimizing disruption without compromising safety.",
    description: "When a vehicle becomes unavailable, recovery and replacement arrangements are initiated at the earliest possible opportunity. Replacement deployment remains subject to vehicle readiness, chauffeur eligibility, location, traffic and operational availability.",
    iconName: "Car",
  },
  {
    step: "06",
    title: "Incident Reporting & Client Communication",
    tagline: "Clear communication. Complete traceability.",
    description: "Reportable incidents are digitally recorded with the relevant trip, vehicle, chauffeur, location, timeline, actions taken and resolution details. Designated enterprise stakeholders are informed in accordance with the agreed client escalation matrix and SLA.",
    iconName: "FileText",
  },
  {
    step: "07",
    title: "Root Cause & Corrective Action",
    tagline: "Every significant incident becomes an opportunity to strengthen the operation.",
    description: "Post-incident reviews assess what occurred, why it occurred, how effectively it was managed and what controls can be strengthened. Corrective and preventive actions are documented, assigned and tracked through closure.",
    iconName: "CheckCircle2",
  },
  {
    step: "08",
    title: "Journey Continuity & Closure",
    tagline: "From incident management to a controlled return to service.",
    description: "Where required, alternative transportation is coordinated to minimize passenger disruption. The incident remains under operational oversight until the passenger is supported, the journey is stabilized and all required records and actions are formally closed.",
    iconName: "Flag",
  },
];

export interface SubscriptionBenefit {
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
  iconName?: string;
}

export const SUBSCRIPTION_BENEFITS: SubscriptionBenefit[] = [
  {
    title: "Lower Total Cost of Mobility",
    subtitle: "Asset-light corporate strategy",
    description: "Reduce the costs and administrative burden associated with vehicle ownership and long-term fleet management.",
    badge: "Cost Optimization",
    iconName: "TrendingDown",
  },
  {
    title: "Flexible Contract Tenures",
    subtitle: "Customized horizon alignment",
    description: "Choose 1, 2, or 3-year plans aligned with your business requirements and workforce needs.",
    badge: "1, 2, or 3-Year Plans",
    iconName: "Calendar",
  },
  {
    title: "Minimal Upfront Investment",
    subtitle: "Working capital preservation",
    description: "Access vehicles with lower initial capital outlay, helping businesses preserve cash flow and working capital.",
    badge: "Cash Flow Protection",
    iconName: "Coins",
  },
  {
    title: "Comprehensive Maintenance",
    subtitle: "Zero surprise upkeep bills",
    description: "Keep your fleet running smoothly with scheduled servicing, routine maintenance, and managed upkeep included in the plan.",
    badge: "100% Upkeep Included",
    iconName: "CheckCircle",
  },
  {
    title: "Modern, Well-Maintained Fleet",
    subtitle: "Periodic refresh cycles",
    description: "Access the latest vehicle models and upgrade your fleet periodically to maintain comfort, safety, and a professional corporate experience.",
    badge: "Latest Models",
    iconName: "Car",
  },
  {
    title: "24×7 Operational Support",
    subtitle: "Direct command center backing",
    description: "Dedicated assistance throughout the contract, backed by Speedways’ 24×7 command centre for support, coordination, and issue resolution.",
    badge: "Round-the-Clock Desk",
    iconName: "Headphones",
  },
];

