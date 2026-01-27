// Business Configuration for Horizon Palms Family Dentistry
export const businessConfig = {
  // Business Information
  name: "Horizon Palms Family Dentistry",
  legalName: "Linda T Nguyen DDS PA",
  tagline: "Your Family's Smile Destination in Lake Worth",
  
  // Contact Information
  phone: {
    office: "(561) 967-6453",
    afterHours: "(754) 800-1949",
    fax: "(561) 431-5866"
  },
  email: "office@horizonpalmsdental.com",
  
  // Address
  address: {
    street: "5909 S Congress Ave",
    city: "Lake Worth",
    state: "FL",
    zipCode: "33462",
    fullAddress: "5909 S Congress Ave, Lake Worth, FL 33462"
  },
  
  // Office Hours
  hours: {
    monday: { status: "Closed", note: "Front desk open 8AM-12PM for calls" },
    tuesday: { status: "8:00AM - 5:00PM", note: "" },
    wednesday: { status: "8:00AM - 5:00PM", note: "" },
    thursday: { status: "8:00AM - 5:00PM", note: "" },
    friday: { status: "8:00AM - 1:00PM", note: "" },
    saturday: { status: "Closed", note: "" },
    sunday: { status: "Closed", note: "" }
  },
  
  // Services
  services: [
    {
      id: "preventive-care",
      name: "Preventive Care",
      description: "Comprehensive preventive dental care including regular checkups, oral cancer screenings, and personalized treatment plans to maintain optimal oral health.",
      icon: "shield-check"
    },
    {
      id: "routine-cleanings",
      name: "Routine Cleanings",
      description: "Professional dental cleanings to remove plaque, tartar, and surface stains, helping prevent cavities and gum disease while keeping your smile bright.",
      icon: "sparkles"
    },
    {
      id: "periodontal-therapy",
      name: "Periodontal Therapy",
      description: "Specialized treatment for gum disease including deep cleaning, scaling, and root planing to restore and maintain healthy gum tissue.",
      icon: "heart"
    },
    {
      id: "cosmetic-dentistry",
      name: "Cosmetic Dentistry",
      description: "Transform your smile with teeth whitening, veneers, bonding, and other cosmetic procedures designed to enhance your natural beauty.",
      icon: "star"
    },
    {
      id: "restorative-dentistry",
      name: "Restorative Dentistry",
      description: "Repair and restore damaged teeth with fillings, crowns, bridges, and other restorative treatments to improve function and appearance.",
      icon: "wrench-screwdriver"
    },
    {
      id: "extractions",
      name: "Extractions",
      description: "Gentle tooth extraction services when necessary, including wisdom teeth removal, with options for replacement and restoration.",
      icon: "minus-circle"
    },
    {
      id: "root-canals",
      name: "Root Canals",
      description: "Save infected or damaged teeth with comfortable root canal therapy using modern techniques and local anesthesia.",
      icon: "tooth"
    },
    {
      id: "emergency-visits",
      name: "Emergency Visits",
      description: "Same-day emergency dental care for toothaches, broken teeth, and other urgent dental needs. Call our after-hours number for immediate assistance.",
      icon: "exclamation-triangle"
    }
  ],
  
  // Insurance Plans (Major ones accepted)
  insurancePlans: [
    "Delta Dental",
    "Aetna",
    "Cigna",
    "MetLife",
    "Guardian",
    "Humana",
    "UnitedHealthcare",
    "Blue Cross Blue Shield"
  ],
  
  // Payment Options
  paymentOptions: [
    "Cash",
    "Check",
    "Credit Cards (Visa, Mastercard, Amex, Discover)",
    "In-house Payment Plans"
  ],
  
  // Social Media (placeholder - add actual URLs when available)
  socialMedia: {
    facebook: "#",
    instagram: "#",
    google: "#"
  },
  
  // SEO & Local Focus
  localArea: "Lake Worth, FL",
  serviceArea: "West Palm Beach and Palm Beach County",
  keywords: [
    "dentist in Lake Worth",
    "family dentistry West Palm Beach",
    "emergency dentist 33462",
    "Lake Worth dental care",
    "West Palm Beach family dentist"
  ]
};

// Dr. Nguyen's Bio
export const drNguyenBio = {
  name: "Dr. Linda Nguyen",
  title: "General Dentist",
  education: [
    "Dental Degree - Virginia Commonwealth University",
    "AEGD Residency - NYU Langone Health"
  ],
  bio: "Dr. Nguyen is a West Palm Beach local who loves caring for her community with a personalized approach to dentistry. She earned her dental degree from Virginia Commonwealth University and completed her AEGD residency at NYU Langone Health. Dr. Nguyen founded Horizon Palms Family Dentistry to create a welcoming space where patients of all ages can enjoy healthy, confident smiles.",
  specialties: ["Family Dentistry", "Cosmetic Dentistry", "Restorative Dentistry", "Emergency Care"]
};

// Team Members
export const teamMembers = [
  {
    name: "Chantelle",
    title: "Receptionist & Treatment Plan Coordinator",
    bio: "Chantelle is the warm and welcoming face of Horizon Palms Family Dentistry. She takes pride in making every patient feel comfortable and cared for from the moment they arrive. With excellent communication and attention to detail, Chantelle ensures that patients fully understand their treatment options and insurance coverage. Her friendly personality and professionalism helps to create a positive experience."
  },
  {
    name: "Giselle",
    title: "Dental Hygienist",
    bio: "Giselle is a gentle and caring dental hygienist dedicated to helping patients achieve healthy smiles. With her friendly personality and attention to detail, she makes every cleaning visit comfortable and thorough. Giselle enjoys getting to know each patient and takes pride in educating families about simple ways to keep their smiles bright between visits."
  },
  {
    name: "Alma",
    title: "Dental Assistant",
    bio: "Alma is a skilled and compassionate dental assistant who ensures every visit runs smoothly and comfortably. She has a gentle touch and a caring personality that helps patients feel at ease during their appointments. Alma loves being part of the Horizon Palms Family Dentistry team and takes pride in helping create positive dental experiences for patients of all ages."
  }
];

// FAQ Data
export const faqData = [
  {
    category: "Appointments & Scheduling",
    questions: [
      {
        question: "How do I make an appointment?",
        answer: "You can call our office at (561) 967-6453. Chantelle will help you find a time that works best for your schedule."
      },
      {
        question: "Do you accept same-day or emergency visits?",
        answer: "Yes! We do our best to accommodate same-day and emergency appointments. If you're experiencing pain or a dental emergency, please call us right away so we can help you as soon as possible."
      },
      {
        question: "What if I need to cancel or reschedule?",
        answer: "We understand things come up! Please call us at least 24 hours in advance so we can adjust your appointment time."
      }
    ]
  },
  {
    category: "Insurance & Payments",
    questions: [
      {
        question: "Do you accept dental insurance?",
        answer: "Yes, we work with many major insurance plans and are happy to help you maximize your benefits. Our team will verify your coverage and explain your options before treatment."
      },
      {
        question: "What if I don't have insurance?",
        answer: "No problem! We offer flexible payment options and can discuss affordable ways to fit your dental care into your budget."
      }
    ]
  }
];
