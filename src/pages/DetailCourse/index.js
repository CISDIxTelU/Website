import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Lottie from 'reactjs-lottie';
import { animation } from '../../assets';
import axios from 'axios';
import { Accordion } from '../../components';
import moment from 'moment';
import Moment from 'react-moment';

const BASE_URL = process.env.REACT_APP_BASE_URL;

function DetailCourse() {
    const [data, setData] = useState([]);
    const [dataLo, setDataLo] = useState([]);
    let { id } = useParams();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        }
        axios.get(`${BASE_URL}/topic/${id}`, config).then(res => {
            setData(res.data.data_topic);
            setDataLo(res.data.data_lo);
            setLoading(false);
        }).catch(e => {
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
            <div className='bg-gray-100 p-10'>
                <div className='sm:container mx-auto pt-8 pb-10'>
                    <h1 className='font-bold text-3xl text-center text-red-600'>Topik Pembahasan</h1>
                    <h2 className='font-bold text-2xl mt-5 mb-3'>{data.title}</h2>
                    <p className='text-base text-justify'>{data.description}</p>
                    <div className='flex justify-between my-4'>
                        <p className='font-bold'>By : {data.author}</p>
                        <p className='font-light'>Diterbitkan: <Moment format="DD MMMM YYYY">{moment(data.created_at)}</Moment></p>
                    </div>
                    <hr />
                    <div className='flex justify-between my-4'>
                        <p className='font-bold'>Kursus Topik Ini</p>
                        <p className='font-light'>{dataLo.length} Materi</p>
                        <p className='font-light'>5j 23m</p>
                    </div>
                    <Accordion dataLo={dataLo} id={id} />
                </div>
            </div>
        )
    }
}

export default DetailCourse
