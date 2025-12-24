/**
 * Global Nature Conservation Index Data
 * Source: BioDB.com & Ben-Gurion University - 2024
 * https://biodb.com/
 * Higher score = better conservation. Rankings are 1 (best) to 180 (worst)
 */

export const natureConservationIndex = {
  id: 'ri-nature-conservation',
  name: 'Global Nature Conservation Index',
  shortName: 'NCI',
  domainId: 'd-environment',
  source: 'BioDB.com & Goldman Sonnenfeldt School of Sustainability, Ben-Gurion University',
  sourceUrl: 'https://biodb.com/',
  methodology:
    'Assesses the effectiveness of nature conservation efforts across 180 countries using 25 performance indicators across four pillars: Land Management, Threats to Biodiversity, Capacity and Governance, and Future Trends. Higher score indicates better conservation performance.',
  updateFrequency: 'annual',
  scoreMin: 0,
  scoreMax: 100,
  higherIsBetter: true,
  lastUpdated: new Date('2024-10-01'),
}

export const natureConservationRankings = [
  // Top 20 Countries
  { code: 'LUX', rank: 1, year: 2024, score: 70.8 },
  { code: 'EST', rank: 2, year: 2024, score: 70.5 },
  { code: 'DNK', rank: 3, year: 2024, score: 69.0 },
  { code: 'FIN', rank: 4, year: 2024, score: 66.9 },
  { code: 'GBR', rank: 5, year: 2024, score: 66.6 },
  { code: 'ZWE', rank: 6, year: 2024, score: 65.9 },
  { code: 'AUS', rank: 7, year: 2024, score: 65.8 },
  { code: 'CHE', rank: 8, year: 2024, score: 64.7 },
  { code: 'ROU', rank: 9, year: 2024, score: 64.6 },
  { code: 'CRI', rank: 10, year: 2024, score: 64.4 },
  
  { code: 'AUT', rank: 11, year: 2024, score: 64.2 },
  { code: 'DEU', rank: 12, year: 2024, score: 63.58 },
  { code: 'LSO', rank: 13, year: 2024, score: 63.52 },
  { code: 'BWA', rank: 14, year: 2024, score: 63.3 },
  { code: 'BTN', rank: 15, year: 2024, score: 63.1 },
  { code: 'SWZ', rank: 16, year: 2024, score: 62.9 },
  { code: 'VCT', rank: 17, year: 2024, score: 62.6 },
  { code: 'NLD', rank: 18, year: 2024, score: 62.5 },
  { code: 'HRV', rank: 19, year: 2024, score: 62.4 },
  { code: 'LTU', rank: 20, year: 2024, score: 62.0 },
  
  // 21-50
  { code: 'NZL', rank: 21, year: 2024, score: 61.8 },
  { code: 'PRT', rank: 22, year: 2024, score: 61.7 },
  { code: 'CZE', rank: 23, year: 2024, score: 61.5 },
  { code: 'NOR', rank: 24, year: 2024, score: 61.4 },
  { code: 'BEL', rank: 25, year: 2024, score: 61.3 },
  { code: 'SVK', rank: 26, year: 2024, score: 61.2 },
  { code: 'SWE', rank: 27, year: 2024, score: 61.1 },
  { code: 'CAN', rank: 28, year: 2024, score: 61.0 },
  { code: 'SVN', rank: 29, year: 2024, score: 60.9 },
  { code: 'FRA', rank: 30, year: 2024, score: 60.7 },
  
  { code: 'JPN', rank: 31, year: 2024, score: 60.6 },
  { code: 'ESP', rank: 32, year: 2024, score: 60.5 },
  { code: 'GAB', rank: 33, year: 2024, score: 60.4 },
  { code: 'PAN', rank: 34, year: 2024, score: 60.3 },
  { code: 'ISL', rank: 35, year: 2024, score: 60.2 },
  { code: 'IRL', rank: 36, year: 2024, score: 60.1 },
  { code: 'USA', rank: 37, year: 2024, score: 60.13 },
  { code: 'KOR', rank: 38, year: 2024, score: 59.9 },
  { code: 'CHL', rank: 39, year: 2024, score: 59.8 },
  { code: 'URY', rank: 40, year: 2024, score: 59.7 },
  
  { code: 'LVA', rank: 41, year: 2024, score: 59.6 },
  { code: 'MYS', rank: 42, year: 2024, score: 59.5 },
  { code: 'POL', rank: 43, year: 2024, score: 59.4 },
  { code: 'ARG', rank: 44, year: 2024, score: 59.3 },
  { code: 'PER', rank: 45, year: 2024, score: 59.2 },
  { code: 'BLZ', rank: 46, year: 2024, score: 59.1 },
  { code: 'BGR', rank: 47, year: 2024, score: 59.0 },
  { code: 'GRC', rank: 48, year: 2024, score: 58.9 },
  { code: 'KHM', rank: 49, year: 2024, score: 58.8 },
  { code: 'GNQ', rank: 50, year: 2024, score: 58.7 },
  
  // Regional highlights
  { code: 'NPL', rank: 60, year: 2024, score: 57.2 },
  { code: 'ITA', rank: 65, year: 2024, score: 56.5 },
  { code: 'BRA', rank: 72, year: 2024, score: 55.8 },
  { code: 'THA', rank: 78, year: 2024, score: 55.2 },
  { code: 'LKA', rank: 90, year: 2024, score: 54.2 },
  { code: 'KEN', rank: 93, year: 2024, score: 54.95 },
  { code: 'CHN', rank: 110, year: 2024, score: 51.8 },
  { code: 'IDN', rank: 125, year: 2024, score: 49.5 },
  { code: 'MEX', rank: 135, year: 2024, score: 48.2 },
  { code: 'PAK', rank: 151, year: 2024, score: 47.0 },
  
  // Bottom countries
  { code: 'RUS', rank: 160, year: 2024, score: 46.5 },
  { code: 'BGD', rank: 173, year: 2024, score: 46.14 },
  { code: 'IND', rank: 176, year: 2024, score: 45.5 },
  { code: 'FSM', rank: 177, year: 2024, score: 43.8 },
  { code: 'IRQ', rank: 178, year: 2024, score: 43.3 },
  { code: 'TUR', rank: 179, year: 2024, score: 41.5 },
  { code: 'KIR', rank: 180, year: 2024, score: 41.2 },
]

export const totalCountries = 180
