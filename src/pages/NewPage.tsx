import { useNavigate } from "react-router-dom";
import PwdModal from "../components/PwdModal";
import { Password } from "../types";

const initialState = {
	id: "new",
	name: "",
	username: "",
	uri: "",
	password: "",
} as Password

function NewPage() {
	const navigate = useNavigate()
	const item: Password = initialState

	const handleClose = () => {
		navigate("/home")
	}

	return (
		<PwdModal item={item} onClose={handleClose} />
	)
}

export default NewPage