import useFooterNav from "../hooks/useFooterNav"
import {useAuth} from "../context/AuthContext"

function FooterNav() {
	const {router, handleClick} = useFooterNav()
	const {
		state: {auth}
	} = useAuth()

	return auth && (
		<footer className="fixed bottom-0 start-0 w-full">
			<nav>
				<ul className="grid grid-cols-4 bg-gray-800 text-center text-gray-400">
					{ router.map(el => (
						<li 
							key={el.label} 
							className="h-16 flex flex-col text-center items-center justify-center cursor-pointer duration-150 hover:bg-gray-700 hover:text-gray-100" 
							onClick={() => handleClick(el.path)}>
							{el.icon}
							<span className="text-sm">
								{el.label}
							</span>
						</li>
					))}
				</ul>
			</nav>
		</footer>
	)
}

export default FooterNav