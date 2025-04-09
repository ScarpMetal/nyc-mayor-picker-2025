interface GovernmentExperience {
  role: string;
  years: string;
  notes?: string;
}

interface PolicyPosition {
  issue: string;
  description: string;
  tag_favorability: {
    [key: string]: number; // -1 to 1 scale
  };
}

interface Candidate {
  name: string;
  website: string;
  current_job: string;
  government_experience: GovernmentExperience[];
  policy_positions: PolicyPosition[];
}

interface CandidatesData {
  candidates: {
    [key: string]: Candidate;
  };
}

export const candidatesData: CandidatesData = {
  candidates: {
    andrew_cuomo: {
      name: "Andrew Cuomo",
      website: "https://www.andrewcuomo.com",
      current_job: "Unemployed",
      government_experience: [
        {
          role: "Governor of New York",
          years: "2011-2021",
          notes: "resigned",
        },
        {
          role: "New York Attorney General",
          years: "2007-2010",
        },
        {
          role: "US Secretary of HUD",
          years: "1997-2001",
        },
        {
          role: "US Assistant Secretary of HUD",
          years: "1993-1997",
        },
      ],
      policy_positions: [
        {
          issue: "Affordability",
          description:
            "Increase the supply of affordable housing, expand access to affordable healthcare, guarantee universal 3-K and increase childcare options, make transportation more affordable, provide targeted tax relief to lower income and middle-class voters, improve incomes",
          tag_favorability: {
            affordable_housing: 0.7,
            healthcare_access: 0.7,
            childcare: 0.8,
            public_transit: 0.5,
            tax_relief: 0.8,
          },
        },
        {
          issue: "Public Safety",
          description:
            "Increase the size of the NYPD, deploy police officers based on proven, data-driven strategies, crack down on nuisance and quality of life crimes, increase accountability for e-bike and moped violations",
          tag_favorability: {
            police_funding: 1.0,
            data_driven_policing: 0.8,
            quality_of_life_enforcement: 1.0,
            traffic_enforcement: 0.8,
          },
        },
        {
          issue: "Subway Safety",
          description:
            "Increase permanent presence and deployment of NYPD and MTA officers, prevent unlawful entry through better infrastructure, increase outreach to homeless individuals on subways",
          tag_favorability: {
            transit_police: 1.0,
            infrastructure_security: 0.8,
            homeless_services: 0.5,
          },
        },
      ],
    },
    zellnor_myrie: {
      name: "Zellnor Myrie",
      website: "https://www.zellnor.nyc",
      current_job: "New York State Senator (NYSSD-20)",
      government_experience: [
        {
          role: "New York State Senate",
          years: "2019-current",
        },
      ],
      policy_positions: [
        {
          issue: "Housing Mandate",
          description:
            "Build 700,000 homes (70,000 per year over ten years), increase allowable density in Manhattan, convert industrial sites between neighborhoods into residential zones, invest in NYCHA to support renovations and build new mixed income housing, allow mixed income housing on public sites like above libraries and schools, streamline and reform the process for approving small buildings (less than 7 stories), preserve 150,000 homes at risk of becoming uninhabitable through incentives and protections",
          tag_favorability: {
            affordable_housing: 1.0,
            density_increase: 1.0,
            public_housing: 0.8,
            zoning_reform: 0.9,
            housing_preservation: 0.7,
          },
        },
        {
          issue: "Public Safety",
          description:
            "Return NYPD to 2018 staffing levels when New York was its safest, reverse decline in number of NYPD detectives, prioritize safety in transit and streets by deterring antisocial behavior and responding before encounters escalate, oversight of NYPD to rein in excessive overtime and eliminate abuse, community and programmatic investments to address root causes of crime",
          tag_favorability: {
            police_funding: -0.3,
            police_oversight: 0.8,
            transit_safety: 0.7,
            community_investment: 0.9,
          },
        },
        {
          issue: "Opportunity",
          description:
            "Free universal citywide afterschool programs, full day 3-K and Pre-K (run to 6pm instead of 2:30pm) and pay early childhood education centers on time, expand workforce opportunity programs by working with NYC industry partners, issue NYC work permits to undocumented immigrants while their asylum claims are processed, expand the Summer Youth Employment Program (SYEP) to every young New Yorker, pilot SYEP year round programming for at-risk youth",
          tag_favorability: {
            afterschool_programs: 1.0,
            childcare: 1.0,
            workforce_development: 0.8,
            immigrant_rights: 0.9,
            youth_employment: 1.0,
          },
        },
      ],
    },
    zohran_mamdani: {
      name: "Zohran Mamdani",
      website: "https://www.zohranfornyc.com",
      current_job: "New York State Assemblyman (NYSAD-36)",
      government_experience: [
        {
          role: "New York State Assembly",
          years: "2021-present",
        },
      ],
      policy_positions: [
        {
          issue: "Public Food Access",
          description:
            "Build city-owned grocery stores in each borough to address food deserts and lower food costs",
          tag_favorability: {
            public_services: 1.0,
            food_access: 1.0,
            government_retail: 1.0,
          },
        },
        {
          issue: "Housing",
          description:
            "Triple the amount of housing built with City capital funds, recommit to public housing, invest in public sector workforce, fast-track planning review, advocate in Albany to increase the City's public debt ceiling and in Washington to remove the City's volume cap for affordable housing bond financing, increase zoned capacity, support climate sustainability and accessibility, eliminate parking minimums, advocate to expand rent stabilization in Albany",
          tag_favorability: {
            public_housing: 1.0,
            affordable_housing: 1.0,
            climate_action: 0.8,
            parking_reform: 1.0,
            rent_control: 1.0,
          },
        },
        {
          issue: "Tenant Protection",
          description:
            "Streamline Housing Code Enforcement, fix 311 and allow tenants to schedule inspections and track complaint status, increase fines for dangerous living conditions, force landlords to take extreme heat seriously, expand the scope, funding, and staffing of City's enforcement programs, crack down on repeat-offending landlords, guarantee repairs",
          tag_favorability: {
            tenant_rights: 1.0,
            housing_enforcement: 1.0,
            landlord_accountability: 1.0,
          },
        },
      ],
    },
    brad_lander: {
      name: "Brad Lander",
      website: "https://www.landerfornyc.com",
      current_job: "New York City Comptroller",
      government_experience: [
        {
          role: "New York City Comptroller",
          years: "2022-current",
        },
        {
          role: "New York City Council",
          years: "2010-2021",
        },
      ],
      policy_positions: [
        {
          issue: "Child Care",
          description:
            "Immediately restore Mayor Adams's cuts to child care including planning and outreach necessary to offer families seats in their communities, work toward universally available after-school programs for elementary and middle-school students, make sure employers offer eligible leave, lead fight for resources to provide free full-day high-quality child care and fair wages for educators",
          tag_favorability: {
            childcare: 1.0,
            afterschool_programs: 1.0,
            parental_leave: 0.8,
          },
        },
        {
          issue: "Government Reform",
          description:
            "Ensure the City has sufficient reserves, achieve long-term savings without cutting vital services, maintain debt affordability, championed NYC Capital Projects Tracker, improved contract processing, grown pension funds to record levels, brought participatory budgeting to NYC enabling direct community project funding",
          tag_favorability: {
            fiscal_responsibility: 0.9,
            government_transparency: 1.0,
            participatory_budgeting: 1.0,
          },
        },
        {
          issue: "Education",
          description:
            "Led fight against Eric Adams's school budget cuts, secured air-conditioning in all NYC classrooms, promotes inclusive school mergers to reduce class sizes and advance integration, led effort to enact School Diversity Accountability Act, continues investment in reading and STEM, focuses on career and technical education, robust arts and civics education",
          tag_favorability: {
            education_funding: 1.0,
            school_integration: 0.9,
            school_infrastructure: 0.8,
            arts_education: 0.7,
          },
        },
      ],
    },
    scott_stringer: {
      name: "Scott Stringer",
      website: "https://scottstringernyc.com",
      current_job: "No current political office",
      government_experience: [
        {
          role: "New York City Comptroller",
          years: "2014-2021",
        },
        {
          role: "Manhattan Borough President",
          years: "2006-2013",
        },
        {
          role: "New York State Assembly",
          years: "1993-2005",
        },
      ],
      policy_positions: [
        {
          issue: "Public Safety",
          description:
            "Hire 3,000 more officers and 'civilianize' NYPD administrative roles to free up uniformed officers, integrate advanced analytics, expanded monitoring, and transparent oversight for proactive policing, launch QualitySTAT performance management tool, dedicated officer on every subway train",
          tag_favorability: {
            police_funding: 1.0,
            police_reform: 0.7,
            transit_police: 1.0,
            data_driven_policing: 0.9,
          },
        },
        {
          issue: "Ethics Reform",
          description:
            "Ban Pay-to-Play practices, prohibit independent expenditures from contractors and foreign-influenced corporations in city elections, create distinct budget lines for every capital project, restrict lobbying by former city officials and prevent city agencies from hiring lobbyists who previously lobbied them",
          tag_favorability: {
            government_transparency: 1.0,
            anti_corruption: 1.0,
            lobbying_reform: 1.0,
          },
        },
        {
          issue: "Housing",
          description:
            "Transform underutilized city-owned properties like DOT garages and vacant lots into affordable housing, reclaim neglected properties from irresponsible landlords for affordable housing, establish $500 million fund to support MWBE and nonprofit developers, secure $40 billion for critical NYCHA repairs and modernization",
          tag_favorability: {
            affordable_housing: 0.9,
            public_housing: 0.8,
            housing_development: 1.0,
          },
        },
      ],
    },
    jessica_ramos: {
      name: "Jessica Ramos",
      website: "https://www.ramosfornyc.com",
      current_job: "New York State Senator (NYSSD-13)",
      government_experience: [
        {
          role: "New York State Senate",
          years: "2019-current",
        },
      ],
      policy_positions: [
        {
          issue: "Housing",
          description:
            "Invest in public housing and make buildings more sustainable without privatizing critical community assets, make homeownership achievable through down payment assistance and affordable housing programs, promote modular housing, office to residential conversions, expand supportive housing with on-site services, empower communities to control land and prevent displacement, increase affordable housing supply and incentivize mixed-income development",
          tag_favorability: {
            public_housing: 0.9,
            affordable_housing: 1.0,
            housing_sustainability: 0.8,
            anti_displacement: 1.0,
          },
        },
        {
          issue: "Public Safety",
          description:
            "Support common-sense gun laws, community-based violence prevention, and safe storage regulations, strengthen resources for hate crime prevention, support victims, and promote anti-bias education, expand Vision Zero, improve street lighting, and implement traffic calming measures, enhance independent oversight, transparency, and crisis intervention training, fund mental health response teams, violence interruption programs, and re-entry support",
          tag_favorability: {
            gun_control: 1.0,
            hate_crime_prevention: 0.9,
            traffic_safety: 1.0,
            police_oversight: 0.8,
          },
        },
        {
          issue: "Climate",
          description:
            "Invest in training programs and clean energy industries, invest in flood protection, green spaces, and renewable energy projects, expand public transit options, build protected bike lanes, and improve access in underserved neighborhoods, modernize public housing with energy-efficient upgrades and sustainable design, empower neighborhoods to lead on local climate initiatives",
          tag_favorability: {
            climate_action: 1.0,
            green_infrastructure: 0.9,
            public_transit: 1.0,
            environmental_justice: 0.9,
          },
        },
      ],
    },
    whitney_tilson: {
      name: "Whitney Tilson",
      website: "https://www.whitneyformayor.com",
      current_job: "No current political office (Hedge Fund Manager)",
      government_experience: [],
      policy_positions: [
        {
          issue: "Anti-Hate Initiatives",
          description:
            "Speak out against antisemitism, no tolerance for hate speech/harassment/violence/illegal actions, implement American Jewish Committee and US Conference of Mayors guide, adopt IHRA definition of antisemitism, provide more resources to NYC Commission on Human Rights, hire more Community Liaisons, encourage greater collaboration between religious groups, community leadership and law enforcement",
          tag_favorability: {
            hate_crime_prevention: 1.0,
            antisemitism_prevention: 1.0,
            law_enforcement: 0.9,
          },
        },
        {
          issue: "Housing Reform",
          description:
            "Simplify zoning laws, streamline ULURP, consolidate oversight and improve staffing levels, digitize processes, instruct NYCHA to pursue additional infill projects, strategic upzoning of M1 and M2 districts to mixed-use with relaxed height restrictions, more targeted 421a tax abatement program, push to amend Housing Stability and Tenant Protection Act, create 'Guest Room Program' for short-term rentals",
          tag_favorability: {
            zoning_reform: 1.0,
            housing_development: 0.9,
            public_housing: 0.7,
            tax_incentives: 0.8,
          },
        },
        {
          issue: "Homelessness",
          description:
            "Call to reverse 'right to sleep outside', expand short-term drop-in centers, introduce shelter choice vouchers, improve shelter quality, penalize non-compliant providers, audit shelter systems, support involuntary commitment for those unable to meet basic needs, expand long-term psychiatric care facilities, build more housing",
          tag_favorability: {
            right_to_shelter: -1.0,
            shelter_reform: 0.9,
            mental_health_services: 1.0,
            involuntary_commitment: 0.8,
          },
        },
      ],
    },
    michael_blake: {
      name: "Michael Blake",
      website: "https://blakefornyc.com",
      current_job: "No current political office",
      government_experience: [
        {
          role: "New York State Assembly",
          years: "2015-2021",
        },
        {
          role: "Democratic National Committee Vice Chair",
          years: "2017-2021",
        },
      ],
      policy_positions: [
        {
          issue: "Economic Justice",
          description:
            "No Federal Cuts policy to withhold NYC taxes from DC, guaranteed income payments for New Yorkers in need, universal free childcare, tax on vacant Pied-a-terre apartments, faster payments for non-profits and freelancers, eliminate credit checks for rentals/mortgages, free CUNY tuition for all NYC adults, pay creators for NYC content, protect reproductive rights and immigration services",
          tag_favorability: {
            guaranteed_income: 1.0,
            childcare: 1.0,
            vacant_property_tax: 1.0,
            credit_discrimination: -1.0,
            free_education: 1.0,
          },
        },
        {
          issue: "Education",
          description:
            "Increase education funding by 25%, end corruption and increase accountability, safeguard mayoral control, fund high quality materials, focus on educator retention and racial equality, protect from federal aggression, expand pre-K and bridge to universal childcare, ensure college readiness, increase special education classrooms, improve school meals and technology access",
          tag_favorability: {
            education_funding: 1.0,
            government_accountability: 1.0,
            education_equity: 1.0,
            special_education: 0.9,
          },
        },
        {
          issue: "Public Health",
          description:
            "Address opioid settlement fund spending, deploy resources for wellness centers with harm reduction, integrate overdose prevention to decrease ER wait times, enhance public safety measures against fentanyl, organize quarterly action meetings with stakeholders, implement annual impact audits",
          tag_favorability: {
            harm_reduction: 0.9,
            healthcare_access: 1.0,
            drug_enforcement: 0.8,
            mental_health_services: 0.9,
          },
        },
      ],
    },
  },
};

// Export types for use in other files
export type { Candidate, CandidatesData, GovernmentExperience, PolicyPosition };

// Export a type-safe way to get all unique tags
export const getAllUniqueTags = (): string[] => {
  const tags = new Set<string>();
  Object.values(candidatesData.candidates).forEach((candidate) => {
    candidate.policy_positions.forEach((position) => {
      Object.keys(position.tag_favorability).forEach((tag) => tags.add(tag));
    });
  });
  return Array.from(tags).sort();
};

// Export a type-safe way to get all unique issues
export const getAllUniqueIssues = (): string[] => {
  const issues = new Set<string>();
  Object.values(candidatesData.candidates).forEach((candidate) => {
    candidate.policy_positions.forEach((position) => {
      issues.add(position.issue);
    });
  });
  return Array.from(issues).sort();
};
