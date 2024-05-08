import { LOGIN, LOGOUT } from "./type";

export const login = () => {
    return {
        type: LOGIN,
    };
};

export const logout = () => {
    return {
        type: LOGOUT,
    };
};
