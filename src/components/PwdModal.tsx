import { useEffect, useState } from "react";
import { Password } from "../types";
import { CloneIcon, DeleteIcon, EyeIcon, OpenIcon } from "./Icons";
import { handleCopy, handleOpen } from "../utils";

interface ModalProps {
	item: Password,
	onClose: () => void
}

interface InputContainerProps {
	type: string,
	label: string,
	canModify?: boolean,
	field: string,
	inputVal: string,
	onChange: (key: string, value: string) => void
}

interface ButtonActionProps {
	icon: JSX.Element,
	color?: string,
	label: string,
	onClick: () => void
}

function PwdModal({item, onClose}: ModalProps) {
	const [canModify, setCanModify] = useState<boolean>(false)
	const [fields, setFields] = useState<Password|null>(null)

	useEffect(() => {
		setFields(item)

		if(item.id === "new")
			setCanModify(true)
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
				<button className="h-10 px-4 duration-150 text-gray-200 hover:bg-gray-600" onClick={onClose}>
					Cerrar
				</button>
				<h2 className="text-gray-200">Ver elemento</h2>
				<button className="h-10 px-4 duration-150 text-gray-200 hover:bg-gray-600" onClick={handleEdit}>
					{ canModify ? "Guardar" : "Editar" }
				</button>
			</header>

			<section className="p-4">
				<h3 className="uppercase text-sm text-gray-200 mb-2">Información del elemento</h3>
				<form onSubmit={handleSubmit}>
					<InputContainer label="Nombre" field="name" type="text" canModify={canModify} inputVal={fields.name} onChange={handleChange} />
					<InputContainer label="Usuario" field="username" type="text" canModify={canModify} inputVal={fields.username} onChange={handleChange} />
					<InputContainer label="Contraseña" field="password" type="password" canModify={canModify} inputVal={fields.password} onChange={handleChange} />
					<InputContainer label="Web" field="uri" type="text" canModify={canModify} inputVal={fields.uri} onChange={handleChange} />	
				</form>

				<div className="grid gap-2 mt-10">
					<ButtonAction label="Clonar elemento" icon={<CloneIcon />} onClick={console.log} />
					<ButtonAction label="Eliminar elemento" color="text-red-400" icon={<DeleteIcon />} onClick={console.log} />
				</div>
			</section>
		</article>
	)
}

function ButtonAction({icon, color = 'text-blue-400', label, onClick}: ButtonActionProps) {
	const btnClass = `${color} bg-gray-700 w-full rounded-md h-12 px-2 gap-1 flex items-center duration-150 hover:bg-gray-600`
	return (
		<button 
			className={btnClass} 
			onClick={onClick}>
			{icon}
			<span className="font-semibold">{label}</span>
		</button>
	)
}

function InputContainer({type = 'text', label, canModify = false, field, inputVal, onChange}: InputContainerProps) {
	const [inputType, setInputType] = useState(type)
	
	const handleInputType = () => {
		setInputType(inputType === 'text' ? 'password' : 'text')
	}
	
	return (
		<article className="bg-gray-700 rounded-md ps-2 pe-4 py-2 duration-150 hover:bg-gray-600 mb-2 flex items-center">
			<div className="w-full">
				<label className="text-xs text-gray-200 leading-4">{label}</label>
				<input 
					type={inputType}
					placeholder="Introduce la contraseña" 
					className="text-gray-200 w-full bg-transparent focus:outline-0" 
					defaultValue={inputVal}
					disabled={!canModify} 
					onChange={(ev) => onChange(field, ev.target.value)} />
			</div>

			<div className="flex items-center gap-2 ms-auto">
				{ type === 'password' && 
					<button type="button" className="w-6 h-6" onClick={handleInputType}>
						<EyeIcon className="text-gray-400 duration-150 hover:text-gray-50" />
					</button>
				}

				{ field === 'uri' && 
					<button type="button" className="w-6 h-6" onClick={(ev) => handleOpen(ev, inputVal)}>
						<OpenIcon className="text-gray-400 duration-150 hover:text-gray-50" />
					</button>
				}

				<button type="button" className="w-6 h-6 [&>*]:" onClick={(ev) => handleCopy(ev, inputVal)}>
					<CloneIcon className="text-gray-400 duration-150 hover:text-gray-50" />
				</button>
			</div>
		</article>
	)
}

export default PwdModal