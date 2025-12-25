/**
 * Mobile Speed Index Data
 * Source: Speedtest Global Index by Ookla
 * https://www.speedtest.net/global-index
 * Higher score = faster mobile speeds (measured in Mbps)
 * Rankings: 1 (fastest) to N (slowest)
 */

import { mobileSpeedRankings2025 } from './2025'

export const mobileSpeedIndex = {
  id: 'ri-mobile-speed',
  name: 'Mobile Speed Index',
  shortName: 'MSI',
  domainId: 'd-technology',
  source: 'Speedtest Global Index by Ookla',
  sourceUrl: 'https://www.speedtest.net/global-index',
  methodology:
    'Measures median mobile download speeds across countries. Data is collected from millions of real-world speed tests performed by users worldwide using the Speedtest application. The median download speed (in Mbps) is used rather than the mean to provide a more accurate representation of typical user experience. Rankings are updated monthly.',
  updateFrequency: 'monthly',
  scoreMin: 0,
  scoreMax: 1000,
  higherIsBetter: true,
  lastUpdated: new Date('2025-11-01'),
}

// Combined rankings for seeding
export const mobileSpeedRankings = [...mobileSpeedRankings2025]

export const totalCountries = 103

// Re-export year-specific data for direct access
export { mobileSpeedRankings2025 } from './2025'
