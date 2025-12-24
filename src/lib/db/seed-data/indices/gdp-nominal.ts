/**
 * GDP Nominal Data
 * Source: International Monetary Fund (IMF) - 2024
 * https://www.imf.org/en/Publications/WEO
 */

export const gdpNominalIndex = {
  id: 'ri-gdp-nominal',
  name: 'GDP (Nominal)',
  shortName: 'GDP',
  domainId: 'd-economy',
  source: 'International Monetary Fund (IMF)',
  sourceUrl: 'https://www.imf.org/en/Publications/WEO',
  methodology: 'Gross Domestic Product at current prices in US dollars.',
  updateFrequency: 'annual',
  scoreMin: 0,
  scoreMax: 30000000,
  higherIsBetter: true,
  lastUpdated: new Date('2024-10-01'),
}

// GDP in millions USD
export const gdpNominalRankings = [
  { code: 'USA', rank: 1, year: 2024, value: 28781000 },
  { code: 'CHN', rank: 2, year: 2024, value: 18532000 },
  { code: 'DEU', rank: 3, year: 2024, value: 4591000 },
  { code: 'JPN', rank: 4, year: 2024, value: 4110000 },
  { code: 'IND', rank: 5, year: 2024, value: 3937000 },
  { code: 'GBR', rank: 6, year: 2024, value: 3495000 },
  { code: 'FRA', rank: 7, year: 2024, value: 3130000 },
  { code: 'ITA', rank: 8, year: 2024, value: 2328000 },
  { code: 'BRA', rank: 9, year: 2024, value: 2331000 },
  { code: 'CAN', rank: 10, year: 2024, value: 2242000 },
  { code: 'RUS', rank: 11, year: 2024, value: 2184000 },
  { code: 'KOR', rank: 12, year: 2024, value: 1761000 },
  { code: 'AUS', rank: 13, year: 2024, value: 1724000 },
  { code: 'MEX', rank: 14, year: 2024, value: 1789000 },
  { code: 'ESP', rank: 15, year: 2024, value: 1582000 },
  { code: 'IDN', rank: 16, year: 2024, value: 1475000 },
  { code: 'SAU', rank: 17, year: 2024, value: 1108000 },
  { code: 'NLD', rank: 18, year: 2024, value: 1135000 },
  { code: 'TUR', rank: 19, year: 2024, value: 1108000 },
  { code: 'CHE', rank: 20, year: 2024, value: 906000 },
  { code: 'POL', rank: 21, year: 2024, value: 842000 },
  { code: 'ARG', rank: 22, year: 2024, value: 641000 },
  { code: 'BEL', rank: 23, year: 2024, value: 632000 },
  { code: 'SWE', rank: 24, year: 2024, value: 593000 },
  { code: 'IRL', rank: 25, year: 2024, value: 545000 },
  { code: 'NOR', rank: 26, year: 2024, value: 526000 },
  { code: 'ISR', rank: 27, year: 2024, value: 521000 },
  { code: 'AUT', rank: 28, year: 2024, value: 516000 },
  { code: 'THA', rank: 29, year: 2024, value: 514000 },
  { code: 'ARE', rank: 30, year: 2024, value: 509000 },
  { code: 'SGP', rank: 31, year: 2024, value: 501000 },
  { code: 'BGD', rank: 32, year: 2024, value: 460000 },
  { code: 'DNK', rank: 33, year: 2024, value: 406000 },
  { code: 'PHL', rank: 34, year: 2024, value: 404000 },
  { code: 'MYS', rank: 35, year: 2024, value: 399000 },
  { code: 'ZAF', rank: 37, year: 2024, value: 373000 },
  { code: 'PAK', rank: 38, year: 2024, value: 338000 },
  { code: 'EGY', rank: 39, year: 2024, value: 347000 },
  { code: 'VNM', rank: 40, year: 2024, value: 449000 },
  { code: 'CHL', rank: 41, year: 2024, value: 335000 },
  { code: 'COL', rank: 42, year: 2024, value: 343000 },
  { code: 'FIN', rank: 43, year: 2024, value: 305000 },
  { code: 'CZE', rank: 44, year: 2024, value: 330000 },
  { code: 'NGA', rank: 45, year: 2024, value: 363000 },
]

export const totalCountries = 195
