import {useSelector} from "react-redux";

export const checkUserAuthenticate = () => {
    return useSelector((state) => state.user.isAuthenticated)
}

export const checkUserRole = () => {
    return useSelector((state) => state.user.auth.userRole)
}
