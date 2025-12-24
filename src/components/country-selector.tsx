"use client"

import * as React from "react"
import { useNavigate } from "@tanstack/react-router"
import {
  IconFlag,
} from "@tabler/icons-react"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
} from "@/components/ui/combobox"

interface Country {
  id: string
  code: string
  name: string
  region: string
  incomeLevel: string
}

interface CountrySelectorProps {
  countries: Array<Country>
  selectedCountry: string
}

const STORAGE_KEY = "global-indicies-selected-country"
const DEFAULT_COUNTRY = "IND"

/**
 * Get stored country from localStorage
 */
export function getStoredCountry(): string {
  if (typeof window === "undefined") return DEFAULT_COUNTRY
  return localStorage.getItem(STORAGE_KEY) || DEFAULT_COUNTRY
}

/**
 * Format region name for display
 */
function formatRegion(region: string): string {
  return region
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

/**
 * Group countries by region for organized display
 */
function groupCountriesByRegion(countries: Array<Country>): Map<string, Array<Country>> {
  const grouped = new Map<string, Array<Country>>()
  
  for (const country of countries) {
    const region = country.region || "Other"
    if (!grouped.has(region)) {
      grouped.set(region, [])
    }
    grouped.get(region)!.push(country)
  }
  
  // Sort regions alphabetically
  return new Map([...grouped.entries()].sort((a, b) => a[0].localeCompare(b[0])))
}

export function CountrySelector({ countries, selectedCountry }: CountrySelectorProps) {
  const navigate = useNavigate()
  
  const selectedCountryData = countries.find((c) => c.code === selectedCountry)
  const [inputValue, setInputValue] = React.useState(selectedCountryData?.name || "")

  const handleCountryChange = React.useCallback(
    (value: string | null) => {
      if (value) {
        localStorage.setItem(STORAGE_KEY, value)
        void navigate({
          to: ".",
          search: (prev: Record<string, unknown>) => ({ ...prev, country: value }),
        })
      }
    },
    [navigate]
  )

  // Update input value when selected country changes
  React.useEffect(() => {
    const country = countries.find((c) => c.code === selectedCountry)
    if (country) {
      setInputValue(country.name)
    }
  }, [selectedCountry, countries])

  // Filter countries based on input
  const filteredCountries = React.useMemo(() => {
    if (!inputValue) return countries
    const lower = inputValue.toLowerCase()
    return countries.filter(
      (c) =>
        c.name.toLowerCase().includes(lower) ||
        c.code.toLowerCase().includes(lower) ||
        c.region.toLowerCase().includes(lower)
    )
  }, [countries, inputValue])

  // Group filtered countries by region
  const groupedCountries = React.useMemo(
    () => groupCountriesByRegion(filteredCountries),
    [filteredCountries]
  )

  // Determine if we should show grouped view (when not filtering)
  const showGrouped = !inputValue || inputValue === selectedCountryData?.name

  return (
    <Combobox
      value={selectedCountry}
      onValueChange={handleCountryChange}
      inputValue={inputValue}
      onInputValueChange={setInputValue}
    >
      <ComboboxInput
        placeholder="Select country..."
        className="w-32 sm:w-56"
        showClear={false}
        aria-label="Select country"
      />
      <ComboboxContent className="max-h-80">
        <ComboboxList>
          {showGrouped ? (
            // Grouped view by region
            Array.from(groupedCountries.entries()).map(([region, regionCountries]) => (
              <ComboboxGroup key={region}>
                <ComboboxLabel>{formatRegion(region)}</ComboboxLabel>
                {regionCountries.map((country) => (
                  <ComboboxItem key={country.code} value={country.code}>
                    <IconFlag className="mr-2 size-4 text-muted-foreground/50" />
                    <span className="font-medium">{country.name}</span>
                    <span className="text-muted-foreground ml-auto text-xs">
                      {country.code}
                    </span>
                  </ComboboxItem>
                ))}
              </ComboboxGroup>
            ))
          ) : (
            // Flat filtered view
            filteredCountries.map((country) => (
              <ComboboxItem key={country.code} value={country.code}>
                <IconFlag className="mr-2 size-4 text-muted-foreground/50" />
                <div className="flex flex-col">
                  <span className="font-medium">{country.name}</span>
                  <span className="text-muted-foreground text-xs">
                    {formatRegion(country.region)}
                  </span>
                </div>
                <span className="text-muted-foreground ml-auto text-xs">
                  {country.code}
                </span>
              </ComboboxItem>
            ))
          )}
        </ComboboxList>
        <ComboboxEmpty>No countries found</ComboboxEmpty>
      </ComboboxContent>
    </Combobox>
  )
}
