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
                setData(res.data.data)
        })
    }, [])

    return (
        <>
            <div style={{ backgroundImage: `url(${BgLanding})` }}>
                <div className='container mx-auto flex flex-col items-center'>
                    <img src={LogoCisdi} className='mb-24 mt-10' alt='foto' width={200} height={200} />
                    <h1 className='font-bold text-3xl text-white mb-56'>Ayo Belajar Bersama di Health Learning Platform!</h1>
                </div>
                <div className='w-full py-24 bg-gray-100'>
                    <div className='grid md:grid-cols-3 mb-12 gap-x-8 gap-y-5 mx-auto' style={{ width: 'fit-content' }}>
                        {data.map((data, index) => {
                            let foto = `${process.env.REACT_APP_IMAGE_URL}/${data.cover_image}`;
                            if(data.id <= 3){
                                return <CardLanding foto={foto} id={index} judul={data.title} deskripsi={data.description} key={index} />
                            }
                        })}
                    </div>
                    <div className='text-center'>
                        <Link to='/login-option' id="login">
                            <span className='flex-1 text-white bg-red-600 p-4 px-28 rounded-lg w-56 transition duration-300 ease-in-out hover:bg-gray-100 hover:text-red-600 hover:border-red-600 border-2' data-testid="masuk">Masuk</span>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default LandingPage;
