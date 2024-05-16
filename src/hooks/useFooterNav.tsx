import { useNavigate } from "react-router-dom"
import { FolderIcon, KeyIcon, PuzzleIcon, SettingsIcon } from "../components/Icons"

function useFooterNav() {
	const navigate = useNavigate()

	const router = [
		{
			label: "Pestaña",
			icon: <FolderIcon className="h-8 w-8" />,
			path: "/actual"
		},
		{
			label: "Agenda",
			icon: <KeyIcon className="h-8 w-8" />,
			path: "/personal"
		},
		{
			label: "Generador",
			icon: <PuzzleIcon className="h-8 w-8" />,
			path: "/generate"
		},
		{
			label: "Ajustes",
			icon: <SettingsIcon className="h-8 w-8" />,
			path: "/settings"
		}
	]

	const handleClick = (route: string) => {
		navigate(route)
	}

	return {
		router,
		handleClick,
	}
}

export default useFooterNav