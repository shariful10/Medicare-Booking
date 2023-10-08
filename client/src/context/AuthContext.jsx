import { createContext, useReducer } from "react";

const initialState = {
	user: null,
	roll: null,
	token: null,
};

export const authContext = createContext(initialState);

const authReducer = (state, action) => {
	switch (action.type) {
		case "LOGIN_START":
			return {
				user: null,
				role: null,
				token: null,
			};

		case "LOGIN_SUCCESS":
			return {
				user: action.payload.user,
				role: action.payload.role,
				token: action.payload.token,
			};

		case "LOGOUT":
			return {
				user: null,
				role: null,
				token: null,
			};

		default:
			return state;
	}
};

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, initialState);
	return (
		<authContext.Provider
			value={{
				user: state.user,
				role: state.role,
				token: state.token,
			}}
		>
			{children}
		</authContext.Provider>
	);
};
