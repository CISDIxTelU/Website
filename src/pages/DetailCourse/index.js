import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Accordion } from '../../components';
import moment from 'moment';
import Moment from 'react-moment';

const BASE_URL = process.env.REACT_APP_BASE_URL;

function DetailCourse() {
    const [data, setData] = useState([]);
    const [dataLo, setDataLo] = useState([]);
    const [donePreTest, setDonePreTest] = useState(false)
    const errors = useLocation();
    let { id } = useParams();

    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        }

        axios.get(`${BASE_URL}/topic/${id}`, config).then(res => {
            console.log(res.data.is_pre_test_done)
            setDonePreTest(res.data.is_pre_test_done)
            setData(res.data.data_topic);
            setDataLo(res.data.data_lo);
        })

    }, [id. data]);

    return (
        <div className='bg-gray-100 p-10'>
            {errors.data && <div className='bg-red-300 p-3'>
                {errors.data}
            </div>}
            <div className='sm:container mx-auto pt-8 pb-10 px-10 bg-white rounded-lg'>
                <h1 className='font-bold text-3xl text-center text-red-600'>Topik Pembahasan</h1>
                <img className="h-96 object-cover w-full my-4" src={`${process.env.REACT_APP_IMAGE_URL}/${data.cover_image}`} alt="Man looking at item at a store" />
                <h2 className='font-bold text-2xl mt-5 mb-3'>{data.title}</h2>
                <p className='text-base text-justify'>{data.description}</p>
                <div className='flex justify-between my-4'>
                    <p className='font-bold'>By : {data.author}</p>
                    <p className='font-light'>Diterbitkan: <Moment format="DD MMMM YYYY">{moment(data.created_at)}</Moment></p>
                </div>
                <hr className='bg-gray-600' />
                <div className='flex justify-between my-4'>
                    <p className='font-bold'>Kursus Topik Ini</p>
                    <p className='font-light'>{dataLo.length} Materi</p>
                    <p className='font-light'>0 / {dataLo.length} Selesai</p>
                </div>
                <Accordion dataLo={dataLo} id={id} isDone={donePreTest} />
            </div>
        </div>
    )
}


export default DetailCourse
