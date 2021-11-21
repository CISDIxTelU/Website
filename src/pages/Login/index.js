import React, { useState } from 'react'
import { BgLogin, LogoLogin } from '../../assets'
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Login({ setToken }) {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();

        axios.post('https://api.storeximi.com/api/login', {
            phone_number: username,
            password: password,
        }).then(res => {
            localStorage.setItem('token', res.data.access_token)
            navigate('/courses');
            console.log('success')
        }).catch(e => {
            console.log(e);
        })
    }

    return (
        <div className="bg-blue-600 h-screen relative bg-cover bg-no-repeat" style={{ backgroundImage: `url(${BgLogin})` }}>
            {/* <img src={BgLogin} className="z-0 absolute top-0 left-0 object-cover w-full h-full " /> */}
            <div className="container mx-auto z-50 pt-10">
                <img src={LogoLogin} className="object-cover mx-auto w-40 mb-14" />
                <div class="filter drop-shadow-lg bg-white mx-auto rounded-md px-5 py-14 w-4/12">
                    <div className="mb-11">
                        <h3 className="font-medium text-center text-xl">Welcome Back</h3>
                        <p className="text-gray-400 text-center">Enter your credentials to access your account.</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="border rounded-lg flex wrap items-center content-center mb-5">
                            <FaEnvelope className="text-blue-600 mx-5 " />
                            <input type="text" onChange={e => setUsername(e.target.value)} className="appearance-none w-full h-full p-3 rounded-lg focus:outline-none" placeholder="Enter your username"></input>
                        </div>
                        <div className="border rounded-lg flex wrap items-center content-center mb-11">
                            <FaLock className="text-blue-600 mx-5 " />
                            <input type="password" onChange={e => setPassword(e.target.value)} className="appearance-none w-full h-full p-3 rounded-lg focus:outline-none" placeholder="Enter your password"></input>
                        </div>
                        <button className="bg-blue-600 rounded-lg p-2 w-full hover:bg-blue-700 text-white" type="submit" onSubmit={handleSubmit}>Sign In</button>
                    </form>
                </div>
                <p className="text-white text-center mt-20 text-gray-50">created with ♥️ by OfflanerTeam.</p>
            </div>
        </div>
    )
}

export default Login