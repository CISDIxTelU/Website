import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BgLanding, LogoCisdi } from '../../assets';
import { Footer } from '../../components';
import CardLanding from '../../components/CardLanding';

const BASE_URL = process.env.REACT_APP_BASE_URL;

function LandingPage() {
    const [data, setData] = useState([])
    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
        axios.get(`${BASE_URL}/landing`, config).then(res => {
            const data = res.data.data
            console.log(data)
            setData(data)
        })
    }, [])
    return (
        <>
            <div style={{ backgroundImage: `url(${BgLanding})` }}>
                <div className='container mx-auto flex flex-col items-center relative'>
                    <img src={LogoCisdi} className='mb-24 mt-10' width={200} height={200} />
                    <h1 className='font-bold text-3xl text-white mb-56'>Ayo Belajar Bersama di CISDI!</h1>
                    <div className='p-10 w-3/4 absolute -bottom-80 flex gap-x-8 justify-center'>
                        {data.map((data) => {
                            let foto = `${process.env.REACT_APP_IMAGE_URL}/${data.cover_image}`;
                            return <CardLanding foto={foto} judul={data.title} />
                        })}
                    </div>
                </div>
            </div>
            <div className='h-screen w-full flex justify-center items-center'>
                <Link to='/login'>
                    <a className='flex-1 text-white bg-red-600 p-4 px-28 rounded-lg w-56 transition duration-300 ease-in-out hover:bg-gray-100 hover:text-red-600 hover:border-red-600 border-2'>Login</a>
                </Link>
            </div>
            <Footer />
        </>
    )
}

export default LandingPage;
