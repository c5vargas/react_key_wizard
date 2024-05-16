import authJSON from "../mocks/auth.json"
import InputBasic from "../components/InputBasic"
import { AddIcon, KeyIcon, OpenIcon, SearchIcon, UserIcon } from "../components/Icons"
import { ButtonIcon } from "../components/Buttons"
import { useAuth } from "../context/AuthContext"
import { useEffect, useMemo, useState } from "react"
import AppTitle from "../components/AppTitle"

function HomePage() {
	const [query, setQuery] = useState<string>('')
	const {
		state: {passwords},
		dispatch
	} = useAuth()

	const getPasswords = useMemo(() => {
		return query !== ''
			? passwords?.filter(el => el.name.includes(query) || el.uri.includes(query))
			: passwords
	}, [query, passwords])

  useEffect(() => {
		const {id, name, email, passwords} = authJSON
    dispatch({type: 'setAuth', payload: {id, name, email}})
		dispatch({type: 'setPasswords', payload: passwords})
  }, [])

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
				<ul className="[&>li]:mb-1">
					{
						getPasswords && getPasswords.map(el => (
							<li className="flex items-center gap-2 bg-gray-700 rounded-md p-2 cursor-pointer duration-150 hover:bg-gray-600" key={el.id}>
								<figure className="flex items-center justify-center w-6 h-6 bg-gray-600 rounded-full object-contain">
									<img src={`https://s2.googleusercontent.com/s2/favicons?domain=${el.uri}`} alt="" />
								</figure>

								<article>
									<p className="text-sm leading-4">{el.uri}</p>
									<p className="text-[12px] leading-4 text-gray-400">{el.name}</p>
								</article>

								<div className="flex items-center gap-2 ms-auto">
									<button className="w-6 h-6">
										<OpenIcon className="text-gray-400 duration-150 hover:text-gray-50" />
									</button>
									<button className="w-6 h-6 [&>*]:">
										<UserIcon className="text-gray-400 duration-150 hover:text-gray-50" />
									</button>
									<button className="w-6 h-6 [&>*]:">
										<KeyIcon className="text-gray-400 duration-150 hover:text-gray-50" />
									</button>
								</div>
							</li>
						))
					}
				</ul>
			</main>
		</>
	)
}

export default HomePage