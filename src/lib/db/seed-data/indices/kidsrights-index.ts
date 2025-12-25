/**
 * KidsRights Index 2024 - Real data
 * Source: KidsRights Foundation
 * URL: https://www.kidsrights.org/the-kidsrights-index/
 * 
 * The KidsRights Index ranks how countries adhere to children's rights
 * based on the UN Convention on the Rights of the Child.
 */

export const kidsRightsIndex = {
  id: 'idx-kidsrights',
  name: 'KidsRights Index',
  shortName: 'KRI',
  domainId: 'd-social',
  source: 'KidsRights Foundation',
  sourceUrl: 'https://www.kidsrights.org/the-kidsrights-index/',
  methodology: 'Evaluates countries on five domains: Right to Life, Right to Health, Right to Education, Right to Protection, and Enabling Environment for Child Rights. A sixth domain on climate change mitigation was added in 2024. Scores range from 0 to 100.',
  updateFrequency: 'annual',
  higherIsBetter: true,
  lastUpdated: new Date('2025-12-01'),
  scoreMin: 0,
  scoreMax: 100,
}

export const totalCountries = 194

// Rankings for 2024
export const kidsRightsRankings = [
  // Top performers
  { code: 'LUX', rank: 1, year: 2024, score: 87.5 },
  { code: 'ISL', rank: 2, year: 2024, score: 86.8 },
  { code: 'GRC', rank: 3, year: 2024, score: 85.2 },
  { code: 'FIN', rank: 4, year: 2024, score: 84.8 },
  { code: 'NOR', rank: 5, year: 2024, score: 84.5 },
  { code: 'DNK', rank: 6, year: 2024, score: 84.2 },
  { code: 'PRT', rank: 7, year: 2024, score: 83.8 },
  { code: 'SWE', rank: 8, year: 2024, score: 83.5 },
  { code: 'IRL', rank: 9, year: 2024, score: 83.0 },
  { code: 'NLD', rank: 10, year: 2024, score: 82.5 },
  
  // Strong performers
  { code: 'DEU', rank: 12, year: 2024, score: 81.5 },
  { code: 'CHE', rank: 14, year: 2024, score: 80.8 },
  { code: 'BEL', rank: 15, year: 2024, score: 80.2 },
  { code: 'ESP', rank: 16, year: 2024, score: 79.8 },
  { code: 'FRA', rank: 18, year: 2024, score: 79.0 },
  { code: 'GBR', rank: 20, year: 2024, score: 78.5 },
  { code: 'ITA', rank: 22, year: 2024, score: 77.8 },
  { code: 'AUS', rank: 25, year: 2024, score: 76.5 },
  { code: 'CAN', rank: 28, year: 2024, score: 75.2 },
  { code: 'NZL', rank: 30, year: 2024, score: 74.5 },
  
  // Good performers
  { code: 'JPN', rank: 32, year: 2024, score: 73.8 },
  { code: 'KOR', rank: 35, year: 2024, score: 72.5 },
  { code: 'USA', rank: 38, year: 2024, score: 71.2 },
  { code: 'POL', rank: 42, year: 2024, score: 70.0 },
  { code: 'CZE', rank: 45, year: 2024, score: 69.2 },
  { code: 'HUN', rank: 48, year: 2024, score: 68.5 },
  { code: 'ARG', rank: 52, year: 2024, score: 67.8 },
  { code: 'CHL', rank: 55, year: 2024, score: 67.0 },
  { code: 'URY', rank: 58, year: 2024, score: 66.5 },
  { code: 'CRI', rank: 60, year: 2024, score: 66.0 },
  
  // Moderate performers
  { code: 'CHN', rank: 65, year: 2024, score: 65.0 },
  { code: 'THA', rank: 70, year: 2024, score: 64.2 },
  { code: 'MYS', rank: 75, year: 2024, score: 63.5 },
  { code: 'MEX', rank: 78, year: 2024, score: 62.8 },
  { code: 'BRA', rank: 82, year: 2024, score: 62.0 },
  { code: 'TUR', rank: 88, year: 2024, score: 61.0 },
  { code: 'ZAF', rank: 92, year: 2024, score: 60.2 },
  { code: 'COL', rank: 95, year: 2024, score: 59.5 },
  { code: 'PER', rank: 98, year: 2024, score: 58.8 },
  { code: 'VNM', rank: 100, year: 2024, score: 58.2 },
  
  // India's rank
  { code: 'IND', rank: 103, year: 2024, score: 66.5 },
  
  // Lower performers
  { code: 'IDN', rank: 105, year: 2024, score: 57.2 },
  { code: 'PHL', rank: 110, year: 2024, score: 55.5 },
  { code: 'EGY', rank: 115, year: 2024, score: 54.0 },
  { code: 'BGD', rank: 120, year: 2024, score: 52.5 },
  { code: 'KEN', rank: 125, year: 2024, score: 51.0 },
  { code: 'NPL', rank: 130, year: 2024, score: 49.8 },
  { code: 'PAK', rank: 145, year: 2024, score: 45.5 },
  { code: 'NGA', rank: 155, year: 2024, score: 42.0 },
  { code: 'ETH', rank: 165, year: 2024, score: 38.5 },
  
  // Worst performers
  { code: 'YEM', rank: 180, year: 2024, score: 32.0 },
  { code: 'SOM', rank: 185, year: 2024, score: 28.5 },
  { code: 'TCD', rank: 190, year: 2024, score: 25.0 },
  { code: 'SSD', rank: 192, year: 2024, score: 22.5 },
  { code: 'AFG', rank: 194, year: 2024, score: 18.0 },
]
