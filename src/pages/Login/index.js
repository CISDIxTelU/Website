import React, { useState } from 'react'
import { BgLogin, LogoLogin } from '../../assets'
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Login({ setToken }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();

        const config = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',

            }
        }
        axios.post('https://api.storeximi.com/api/login', {
            phone_number: username,
            password: password,
        }, config).then(res => {
            localStorage.setItem('token', res.data.access_token)
            navigate('/courses');
            console.log('success');
        }).catch(error => {
            let errorData = error.response.data.message;
            if (errorData) {
                setError(true);
                setMessage(errorData);
            }
        })
    }

    return (
        <div className="bg-blue-600 h-screen relative bg-cover bg-no-repeat" style={{ backgroundImage: `url(${BgLogin})` }}>
            {/* <img src={BgLogin} className="z-0 absolute top-0 left-0 object-cover w-full h-full " /> */}
            <div className="container mx-auto z-50 pt-10">
                <img src={LogoLogin} className="object-cover mx-auto w-40 mb-14" />
                <div class="filter drop-shadow-lg bg-white mx-auto rounded-md px-5 py-11 w-4/12">
                    {error === true ? <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-3" role="alert">
                        <span class="block sm:inline">{message}</span>
                        <span class="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={()=> { setError(false) }}>
                            <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                        </span>
                    </div> : ''}
                    <div className="mb-11">
                        <h3 className="font-medium text-center text-xl">Welcome Back</h3>
                        <p className="text-gray-400 text-center">Enter your credentials to access your account.</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="border rounded-lg flex wrap items-center content-center mb-5">
                            <FaEnvelope className="text-blue-600 mx-5 " />
                            <input type="text" onChange={e => setUsername(e.target.value)} className="appearance-none w-full h-full p-3 rounded-lg focus:outline-none" placeholder="Enter your phone number"></input>
                        </div>
                        <div className="border rounded-lg flex wrap items-center content-center mb-11">
                            <FaLock className="text-blue-600 mx-5 " />
                            <input type="password" onChange={e => setPassword(e.target.value)} className="appearance-none w-full h-full p-3 rounded-lg focus:outline-none" placeholder="Enter your password"></input>
                        </div>
                        <button className="bg-blue-600 rounded-lg p-2 w-full hover:bg-blue-700 text-white" type="submit" onSubmit={handleSubmit}>Sign In</button>
                    </form>
                </div>
                <p className="text-white text-center mt-20 text-gray-50">created with ♥️ by ZDF.</p>
            </div>
        </div>
    )
}

export default Login