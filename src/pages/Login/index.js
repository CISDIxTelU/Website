import React, { useState } from 'react'
import Lottie from "lottie-react";
import { animation, BgLogin, LogoCisdi } from '../../assets'
import { FaAt, FaLock } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);


    const navigate = useNavigate();

    const handleSubmit = async e => {
        setLoading(true);
        e.preventDefault();

        const config = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }
        axios.post(`${BASE_URL}/login`, {
            username: username,
            password: password,
        }, config).then(res => {
            localStorage.setItem('token', res.data.access_token)
            localStorage.setItem('name', res.data.name)
            navigate('/courses');
        }).catch(res => {
            setLoading(false);
            let errorData = res.response.data.message;
            if (errorData) {
                setError(true);
                setMessage(errorData);
            }
        })
    }
    if (loading) {
        return (
            <div data-testid='loading' className="bg-white w-full h-screen absolute top-0 z-50 flex justify-center items-center">
                <div className="w-40">
                    <Lottie animationData={animation} loop={true} />
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="h-screen relative bg-cover bg-no-repeat flex items-center" style={{ backgroundImage: `url(${BgLogin})`, backgroundColor: '#404042' }}>
                <div className="container mx-auto z-50 mt-10 pt-10 h-2/12">
                    <img src={LogoCisdi} className="object-cover mx-auto w-40" alt='logo-cisdi' />
                    <div className="filter mx-auto rounded-md py-11 w-64 mt-5 lg:w-4/12">
                        {error === true ? <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-3" role="alert">
                            <span className="block sm:inline" id="message">{message}</span>
                            <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => { setError(false) }}>
                                <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                            </span>
                        </div> : ''}
                        <form onSubmit={handleSubmit}>
                            <div className="border rounded-lg flex wrap items-center content-center mb-5">
                                <FaAt className="text-white mx-5 " />
                                <input type="text" id="email" onChange={e => setUsername(e.target.value)} className="appearance-none bg-transparent text-white w-full h-full p-3 rounded-lg focus:outline-none text-sm lg:text-base" placeholder="Enter your username"></input>
                            </div>
                            <div className="border rounded-lg flex wrap items-center content-center mb-11">
                                <FaLock className="text-white mx-5" />
                                <input id="password" type="password" onChange={e => setPassword(e.target.value)} className="appearance-none bg-transparent text-white w-full h-full p-3 rounded-lg focus:outline-none text-sm lg:text-base" placeholder="Enter your password"></input>
                            </div>
                            <button className="bg-white text-red-600 rounded-lg p-2 w-full mb-5 hover:bg-red-700 hover:text-white" id="login" type="submit" onSubmit={handleSubmit}>Masuk</button>
                            <div className='text-right'>
                                <Link to='/forgot-password'>
                                    <button className='text-base hover:underline text-white'>Lupa password?</button>
                                </Link>
                            </div>
                        </form>
                    </div>
                    <p className="text-white text-center mt-20 text-gray-50">created with ♥️ by ZDF.</p>
                </div>
            </div>
        )
    }
}

export default Login