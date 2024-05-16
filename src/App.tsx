import authJSON from "./mocks/auth.json"
import FooterNav from "./components/FooterNav"
import {Outlet} from "react-router-dom"
import {useAuth} from "./context/AuthContext"
import {useEffect} from "react"

function App() {
  const {dispatch} = useAuth()

  useEffect(() => {
		const {id, name, email, passwords} = authJSON
    dispatch({type: 'setAuth', payload: {id, name, email}})
		dispatch({type: 'setPasswords', payload: passwords})
  }, [])

  return (
    <main className="bg-neutral-800">
      <div className="container mx-auto">
        <section className="min-h-screen p-2 pb-20">
          <Outlet />
        </section>
        <FooterNav />
      </div>
    </main>
  )
}

export default App
