import {Navigate, Route, Routes} from "react-router-dom";
import UserLogin from "../../components/login/UserLogin.jsx";
import {useSelector} from "react-redux";
import Dashboard from "../../components/dashboard/Dashboard.jsx";
import {checkUserAuthenticate} from "../state/common.js";

const Routers = () => {

    return (
        <Routes>
            <Route path='/' element={<UserLogin />} />
            {checkUserAuthenticate() ?
                <Route path='/dashboard' element={<Dashboard />} />
                :  <Route path='/dashboard' element={<Navigate to='/' replace />} /> }
        </Routes>
    );
};

export default Routers;
