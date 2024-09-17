'use client'

import { SearchResults } from './search-results'
import { DefaultSkeleton } from './default-skeleton'
import { SearchResultsImageSection } from './search-results-image'
import { Section } from './section'
import { ToolBadge } from './tool-badge'
import type { SearchResults as TypeSearchResults } from '@/lib/types'
import { StreamableValue, useStreamableValue } from 'ai/rsc'

export type SearchSectionProps = {
  result?: StreamableValue<string>
  includeDomains?: string[]
}

export function SearchSection({ result, includeDomains }: SearchSectionProps) {
  const [data, error, pending] = useStreamableValue(result)
  const searchResults: TypeSearchResults = data ? JSON.parse(data) : undefined
  const includeDomainsString = includeDomains
    ? ` [${includeDomains.join(', ')}]`
    : ''

  return (
    <div>
      {!pending && data ? (
        <>
          <Section size="sm" className="pt-2 pb-0">
            <ToolBadge tool="search">{`${searchResults.query}${includeDomainsString}`}</ToolBadge>
          </Section>

          {/* Conteneur avec flexbox pour afficher deux colonnes */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Colonne de gauche : Images */}
            <div className="lg:w-1/3 w-full">
              {searchResults.images && searchResults.images.length > 0 && (
                <Section title="Images">
                  <SearchResultsImageSection
                    images={searchResults.images}
                    query={searchResults.query}
                  />
                </Section>
              )}
            </div>

            {/* Colonne de droite : Sources */}
            <div className="lg:w-2/3 w-full">
              <Section title="Sources">
                <SearchResults results={searchResults.results} />
              </Section>
            </div>
          </div>
        </>
      ) : (
        <DefaultSkeleton />
      )}
    </div>
  )
}
