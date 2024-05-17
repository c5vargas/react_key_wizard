export const handleCopy = async(ev: React.MouseEvent<HTMLButtonElement>, txt: string) => {
	ev.stopPropagation()
	await navigator.clipboard.writeText(txt)
	alert("Texto copiado con éxito")
}

export const handleOpen = (ev: React.MouseEvent<HTMLButtonElement>, uri: string) => {
	ev.stopPropagation()
	window.open(uri, "_blank")
}