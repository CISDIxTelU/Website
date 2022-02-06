import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Banner1 } from '../../assets'
import Lottie from 'reactjs-lottie';
import { animation } from '../../assets';
import { Card } from '../../components';

const BASE_URL = process.env.REACT_APP_BASE_URL;

function Courses() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }

        axios.get(`${BASE_URL}/topic`, config).then(e => {
            setData(e.data.data);
            setLoading(false);
        }).catch(e => {
        })
    }, []);

    if (loading) {
        return (
            <div className="bg-white w-full h-screen absolute top-0 z-50 flex justify-center items-center">
                <div className="w-40">
                    <Lottie options={{
                        animationData: animation,
                    }} className="" />
                </div>
            </div>
        )
    } else {
        return (
            <div className='bg-gray-50'>
                <div className="bg-red-600 h-full flex flex-col wrap items-center justify-center">
                        <img src={Banner1} alt='banner course' />
                </div>

                <div className="container p-3 mx-auto mb-10 h-full">
                    <p className='font-bold text-4xl mb-4 mt-8'>Hai, </p>
                    <p className='text-lg font-normal'>Selamat datang di Health Learning Platform. Mau belajar apa kali ini?</p>
                    <h2 className="text-3xl my-5 font-bold">Topik Pembahasan</h2>
                    <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
                        {data.map(obj => {
                            let foto = `${process.env.REACT_APP_IMAGE_URL}/${obj.cover_image}`;
                            return (
                                <Card foto={foto} judul={obj.title} materi={obj.author} linkTo={`/detail-course/${obj.id}`} />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Courses
