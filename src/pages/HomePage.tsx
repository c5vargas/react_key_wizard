import InputBasic from "../components/InputBasic"
import {AddIcon,SearchIcon} from "../components/Icons"
import {ButtonIcon} from "../components/Buttons"
import {useAuth} from "../context/AuthContext"
import {useMemo,useState} from "react"
import AppTitle from "../components/AppTitle"
import PwdList from "../components/PwdList"

function HomePage() {
	const [query, setQuery] = useState<string>('')
	const {
		state: {passwords},
	} = useAuth()

	const getPasswords = useMemo(() => {
		return query !== ''
			? passwords?.filter(el => el.name.includes(query) || el.uri.includes(query))
			: passwords
	}, [query, passwords])

	const handleSearch = (ev: React.ChangeEvent) => {
		const qry = ev.currentTarget as HTMLInputElement
		setQuery(qry.value)
	}

	const handleAddNew = () => {

	}

	return (
		<>
			<AppTitle />

			<section className="flex items-center gap-2 mb-6">
				<InputBasic icon={<SearchIcon />} placeholder="Buscar..." value={query} onChange={handleSearch} />
				<ButtonIcon icon={<AddIcon />} onClick={handleAddNew} />
			</section>

			<main className="text-gray-200 h-full">
				<PwdList passwords={getPasswords} />
			</main>
		</>
	)
}

export default HomePage