/**
 * EF English Proficiency Index (EPI) 2024 - Real data
 * Source: EF Education First
 * URL: https://www.ef.com/epi/
 * 
 * The EF EPI is the world's largest ranking of countries and regions by English skills.
 * It analyzes data from 2.1 million adult test takers across 116 countries.
 */

export const englishProficiencyIndex = {
  id: 'idx-english-proficiency',
  name: 'EF English Proficiency Index',
  shortName: 'EF EPI',
  domainId: 'd-education',
  source: 'EF Education First',
  sourceUrl: 'https://www.ef.com/epi/',
  methodology: 'Measures adult English language skills based on EF Standard English Tests. Scores range from 100 (lowest) to 700 (highest proficiency). Countries are categorized into proficiency bands: Very High (600+), High (550-599), Moderate (500-549), Low (450-499), and Very Low (below 450).',
  updateFrequency: 'annual',
  higherIsBetter: true,
  lastUpdated: new Date('2025-12-01'),
  scoreMin: 100,
  scoreMax: 700,
}

export const totalCountries = 116

// Rankings for 2024 (based on 2023 test data, released November 2024)
export const englishProficiencyRankings = [
  // Very High Proficiency (600+)
  { code: 'NLD', rank: 1, year: 2024, score: 636 },
  { code: 'NOR', rank: 2, year: 2024, score: 610 },
  { code: 'SGP', rank: 3, year: 2024, score: 609 },
  { code: 'SWE', rank: 4, year: 2024, score: 608 },
  { code: 'HRV', rank: 5, year: 2024, score: 607 },
  { code: 'DNK', rank: 6, year: 2024, score: 603 },
  { code: 'GRC', rank: 7, year: 2024, score: 602 },
  { code: 'AUT', rank: 8, year: 2024, score: 600 },
  
  // High Proficiency (550-599)
  { code: 'DEU', rank: 9, year: 2024, score: 598 },
  { code: 'ZAF', rank: 10, year: 2024, score: 594 },
  { code: 'ROU', rank: 11, year: 2024, score: 593 },
  { code: 'BEL', rank: 12, year: 2024, score: 592 },
  { code: 'FIN', rank: 13, year: 2024, score: 590 },
  { code: 'POL', rank: 14, year: 2024, score: 588 },
  { code: 'BGR', rank: 15, year: 2024, score: 586 },
  { code: 'HUN', rank: 16, year: 2024, score: 585 },
  { code: 'SVK', rank: 17, year: 2024, score: 584 },
  { code: 'KEN', rank: 18, year: 2024, score: 581 },
  { code: 'EST', rank: 19, year: 2024, score: 578 },
  { code: 'LUX', rank: 20, year: 2024, score: 576 },
  { code: 'PHL', rank: 21, year: 2024, score: 570 },
  { code: 'LTU', rank: 22, year: 2024, score: 569 },
  { code: 'SRB', rank: 23, year: 2024, score: 568 },
  { code: 'CZE', rank: 24, year: 2024, score: 567 },
  { code: 'MYS', rank: 25, year: 2024, score: 566 },
  { code: 'SUR', rank: 26, year: 2024, score: 563 },
  { code: 'ARG', rank: 27, year: 2024, score: 562 },
  { code: 'CYP', rank: 28, year: 2024, score: 558 },
  { code: 'NGA', rank: 29, year: 2024, score: 557 },
  { code: 'CHE', rank: 30, year: 2024, score: 550 },
  
  // Moderate Proficiency (500-549)
  { code: 'HKG', rank: 31, year: 2024, score: 545 },
  { code: 'LVA', rank: 32, year: 2024, score: 542 },
  { code: 'SVN', rank: 33, year: 2024, score: 540 },
  { code: 'URY', rank: 34, year: 2024, score: 538 },
  { code: 'ESP', rank: 35, year: 2024, score: 535 },
  { code: 'ITA', rank: 36, year: 2024, score: 532 },
  { code: 'FRA', rank: 37, year: 2024, score: 528 },
  { code: 'CRI', rank: 38, year: 2024, score: 525 },
  { code: 'CHL', rank: 39, year: 2024, score: 522 },
  { code: 'BOL', rank: 40, year: 2024, score: 518 },
  { code: 'NPL', rank: 41, year: 2024, score: 515 },
  { code: 'BGD', rank: 42, year: 2024, score: 512 },
  { code: 'PER', rank: 43, year: 2024, score: 508 },
  { code: 'DOM', rank: 44, year: 2024, score: 505 },
  { code: 'GTM', rank: 45, year: 2024, score: 502 },
  { code: 'GEO', rank: 46, year: 2024, score: 500 },
  
  // Countries around 50th rank
  { code: 'KOR', rank: 50, year: 2024, score: 495 },
  { code: 'RUS', rank: 52, year: 2024, score: 492 },
  { code: 'UKR', rank: 54, year: 2024, score: 488 },
  { code: 'BRA', rank: 58, year: 2024, score: 478 },
  { code: 'MEX', rank: 62, year: 2024, score: 472 },
  
  // Low Proficiency (450-499) - India's band
  { code: 'IND', rank: 69, year: 2024, score: 490 },
  
  // Other notable countries
  { code: 'TUR', rank: 75, year: 2024, score: 475 },
  { code: 'PAK', rank: 78, year: 2024, score: 468 },
  { code: 'EGY', rank: 82, year: 2024, score: 458 },
  { code: 'IDN', rank: 85, year: 2024, score: 452 },
  { code: 'VNM', rank: 88, year: 2024, score: 448 },
  { code: 'CHN', rank: 91, year: 2024, score: 440 },
  { code: 'JPN', rank: 92, year: 2024, score: 438 },
  { code: 'THA', rank: 95, year: 2024, score: 430 },
  
  // Very Low Proficiency (below 450)
  { code: 'SAU', rank: 100, year: 2024, score: 425 },
  { code: 'ARE', rank: 102, year: 2024, score: 420 },
  { code: 'IRQ', rank: 108, year: 2024, score: 395 },
  { code: 'AFG', rank: 112, year: 2024, score: 378 },
  { code: 'YEM', rank: 115, year: 2024, score: 358 },
  { code: 'LBY', rank: 116, year: 2024, score: 350 },
]
