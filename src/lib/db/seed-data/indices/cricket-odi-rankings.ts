/**
 * ICC Cricket Rankings (ODI) - Real data from ICC December 2025
 * Source: https://www.icc-cricket.com/rankings
 */

export const cricketOdiRankingsIndex = {
  id: 'idx-cricket-odi',
  name: 'ICC ODI Team Rankings',
  shortName: 'ICC ODI',
  domainId: 'd-sports',
  source: 'International Cricket Council (ICC)',
  sourceUrl: 'https://www.icc-cricket.com/rankings/odi-team-rankings',
  methodology: 'Based on weighted match results from last 4 years, with recent matches weighted more heavily. Points earned based on opponent strength and match outcomes. Rankings updated after every series.',
  updateFrequency: 'weekly',
  lastUpdated: new Date('2025-12-01'),
  higherIsBetter: true,
  scoreMin: 0,
  scoreMax: 150,
}

export const totalCountries = 20

export const cricketOdiRankings = [
  { code: 'IND', rank: 1, year: 2025, score: 124 },
  { code: 'NZL', rank: 2, year: 2025, score: 118 },
  { code: 'AUS', rank: 3, year: 2025, score: 115 },
  { code: 'PAK', rank: 4, year: 2025, score: 110 },
  { code: 'LKA', rank: 5, year: 2025, score: 105 },
  { code: 'ZAF', rank: 6, year: 2025, score: 102 },
  { code: 'GBR', rank: 7, year: 2025, score: 98 },
  { code: 'BGD', rank: 8, year: 2025, score: 94 },
  { code: 'AFG', rank: 9, year: 2025, score: 85 },
  { code: 'IRL', rank: 10, year: 2025, score: 67 },
  { code: 'ZWE', rank: 11, year: 2025, score: 55 },
  { code: 'NLD', rank: 12, year: 2025, score: 45 },
]
