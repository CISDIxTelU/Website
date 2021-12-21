import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { BannerCourse, BannerHero, BgFooter, BgLogin, LogoCisdiPrimary } from '../../assets'
import Lottie from 'reactjs-lottie';
import { animation } from '../../assets';
import { Card, Icon } from '../../components'
import { Link } from 'react-router-dom';
import { FaFigma, FaGithub, FaGitlab, FaInstagram, FaWhatsapp } from "react-icons/fa";

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
                    <img className='absolute bottom-0 z-0 w-full' src={BannerCourse} />
                    <div className='p-3 w-full z-40 flex md:justify-center'>
                        <div className=' hidden md:flex md:w-1/2 md:p-3'>
                            <img src={BannerHero} className='w-96 mx-auto' />
                        </div>
                        <div className='md:w-1/2 w-full p-3 flex flex-col sm:justify-center sm:items-center'>
                                <h2 className='text-white font-bold mb-3 text-3xl md:text-5xl'>Belajar Dimana Saja!</h2>
                                <p className='text-white font-medium w-72 md:w-4/6 text-xl md:text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus pulvinar enim eu, tincidunt lectus viverra.</p>
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
                <div className='bg-white'>
                    <div className='container mx-auto py-10'>
                        <img src={LogoCisdiPrimary} className='mx-auto' />
                        <p className='font-light text-2xl text-center mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className='flex justify-center my-8'>
                            <Link to="/contact" className='bg-red-600 py-4 px-8 rounded-full text-center text-white hover:opacity-75'>
                                Contact Us
                            </Link>
                        </div>
                        <div className='flex justify-between w-72 mx-auto'>
                            <Icon linkTo='https://www.instagram.com/' image={<FaInstagram />} />
                            <Icon linkTo='https://www.instagram.com/' image={<FaFigma />} />
                            <Icon linkTo='https://www.instagram.com/' image={<FaGitlab />} />
                            <Icon linkTo='https://www.instagram.com/' image={<FaWhatsapp />} />
                            <Icon linkTo='https://www.instagram.com/' image={<FaGithub />} />
                        </div>
                    </div>
                    <img src={BgFooter} />
                </div>
            </div>
        )
    }
}

export default Courses
