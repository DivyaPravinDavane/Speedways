"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import {
  MapPin,
  Search,
  CheckCircle2,
  Compass,
  ChevronDown,
} from "lucide-react";

export interface CityHubLocation {
  id: string;
  city: string;
  state: string;
  region: "West" | "North" | "South" | "East" | "Central";
  type: "Direct Metro Hub" | "Regional Tech Hub" | "Strategic Network Center";
  isDirectMetro: boolean;
  top: string; // % on SVG map
  left: string; // % on SVG map
  leadTime: string;
  fleetStrength: string;
  address: string;
  phone: string;
  highlights: string[];
  vehiclesAvailable: string[];
}

export const MAJOR_LOCATIONS: CityHubLocation[] = [
  // --- NORTH INDIA (11 Cities) ---
  {
    id: "delhi-ncr",
    city: "Delhi NCR",
    state: "Delhi / NCR",
    region: "North",
    type: "Direct Metro Hub",
    isDirectMetro: true,
    top: "30%",
    left: "37%",
    leadTime: "2 Hours",
    fleetStrength: "240+ Vehicles",
    address: "DLF Cyber City, Sector 24, Gurugram / Noida IT Corridor, Delhi NCR 122 002",
    phone: "9820630817",
    highlights: [
      "North India Regional Operations Command Desk",
      "IGI Airport T1, T2 & T3 24×7 Paging Desks",
      "Diplomatic Delegations & Fortune 500 Executive Mobility",
    ],
    vehiclesAvailable: ["Sedans", "Innova Hycross", "Mercedes / BMW", "Volvo Coaches"],
  },
  {
    id: "chandigarh",
    city: "Chandigarh",
    state: "Punjab / Haryana",
    region: "North",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "24%",
    left: "35%",
    leadTime: "3-4 Hours",
    fleetStrength: "50+ Vehicles",
    address: "IT Park, Kishangarh / Mohali Phase 8, Chandigarh 160 101",
    phone: "9820630817",
    highlights: [
      "Tricity (Chandigarh-Mohali-Panchkula) Enterprise Transit",
      "Shaheed Bhagat Singh Airport Transfers",
      "Himachal & Punjab Industrial Belt Transit",
    ],
    vehiclesAvailable: ["Executive Sedans", "Innova Crysta", "Tempo Travellers"],
  },
  {
    id: "jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    region: "North",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "37%",
    left: "33%",
    leadTime: "3-4 Hours",
    fleetStrength: "45+ Vehicles",
    address: "Tonk Road & Sitapura Industrial Area, Jaipur 302 022",
    phone: "9820630817",
    highlights: [
      "MICE Delegations & Heritage Corporate Conclaves",
      "Sitapura & Mahindra World City Industrial Transit",
      "Jaipur International Airport Meet & Greet",
    ],
    vehiclesAvailable: ["Sedans", "Innova Crysta", "Luxury SUVs"],
  },
  {
    id: "lucknow",
    city: "Lucknow",
    state: "Uttar Pradesh",
    region: "North",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "37%",
    left: "52%",
    leadTime: "3-4 Hours",
    fleetStrength: "35+ Vehicles",
    address: "Vibhuti Khand, Gomti Nagar, Lucknow 226 010",
    phone: "9820630817",
    highlights: [
      "UP Capital Administration & Corporate Movement",
      "Chaudhary Charan Singh Airport Transfers",
      "IT City & Banking Institutional Fleets",
    ],
    vehiclesAvailable: ["Sedans", "Innova Crysta"],
  },
  {
    id: "dehradun",
    city: "Dehradun",
    state: "Uttarakhand",
    region: "North",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "27%",
    left: "40%",
    leadTime: "3-4 Hours",
    fleetStrength: "30+ Vehicles",
    address: "Rajpur Road / SIDCUL Industrial Area, Dehradun 248 001",
    phone: "9820630817",
    highlights: [
      "Jolly Grant Airport VIP Paging Desk",
      "Pharma SEZ & Institutional Government Mobility",
      "Mussoorie & Rishikesh Corporate Retreats",
    ],
    vehiclesAvailable: ["Innova Crysta", "4x4 SUVs", "Tempo Travellers"],
  },
  {
    id: "amritsar",
    city: "Amritsar",
    state: "Punjab",
    region: "North",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "22%",
    left: "32%",
    leadTime: "3-4 Hours",
    fleetStrength: "30+ Vehicles",
    address: "Mall Road / Sri Guru Ram Dass Jee Airport, Amritsar 143 001",
    phone: "9820630817",
    highlights: [
      "International Airport Flight-Synchronized Transfers",
      "Commercial Delegations & Cross-Border Logistics Support",
    ],
    vehiclesAvailable: ["Sedans", "Innova Crysta"],
  },
  {
    id: "ludhiana",
    city: "Ludhiana",
    state: "Punjab",
    region: "North",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "25%",
    left: "33%",
    leadTime: "3-4 Hours",
    fleetStrength: "35+ Vehicles",
    address: "Ferozepur Road / Industrial Area A, Ludhiana 141 001",
    phone: "9820630817",
    highlights: [
      "Textile, Engineering & Industrial Delegation Movement",
      "Fast-Track Chandigarh & Delhi Intercity Dispatches",
    ],
    vehiclesAvailable: ["Sedans", "Innova Crysta"],
  },
  {
    id: "jodhpur",
    city: "Jodhpur",
    state: "Rajasthan",
    region: "North",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "39%",
    left: "28%",
    leadTime: "3-4 Hours",
    fleetStrength: "25+ Vehicles",
    address: "Residency Road & Boranada SEZ, Jodhpur 342 012",
    phone: "9820630817",
    highlights: [
      "Sun City Corporate Delegations & MICE Movements",
      "Jodhpur Civil Airport Meet & Greet",
      "Handicrafts SEZ & Industrial Transit",
    ],
    vehiclesAvailable: ["Sedans", "Innova Crysta", "Luxury SUVs"],
  },
  {
    id: "udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    region: "North",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "44%",
    left: "28%",
    leadTime: "3-4 Hours",
    fleetStrength: "25+ Vehicles",
    address: "City Palace Road / Maharana Pratap Airport, Udaipur 313 001",
    phone: "9820630817",
    highlights: [
      "Global Leadership Summits & Luxury MICE Mobility",
      "Airport VIP Concierge & Mineral Industrial Transits",
    ],
    vehiclesAvailable: ["Luxury Sedans", "Innova Hycross", "Tempo Travellers"],
  },
  {
    id: "jammu",
    city: "Jammu",
    state: "Jammu & Kashmir",
    region: "North",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "18%",
    left: "32%",
    leadTime: "3-4 Hours",
    fleetStrength: "25+ Vehicles",
    address: "Gandhi Nagar / Bari Brahmana Industrial Complex, Jammu 180 004",
    phone: "9820630817",
    highlights: [
      "Bari Brahmana Industrial Transit & Corporate Transfers",
      "Jammu Airport VIP Chauffeur Meet & Greet",
    ],
    vehiclesAvailable: ["Innova Crysta", "4x4 SUVs", "Tempo Travellers"],
  },
  {
    id: "srinagar",
    city: "Srinagar",
    state: "Jammu & Kashmir",
    region: "North",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "14%",
    left: "32%",
    leadTime: "3-4 Hours",
    fleetStrength: "25+ Vehicles",
    address: "Rajbagh Commercial Hub / Sheikh ul-Alam Airport, Srinagar 190 008",
    phone: "9820630817",
    highlights: [
      "Institutional Delegations & Premium Corporate Retreats",
      "Srinagar International Airport Flight-Synced Transfers",
    ],
    vehiclesAvailable: ["4x4 Premium SUVs", "Innova Hycross", "Luxury Tempo Travellers"],
  },

  // --- SOUTH INDIA (11 Cities) ---
  {
    id: "bangalore",
    city: "Bengaluru",
    state: "Karnataka",
    region: "South",
    type: "Direct Metro Hub",
    isDirectMetro: true,
    top: "79%",
    left: "38%",
    leadTime: "2 Hours",
    fleetStrength: "220+ Vehicles",
    address: "Serenity, 1176/A, HBR 1st Stage, 4th Block, Bengaluru - 560043",
    phone: "9820630817",
    highlights: [
      "South India Regional Operations Hub",
      "KIA Kempegowda Airport VIP Meet & Greet",
      "Electronic City & Whitefield Campus Commutes",
    ],
    vehiclesAvailable: ["Sedans", "EV Green Fleet", "Innova Hycross", "Volvo Coaches"],
  },
  {
    id: "chennai",
    city: "Chennai",
    state: "Tamil Nadu",
    region: "South",
    type: "Direct Metro Hub",
    isDirectMetro: true,
    top: "78%",
    left: "48%",
    leadTime: "2 Hours",
    fleetStrength: "140+ Vehicles",
    address: "Old Mahabalipuram Road (OMR), Perungudi, Chennai 600 096",
    phone: "9820630817",
    highlights: [
      "OMR IT Highway & Guindy Industrial Hub Desk",
      "Sriperumbudur & Oragadam Automotive Plant Commutes",
      "Chennai International Airport Zero-Wait Paging",
    ],
    vehiclesAvailable: ["Sedans", "MUVs", "Tempo Travellers", "Luxury Fleet"],
  },
  {
    id: "hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    region: "South",
    type: "Direct Metro Hub",
    isDirectMetro: true,
    top: "64%",
    left: "44%",
    leadTime: "2 Hours",
    fleetStrength: "160+ Vehicles",
    address: "HITEC City Phase 2, Madhapur, Hyderabad 500 081",
    phone: "9820630817",
    highlights: [
      "HITEC City & Financial District 24×7 Operations",
      "RGIA Shamshabad Live Flight Tracked Dispatches",
      "Pharma & IT Corporate Dedicated Fleets",
    ],
    vehiclesAvailable: ["Sedans", "Innova Crysta", "Electric Cabs", "Buses"],
  },
  {
    id: "kochi",
    city: "Kochi",
    state: "Kerala",
    region: "South",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "88%",
    left: "35%",
    leadTime: "3-4 Hours",
    fleetStrength: "40+ Vehicles",
    address: "Infopark Phase 1, Kakkanad, Kochi 682 042",
    phone: "9820630817",
    highlights: [
      "Infopark & SmartCity IT Employee Transit",
      "Cochin International Airport Terminal Desks",
    ],
    vehiclesAvailable: ["Sedans", "Innova Crysta", "Tempo Travellers"],
  },
  {
    id: "coimbatore",
    city: "Coimbatore",
    state: "Tamil Nadu",
    region: "South",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "83%",
    left: "40%",
    leadTime: "3-4 Hours",
    fleetStrength: "45+ Vehicles",
    address: "Avinashi Road & TIDEL Park Tech Corridor, Coimbatore 641 014",
    phone: "9820630817",
    highlights: [
      "TIDEL Park IT & Textile Engineering Industrial Transit",
      "Coimbatore International Airport Terminal Meet & Greet",
    ],
    vehiclesAvailable: ["Sedans", "Innova Crysta", "Tempo Travellers"],
  },
  {
    id: "mysuru",
    city: "Mysuru",
    state: "Karnataka",
    region: "South",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "81%",
    left: "36%",
    leadTime: "3-4 Hours",
    fleetStrength: "35+ Vehicles",
    address: "Hebbal Industrial Area / Infosys Campus Corridor, Mysuru 570 016",
    phone: "9820630817",
    highlights: [
      "Bengaluru-Mysuru Expressway Rapid Shuttle Commutes",
      "Tech Campus Intercity Mobility",
    ],
    vehiclesAvailable: ["Sedans", "Innova Crysta"],
  },
  {
    id: "vijayawada",
    city: "Vijayawada",
    state: "Andhra Pradesh",
    region: "South",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "66%",
    left: "50%",
    leadTime: "3-4 Hours",
    fleetStrength: "30+ Vehicles",
    address: "Benz Circle & Amaravati Capital Highway, Vijayawada 520 010",
    phone: "9820630817",
    highlights: [
      "AP State Capital Administration & SEZ Transportation",
      "Gannavaram Airport Flight-Tracked Transfers",
    ],
    vehiclesAvailable: ["Sedans", "Innova Crysta"],
  },
  {
    id: "visakhapatnam",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    region: "South",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "62%",
    left: "56%",
    leadTime: "3-4 Hours",
    fleetStrength: "40+ Vehicles",
    address: "Rushikonda IT SEZ & Port Industrial Corridor, Vizag 530 045",
    phone: "9820630817",
    highlights: [
      "Port, Steel & Offshore Energy Institutional Mobility",
      "Visakhapatnam Airport VIP Transfers",
    ],
    vehiclesAvailable: ["Sedans", "Innova Crysta", "Coaches"],
  },
  {
    id: "mangalore",
    city: "Mangalore",
    state: "Karnataka",
    region: "South",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "77%",
    left: "34%",
    leadTime: "3-4 Hours",
    fleetStrength: "30+ Vehicles",
    address: "Kavoor / Mangalore SEZ & Port Highway, Mangaluru 575 015",
    phone: "9820630817",
    highlights: [
      "Petrochemical SEZ & Coastal Commercial Corridors",
      "MIA Bajpe Airport Meet & Greet",
    ],
    vehiclesAvailable: ["Sedans", "Innova Crysta"],
  },
  {
    id: "hubballi",
    city: "Hubballi",
    state: "Karnataka",
    region: "South",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "72%",
    left: "34%",
    leadTime: "3-4 Hours",
    fleetStrength: "25+ Vehicles",
    address: "Gokul Road / Hubballi Airport Corridor, Hubballi 580 030",
    phone: "9820630817",
    highlights: [
      "North Karnataka Commercial & Engineering Belt",
      "Hubballi Airport Domestic Flight Coordination",
    ],
    vehiclesAvailable: ["Sedans", "Innova Crysta"],
  },
  {
    id: "madurai",
    city: "Madurai",
    state: "Tamil Nadu",
    region: "South",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "86%",
    left: "41%",
    leadTime: "3-4 Hours",
    fleetStrength: "25+ Vehicles",
    address: "KK Nagar & Ring Road Industrial Corridor, Madurai 625 020",
    phone: "9820630817",
    highlights: [
      "Automotive Ancillary & Health Industry Transport",
      "Madurai International Airport Paging Services",
    ],
    vehiclesAvailable: ["Sedans", "Innova Crysta"],
  },

  // --- EAST INDIA (12 Cities) ---
  {
    id: "kolkata",
    city: "Kolkata",
    state: "West Bengal",
    region: "East",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "50%",
    left: "71%",
    leadTime: "3-4 Hours",
    fleetStrength: "70+ Vehicles",
    address: "Sector V, Salt Lake City & New Town, Kolkata 700 091",
    phone: "9820630817",
    highlights: [
      "East India Strategic Corporate Desk",
      "NSCBIA Airport Live Tracked Arrivals",
      "Salt Lake Sector V IT Hub & Central Kolkata Transit",
    ],
    vehiclesAvailable: ["Sedans", "MUVs", "Volvo Coaches"],
  },
  {
    id: "bhubaneswar",
    city: "Bhubaneswar",
    state: "Odisha",
    region: "East",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "57%",
    left: "67%",
    leadTime: "3-4 Hours",
    fleetStrength: "30+ Vehicles",
    address: "Infocity / Chandaka Industrial Estate, Bhubaneswar 751 024",
    phone: "9820630817",
    highlights: [
      "Mining, Steel & IT Corridor Transportation",
      "Biju Patnaik International Airport Meet & Greet",
    ],
    vehiclesAvailable: ["Sedans", "Innova Crysta", "Buses"],
  },
  {
    id: "guwahati",
    city: "Guwahati",
    state: "Assam",
    region: "East",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "39%",
    left: "82%",
    leadTime: "3-4 Hours",
    fleetStrength: "30+ Vehicles",
    address: "GS Road Commercial Corridor & Dispur, Guwahati 781 005",
    phone: "9820630817",
    highlights: [
      "North-East Regional Enterprise Headquarters Gateway",
      "Lokpriya Gopinath Bordoloi Airport Transfers",
    ],
    vehiclesAvailable: ["Innova Crysta", "4x4 SUVs", "Tempo Travellers"],
  },
  {
    id: "ranchi",
    city: "Ranchi",
    state: "Jharkhand",
    region: "East",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "47%",
    left: "63%",
    leadTime: "3-4 Hours",
    fleetStrength: "30+ Vehicles",
    address: "Main Road / Namkum Industrial Corridor, Ranchi 834 001",
    phone: "9820630817",
    highlights: [
      "Mining, Steel & Institutional Government Movement",
      "Birsa Munda Airport Terminal Transfers",
    ],
    vehiclesAvailable: ["Sedans", "Innova Crysta"],
  },
  {
    id: "patna",
    city: "Patna",
    state: "Bihar",
    region: "East",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "42%",
    left: "62%",
    leadTime: "3-4 Hours",
    fleetStrength: "35+ Vehicles",
    address: "Bailey Road & Exhibition Road Commercial Corridor, Patna 800 001",
    phone: "9820630817",
    highlights: [
      "Government Institutional Delegations & Corporate BFSI Transit",
      "Jay Prakash Narayan International Airport Desk",
    ],
    vehiclesAvailable: ["Sedans", "Innova Crysta"],
  },
  {
    id: "jamshedpur",
    city: "Jamshedpur",
    state: "Jharkhand",
    region: "East",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "49%",
    left: "65%",
    leadTime: "3-4 Hours",
    fleetStrength: "35+ Vehicles",
    address: "Bistupur Commercial Corridor & Tata Steel Plant Hub, Jamshedpur 831 001",
    phone: "9820630817",
    highlights: [
      "Tata Industrial Belt Dedicated Executive Chauffeur Pool",
      "Ranchi / Kolkata Intercity Highway Transit",
    ],
    vehiclesAvailable: ["Sedans", "Innova Crysta"],
  },
  {
    id: "siliguri",
    city: "Siliguri",
    state: "West Bengal",
    region: "East",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "37%",
    left: "74%",
    leadTime: "3-4 Hours",
    fleetStrength: "25+ Vehicles",
    address: "Sevoke Road / Bagdogra Airport Corridor, Siliguri 734 001",
    phone: "9820630817",
    highlights: [
      "Bagdogra International Airport Paging & Tea Estate Movements",
      "Sikkim & North Bengal Intercity Transit Hub",
    ],
    vehiclesAvailable: ["Innova Crysta", "4x4 SUVs", "Tempo Travellers"],
  },
  {
    id: "durgapur",
    city: "Durgapur",
    state: "West Bengal",
    region: "East",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "48%",
    left: "69%",
    leadTime: "3-4 Hours",
    fleetStrength: "25+ Vehicles",
    address: "City Centre / Steel Plant Industrial Corridor, Durgapur 713 216",
    phone: "9820630817",
    highlights: [
      "Asansol-Durgapur Steel & Industrial Belt Fleets",
      "Kazi Nazrul Islam Airport (Andal) Flight Coordination",
    ],
    vehiclesAvailable: ["Sedans", "Innova Crysta"],
  },
  {
    id: "cuttack",
    city: "Cuttack",
    state: "Odisha",
    region: "East",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "56%",
    left: "68%",
    leadTime: "3-4 Hours",
    fleetStrength: "25+ Vehicles",
    address: "Choudwar Industrial SEZ & Link Road, Cuttack 753 012",
    phone: "9820630817",
    highlights: [
      "Twin City (Bhubaneswar-Cuttack) Executive Movement",
      "High Court & Government Administration Transit",
    ],
    vehiclesAvailable: ["Sedans", "Innova Crysta"],
  },
  {
    id: "agartala",
    city: "Agartala",
    state: "Tripura",
    region: "East",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "45%",
    left: "79%",
    leadTime: "3-4 Hours",
    fleetStrength: "20+ Vehicles",
    address: "Airport Road / Secretariat Complex, Agartala 799 009",
    phone: "9820630817",
    highlights: [
      "Maharaja Bir Bikram Airport VIP Meet & Greet",
      "North-East Border Corridor Corporate Transportation",
    ],
    vehiclesAvailable: ["Innova Crysta", "Sedans"],
  },
  {
    id: "shillong",
    city: "Shillong",
    state: "Meghalaya",
    region: "East",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "41%",
    left: "81%",
    leadTime: "3-4 Hours",
    fleetStrength: "20+ Vehicles",
    address: "Police Bazar / Umroi Airport Corridor, Shillong 793 001",
    phone: "9820630817",
    highlights: [
      "Institutional & MICE Delegations in Meghalaya",
      "Guwahati-Shillong Scenic Highway Transfers",
    ],
    vehiclesAvailable: ["Innova Crysta", "Premium SUVs"],
  },
  {
    id: "raipur",
    city: "Raipur",
    state: "Chhattisgarh",
    region: "East",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "54%",
    left: "53%",
    leadTime: "3-4 Hours",
    fleetStrength: "30+ Vehicles",
    address: "VIP Road / Naya Raipur Corporate Zone, Raipur 492 001",
    phone: "9820630817",
    highlights: [
      "Naya Raipur Smart City & Mineral Energy Corridor",
      "Swami Vivekananda Airport VIP Meet & Greet",
    ],
    vehiclesAvailable: ["Sedans", "Innova Crysta"],
  },

  // --- WEST INDIA (11 Cities) ---
  {
    id: "mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    region: "West",
    type: "Direct Metro Hub",
    isDirectMetro: true,
    top: "58%",
    left: "26%",
    leadTime: "2 Hours",
    fleetStrength: "320+ Vehicles",
    address: "Speedways House, Andheri East / BKC Central Corridor, Mumbai 400 069",
    phone: "9820630817",
    highlights: [
      "National Head Office & Central 24×7 Command Centre",
      "CSMIA Terminal 1 & 2 Dedicated Airport Paging Desk",
      "BKC & Lower Parel CXO Executive Chauffeur Pool",
    ],
    vehiclesAvailable: ["Sedans", "Innova Hycross", "Luxury SUVs", "Bus & Coaches"],
  },
  {
    id: "pune",
    city: "Pune",
    state: "Maharashtra",
    region: "West",
    type: "Direct Metro Hub",
    isDirectMetro: true,
    top: "62%",
    left: "30%",
    leadTime: "2 Hours",
    fleetStrength: "110+ Vehicles",
    address: "Magarpatta Cybercity / Hinjawadi IT Park Phase 1, Pune 411 028",
    phone: "9820630817",
    highlights: [
      "Hinjawadi IT Corridor & Chakan Auto Belt Operations",
      "Mumbai–Pune Expressway Rapid Transit Service",
      "Corporate Shift Commutes & Factory Audits",
    ],
    vehiclesAvailable: ["Executive Sedans", "Innova Crysta", "Tempo Travellers"],
  },
  {
    id: "ahmedabad",
    city: "Ahmedabad",
    state: "Gujarat",
    region: "West",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "48%",
    left: "24%",
    leadTime: "3-4 Hours",
    fleetStrength: "65+ Vehicles",
    address: "SG Highway & GIFT City Corporate Corridor, Ahmedabad 380 054",
    phone: "9820630817",
    highlights: [
      "GIFT City Financial Center & Sanand Industrial Transit",
      "Sardar Vallabhbhai Patel Airport Chauffeur Desk",
    ],
    vehiclesAvailable: ["Executive Sedans", "Innova Hycross", "Coaches"],
  },
  {
    id: "vadodara",
    city: "Vadodara",
    state: "Gujarat",
    region: "West",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "50%",
    left: "27%",
    leadTime: "3-4 Hours",
    fleetStrength: "45+ Vehicles",
    address: "Alkapuri / Makarpura GIDC Industrial Corridor, Vadodara 390 007",
    phone: "9820630817",
    highlights: [
      "Chemical, Power & Heavy Engineering Corridors",
      "Vadodara Airport Direct Chauffeur Pickups",
    ],
    vehiclesAvailable: ["Sedans", "Innova Crysta", "Buses"],
  },
  {
    id: "surat",
    city: "Surat",
    state: "Gujarat",
    region: "West",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "52%",
    left: "26%",
    leadTime: "3-4 Hours",
    fleetStrength: "50+ Vehicles",
    address: "Surat Diamond Bourse & Hazira Port Corridor, Surat 395 007",
    phone: "9820630817",
    highlights: [
      "Surat Diamond Bourse (SDB) Dedicated Transit Desk",
      "Hazira Petrochemical & Heavy Engineering SEZ Fleets",
    ],
    vehiclesAvailable: ["Executive Sedans", "Innova Hycross", "MUVs"],
  },
  {
    id: "rajkot",
    city: "Rajkot",
    state: "Gujarat",
    region: "West",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "47%",
    left: "20%",
    leadTime: "3-4 Hours",
    fleetStrength: "30+ Vehicles",
    address: "150 Feet Ring Road / Hirasar Airport Corridor, Rajkot 360 005",
    phone: "9820630817",
    highlights: [
      "Engineering, Forging & Casting SEZ Transit",
      "New Hirasar Green Field Airport Transfers",
    ],
    vehiclesAvailable: ["Sedans", "Innova Crysta"],
  },
  {
    id: "nashik",
    city: "Nashik",
    state: "Maharashtra",
    region: "West",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "56%",
    left: "29%",
    leadTime: "3-4 Hours",
    fleetStrength: "35+ Vehicles",
    address: "Ambad & Satpur MIDC Auto Belt, Nashik 422 010",
    phone: "9820630817",
    highlights: [
      "Auto Manufacturing Corridors & Mumbai Transit Corridor",
      "Ozar Airport VIP Meet & Greet",
    ],
    vehiclesAvailable: ["Sedans", "Innova Crysta"],
  },
  {
    id: "nagpur",
    city: "Nagpur",
    state: "Maharashtra",
    region: "West",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "53%",
    left: "44%",
    leadTime: "3-4 Hours",
    fleetStrength: "40+ Vehicles",
    address: "MIHAN SEZ / Wardha Road Logistics Corridor, Nagpur 440 015",
    phone: "9820630817",
    highlights: [
      "Central India Logistics Hub & MIHAN Aerospace SEZ",
      "Dr. Babasaheb Ambedkar International Airport Desks",
    ],
    vehiclesAvailable: ["Sedans", "Innova Crysta", "Tempo Travellers"],
  },
  {
    id: "goa",
    city: "Goa",
    state: "Goa",
    region: "West",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "70%",
    left: "27%",
    leadTime: "3-4 Hours",
    fleetStrength: "35+ Vehicles",
    address: "Dabolim & Mopa Airport Corridors / Panaji, Goa 403 001",
    phone: "9820630817",
    highlights: [
      "MICE Conventions & Annual Corporate Retreats",
      "Mopa (GOX) & Dabolim (GOI) Airport Transfers",
    ],
    vehiclesAvailable: ["Innova Crysta", "Luxury Sedans", "Tempo Travellers"],
  },
  {
    id: "indore",
    city: "Indore",
    state: "Madhya Pradesh",
    region: "West",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "50%",
    left: "35%",
    leadTime: "3-4 Hours",
    fleetStrength: "40+ Vehicles",
    address: "Super Corridor & Pithampur Industrial SEZ, Indore 452 010",
    phone: "9820630817",
    highlights: [
      "Central India Commercial & Pharma SEZ Corridor",
      "Devi Ahilya Bai Holkar Airport Transfers",
    ],
    vehiclesAvailable: ["Sedans", "Innova Crysta", "Staff Buses"],
  },
  {
    id: "bhopal",
    city: "Bhopal",
    state: "Madhya Pradesh",
    region: "West",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "48%",
    left: "39%",
    leadTime: "3-4 Hours",
    fleetStrength: "30+ Vehicles",
    address: "MP Nagar Zone 1 & Mandideep Industrial Area, Bhopal 462 011",
    phone: "9820630817",
    highlights: [
      "State Secretariat Administration & Institutional Movement",
      "Raja Bhoj Airport Terminal Transfers",
    ],
    vehiclesAvailable: ["Sedans", "Innova Crysta"],
  },
];

export default function IndiaNetworkMap() {
  const [selectedHubId, setSelectedHubId] = useState<string>("mumbai");
  const [regionFilter, setRegionFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownContainerRef = useRef<HTMLDivElement>(null);

  // Click outside to close city dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownContainerRef.current &&
        !dropdownContainerRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getCitiesByCategory = (cat: string) => {
    if (cat === "All") return MAJOR_LOCATIONS;
    if (cat === "Direct Metros") return MAJOR_LOCATIONS.filter((l) => l.isDirectMetro);
    if (cat === "North India" || cat === "North") return MAJOR_LOCATIONS.filter((l) => l.region === "North");
    if (cat === "South India" || cat === "South") return MAJOR_LOCATIONS.filter((l) => l.region === "South");
    if (cat === "West India" || cat === "West") return MAJOR_LOCATIONS.filter((l) => l.region === "West");
    if (cat === "East India" || cat === "East") return MAJOR_LOCATIONS.filter((l) => l.region === "East");
    return MAJOR_LOCATIONS;
  };

  const filteredLocations = useMemo(() => {
    return MAJOR_LOCATIONS.filter((loc) => {
      let matchesRegion = true;
      if (regionFilter === "All") {
        matchesRegion = true;
      } else if (regionFilter === "Direct Metros") {
        matchesRegion = loc.isDirectMetro;
      } else if (regionFilter === "North India" || regionFilter === "North") {
        matchesRegion = loc.region === "North";
      } else if (regionFilter === "South India" || regionFilter === "South") {
        matchesRegion = loc.region === "South";
      } else if (regionFilter === "West India" || regionFilter === "West") {
        matchesRegion = loc.region === "West";
      } else if (regionFilter === "East India" || regionFilter === "East") {
        matchesRegion = loc.region === "East";
      }

      const matchesSearch =
        searchQuery.trim() === "" ||
        loc.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.state.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesRegion && matchesSearch;
    });
  }, [regionFilter, searchQuery]);

  const activeHub = useMemo(() => {
    return (
      MAJOR_LOCATIONS.find((l) => l.id === selectedHubId) || MAJOR_LOCATIONS[0]
    );
  }, [selectedHubId]);

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-green-100/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 -right-32 w-96 h-96 rounded-full bg-emerald-100/50 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-green-700 shadow-2xs mb-4">
            <Compass className="w-3.5 h-3.5 text-[#48B83D]" />
            Pan-India Footprint &amp; Operations
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            185+ Cities Nationwide,{" "}
            <span className="bg-gradient-to-r from-[#48B83D] to-emerald-600 bg-clip-text text-transparent">
              One Unified Standard
            </span>
          </h2>
        </div>

        {/* Filter Pills with Anchored City Dropdowns */}
        <div
          ref={dropdownContainerRef}
          className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-100 relative"
        >
          <div className="flex flex-wrap items-center gap-2">
            {["All", "Direct Metros", "North India", "South India", "West India", "East India"].map((cat) => {
              const categoryCities = getCitiesByCategory(cat);
              const isOpen = openDropdown === cat;
              const isActive = regionFilter === cat;

              return (
                <div key={cat} className="relative">
                  <button
                    type="button"
                    onClick={() => {
                      setRegionFilter(cat);
                      setOpenDropdown((prev) => (prev === cat ? null : cat));
                    }}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#48B83D] text-white shadow-sm ring-2 ring-green-600/20"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    <span>{cat === "Direct Metros" ? "★ 6 Direct Metros" : cat}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu directly below this direction */}
                  {isOpen && (
                    <div className="absolute left-0 top-full mt-2 w-72 sm:w-80 max-h-84 overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                      <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 flex items-center justify-between">
                        <span>
                          {cat === "Direct Metros"
                            ? "6 Direct Metro Hubs"
                            : cat === "All"
                            ? "All Network Cities"
                            : `${cat} Cities`}
                        </span>
                        <span className="text-[10px] text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full font-bold">
                          {categoryCities.length} Cities
                        </span>
                      </div>

                      <div className="py-1 space-y-0.5 max-h-64 overflow-y-auto divide-y divide-slate-50">
                        {categoryCities.map((city) => {
                          const isSelected = selectedHubId === city.id;

                          return (
                            <button
                              key={city.id}
                              type="button"
                              onClick={() => {
                                setSelectedHubId(city.id);
                                setRegionFilter(cat);
                                setOpenDropdown(null);
                              }}
                              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs transition-colors cursor-pointer group ${
                                isSelected
                                  ? "bg-green-50 text-green-900 font-bold border border-green-200"
                                  : "text-slate-700 hover:bg-slate-50"
                              }`}
                            >
                              <div className="flex items-center gap-2.5">
                                <MapPin
                                  className={`w-3.5 h-3.5 shrink-0 ${
                                    isSelected
                                      ? "text-green-600"
                                      : "text-slate-400 group-hover:text-green-600"
                                  }`}
                                />
                                <div>
                                  <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                                    <span>{city.city}</span>
                                    {isSelected && (
                                      <CheckCircle2 className="w-3 h-3 text-green-600 shrink-0" />
                                    )}
                                  </div>
                                  <div className="text-[10px] text-slate-400 font-normal">
                                    {city.state}
                                  </div>
                                </div>
                              </div>

                              <div className="text-right shrink-0">
                                {city.isDirectMetro ? (
                                  <span className="text-[9.5px] font-bold bg-green-100 text-green-800 px-1.5 py-0.5 rounded border border-green-200">
                                    Direct Hub
                                  </span>
                                ) : (
                                  <span className="text-[10px] text-slate-400 font-medium">
                                    {city.fleetStrength}
                                  </span>
                                )}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search major cities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 bg-slate-50 focus:bg-white focus:outline-hidden focus:border-green-500 transition-colors"
            />
          </div>
        </div>

        {/* Selected Hub Live Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 p-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="text-[10.5px] font-bold uppercase tracking-wider text-slate-400">
              Active City:
            </span>
            <span className="font-extrabold text-slate-900 flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              {activeHub.city} ({activeHub.state})
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-green-700 font-bold">{activeHub.type}</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-500">
            <span>
              Guaranteed SLA: <strong className="text-slate-800">{activeHub.leadTime}</strong>
            </span>
            <span className="text-slate-300">|</span>
            <span>
              Fleet: <strong className="text-green-700">{activeHub.fleetStrength}</strong>
            </span>
          </div>
        </div>

        {/* Interactive India Map Visual Container */}
        <div className="w-full bg-slate-900 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl border border-slate-800 flex flex-col justify-between min-h-[580px] sm:min-h-[640px]">
            {/* Dark Map Grid & Telemetry Overlay */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(#48B83D 1px, transparent 1px), linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)",
                backgroundSize: "24px 24px, 48px 48px, 48px 48px",
              }}
            />

            {/* Top Telemetry Header inside Map */}
            <div className="relative z-10 flex items-center justify-between border-b border-slate-800/80 pb-4 mb-2">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                <span className="text-xs font-mono font-bold tracking-wider text-green-400 uppercase">
                  Speedways Fleet Radar • Live Pan-India Grid
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                185+ Cities Connected
              </span>
            </div>

            {/* MAP CANVAS with Stylized Vector India Outline & Beacons */}
            <div className="relative w-full h-[440px] sm:h-[480px] my-auto flex items-center justify-center">
              {/* Detailed Stylized SVG Map Contour of India */}
              <svg
                viewBox="0 0 500 580"
                className="w-full h-full max-h-[460px] object-contain opacity-40 filter drop-shadow-[0_0_15px_rgba(72,184,61,0.15)]"
                fill="none"
              >
                {/* Stylized high-accuracy boundary polygon for India */}
                <path
                  d="M 215 35
                     C 220 25, 230 20, 240 25
                     C 255 35, 270 45, 275 60
                     C 280 75, 265 90, 260 100
                     C 275 110, 290 120, 310 135
                     C 325 145, 345 155, 360 155
                     C 380 155, 410 145, 435 150
                     C 450 155, 465 170, 460 185
                     C 455 200, 435 205, 415 205
                     C 390 205, 375 220, 360 235
                     C 345 250, 335 270, 325 290
                     C 320 310, 310 330, 295 355
                     C 280 380, 260 410, 245 445
                     C 235 470, 225 500, 215 530
                     C 210 545, 205 550, 200 550
                     C 195 550, 190 540, 185 525
                     C 175 490, 160 450, 150 420
                     C 140 390, 130 360, 125 330
                     C 118 295, 110 270, 100 245
                     C 90 220, 85 205, 95 190
                     C 105 175, 120 180, 135 185
                     C 150 190, 165 175, 175 160
                     C 185 145, 190 125, 195 105
                     C 200 85, 205 60, 215 35 Z"
                  fill="#1E293B"
                  stroke="#334155"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />

                {/* Regional Contour Rings */}
                <circle cx="215" cy="180" r="140" stroke="#48B83D" strokeWidth="0.5" strokeDasharray="4 6" opacity="0.3" />
                <circle cx="215" cy="330" r="110" stroke="#48B83D" strokeWidth="0.5" strokeDasharray="3 5" opacity="0.25" />
              </svg>

              {/* BEACONS LAYER */}
              {filteredLocations.map((hub) => {
                const isSelected = selectedHubId === hub.id;
                return (
                  <button
                    key={hub.id}
                    onClick={() => setSelectedHubId(hub.id)}
                    style={{ top: hub.top, left: hub.left }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 cursor-pointer ${
                      isSelected ? "scale-125 z-30" : "scale-100 z-10 hover:scale-115"
                    }`}
                    title={`${hub.city} - ${hub.type}`}
                  >
                    <span className="relative flex h-5 w-5 items-center justify-center">
                      {/* Pulse Ring */}
                      {hub.isDirectMetro ? (
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      ) : (
                        <span className="animate-pulse absolute inline-flex h-3.5 w-3.5 rounded-full bg-emerald-400 opacity-40" />
                      )}

                      {/* Beacon Core Dot */}
                      <span
                        className={`relative inline-flex rounded-full items-center justify-center font-bold text-[9px] shadow-lg transition-all ${
                          isSelected
                            ? "h-5 w-5 bg-white text-slate-950 ring-3 ring-[#48B83D]"
                            : hub.isDirectMetro
                            ? "h-4 w-4 bg-[#48B83D] text-white border-2 border-slate-900"
                            : "h-3 w-3 bg-emerald-400 border border-slate-900"
                        }`}
                      >
                        {hub.isDirectMetro ? "★" : ""}
                      </span>
                    </span>

                    {/* Floating City Label */}
                    <span
                      className={`absolute left-1/2 -translate-x-1/2 -bottom-5 whitespace-nowrap text-[10px] font-bold px-2 py-0.5 rounded-md shadow-md transition-all ${
                        isSelected
                          ? "bg-[#48B83D] text-white font-extrabold scale-105"
                          : "bg-slate-900/90 text-slate-300 border border-slate-700/80 group-hover:text-white group-hover:border-green-400"
                      }`}
                    >
                      {hub.city}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Bottom Legend inside Map */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#48B83D] inline-block" />
                  <strong className="text-white">★ 6 Direct Metros</strong> (Mumbai HO, BLR, HYD, MAA, DEL, Pune)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                  Strategic Hubs
                </span>
              </div>
              <span className="text-slate-500 font-mono">185+ Managed Cities</span>
            </div>
          </div>
      </div>
    </section>
  );
}
