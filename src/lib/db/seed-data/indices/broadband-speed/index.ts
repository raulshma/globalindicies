/**
 * Broadband Speed Index Data
 * Source: Speedtest Global Index by Ookla
 * https://www.speedtest.net/global-index
 * Higher score = faster broadband speeds (measured in Mbps)
 * Rankings: 1 (fastest) to N (slowest)
 */

import { broadbandSpeedRankings2024 } from './2024'

export const broadbandSpeedIndex = {
  id: 'ri-broadband-speed',
  name: 'Broadband Speed Index',
  shortName: 'BSI',
  domainId: 'd-technology',
  source: 'Speedtest Global Index by Ookla',
  sourceUrl: 'https://www.speedtest.net/global-index',
  methodology:
    'Measures median fixed broadband download speeds across countries. Data is collected from millions of real-world speed tests performed by users worldwide using the Speedtest application. The median download speed (in Mbps) is used rather than the mean to provide a more accurate representation of typical user experience, as it is less affected by outliers. Rankings are updated monthly based on aggregated speed test results.',
  updateFrequency: 'monthly',
  scoreMin: 0,
  scoreMax: 1000,
  higherIsBetter: true,
  lastUpdated: new Date('2025-12-01'),
}

// Combined rankings for seeding
export const broadbandSpeedRankings = [...broadbandSpeedRankings2024]

export const totalCountries = 64

// Re-export year-specific data for direct access
export { broadbandSpeedRankings2024 } from './2024'
