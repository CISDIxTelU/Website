import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { BgLogin, TitleCourses } from '../../assets'
import { Card } from '../../components'

function Courses() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }

        console.log(localStorage.getItem('token'))
        axios.post('https://api.storeximi.com/api/topic', {}, config).then(e => {
            setData(e.data.data);
        }).catch(e => {
            console.log(e)
        })
    }, []);

    console.log(data);
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

export default Courses
