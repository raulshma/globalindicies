/**
 * Mobile Subscribers Index Data
 * Source: International Telecommunication Union (ITU)
 * https://www.itu.int/
 * Higher value = more mobile subscribers (in millions)
 */

import { mobileSubscribersRankings2024 } from './2024'

export const mobileSubscribersIndex = {
  id: 'ri-mobile-subscribers',
  name: 'Mobile Subscribers',
  shortName: 'Mobile',
  domainId: 'd-technology',
  source: 'International Telecommunication Union (ITU)',
  sourceUrl: 'https://www.itu.int/',
  methodology:
    'Measures total mobile cellular subscriptions by country in millions. Includes both prepaid and postpaid subscriptions. Data is collected from national telecommunications regulatory authorities and mobile operators. Note that a single person may have multiple subscriptions.',
  updateFrequency: 'annual',
  scoreMin: 0,
  scoreMax: 2000,
  higherIsBetter: true,
  lastUpdated: new Date('2025-12-01'),
}

// Combined rankings for seeding
export const mobileSubscribersRankings = [...mobileSubscribersRankings2024]

export const totalCountries = 40

// Re-export year-specific data for direct access
export { mobileSubscribersRankings2024 } from './2024'
