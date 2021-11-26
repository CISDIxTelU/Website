import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { BgLogin, TitleCourses } from '../../assets'
import Lottie from 'reactjs-lottie';
import { animation } from '../../assets';
import { Card } from '../../components'

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
            <div>
                <div className="bg-blue-600 p-3 h-80 flex flex-col wrap items-center justify-center" style={{ backgroundImage: `url(${BgLogin})` }}>
                    <img src={TitleCourses} className="mb-5" />
                    <p className="text-white text-md tracking-wider">Learn about medical easy and everywhere.</p>
                </div>

                <div className="container p-3 mx-auto">
                    <h2 className="text-3xl my-5 font-bold">Medical Courses</h2>
                    <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
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
