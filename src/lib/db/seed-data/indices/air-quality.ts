/**
 * World Air Quality Index Data
 * Source: IQAir World Air Quality Report (2024)
 * https://www.iqair.com/world-air-quality-report
 * 
 * Note: Rankings are based on PM2.5 concentration - lower is better (cleaner air)
 * Countries are ranked from most polluted (1) to least polluted
 */

export const airQualityIndex = {
  id: 'ri-air-quality',
  name: 'World Air Quality Index',
  shortName: 'AQI',
  domainId: 'd-environment',
  source: 'IQAir',
  sourceUrl: 'https://www.iqair.com/world-air-quality-report',
  methodology: 'Annual average PM2.5 concentration measured in micrograms per cubic meter (µg/m³). Rankings based on air pollution levels across monitored cities and regions.',
  updateFrequency: 'annual',
  scoreMin: 0,
  scoreMax: 100,
  higherIsBetter: false, // Lower PM2.5 is better (cleaner air)
  lastUpdated: new Date('2024-03-01'),
}

// Rankings based on PM2.5 concentration (most polluted first)
// Score represents PM2.5 in µg/m³
export const airQualityRankings = [
  { code: 'TCD', rank: 1, year: 2024, score: 91.8 }, // Chad
  { code: 'BGD', rank: 2, year: 2024, score: 78.1 }, // Bangladesh
  { code: 'PAK', rank: 3, year: 2024, score: 73.7 }, // Pakistan
  { code: 'COD', rank: 4, year: 2024, score: 66.8 }, // DR Congo
  { code: 'IND', rank: 5, year: 2024, score: 50.6 }, // India
  { code: 'NER', rank: 6, year: 2024, score: 52.3 }, // Niger
  { code: 'IRQ', rank: 7, year: 2024, score: 51.8 }, // Iraq
  { code: 'BHR', rank: 8, year: 2024, score: 50.9 }, // Bahrain
  { code: 'NPL', rank: 9, year: 2024, score: 50.2 }, // Nepal
  { code: 'KWT', rank: 10, year: 2024, score: 49.7 }, // Kuwait
  { code: 'EGY', rank: 11, year: 2024, score: 46.5 }, // Egypt
  { code: 'AFG', rank: 12, year: 2024, score: 45.2 }, // Afghanistan
  { code: 'OMN', rank: 13, year: 2024, score: 44.8 }, // Oman
  { code: 'SAU', rank: 14, year: 2024, score: 43.2 }, // Saudi Arabia
  { code: 'UAE', rank: 15, year: 2024, score: 42.1 }, // UAE
  { code: 'QAT', rank: 16, year: 2024, score: 41.8 }, // Qatar
  { code: 'CHN', rank: 17, year: 2024, score: 32.5 }, // China
  { code: 'IDN', rank: 18, year: 2024, score: 30.4 }, // Indonesia
  { code: 'VNM', rank: 19, year: 2024, score: 28.2 }, // Vietnam
  { code: 'THA', rank: 20, year: 2024, score: 26.8 }, // Thailand
  { code: 'MYS', rank: 25, year: 2024, score: 21.5 }, // Malaysia
  { code: 'KOR', rank: 30, year: 2024, score: 18.2 }, // South Korea
  { code: 'JPN', rank: 45, year: 2024, score: 12.4 }, // Japan
  { code: 'ITA', rank: 58, year: 2024, score: 10.2 }, // Italy
  { code: 'DEU', rank: 65, year: 2024, score: 9.8 }, // Germany
  { code: 'FRA', rank: 70, year: 2024, score: 9.2 }, // France
  { code: 'GBR', rank: 75, year: 2024, score: 8.5 }, // UK
  { code: 'USA', rank: 80, year: 2024, score: 8.1 }, // USA
  { code: 'CAN', rank: 90, year: 2024, score: 7.2 }, // Canada
  { code: 'SWE', rank: 100, year: 2024, score: 5.8 }, // Sweden
  { code: 'NOR', rank: 110, year: 2024, score: 5.2 }, // Norway
  { code: 'FIN', rank: 115, year: 2024, score: 4.8 }, // Finland
  { code: 'AUS', rank: 130, year: 2024, score: 4.2 }, // Australia
  { code: 'EST', rank: 132, year: 2024, score: 3.8 }, // Estonia
  { code: 'ISL', rank: 135, year: 2024, score: 3.5 }, // Iceland
  { code: 'NZL', rank: 138, year: 2024, score: 3.2 }, // New Zealand
]

export const totalCountries = 138
