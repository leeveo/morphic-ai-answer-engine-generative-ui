export default function Layout() {
  return (
    <div className="grid grid-cols-2 gap-4 h-screen">
      {/* Colonne de gauche */}
      <div className="bg-gray-100 p-4 overflow-y-auto">
        <SearchResultsImage />
      </div>

      {/* Colonne de droite */}
      <div className="flex flex-col space-y-4 p-4 overflow-y-auto">
        <SearchRelated />
        <SearchResults />
        <SearchSection />
        <AnswerSection />
        <AnswerSectionGenerated />
        <ChatMessages />
      </div>
    </div>
  );
}
