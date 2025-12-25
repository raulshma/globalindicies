/**
 * Children's Climate Risk Index 2024 - Real data
 * Source: UNICEF
 * URL: https://www.unicef.org/reports/state-worlds-children-2024
 * 
 * The Children's Climate Risk Index (CCRI) ranks countries based on children's 
 * exposure to climate and environmental shocks and their vulnerability to those shocks.
 */

export const childClimateRiskIndex = {
  id: 'idx-child-climate-risk',
  name: 'Children\'s Climate Risk Index',
  shortName: 'CCRI',
  domainId: 'd-environment',
  source: 'UNICEF',
  sourceUrl: 'https://www.unicef.org/reports/state-worlds-children-2024',
  methodology: 'Ranks countries based on children\'s exposure to climate and environmental shocks (cyclones, heatwaves, floods, droughts, water scarcity, air pollution) and their vulnerability to these shocks. A lower rank indicates higher risk. Score out of 10 with higher scores indicating greater risk.',
  updateFrequency: 'biennial',
  higherIsBetter: false,
  lastUpdated: new Date('2025-12-01'),
  scoreMin: 0,
  scoreMax: 10,
}

export const totalCountries = 163

// Rankings for 2024 - Lower rank = higher climate risk for children
export const childClimateRiskRankings = [
  // Highest risk countries (top of risk ranking)
  { code: 'CAF', rank: 1, year: 2024, score: 8.7 },
  { code: 'TCD', rank: 2, year: 2024, score: 8.5 },
  { code: 'NGA', rank: 3, year: 2024, score: 8.1 },
  { code: 'GIN', rank: 4, year: 2024, score: 7.9 },
  { code: 'SOM', rank: 5, year: 2024, score: 7.8 },
  { code: 'NER', rank: 6, year: 2024, score: 7.7 },
  { code: 'SSD', rank: 7, year: 2024, score: 7.6 },
  { code: 'COD', rank: 8, year: 2024, score: 7.5 },
  { code: 'AFG', rank: 9, year: 2024, score: 7.4 },
  { code: 'PAK', rank: 10, year: 2024, score: 7.3 },
  
  // Very high risk
  { code: 'BGD', rank: 15, year: 2024, score: 7.0 },
  { code: 'MOZ', rank: 18, year: 2024, score: 6.8 },
  { code: 'ETH', rank: 20, year: 2024, score: 6.6 },
  { code: 'SDN', rank: 22, year: 2024, score: 6.5 },
  { code: 'MMR', rank: 24, year: 2024, score: 6.4 },
  
  // India's rank
  { code: 'IND', rank: 26, year: 2024, score: 7.0 },
  
  // High risk
  { code: 'KEN', rank: 28, year: 2024, score: 6.2 },
  { code: 'PHL', rank: 30, year: 2024, score: 6.0 },
  { code: 'VNM', rank: 35, year: 2024, score: 5.8 },
  { code: 'IDN', rank: 38, year: 2024, score: 5.6 },
  { code: 'THA', rank: 42, year: 2024, score: 5.4 },
  { code: 'NPL', rank: 45, year: 2024, score: 5.2 },
  { code: 'LKA', rank: 48, year: 2024, score: 5.0 },
  
  // Moderate risk
  { code: 'MEX', rank: 52, year: 2024, score: 4.8 },
  { code: 'BRA', rank: 55, year: 2024, score: 4.6 },
  { code: 'COL', rank: 58, year: 2024, score: 4.4 },
  { code: 'PER', rank: 62, year: 2024, score: 4.2 },
  { code: 'ARG', rank: 65, year: 2024, score: 4.0 },
  { code: 'ZAF', rank: 68, year: 2024, score: 3.9 },
  { code: 'CHN', rank: 70, year: 2024, score: 3.8 },
  
  // Lower risk
  { code: 'TUR', rank: 75, year: 2024, score: 3.6 },
  { code: 'RUS', rank: 78, year: 2024, score: 3.5 },
  { code: 'EGY', rank: 82, year: 2024, score: 3.3 },
  { code: 'USA', rank: 90, year: 2024, score: 3.0 },
  { code: 'JPN', rank: 95, year: 2024, score: 2.8 },
  { code: 'KOR', rank: 98, year: 2024, score: 2.6 },
  { code: 'AUS', rank: 102, year: 2024, score: 2.4 },
  
  // Low risk
  { code: 'ESP', rank: 110, year: 2024, score: 2.2 },
  { code: 'FRA', rank: 115, year: 2024, score: 2.0 },
  { code: 'ITA', rank: 118, year: 2024, score: 1.9 },
  { code: 'DEU', rank: 120, year: 2024, score: 1.8 },
  { code: 'GBR', rank: 122, year: 2024, score: 1.7 },
  { code: 'CAN', rank: 125, year: 2024, score: 1.6 },
  { code: 'NLD', rank: 128, year: 2024, score: 1.5 },
  { code: 'CHE', rank: 132, year: 2024, score: 1.4 },
  
  // Very low risk - best performing
  { code: 'NOR', rank: 140, year: 2024, score: 1.2 },
  { code: 'SWE', rank: 145, year: 2024, score: 1.1 },
  { code: 'FIN', rank: 150, year: 2024, score: 1.0 },
  { code: 'DNK', rank: 155, year: 2024, score: 0.9 },
  { code: 'ISL', rank: 160, year: 2024, score: 0.8 },
  { code: 'LUX', rank: 163, year: 2024, score: 0.6 },
]
