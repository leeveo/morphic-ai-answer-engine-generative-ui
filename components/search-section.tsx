'use client';

import { SearchResults } from './search-results';
import { DefaultSkeleton } from './default-skeleton';
import { SearchResultsImageSection } from './search-results-image';
import { Section } from './section';
import { ToolBadge } from './tool-badge';
import type { SearchResults as TypeSearchResults } from '@/lib/types';
import { StreamableValue, useStreamableValue } from 'ai/rsc';

export type SearchSectionProps = {
  result?: StreamableValue<string>;
  includeDomains?: string[];
};

export function SearchResultsSection({ result, includeDomains }: SearchSectionProps) {
  const [data, error, pending] = useStreamableValue(result);
  const searchResults = data ? JSON.parse(data) : undefined;
  const includeDomainsString = includeDomains ? ` [${includeDomains.join(', ')}]` : '';

  return (
    <div>
      {!pending && data ? (
        <>
          <Section size="sm" className="pt-2 pb-0">
            <ToolBadge tool="search">{`${searchResults?.query}${includeDomainsString}`}</ToolBadge>
          </Section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
            {searchResults?.images && searchResults.images.length > 0 && (
              <div className="lg:col-span-1">
                <Section title="Images">
                  <SearchResultsImageSection
                    images={searchResults.images}
                    query={searchResults.query}
                  />
                </Section>
              </div>
            )}

            <div className={`lg:col-span-${searchResults?.images && searchResults.images.length > 0 ? '2' : '3'}`}>
              <Section title="Sources">
                <SearchResults results={searchResults?.results} />
              </Section>
            </div>
          </div>
        </>
      ) : (
        <DefaultSkeleton />
      )}
    </div>
  );
}