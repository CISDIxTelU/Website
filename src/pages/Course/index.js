import Lottie from 'reactjs-lottie';
import { animation } from '../../assets';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'
import { Accordion } from '../../components';

function Course() {
    const [dataLo, setDataLo] = useState([]);
    const [dataLesson, setDataLesson] = useState([]);
    let { id_topic, id_course } = useParams();
    const [loading, setLoading] = useState(false);
    let lesson = [];

    useEffect(() => {
        setLoading(true)

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }

        console.log(localStorage.getItem('token'))
        axios.post(`https://api.storeximi.com/api/lo/${id_topic}`, {}, config).then(e => {
            setDataLo(e.data.data_lo);
            setDataLesson(e.data.data_lesson);
            setLoading(false);
        }).catch(e => {
            console.log(e)
        })
    }, [id_topic]);

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
    }
    else {
        return (
            <div className="container mx-auto py-11">
                <div className="flex wrap justify-between bg-white py-3 gap-10">
                    <div className="w-4/12 py-2">
                        <div className="border rounded-lg bg-white py-5">
                            <h2 className="text-xl font-light ml-6">Daftar Modul</h2>
                            <div className="flex wrap gap-1 flex-col mt-5">
                                <Accordion dataLo={dataLo} dataLesson={dataLesson} id={id_topic} />
                            </div>
                        </div>
                    </div>
                    <div className="w-9/12 py-2">
                        <div className="border rounded-lg bg-white p-6">
                            {
                                dataLesson.map((datax, index) => {
                                    datax.forEach(element => {
                                        return lesson.push(element)
                                    });
                                    // datax.
                                    // console.log('hasil map : ', datax);
                                    // console.log('hasil foreach : ', lesson, index);
                                    if (index === 2) {
                                        return lesson.map((data, idx) => {
                                            if (data.id === id_course) {
                                                return (
                                                    <>
                                                        <h1 className="font-bold text-3xl">{data.name}</h1>
                                                        <div dangerouslySetInnerHTML={{ __html: data.lesson_text }} />

                                                        <div className="flex wrap justify-between mt-10">
                                                            <Link to="" className="bg-white border border-blue-600 p-3 px-5 text-blue-600 rounded hover:underline">Back</Link>
                                                            <Link to="#" className="bg-blue-600 py-3 px-5 text-white rounded hover:bg-blue-700">Next</Link>
                                                        </div>
                                                    </>
                                                )
                                            }
                                            return '';
                                        })
                                    }
                                    return '';
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Course
