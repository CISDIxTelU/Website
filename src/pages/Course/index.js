import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

function Course() {
    const [dataLo, setDataLo] = useState([]);
    // const [pages, setPages] = useState(0);
    const [dataLesson, setDataLesson] = useState([]);
    let { id_topic, id_course } = useParams();
    let lesson = [];
    const navigate = useNavigate();

    // const prevPage = (e) => {
    //         setPages(parseInt(e.target.value) - 1);
    //         if(pages){
    //             navigate(`/course/${id_topic}/${lesson[pages].id_lo}/${lesson[pages].id}`)
    //         }
    //     }
    // const nextPage = (e) => {
    //     setPages(parseInt(e.target.value) + 1);
    //     if(pages){
    //         navigate(`/course/${id_topic}/${lesson[pages].id_lo}/${lesson[pages].id}`)
    //     }
    // }

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
    }, [id_topic]);

    return (
        <div className="container mx-auto py-11">
            <div className="flex wrap justify-between py-3 gap-10">
                <div className="py-2">
                    <div className="border rounded-lg bg-white p-6">
                        {
                            dataLesson.map((datax, index) => {
                                return datax.forEach(element => {
                                    return lesson.push(element)
                                });
                            })
                        }
                        {
                            lesson.map((data, idx) => {
                                if (data.id === parseInt(id_course)) {
                                    return (
                                        <>
                                            <h1 className="font-bold text-3xl my-3">{data.name}</h1>
                                            {data.video_url != null ? <iframe src={data.video_url} title="description" className="h-96 w-full"></iframe> : ''}
                                            {data.lesson_attachment != null ? <img src={data.lesson_attachment} alt="foto" className="h-96 w-full" /> : ''}
                                            <div dangerouslySetInnerHTML={{ __html: data.lesson_text }} />
                                            <div className='mt-10 flex justify-between'>
                                                <button className='bg-red-600 text-white p-3 rounded-lg w-full font-bold hover:bg-opacity-75' value={idx}>
                                                    Tandakan Selesai & Lanjut Kuis
                                                </button>
                                            </div>
                                        </>
                                    )
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
