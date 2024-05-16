interface Props {
	type?: string,
	placeholder?: string,
	value?: string,
	icon?: JSX.Element,
	onChange: (ev: React.ChangeEvent) => void
}

function InputBasic({ type = 'text', placeholder = '', icon, value, onChange }: Props) {
	return (
		<div className="relative w-full">
			<input 
				type={type} 
				placeholder={placeholder} 
				value={value} 
				className="w-full text-gray-200 border rounded h-10 ps-2 bg-gray-700 border-gray-600 focus:outline-0" 
				onChange={onChange} 
			/>
			
			<figure className="absolute end-0 h-10 w-6 mx-2 top-0 text-gray-400 flex items-center [&>*]:h-6 [&>*]:w-6">
				{ icon && icon }
			</figure>
		</div>
	)
}

export default InputBasic