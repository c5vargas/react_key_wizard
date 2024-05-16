import { useEffect, useState } from "react";
import { Password } from "../types";

interface ModalProps {
	item: Password,
	onClose: () => void
}

function PwdModal({item, onClose}: ModalProps) {
	const [canModify, setCanModify] = useState<boolean>(false)
	const [fields, setFields] = useState<Password|null>(null)

	useEffect(() => {
		setFields(item)
	}, [item])

	const handleSubmit = () => {
		alert("Form submitted")
	}

	const handleEdit = () => {
		if(canModify)
			alert("submitted changes")

		setCanModify(!canModify)
	}

	const handleChange = (key: string, value: string) => {
		const newState = {...fields, [key]: value} as Password
    
		setFields(newState);
}

	return fields && (
		<article className="fixed top-0 start-0 w-full h-full bg-gray-800 z-10">
			<header className="flex items-center justify-between">
				<button className="h-10 px-4 duration-150 hover:bg-gray-600" onClick={onClose}>
					Cerrar
				</button>
				<h2>Ver elemento</h2>
				<button className="h-10 px-4 duration-150 hover:bg-gray-600" onClick={handleEdit}>
					{ canModify ? "Guardar" : "Editar" }
				</button>
			</header>

			<section className="p-4">
				<h3 className="uppercase text-sm mb-2">Información del elemento</h3>
				<form onSubmit={handleSubmit}>
					<div className="bg-gray-700 rounded-md px-2 py-2 duration-150 hover:bg-gray-600 mb-2">
							<p className="text-xs leading-4">Nombre</p>
							<input 
								type="text" 
								placeholder="Introduce el nombre" 
								className="text-gray-200 w-full bg-transparent focus:outline-0" 
								value={fields.name} 
								readOnly={!canModify} 
								onChange={(ev) => handleChange('name', ev.target.value)} />
					</div>

					<div className="bg-gray-700 rounded-md px-2 py-2 duration-150 hover:bg-gray-600 mb-2">
							<p className="text-xs leading-4">Contraseña</p>
							<input 
								type="password" 
								placeholder="Introduce la contraseña" 
								className="text-gray-200 w-full bg-transparent focus:outline-0" 
								value={fields.password} 
								readOnly={!canModify} 
								onChange={(ev) => handleChange('password', ev.target.value)} />
					</div>
				</form>
			</section>
		</article>
	)
}

export default PwdModal