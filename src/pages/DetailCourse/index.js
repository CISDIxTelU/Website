import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Lottie from 'reactjs-lottie';
import { animation } from '../../assets';
import axios from 'axios';
import { Accordion } from '../../components';

function DetailCourse() {
    const [data, setData] = useState([]);
    const [dataLo, setDataLo] = useState([]);
    const [dataLesson, setDataLesson] = useState([]);
    let { id } = useParams();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
        axios.post(`https://api.storeximi.com/api/topic/${id}`, {}, config).then(res => {
            setData(res.data.data_topic);
            console.log(res.data.data_topic)
            setLoading(false)
        }).catch(e => {
            console.log(e);
        })

        axios.post(`https://api.storeximi.com/api/lo/${id}`, {}, config).then(e => {
            setDataLo(e.data.data_lo);
            setDataLesson(e.data.data_lesson);
        }).catch(e => {
            console.log(e)
        })
    }, [id]);

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
            <div className='bg-gray-100'>
                <div className='sm:container mx-auto pt-8'>
                    <h1 className='font-bold text-3xl text-center text-red-600'>CISDI</h1>
                    <h2 className='font-bold text-2xl mt-5 mb-3'>Peningkatan Peran Kader dan Pendamping Kelompok dalam Respon Covid-19</h2>
                    <p className='text-base text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor mus risus arcu ac, vitae nunc.
                        Non diam gravida pulvinar nisi nunc dignissim. Sed parturient elementum urna non velit, neque. Mauris consectetur pretium ullamcorper
                        tortor ut dui amet. Lacus, posuere quis suscipit id gravida elit massa. Eget augue sit enim malesuada massa molestie tristique blandit
                        egestas. Feugiat mattis lectus neque ut leo ornare feugiat. Ut adipiscing justo, lectus amet eu condimentum integer metus nullam.
                        Diam ac ac aliquam scelerisque at risus, tellus. Diam dui feugiat aliquam placerat sodales nunc. Lectus enim, nunc vitae, sed consequat
                        vitae fames est dui. Neque egestas fermentum elit est arcu. Suspendisse elementum quis id sed orci. Nec elementum bibendum elementum tellus
                        sit nulla.
                    </p>
                    <div className='flex justify-between my-4'>
                        <p className='font-bold'>By : CISDI</p>
                        <p className='font-light'>Diterbitkan: 18 Oktober 2021</p>
                    </div>
                    <hr />
                    <div className='flex justify-between my-4'>
                        <p className='font-bold'>Kursus Topik Ini</p>
                        <p className='font-light'>19 Materi</p>
                        <p className='font-light'>5j 23m</p>
                    </div>
                    <Accordion dataLesson={dataLesson} dataLo={dataLo} id_topic={id}/>
                    <h2 className='font-bold text-lg mt-7 mb-3'>Beri Ulasan</h2>
                    <textarea className='resize-y rounded-md border w-full h-32 p-3 focus:border-red-600' placeholder='tulis disini'></textarea>
                    <button className='bg-red-600 w-full py-3 text-white rounded-md mt-3 mb-10 hover:bg-opacity-75'>Kirim</button>
                </div>
            </div>
        )
    }
}

export default DetailCourse
