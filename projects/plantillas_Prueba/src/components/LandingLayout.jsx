export default function LandingLayout({ children }) {
  return (
    <>
      <header>
        <h1>Mi Landing Page</h1>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>&copy; 2025 Mi Empresa</p>
      </footer>
    </>
  )
}
