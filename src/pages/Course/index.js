import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { animationCourse } from '../../assets';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import DOMPurify from 'dompurify'

const BASE_URL = process.env.REACT_APP_BASE_URL;
const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

function Course() {
    const [dataLesson, setDataLesson] = useState([]);
    let { id_topic } = useParams();
    const [loading, setLoading] = useState(false);
    const [extension, setExtension] = useState('')
    const history = useNavigate()

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
        })
    }, [id_topic]);

    const getFileExtension = async (filename) => {
        if(filename){
            const extension = await filename.split('.').pop();
            setExtension(extension)
        }
    }

    getFileExtension(dataLesson.lesson_attachment)

    const createMarkUp = (data) => {
        console.log(DOMPurify.sanitize((data)));
        return {__html: data};
    }
    return (
        <div className="container mx-auto py-11">
            <div className="flex wrap justify-between py-3 gap-10">
                <div className="py-2 w-full">
                    <div className="border rounded-lg bg-white p-6">
                        {loading ? (
                            <Lottie animationData= {animationCourse} />
                        ) : (
                            <>
                                <h1 className="font-bold text-3xl my-3">{dataLesson.name}</h1>
                                {dataLesson.video_url != null ? <iframe src={dataLesson.video_url} title="description" className="h-96 w-full"></iframe> : ''}
                                {extension === 'jpg' && <img src={`${IMAGE_URL}/${dataLesson.lesson_attachment}`} alt="foto" className="h-96 w-full bg-gray-400" />}
                                <div dangerouslySetInnerHTML={createMarkUp(dataLesson.lesson_text)} />
                                <br />
                                <div className='mt-10 flex flex-col justify-between w-full'>
                                    <button className='bg-red-600 text-center text-white p-3 mb-4 rounded-lg w-full font-bold hover:bg-opacity-75' value={dataLesson.id} onClick={() => history(-1, { replace: true })}>
                                        Tandakan Selesai & Lanjut Materi
                                    </button>
                                    {extension === 'pdf' && <a className='bg-transparent border-red-600 border-2 text-center text-red-600 p-3 rounded-lg w-full font-bold hover:bg-opacity-75' href={`${IMAGE_URL}/${dataLesson.lesson_attachment}`} download >
                                        Download Materi
                                    </a>}
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