/**
 * Good Country Index Data
 * Source: Good Country Index (2024)
 * https://www.goodcountry.org/index/overall-rankings
 * 
 * Measures how much each country contributes to the planet and humanity
 * relative to its size across seven categories.
 */

export const goodCountryIndex = {
  id: 'ri-good-country',
  name: 'Good Country Index',
  shortName: 'GCI-G',
  domainId: 'd-governance',
  source: 'Good Country Index',
  sourceUrl: 'https://www.goodcountry.org/index/overall-rankings',
  methodology: 'Measures countries across seven categories: Science & Technology, Culture, International Peace & Security, World Order, Planet & Climate, Prosperity & Equality, and Health & Wellbeing.',
  updateFrequency: 'biennial',
  scoreMin: 1,
  scoreMax: 174,
  higherIsBetter: false, // Lower rank is better
  lastUpdated: new Date('2024-01-01'),
}

export const goodCountryRankings = [
  { code: 'FIN', rank: 1, year: 2024, score: 1 },
  { code: 'SWE', rank: 2, year: 2024, score: 2 },
  { code: 'DEU', rank: 3, year: 2024, score: 3 },
  { code: 'DNK', rank: 4, year: 2024, score: 4 },
  { code: 'FRA', rank: 5, year: 2024, score: 5 },
  { code: 'GBR', rank: 6, year: 2024, score: 6 },
  { code: 'CAN', rank: 7, year: 2024, score: 7 },
  { code: 'SVN', rank: 8, year: 2024, score: 8 },
  { code: 'EST', rank: 9, year: 2024, score: 9 },
  { code: 'BEL', rank: 10, year: 2024, score: 10 },
  { code: 'AUT', rank: 11, year: 2024, score: 11 },
  { code: 'CZE', rank: 12, year: 2024, score: 12 },
  { code: 'IRL', rank: 13, year: 2024, score: 13 },
  { code: 'ESP', rank: 14, year: 2024, score: 14 },
  { code: 'PRT', rank: 15, year: 2024, score: 15 },
  { code: 'CHE', rank: 16, year: 2024, score: 16 },
  { code: 'NOR', rank: 17, year: 2024, score: 17 },
  { code: 'NLD', rank: 18, year: 2024, score: 18 },
  { code: 'AUS', rank: 19, year: 2024, score: 19 },
  { code: 'HUN', rank: 20, year: 2024, score: 20 },
  { code: 'LTU', rank: 21, year: 2024, score: 21 },
  { code: 'BGR', rank: 22, year: 2024, score: 22 },
  { code: 'POL', rank: 23, year: 2024, score: 23 },
  { code: 'NZL', rank: 24, year: 2024, score: 24 },
  { code: 'LUX', rank: 25, year: 2024, score: 25 },
  { code: 'ISL', rank: 26, year: 2024, score: 26 },
  { code: 'MLT', rank: 27, year: 2024, score: 27 },
  { code: 'SGP', rank: 28, year: 2024, score: 28 },
  { code: 'LIE', rank: 29, year: 2024, score: 29 },
  { code: 'ITA', rank: 30, year: 2024, score: 30 },
  { code: 'JPN', rank: 34, year: 2024, score: 34 },
  { code: 'KOR', rank: 39, year: 2024, score: 39 },
  { code: 'USA', rank: 45, year: 2024, score: 45 },
  { code: 'GRC', rank: 48, year: 2024, score: 48 },
  { code: 'BRA', rank: 55, year: 2024, score: 55 },
  { code: 'MEX', rank: 60, year: 2024, score: 60 },
  { code: 'ARG', rank: 62, year: 2024, score: 62 },
  { code: 'CHN', rank: 65, year: 2024, score: 65 },
  { code: 'THA', rank: 68, year: 2024, score: 68 },
  { code: 'IND', rank: 70, year: 2024, score: 70 },
  { code: 'MYS', rank: 72, year: 2024, score: 72 },
  { code: 'IDN', rank: 78, year: 2024, score: 78 },
  { code: 'VNM', rank: 82, year: 2024, score: 82 },
  { code: 'EGY', rank: 88, year: 2024, score: 88 },
  { code: 'TUR', rank: 92, year: 2024, score: 92 },
  { code: 'RUS', rank: 95, year: 2024, score: 95 },
  { code: 'SAU', rank: 105, year: 2024, score: 105 },
  { code: 'PAK', rank: 115, year: 2024, score: 115 },
  { code: 'NGA', rank: 125, year: 2024, score: 125 },
  { code: 'BGD', rank: 130, year: 2024, score: 130 },
  { code: 'IRQ', rank: 155, year: 2024, score: 155 },
]

export const totalCountries = 174
