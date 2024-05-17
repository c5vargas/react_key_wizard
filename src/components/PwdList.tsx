import { useState } from "react"
import { Password } from "../types"
import { KeyIcon, OpenIcon, UserIcon } from "./Icons"
import { handleCopy, handleOpen } from "../utils"
import PwdModal from "./PwdModal"

function PwdList({passwords}: {passwords: Password[]|null|undefined}) {
	const [active, setActive] = useState<Password|null>(null)

	if(active)
		return <PwdModal item={active} onClose={() => setActive(null)} />

	return passwords && (
		<ul className="[&>li]:mb-1">
			{ passwords.map(el => (
					<PwdListItem key={el.id} onSelect={setActive} password={el} />
				)) }
		</ul>
		
	)
}

function PwdListItem({password,onSelect}:{password: Password, onSelect: (el: Password) => void}) {
	const handleSelect = () => {
		onSelect(password)
	}

	return password && (
		<li className="flex items-center gap-2 bg-gray-700 rounded-md p-2 cursor-pointer duration-150 hover:bg-gray-600" key={password.id} onClick={handleSelect}>
			<figure className="flex items-center justify-center w-6 h-6 bg-gray-600 rounded-full object-contain">
				<img src={`https://s2.googleusercontent.com/s2/favicons?domain=${password.uri}`} alt="" />
			</figure>

			<article>
				<p className="text-sm leading-4">{password.uri}</p>
				<p className="text-[12px] leading-4 text-gray-400">{password.name}</p>
			</article>

			<div className="flex items-center gap-2 ms-auto">
				<button className="w-6 h-6" onClick={(ev) => handleOpen(ev, password.uri)}>
					<OpenIcon className="text-gray-400 duration-150 hover:text-gray-50" />
				</button>
				<button className="w-6 h-6 [&>*]:" onClick={(ev) => handleCopy(ev, password.name)}>
					<UserIcon className="text-gray-400 duration-150 hover:text-gray-50" />
				</button>
				<button className="w-6 h-6 [&>*]:" onClick={(ev) => handleCopy(ev, password.password)}>
					<KeyIcon className="text-gray-400 duration-150 hover:text-gray-50" />
				</button>
			</div>
		</li>
	)
}

export default PwdList