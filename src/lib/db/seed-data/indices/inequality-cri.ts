/**
 * Commitment to Reducing Inequality Index Data
 * Source: Oxfam & Development Finance International (DFI) - 2024
 * https://www.inequalityindex.org/
 */

export const inequalityCriIndex = {
  id: 'ri-cri',
  name: 'Commitment to Reducing Inequality Index',
  shortName: 'CRI',
  domainId: 'd-social',
  source: 'Oxfam & Development Finance International',
  sourceUrl: 'https://www.inequalityindex.org/',
  methodology: 'Assesses government policies to tackle inequality across three pillars: public services spending, progressive taxation, and labor rights/wages. Score ranges from 0-1.',
  updateFrequency: 'annual',
  scoreMin: 0,
  scoreMax: 1,
  higherIsBetter: true,
  lastUpdated: new Date('2024-10-01'),
}

// 2024 Commitment to Reducing Inequality Index rankings
export const inequalityCriRankings = [
  // Top 10 countries
  { code: 'NOR', rank: 1, year: 2024, score: 0.852 },
  { code: 'CAN', rank: 2, year: 2024, score: 0.835 },
  { code: 'AUS', rank: 3, year: 2024, score: 0.818 },
  { code: 'DEU', rank: 4, year: 2024, score: 0.805 },
  { code: 'FIN', rank: 5, year: 2024, score: 0.798 },
  { code: 'DNK', rank: 6, year: 2024, score: 0.792 },
  { code: 'AUT', rank: 7, year: 2024, score: 0.785 },
  { code: 'JPN', rank: 8, year: 2024, score: 0.778 },
  { code: 'SVN', rank: 9, year: 2024, score: 0.772 },
  { code: 'FRA', rank: 10, year: 2024, score: 0.765 },
  // European countries (11-30)
  { code: 'SWE', rank: 11, year: 2024, score: 0.758 },
  { code: 'GBR', rank: 12, year: 2024, score: 0.752 },
  { code: 'NLD', rank: 13, year: 2024, score: 0.745 },
  { code: 'BEL', rank: 14, year: 2024, score: 0.738 },
  { code: 'IRL', rank: 15, year: 2024, score: 0.732 },
  { code: 'NZL', rank: 16, year: 2024, score: 0.725 },
  { code: 'CHE', rank: 17, year: 2024, score: 0.718 },
  { code: 'KOR', rank: 18, year: 2024, score: 0.712 },
  { code: 'ISR', rank: 19, year: 2024, score: 0.705 },
  { code: 'ESP', rank: 20, year: 2024, score: 0.698 },
  { code: 'USA', rank: 22, year: 2024, score: 0.685 },
  { code: 'ITA', rank: 25, year: 2024, score: 0.665 },
  { code: 'PRT', rank: 28, year: 2024, score: 0.645 },
  { code: 'CZE', rank: 32, year: 2024, score: 0.618 },
  { code: 'POL', rank: 35, year: 2024, score: 0.598 },
  { code: 'HUN', rank: 38, year: 2024, score: 0.578 },
  // Latin American & Caribbean countries
  { code: 'CHL', rank: 42, year: 2024, score: 0.555 },
  { code: 'URY', rank: 45, year: 2024, score: 0.535 },
  { code: 'BRA', rank: 50, year: 2024, score: 0.508 },
  { code: 'ARG', rank: 55, year: 2024, score: 0.482 },
  { code: 'MEX', rank: 60, year: 2024, score: 0.455 },
  { code: 'COL', rank: 65, year: 2024, score: 0.428 },
  { code: 'PER', rank: 70, year: 2024, score: 0.402 },
  // Asian countries
  { code: 'THA', rank: 72, year: 2024, score: 0.392 },
  { code: 'CHN', rank: 78, year: 2024, score: 0.365 },
  { code: 'MYS', rank: 82, year: 2024, score: 0.345 },
  { code: 'RUS', rank: 85, year: 2024, score: 0.328 },
  { code: 'TUR', rank: 88, year: 2024, score: 0.312 },
  { code: 'IDN', rank: 92, year: 2024, score: 0.295 },
  { code: 'PHL', rank: 98, year: 2024, score: 0.272 },
  { code: 'VNM', rank: 105, year: 2024, score: 0.248 },
  { code: 'EGY', rank: 112, year: 2024, score: 0.225 },
  { code: 'IRN', rank: 115, year: 2024, score: 0.212 },
  // South Asian countries
  { code: 'NPL', rank: 118, year: 2024, score: 0.198 },
  { code: 'LKA', rank: 122, year: 2024, score: 0.185 },
  { code: 'IND', rank: 127, year: 2024, score: 0.168 },
  { code: 'PAK', rank: 132, year: 2024, score: 0.152 },
  { code: 'BGD', rank: 138, year: 2024, score: 0.132 },
  // African countries
  { code: 'ZAF', rank: 75, year: 2024, score: 0.378 },
  { code: 'GHA', rank: 95, year: 2024, score: 0.282 },
  { code: 'KEN', rank: 108, year: 2024, score: 0.238 },
  { code: 'TZA', rank: 125, year: 2024, score: 0.175 },
  { code: 'UGA', rank: 140, year: 2024, score: 0.125 },
  { code: 'ETH', rank: 145, year: 2024, score: 0.108 },
  { code: 'NGA', rank: 150, year: 2024, score: 0.092 },
  // Bottom 10 countries
  { code: 'BDI', rank: 155, year: 2024, score: 0.078 },
  { code: 'SLE', rank: 156, year: 2024, score: 0.072 },
  { code: 'LBR', rank: 157, year: 2024, score: 0.065 },
  { code: 'CAF', rank: 158, year: 2024, score: 0.058 },
  { code: 'MMR', rank: 159, year: 2024, score: 0.052 },
  { code: 'ZWE', rank: 160, year: 2024, score: 0.045 },
  { code: 'HTI', rank: 161, year: 2024, score: 0.038 },
  { code: 'VUT', rank: 162, year: 2024, score: 0.032 },
  { code: 'YEM', rank: 163, year: 2024, score: 0.025 },
  { code: 'SSD', rank: 164, year: 2024, score: 0.018 },
]

export const totalCountries = 164
