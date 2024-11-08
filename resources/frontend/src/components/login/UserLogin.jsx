import {useEffect, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {storeAuthUser} from "../../utlities/state/UserSignInSlice.js";
import {useNavigate} from "react-router-dom";
import {checkUserAuthenticate} from "../../utlities/state/common.js";
import {userSignIn} from "../../utlities/api/user/UserSignIn.js";
const UserLogin = () => {
    const [loginDetails, setLoginDetails] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isAuthenticated = checkUserAuthenticate()

    useEffect(() => {
       if (isAuthenticated) {
           navigate('/dashboard')
       }
    }, [isAuthenticated]);

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setLoginDetails((prevState) => ({
        ...prevState,
            [name]: value
        }))
    }

    const signInSubmit = async (event) => {
        event.preventDefault()

        await  dispatch(userSignIn({loginDetails, setError}))
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={signInSubmit}>
                            <div>
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                    email</label>
                                <input type="email" name="email" id="email"
                                       className="input-field"
                                       onChange={handleInputChange}
                                       placeholder="name@company.com" required=""/>
                            </div>
                            <div>
                                <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" onChange={handleInputChange} name="password" id="password" placeholder="••••••••"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       required=""/>
                            </div>
                            <button
                                type="submit"
                                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Sign
                                in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserLogin;
