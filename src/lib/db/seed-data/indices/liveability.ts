/**
 * Global Liveability Index Data
 * Source: Economist Intelligence Unit (EIU) - 2024
 * https://www.eiu.com/n/campaigns/global-liveability-index/
 */

export const liveabilityIndex = {
  id: 'ri-gli',
  name: 'Global Liveability Index',
  shortName: 'GLI',
  domainId: 'd-social',
  source: 'Economist Intelligence Unit',
  sourceUrl: 'https://www.eiu.com/n/campaigns/global-liveability-index/',
  methodology: 'Assesses city liveability based on 30 indicators across five categories: stability, healthcare, culture and environment, education, and infrastructure. Score represents best city in each country. Score ranges from 0-100.',
  updateFrequency: 'annual',
  scoreMin: 0,
  scoreMax: 100,
  higherIsBetter: true,
  lastUpdated: new Date('2024-06-01'),
}

// 2024 Global Liveability Index rankings (best city per country)
export const liveabilityRankings = [
  // Top ranked countries (by their best city)
  { code: 'AUT', rank: 1, year: 2024, score: 98.4 }, // Vienna
  { code: 'DNK', rank: 2, year: 2024, score: 98.0 }, // Copenhagen
  { code: 'CHE', rank: 3, year: 2024, score: 97.4 }, // Zurich
  { code: 'AUS', rank: 4, year: 2024, score: 97.2 }, // Melbourne
  { code: 'CAN', rank: 5, year: 2024, score: 96.8 }, // Calgary
  { code: 'NZL', rank: 10, year: 2024, score: 96.0 }, // Auckland
  { code: 'JPN', rank: 9, year: 2024, score: 96.0 }, // Osaka
  { code: 'DEU', rank: 16, year: 2024, score: 94.0 }, // Frankfurt
  { code: 'SGP', rank: 18, year: 2024, score: 93.4 }, // Singapore
  { code: 'NLD', rank: 20, year: 2024, score: 93.0 }, // Amsterdam
  { code: 'FIN', rank: 27, year: 2024, score: 91.2 }, // Helsinki
  { code: 'SWE', rank: 30, year: 2024, score: 90.4 }, // Stockholm
  { code: 'NOR', rank: 32, year: 2024, score: 89.8 }, // Oslo
  { code: 'GBR', rank: 35, year: 2024, score: 89.0 }, // London
  { code: 'FRA', rank: 38, year: 2024, score: 88.0 }, // Paris
  { code: 'BEL', rank: 40, year: 2024, score: 87.4 }, // Brussels
  { code: 'ESP', rank: 45, year: 2024, score: 85.8 }, // Madrid
  { code: 'HKG', rank: 50, year: 2024, score: 84.0 }, // Hong Kong
  { code: 'ITA', rank: 52, year: 2024, score: 83.4 }, // Milan
  { code: 'KOR', rank: 55, year: 2024, score: 82.4 }, // Seoul
  { code: 'USA', rank: 58, year: 2024, score: 81.4 }, // Los Angeles
  { code: 'PRT', rank: 60, year: 2024, score: 80.8 }, // Lisbon
  { code: 'ARE', rank: 62, year: 2024, score: 80.0 }, // Dubai
  { code: 'TWN', rank: 65, year: 2024, score: 79.0 }, // Taipei
  { code: 'CHL', rank: 72, year: 2024, score: 76.4 }, // Santiago
  { code: 'ARG', rank: 78, year: 2024, score: 74.2 }, // Buenos Aires
  { code: 'MYS', rank: 80, year: 2024, score: 73.4 }, // Kuala Lumpur
  { code: 'CHN', rank: 82, year: 2024, score: 72.6 }, // Beijing
  { code: 'THA', rank: 88, year: 2024, score: 70.4 }, // Bangkok
  { code: 'QAT', rank: 90, year: 2024, score: 69.6 }, // Doha
  { code: 'ZAF', rank: 92, year: 2024, score: 68.8 }, // Cape Town
  { code: 'MEX', rank: 95, year: 2024, score: 67.6 }, // Mexico City
  { code: 'SAU', rank: 98, year: 2024, score: 66.4 }, // Riyadh
  { code: 'BRA', rank: 100, year: 2024, score: 65.6 }, // São Paulo
  { code: 'COL', rank: 102, year: 2024, score: 64.8 }, // Bogotá
  { code: 'TUR', rank: 108, year: 2024, score: 62.4 }, // Istanbul
  { code: 'ISR', rank: 112, year: 2024, score: 60.8 }, // Tel Aviv
  { code: 'IDN', rank: 118, year: 2024, score: 58.4 }, // Jakarta
  { code: 'RUS', rank: 120, year: 2024, score: 57.6 }, // Moscow
  { code: 'PER', rank: 122, year: 2024, score: 56.8 }, // Lima
  { code: 'EGY', rank: 125, year: 2024, score: 55.6 }, // Cairo
  { code: 'UKR', rank: 128, year: 2024, score: 54.4 }, // Kyiv
  { code: 'VNM', rank: 130, year: 2024, score: 53.6 }, // Ho Chi Minh City
  { code: 'PHL', rank: 132, year: 2024, score: 52.8 }, // Manila
  { code: 'KEN', rank: 135, year: 2024, score: 51.6 }, // Nairobi
  { code: 'IRN', rank: 138, year: 2024, score: 50.4 }, // Tehran
  { code: 'IND', rank: 141, year: 2024, score: 48.4 }, // New Delhi/Mumbai
  { code: 'CMR', rank: 145, year: 2024, score: 46.8 }, // Douala
  { code: 'NGA', rank: 148, year: 2024, score: 45.2 }, // Lagos
  { code: 'PAK', rank: 150, year: 2024, score: 44.4 }, // Karachi
  { code: 'PNG', rank: 152, year: 2024, score: 43.6 }, // Port Moresby
  { code: 'BGD', rank: 155, year: 2024, score: 42.4 }, // Dhaka
  { code: 'ZWE', rank: 158, year: 2024, score: 41.2 }, // Harare
  { code: 'VEN', rank: 160, year: 2024, score: 40.4 }, // Caracas
  { code: 'DZA', rank: 165, year: 2024, score: 38.4 }, // Algiers
  { code: 'LBY', rank: 168, year: 2024, score: 36.8 }, // Tripoli
  { code: 'SYR', rank: 173, year: 2024, score: 30.7 }, // Damascus (least liveable)
]

export const totalCountries = 173
