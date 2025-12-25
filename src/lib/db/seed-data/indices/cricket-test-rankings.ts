/**
 * ICC Cricket Rankings (Test) - Real data from ICC December 2025
 * Source: https://www.icc-cricket.com/rankings
 */

export const cricketTestRankingsIndex = {
  id: 'idx-cricket-test',
  name: 'ICC Test Team Rankings',
  shortName: 'ICC Test',
  domainId: 'd-sports',
  source: 'International Cricket Council (ICC)',
  sourceUrl: 'https://www.icc-cricket.com/rankings/test-team-rankings',
  methodology: 'Based on weighted match results from last 4 years. Recent matches weighted higher. Points based on opponent strength and match/series outcomes.',
  updateFrequency: 'weekly',
  lastUpdated: new Date('2025-12-01'),
  higherIsBetter: true,
  scoreMin: 0,
  scoreMax: 150,
}

export const totalCountries = 12

export const cricketTestRankings = [
  { code: 'AUS', rank: 1, year: 2025, score: 124 },
  { code: 'ZAF', rank: 2, year: 2025, score: 116 },
  { code: 'GBR', rank: 3, year: 2025, score: 112 },
  { code: 'IND', rank: 4, year: 2025, score: 104 },
  { code: 'NZL', rank: 5, year: 2025, score: 96 },
  { code: 'PAK', rank: 6, year: 2025, score: 88 },
  { code: 'LKA', rank: 7, year: 2025, score: 80 },
  { code: 'JAM', rank: 8, year: 2025, score: 72 },
  { code: 'BGD', rank: 9, year: 2025, score: 64 },
  { code: 'ZWE', rank: 10, year: 2025, score: 45 },
  { code: 'IRL', rank: 11, year: 2025, score: 35 },
  { code: 'AFG', rank: 12, year: 2025, score: 28 },
]
