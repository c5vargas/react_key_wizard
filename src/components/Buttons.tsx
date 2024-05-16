interface Props {
	icon: JSX.Element
	onClick: () => void
}

export function ButtonIcon({ icon, onClick }: Props) {
	return (
		<button className="bg-gray-700 h-10 w-10 rounded border border-gray-600 duration-150 hover:bg-gray-600" onClick={onClick}>
			<figure className="text-gray-50 mx-auto flex items-center justify-center [&>*]:w-8 [&>*]:h-8">
				{ icon }
			</figure>
		</button>
	)
}