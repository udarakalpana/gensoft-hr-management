import {useSelector} from "react-redux";

export const checkUserAuthenticate = () => {
    return useSelector((state) => state.user.isAuthenticated)
}
