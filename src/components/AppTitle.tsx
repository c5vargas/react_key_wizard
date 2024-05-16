import { KeyIcon } from "./Icons"

function AppTitle() {
	return (
		<header className="flex justify-center items-center text-gray-50 mt-2 mb-4">
			<KeyIcon className="h-8 w-8 sm:h-10 sm:w-10" />
			<h1 className="text-2xl sm:text-4xl italic font-semibold">iKey</h1>
		</header>
	)
}

export default AppTitle