export default function RootLayout({
  children,
  result // Assurez-vous de passer "result" en tant que prop ou de le récupérer dynamiquement ici.
}: Readonly<{
  children: React.ReactNode
  result: any // Assurez-vous que le type correspond à celui attendu dans Sidebar.
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={cn('font-sans antialiased', fontSans.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppStateProvider>
            <Header />
            <div className="flex">
              {/* Sidebar gauche - Masquée sur petits écrans */}
              <div className="hidden lg:flex">
                <Sidebar result={result} />
              </div>

              {/* Contenu central - S'ajuste aux marges sur grands écrans */}
              <main className="flex-1 ml-0 lg:ml-[300px] mr-0 lg:mr-[300px] w-full">
                {children}
              </main>

              {/* Sidebar droite - Masquée sur petits écrans */}
              <div className="hidden lg:flex">
                <RightSidebar />
              </div>
            </div>
            <Footer />
            <Toaster />
          </AppStateProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
