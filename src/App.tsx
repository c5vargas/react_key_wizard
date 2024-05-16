import { Outlet } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext";
import FooterNav from "./components/FooterNav"

function App() {
  return (
    <AuthProvider>
      <main className="min-h-screen p-2 bg-neutral-800 pb-20">
        <Outlet />
      </main>
      <FooterNav />
    </AuthProvider>
  )
}

export default App
