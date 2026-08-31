export const projects = [
  {
    id: "ihlm-municipal-offices",
    title: "IHLM Municipal Offices",
    category: "Institutional",
    year: "2019",
    completed: "2019",
    location: "Flagstaff, Eastern Cape",
    client: "Ingquza Hill Local Municipality",
    contractValue: "R58 million",
    excerpt: "Ingquza Hill Local Municipality Offices, Flagstaff.",
    hero: "images/idw/ihlm.jpg",
    gallery: ["images/idw/ihlm.jpg"],
    related: ["mbizana-civic-centre", "ntabankulu-traffic"],
    paragraphs: [
      "Project name: Ingquza Hill Local Municipality Offices. Client: Ingquza Hill Local Municipality. Location: Flagstaff, Eastern Cape.",
      "Completion date: 2019. Contract value: R58 million.",
    ],
  },
  {
    id: "mbizana-civic-centre",
    title: "Mbizana Civic Centre",
    category: "Institutional",
    year: "2022",
    completed: "Est. 21 January 2022",
    location: "Bizana, Eastern Cape",
    client:
      "Winnie Madikizela Local Municipality (formerly Mbizana Local Municipality)",
    contractValue: "R 74 861 072.75",
    excerpt: "Mbizana Civic Centre for Winnie Madikizela Local Municipality.",
    hero: "images/idw/mbizana.jpg",
    gallery: ["images/idw/mbizana.jpg", "images/idw/mbizana-render.jpg"],
    related: ["ihlm-municipal-offices", "umzimkhulu-memorial-hall"],
    paragraphs: [
      "Project name: Mbizana Civic Centre. Client: Winnie Madikizela Local Municipality (formerly Mbizana Local Municipality). Location: Bizana, Eastern Cape.",
      "Completion date: estimated 21 January 2022. Contract value: R 74 861 072.75.",
    ],
  },
  {
    id: "ntabankulu-traffic",
    title: "Ntabankulu Traffic Department",
    category: "Institutional",
    year: "2021",
    completed: "12 December 2021",
    location: "Ntabankulu, Eastern Cape",
    client: "Ntabankulu Local Municipality",
    contractValue: "R 11 870 528.85",
    excerpt: "Design and build of Ntabankulu traffic offices.",
    hero: "images/idw/ntabankulu.jpg",
    gallery: ["images/idw/ntabankulu.jpg"],
    related: ["social-development", "ihlm-municipal-offices"],
    paragraphs: [
      "Project name: Design and build of Ntabankulu Traffic Offices. Client: Ntabankulu Local Municipality. Location: Ntabankulu, Eastern Cape.",
      "Completion date: 12 December 2021. Contract value: R 11 870 528.85.",
    ],
  },
  {
    id: "social-development",
    title: "Social Development, Matatiele",
    category: "Institutional",
    year: "2017",
    completed: "2017",
    location: "Matatiele, Eastern Cape",
    client: "Eastern Cape Department of Public Works",
    contractValue: "R 43 950 341.34",
    excerpt:
      "New Social Development and Special Programmes office in Matatiele.",
    hero: "images/idw/social-development.jpg",
    gallery: ["images/idw/social-development.jpg"],
    related: ["ntabankulu-traffic", "mbizana-civic-centre"],
    paragraphs: [
      "Project name: New Social Development and Special Programmes Office in Matatiele. Client: Eastern Cape Department of Public Works. Location: Matatiele, Eastern Cape.",
      "Completion date: 2017. Contract value: R 43 950 341.34.",
    ],
  },
  {
    id: "umzimkhulu-memorial-hall",
    title: "Umzimkhulu Memorial Hall",
    category: "Community Infrastructure",
    year: "2021",
    completed: "17 November 2021",
    location: "Umzimkhulu",
    client: "Umzimkhulu Memorial Hall",
    contractValue: "R37 million",
    excerpt: "Umzimkhulu Memorial Hall, community infrastructure.",
    hero: "images/idw/umzimkhulu.jpg",
    gallery: ["images/idw/umzimkhulu.jpg"],
    related: ["jikindaba-sports", "mbizana-civic-centre"],
    paragraphs: [
      "Project name: Umzimkhulu Memorial Hall. Client: Umzimkhulu Memorial Hall. Location: Umzimkhulu.",
      "Completion date: 17 November 2021. Contract value: R37 million.",
    ],
  },
  {
    id: "jikindaba-sports",
    title: "Jikindaba Sports Complex",
    category: "Sports and Recreation",
    year: "2022",
    completed: "Est. 17 March 2022",
    location: "Flagstaff, Eastern Cape",
    client: "Ingquza Hill Local Municipality",
    contractValue: "R11 million",
    excerpt:
      "IHLM Ward 26 Sports Complex at Jikindaba (Phase 1), Flagstaff.",
    hero: "images/idw/jikindaba.jpg",
    gallery: ["images/idw/jikindaba.jpg"],
    related: ["umzimkhulu-memorial-hall", "ihlm-municipal-offices"],
    paragraphs: [
      "Project name: IHLM Ward 26 Sports Complex at Jikindaba (Phase 1). Client: Ingquza Hill Local Municipality. Location: Flagstaff, Eastern Cape.",
      "Completion date: estimated 17 March 2022. Contract value: R11 million.",
    ],
  },
];

export function getProject(id) {
  return projects.find((project) => project.id === id) || null;
}

export function getRelated(project) {
  if (!project) return [];
  return project.related.map(getProject).filter(Boolean);
}

export function featuredProjects() {
  return [
    "ihlm-municipal-offices",
    "mbizana-civic-centre",
    "umzimkhulu-memorial-hall",
    "jikindaba-sports",
  ].map(getProject);
}
