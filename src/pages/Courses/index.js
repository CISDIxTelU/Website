import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Lottie from "lottie-react";
import { animation } from '../../assets';
import { Card, Carousel } from '../../components';

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
            if (e) {
                setLoading(false);
                setData(e.data.data);
            }
        }).catch(e => {
        })
    }, []);
    return (
        <div className='bg-gray-50'>
            {loading ?
                <div className="bg-white w-full h-screen absolute top-0 z-50 flex justify-center items-center">
                    <div className="w-40">
                        <Lottie animationData={animation} />
                    </div>
                </div>
                :
                <>
                    <div className="bg-red-600 h-full flex flex-col wrap items-center justify-center">
                        <Carousel />
                    </div>

                    <div className="container p-3 mx-auto mb-10 h-full">
                        <p className='font-black text-4xl mb-4 mt-8'>Halo!</p>
                        <p className='text-lg font-normal'>Selamat datang di Health Learning Platform. Mau belajar apa kali ini?</p>
                        <h2 className="text-3xl my-5 font-bold">Topik Pembahasan</h2>
                        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
                            {data.map((obj, idx) => {
                                let foto = `${process.env.REACT_APP_IMAGE_URL}/${obj.cover_image}`;
                                return (
                                    <Card foto={foto} key={idx} deskripsi={obj.description} judul={obj.title} materi={obj.author} linkTo={`/detail-course/${obj.id}`} />
                                )
                            })}
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Courses
