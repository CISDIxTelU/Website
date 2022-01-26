import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { animationCourse } from '../../assets';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Lottie from 'reactjs-lottie'

const BASE_URL = process.env.REACT_APP_BASE_URL;
const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

function Course() {
    const [dataLesson, setDataLesson] = useState([]);
    let { id_topic } = useParams();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
        axios.get(`${BASE_URL}/lesson/${id_topic}`, config).then(res => {
            setDataLesson(res.data.data);
            setLoading(false)
        }).catch(e => {
            console.log(e)
        })
    }, [id_topic]);

    console.log(dataLesson)
    return (
        <div className="container mx-auto py-11">
            <div className="flex wrap justify-between py-3 gap-10">
                <div className="py-2 w-full">
                    <div className="border rounded-lg bg-white p-6">
                        {loading ? (
                            <Lottie options={{
                                animationData: animationCourse,
                            }} className="" />
                        ) : (
                            <>
                                <h1 className="font-bold text-3xl my-3">{dataLesson.name}</h1>
                                {dataLesson.video_url != null ? <iframe src={dataLesson.video_url} title="description" className="h-96 w-full"></iframe> : ''}
                                {dataLesson.lesson_attachment != null ? <img src={`${IMAGE_URL}/${dataLesson.lesson_attachment}`} alt="foto" className="h-96 w-full" /> : ''}
                                <div dangerouslySetInnerHTML={{ __html: dataLesson.lesson_text }} />
                                <div className='mt-10 flex justify-between'>
                                    <Link className='bg-red-600 text-center text-white p-3 rounded-lg w-full font-bold hover:bg-opacity-75' value={dataLesson.id} to='/question'>
                                        Tandakan Selesai & Lanjut Kuis
                                    </Link>
                                </div>
                            </>
                        )}
                    </div>
                </div>

            </div>
        </div >
    )
}


export default Course
