export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
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
              
              {/* Contenu central - Espacement de 10px à gauche et 50px en haut */}
              <main className="flex-1 ml-[10px] mr-0 lg:mr-[300px] w-full mt-[50px]">
                {children}
              </main>

              {/* Sidebar droite - Masquée sur petits écrans */}
              <div className="hidden lg:flex mt-[50px]">
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
