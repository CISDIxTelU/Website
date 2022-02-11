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
            setData(data)
        })
    }, [])
    return (
        <>
            <div style={{ backgroundImage: `url(${BgLanding})` }}>
                <div className='container mx-auto flex flex-col items-center'>
                    <img src={LogoCisdi} className='mb-24 mt-10' alt='foto' width={200} height={200} />
                    <h1 className='font-bold text-3xl text-white mb-56'>Ayo Belajar Bersama di CISDI!</h1>
                </div>
                <div className='w-full py-12 bg-gray-100'>
                    <div className='grid md:grid-cols-3 mb-12 gap-x-8 mx-auto' style={{ width: 'fit-content' }}>
                        {data.slice(0, 3).map((data) => {
                            let foto = `${process.env.REACT_APP_IMAGE_URL}/${data.cover_image}`;
                            return <CardLanding foto={foto} judul={data.title} />
                        })}
                    </div>
                    <div className='text-center'>
                        <Link to='/login-option'>
                            <a href className='flex-1 text-white bg-red-600 p-4 px-28 rounded-lg w-56 transition duration-300 ease-in-out hover:bg-gray-100 hover:text-red-600 hover:border-red-600 border-2'>Masuk</a>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default LandingPage;
