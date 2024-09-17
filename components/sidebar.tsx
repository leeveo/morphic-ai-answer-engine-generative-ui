export async function Sidebar({ result }: { result?: any }) {
  const [data, error, pending] = useStreamableValue(result || null);
  const searchResults = data ? JSON.parse(data) : undefined;

  return (
    <div className="h-screen p-2 fixed top-0 left-0 flex flex-col justify-start pb-24 hidden sm:flex sidebar-container w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4"
         style={{ marginTop: '50px' }}>
      {/* Section pour l'historique */}
      <HistoryContainer location="sidebar" />
      
      {/* Section pour afficher les images du carrousel */}
      {searchResults?.images && searchResults.images.length > 0 && (
        <Section title="Images">
          <SearchResultsImageSection
            images={searchResults.images}
            query={searchResults.query}
          />
        </Section>
      )}
    </div>
  );
}
