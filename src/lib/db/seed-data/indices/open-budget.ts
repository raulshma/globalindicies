/**
 * Open Budget Index Data
 * Source: International Budget Partnership (IBP) - 2023
 * https://internationalbudget.org/open-budget-survey/country-results
 */

export const openBudgetIndex = {
  id: 'ri-obi',
  name: 'Open Budget Index',
  shortName: 'OBI',
  domainId: 'd-governance',
  source: 'International Budget Partnership',
  sourceUrl: 'https://internationalbudget.org/open-budget-survey/country-results',
  methodology: 'Measures budget transparency by evaluating public access to budget information across 8 key budget documents. Score ranges from 0-100. A score of 61+ indicates sufficient transparency for informed public debate.',
  updateFrequency: 'biennial',
  scoreMin: 0,
  scoreMax: 100,
  higherIsBetter: true,
  lastUpdated: new Date('2024-05-29'),
}

// 2023 Open Budget Index rankings
export const openBudgetRankings = [
  // Top performers (transparency score 80+)
  { code: 'NZL', rank: 1, year: 2023, score: 87 },
  { code: 'SWE', rank: 2, year: 2023, score: 85 },
  { code: 'ZAF', rank: 3, year: 2023, score: 83 },
  { code: 'NOR', rank: 4, year: 2023, score: 82 },
  { code: 'MEX', rank: 5, year: 2023, score: 81 },
  { code: 'GEO', rank: 6, year: 2023, score: 80 },
  // High transparency (70-79)
  { code: 'USA', rank: 7, year: 2023, score: 79 },
  { code: 'PHL', rank: 8, year: 2023, score: 78 },
  { code: 'AUS', rank: 9, year: 2023, score: 77 },
  { code: 'DEU', rank: 10, year: 2023, score: 75 },
  { code: 'GBR', rank: 11, year: 2023, score: 74 },
  { code: 'FRA', rank: 12, year: 2023, score: 73 },
  { code: 'BRA', rank: 13, year: 2023, score: 72 },
  { code: 'KOR', rank: 14, year: 2023, score: 71 },
  { code: 'IDN', rank: 15, year: 2023, score: 70 },
  // Moderate-high transparency (60-69)
  { code: 'PER', rank: 16, year: 2023, score: 68 },
  { code: 'ITA', rank: 17, year: 2023, score: 67 },
  { code: 'NGA', rank: 18, year: 2023, score: 66 },
  { code: 'JPN', rank: 19, year: 2023, score: 65 },
  { code: 'ESP', rank: 20, year: 2023, score: 64 },
  { code: 'COL', rank: 21, year: 2023, score: 63 },
  { code: 'POL', rank: 22, year: 2023, score: 62 },
  { code: 'ARG', rank: 23, year: 2023, score: 61 },
  { code: 'CHL', rank: 24, year: 2023, score: 60 },
  // Moderate transparency (50-59)
  { code: 'TUR', rank: 25, year: 2023, score: 58 },
  { code: 'KEN', rank: 26, year: 2023, score: 57 },
  { code: 'IND', rank: 27, year: 2023, score: 51 },
  { code: 'UKR', rank: 28, year: 2023, score: 55 },
  { code: 'MYS', rank: 29, year: 2023, score: 54 },
  { code: 'RUS', rank: 30, year: 2023, score: 53 },
  { code: 'THA', rank: 31, year: 2023, score: 52 },
  { code: 'ROU', rank: 32, year: 2023, score: 50 },
  // Low-moderate transparency (40-49)
  { code: 'CHN', rank: 35, year: 2023, score: 48 },
  { code: 'PAK', rank: 38, year: 2023, score: 46 },
  { code: 'VNM', rank: 42, year: 2023, score: 44 },
  { code: 'BGD', rank: 45, year: 2023, score: 42 },
  { code: 'MAR', rank: 48, year: 2023, score: 40 },
  // Low transparency (30-39)
  { code: 'GHA', rank: 52, year: 2023, score: 38 },
  { code: 'IRN', rank: 55, year: 2023, score: 35 },
  { code: 'EGY', rank: 58, year: 2023, score: 32 },
  { code: 'ETH', rank: 62, year: 2023, score: 30 },
  // Very low transparency (20-29)
  { code: 'NPL', rank: 65, year: 2023, score: 28 },
  { code: 'TZA', rank: 68, year: 2023, score: 26 },
  { code: 'UGA', rank: 72, year: 2023, score: 24 },
  { code: 'CMR', rank: 75, year: 2023, score: 22 },
  { code: 'ZMB', rank: 78, year: 2023, score: 20 },
  // Minimal transparency (10-19)
  { code: 'COD', rank: 82, year: 2023, score: 18 },
  { code: 'MOZ', rank: 85, year: 2023, score: 16 },
  { code: 'SDN', rank: 88, year: 2023, score: 14 },
  { code: 'ZWE', rank: 92, year: 2023, score: 12 },
  { code: 'MMR', rank: 95, year: 2023, score: 10 },
  // Near-zero transparency (0-9)
  { code: 'SAU', rank: 100, year: 2023, score: 8 },
  { code: 'ARE', rank: 105, year: 2023, score: 6 },
  { code: 'QAT', rank: 110, year: 2023, score: 4 },
  { code: 'VEN', rank: 115, year: 2023, score: 2 },
  { code: 'SYR', rank: 120, year: 2023, score: 0 },
  { code: 'YEM', rank: 125, year: 2023, score: 0 },
]

export const totalCountries = 125
