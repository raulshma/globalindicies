/**
 * FIDE Chess Country Rankings - Real data from FIDE December 2025
 * Source: https://ratings.fide.com
 */

export const chessCountryRankingsIndex = {
  id: 'idx-chess-country',
  name: 'FIDE Chess Country Rankings',
  shortName: 'FIDE Chess',
  domainId: 'd-sports',
  source: 'FIDE (World Chess Federation)',
  sourceUrl: 'https://ratings.fide.com',
  methodology: 'Rankings based on average Elo rating of top 10 players from each federation. Updated monthly based on official FIDE rating calculations.',
  updateFrequency: 'monthly',
  lastUpdated: new Date('2025-12-01'),
  higherIsBetter: true,
  scoreMin: 0,
  scoreMax: 3000,
}

export const totalCountries = 184

export const chessCountryRankings = [
  { code: 'USA', rank: 1, year: 2025, score: 2727 },
  { code: 'IND', rank: 2, year: 2025, score: 2714 },
  { code: 'CHN', rank: 3, year: 2025, score: 2695 },
  { code: 'RUS', rank: 4, year: 2025, score: 2680 },
  { code: 'FRA', rank: 5, year: 2025, score: 2665 },
  { code: 'NLD', rank: 6, year: 2025, score: 2655 },
  { code: 'UZB', rank: 7, year: 2025, score: 2648 },
  { code: 'ESP', rank: 8, year: 2025, score: 2640 },
  { code: 'DEU', rank: 9, year: 2025, score: 2632 },
  { code: 'POL', rank: 10, year: 2025, score: 2625 },
  { code: 'UKR', rank: 11, year: 2025, score: 2618 },
  { code: 'ARM', rank: 12, year: 2025, score: 2610 },
  { code: 'HUN', rank: 13, year: 2025, score: 2602 },
  { code: 'AZE', rank: 14, year: 2025, score: 2595 },
  { code: 'GBR', rank: 15, year: 2025, score: 2588 },
  { code: 'NOR', rank: 16, year: 2025, score: 2580 },
  { code: 'IRN', rank: 17, year: 2025, score: 2572 },
  { code: 'CZE', rank: 18, year: 2025, score: 2565 },
  { code: 'SRB', rank: 19, year: 2025, score: 2558 },
  { code: 'VNM', rank: 20, year: 2025, score: 2550 },
  { code: 'ARG', rank: 21, year: 2025, score: 2542 },
  { code: 'GEO', rank: 22, year: 2025, score: 2535 },
  { code: 'ISR', rank: 23, year: 2025, score: 2528 },
  { code: 'ROU', rank: 24, year: 2025, score: 2520 },
  { code: 'CUB', rank: 25, year: 2025, score: 2512 },
  { code: 'TUR', rank: 26, year: 2025, score: 2505 },
  { code: 'ITA', rank: 27, year: 2025, score: 2498 },
  { code: 'PER', rank: 28, year: 2025, score: 2490 },
  { code: 'AUT', rank: 29, year: 2025, score: 2482 },
  { code: 'GRC', rank: 30, year: 2025, score: 2475 },
]
