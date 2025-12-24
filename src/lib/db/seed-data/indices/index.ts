/**
 * Index exports for all ranking indices
 * Each index file contains:
 * - Index metadata (id, name, source, methodology, etc.)
 * - Rankings data (country code, rank, year, score/value)
 * - Total countries covered
 */

import { populationIndex, populationRankings, totalCountries as populationTotal } from './population'
import { giiIndex, giiRankings, totalCountries as giiTotal } from './gii'
import { hdiIndex, hdiRankings, totalCountries as hdiTotal } from './hdi'
import { cpiIndex, cpiRankings, totalCountries as cpiTotal } from './cpi'
import { gdpPerCapitaIndex, gdpPerCapitaRankings, totalCountries as gdpTotal } from './gdp-per-capita'

// Re-export individual index data
export { populationIndex, populationRankings } from './population'
export { giiIndex, giiRankings } from './gii'
export { hdiIndex, hdiRankings } from './hdi'
export { cpiIndex, cpiRankings } from './cpi'
export { gdpPerCapitaIndex, gdpPerCapitaRankings } from './gdp-per-capita'

// All index metadata
export const allIndices = [
  populationIndex,
  giiIndex,
  hdiIndex,
  cpiIndex,
  gdpPerCapitaIndex,
]

// All rankings data with their index info
export const allRankingsData = [
  { index: populationIndex, rankings: populationRankings, totalCountries: populationTotal, valueField: 'value' as const },
  { index: giiIndex, rankings: giiRankings, totalCountries: giiTotal, valueField: 'score' as const },
  { index: hdiIndex, rankings: hdiRankings, totalCountries: hdiTotal, valueField: 'score' as const },
  { index: cpiIndex, rankings: cpiRankings, totalCountries: cpiTotal, valueField: 'score' as const },
  { index: gdpPerCapitaIndex, rankings: gdpPerCapitaRankings, totalCountries: gdpTotal, valueField: 'value' as const },
]
