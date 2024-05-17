import { useState } from "react"
import { KeyIcon } from "../components/Icons"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import InputBasic from "../components/InputBasic"
import AppTitle from "../components/AppTitle"

function LoginPage() {
	const navigate = useNavigate()
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const {
		state: {auth}
	} = useAuth()

	if(auth) {
		navigate('/home')
	}

	const handlePassword = (ev: React.ChangeEvent) => {
		const pwd = ev.currentTarget as HTMLInputElement
		setPassword(pwd.value)
	}

	const handleEmail = (ev: React.ChangeEvent) => {
		const email = ev.currentTarget as HTMLInputElement
		setEmail(email.value)
	}

	const handleSubmit = () => {
		setPassword('')
		setEmail('')
		navigate('/home')
	}

	return (
		<main className="flex flex-col items-center justify-center min-h-screen">
			<form className="h-full w-full max-w-[350px] flex flex-col gap-2 items-center justify-center border-0 sm:border border-gray-700 px-4 py-10 rounded-lg" onSubmit={handleSubmit}>
				<AppTitle />
				<InputBasic value={email} placeholder="Correo electrónico" onChange={handleEmail} />
				<InputBasic value={password} placeholder="Contraseña" icon={<KeyIcon />} type="password" onChange={handlePassword} />
				<button className="bg-cyan-800 w-full rounded h-10 text-gray-50 duration-150 hover:bg-cyan-700">Iniciar sesión</button>
			</form>
		</main>
	)
}

export default LoginPage