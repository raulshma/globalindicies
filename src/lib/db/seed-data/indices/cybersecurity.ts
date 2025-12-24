/**
 * Global Cybersecurity Index Data
 * Source: International Telecommunication Union (ITU) - 2024
 * https://www.itu.int/en/ITU-D/Cybersecurity/Pages/global-cybersecurity-index.aspx
 */

export const cybersecurityIndex = {
  id: 'ri-gci-cyber',
  name: 'Global Cybersecurity Index',
  shortName: 'GCI',
  domainId: 'd-innovation',
  source: 'International Telecommunication Union (ITU)',
  sourceUrl: 'https://www.itu.int/en/ITU-D/Cybersecurity/Pages/global-cybersecurity-index.aspx',
  methodology: 'Assesses countries commitment to cybersecurity across five pillars: Legal, Technical, Organizational, Capacity Development, and Cooperation. Score ranges from 0-100. Countries are grouped into 5 tiers.',
  updateFrequency: 'biennial',
  scoreMin: 0,
  scoreMax: 100,
  higherIsBetter: true,
  lastUpdated: new Date('2024-09-01'),
}

// 2024 Global Cybersecurity Index rankings
// Tier 1 (Role-modelling): 95-100, Tier 2 (Advancing): 85-95, Tier 3 (Establishing): 55-85
// Tier 4 (Evolving): 20-55, Tier 5 (Building): 0-20
export const cybersecurityRankings = [
  // Tier 1 - Perfect score countries (100/100)
  { code: 'DNK', rank: 1, year: 2024, score: 100.00 },
  { code: 'EGY', rank: 1, year: 2024, score: 100.00 },
  { code: 'FIN', rank: 1, year: 2024, score: 100.00 },
  { code: 'IDN', rank: 1, year: 2024, score: 100.00 },
  { code: 'ITA', rank: 1, year: 2024, score: 100.00 },
  { code: 'MUS', rank: 1, year: 2024, score: 100.00 },
  { code: 'QAT', rank: 1, year: 2024, score: 100.00 },
  { code: 'SAU', rank: 1, year: 2024, score: 100.00 },
  { code: 'KOR', rank: 1, year: 2024, score: 100.00 },
  { code: 'TUR', rank: 1, year: 2024, score: 100.00 },
  { code: 'ARE', rank: 1, year: 2024, score: 100.00 },
  { code: 'GBR', rank: 1, year: 2024, score: 100.00 },
  // Tier 1 - Other role-modelling countries
  { code: 'SGP', rank: 13, year: 2024, score: 99.86 },
  { code: 'PRT', rank: 13, year: 2024, score: 99.86 },
  { code: 'VNM', rank: 15, year: 2024, score: 99.74 },
  { code: 'THA', rank: 16, year: 2024, score: 99.22 },
  { code: 'RUS', rank: 17, year: 2024, score: 99.10 },
  { code: 'MYS', rank: 18, year: 2024, score: 98.96 },
  { code: 'ESP', rank: 19, year: 2024, score: 98.82 },
  { code: 'IND', rank: 20, year: 2024, score: 98.49 },
  { code: 'FRA', rank: 21, year: 2024, score: 98.35 },
  { code: 'JPN', rank: 22, year: 2024, score: 97.82 },
  { code: 'AUS', rank: 23, year: 2024, score: 97.47 },
  { code: 'USA', rank: 24, year: 2024, score: 97.35 },
  { code: 'DEU', rank: 25, year: 2024, score: 97.05 },
  { code: 'NLD', rank: 26, year: 2024, score: 96.88 },
  { code: 'CHE', rank: 27, year: 2024, score: 96.55 },
  { code: 'SRB', rank: 28, year: 2024, score: 96.82 },
  { code: 'CAN', rank: 29, year: 2024, score: 96.25 },
  { code: 'NZL', rank: 30, year: 2024, score: 96.10 },
  { code: 'BRA', rank: 31, year: 2024, score: 95.95 },
  { code: 'NOR', rank: 32, year: 2024, score: 95.80 },
  { code: 'SWE', rank: 33, year: 2024, score: 95.65 },
  { code: 'POL', rank: 34, year: 2024, score: 95.50 },
  { code: 'CZE', rank: 35, year: 2024, score: 95.35 },
  { code: 'BEL', rank: 36, year: 2024, score: 95.20 },
  { code: 'AUT', rank: 37, year: 2024, score: 95.05 },
  // Tier 2 - Advancing countries (85-95)
  { code: 'CHN', rank: 38, year: 2024, score: 94.50 },
  { code: 'ZAF', rank: 39, year: 2024, score: 93.80 },
  { code: 'MEX', rank: 40, year: 2024, score: 92.50 },
  { code: 'ARG', rank: 41, year: 2024, score: 91.20 },
  { code: 'COL', rank: 42, year: 2024, score: 90.50 },
  { code: 'PHL', rank: 43, year: 2024, score: 89.80 },
  { code: 'CHL', rank: 44, year: 2024, score: 89.10 },
  { code: 'PER', rank: 45, year: 2024, score: 88.40 },
  { code: 'IRN', rank: 46, year: 2024, score: 87.70 },
  { code: 'UKR', rank: 47, year: 2024, score: 87.00 },
  { code: 'HUN', rank: 48, year: 2024, score: 86.30 },
  { code: 'ROU', rank: 49, year: 2024, score: 85.60 },
  // Tier 3 - Establishing countries (55-85)
  { code: 'PAK', rank: 50, year: 2024, score: 84.50 },
  { code: 'BGD', rank: 55, year: 2024, score: 78.30 },
  { code: 'NGA', rank: 60, year: 2024, score: 72.15 },
  { code: 'KEN', rank: 65, year: 2024, score: 68.90 },
  { code: 'GHA', rank: 70, year: 2024, score: 65.50 },
  { code: 'TZA', rank: 75, year: 2024, score: 62.20 },
  { code: 'UGA', rank: 80, year: 2024, score: 58.80 },
  { code: 'ETH', rank: 85, year: 2024, score: 55.40 },
  // Tier 4 - Evolving countries (20-55)
  { code: 'NPL', rank: 90, year: 2024, score: 48.50 },
  { code: 'MMR', rank: 100, year: 2024, score: 42.20 },
  { code: 'AFG', rank: 110, year: 2024, score: 35.80 },
  { code: 'YEM', rank: 120, year: 2024, score: 28.50 },
  // Tier 5 - Building countries (0-20)
  { code: 'SSD', rank: 150, year: 2024, score: 12.50 },
  { code: 'CAF', rank: 160, year: 2024, score: 8.20 },
  { code: 'SOM', rank: 170, year: 2024, score: 5.80 },
]

export const totalCountries = 194
