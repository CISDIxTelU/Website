import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { BannerCourse, BannerHero } from '../../assets'
import Lottie from 'reactjs-lottie';
import { animation } from '../../assets';
import { Card } from '../../components';

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

        console.log(localStorage.getItem('token'))
        axios.post('https://api.storeximi.com/api/topic', {}, config).then(e => {
            setData(e.data.data);
            setLoading(false);
        }).catch(e => {
            console.log(e)
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
                <div className="bg-red-600 relative h-96 flex flex-col wrap items-center justify-center" style={{ height: '516px' }}>
                    <img className='absolute bottom-0 z-0 w-full' src={BannerCourse} alt='banner course' />
                    <div className='p-3 w-full z-40 flex md:justify-center'>
                        <div className=' hidden md:flex md:w-1/2 md:p-3'>
                            <img src={BannerHero} className='w-96 mx-auto' alt='banner hero' />
                        </div>
                        <div className='md:w-1/2 w-full p-3 flex flex-col sm:justify-center sm:items-center'>
                                <h2 className='text-white font-bold mb-3 text-3xl md:text-5xl'>Belajar Dimana Saja!</h2>
                                <p className='text-white font-medium w-72 md:w-4/6 text-xl md:text-2xl'>Kalian dapat belajar di mana saja dan kapan saja.</p>
                        </div>
                    </div>
                </div>

                <div className="container p-3 mx-auto mb-10">
                    <h2 className="text-3xl my-5 font-bold">Topik Pembahasan</h2>
                    <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
                        {data.map(obj => {
                            let foto = `https://api.storeximi.com/storage/${obj.cover_image}`;
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
