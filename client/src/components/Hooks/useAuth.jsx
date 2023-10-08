import { useContext } from "react";
import { authContext } from "../../context/AuthContext";

const useAuth = () => {
	const auth = useContext(authContext);
	return auth;
};

export default useAuth;
