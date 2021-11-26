import { data } from 'autoprefixer';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Accordion } from '../../components';

function Course() {
    const [dataLo, setDataLo] = useState([]);
    const [dataLesson, setDataLesson] = useState([]);
    let { id_topic, id_course } = useParams();
    let lesson = [];

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
        axios.post(`https://api.storeximi.com/api/lo/${id_topic}`, {}, config).then(e => {
            setDataLo(e.data.data_lo);
            setDataLesson(e.data.data_lesson);
        }).catch(e => {
            console.log(e)
        })
    }, []);

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
                                if (index === 0) {
                                    index += 1;
                                    if (index === datax.length) {
                                        return lesson.map((data, idx) => {
                                            if (data.id === parseInt(id_course)) {
                                                console.log(data);
                                                return (
                                                    <>
                                                        <h1 className="font-bold text-3xl my-3">{data.name}</h1>
                                                        {data.video_url != null ? <iframe src={data.video_url} title="description" className="h-96 w-full"></iframe> : ''}
                                                        {data.lesson_attachment != null ? <img src={data.lesson_attachment} alt="foto" className="h-96 w-full" /> : ''}
                                                        <div dangerouslySetInnerHTML={{ __html: data.lesson_text }} />

                                                    </>
                                                )
                                            }
                                            return '';
                                        })
                                    }
                                } else {
                                    if (index === datax.length) {
                                        return lesson.map((data, idx) => {
                                            if (data.id === parseInt(id_course)) {
                                                console.log(data);
                                                return (
                                                    <>
                                                        <h1 className="font-bold text-3xl my-3">{data.name}</h1>
                                                        {data.video_url != null ? <iframe src={data.video_url} title="description" className="h-96 w-full"></iframe> : ''}
                                                        {data.lesson_attachment != null ? <img src={`https://api.storeximi.com/storage/${data.lesson_attachment}`} alt="foto" className="bg-cover w-full" /> : ''}
                                                        <div dangerouslySetInnerHTML={{ __html: data.lesson_text }} />

                                                    </>
                                                )
                                            }
                                            return '';
                                        })
                                    }
                                }
                                return '';
                            })
                        }
                    </div>
                </div>

            </div>
        </div >
    )
}


export default Course
