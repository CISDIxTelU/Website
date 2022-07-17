import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaSistrix } from 'react-icons/fa';
import { CardTask } from '../../components';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const History = () => {
    const [data, setData] = useState([])
    const [complete, setComplete] = useState([
        // {
        //     "certificate": null,
        //     "created_at": "2022-06-17T15:32:36.000000Z",
        //     "id": 1,
        //     "id_topic": 1,
        //     "id_user": 3,
        //     "precentage_done": 100,
        //     "status": "completed",
        //     "topic": {
        //         'title': 'testing 123'
        //     }
        // }
    ])
    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
        axios.get(`${BASE_URL}/history`, config).then(res => {
            const data = res.data.data
            if (data.status === 'completed') {
                setComplete(data)
            }
            setData(data)
        })
    }, [])

    return (
        <div className='bg-card-task py-10'>
            <div className='container bg-white mx-auto py-8 px-8 rounded-lg'>
                <h1 className='font-bold text-3xl text-center text-red-600 my-5'>Riwayat</h1>
                <div>
                    <div className="border-2 border-red-600 py-2 rounded-lg flex wrap items-center content-center mb-5">
                        <FaSistrix className="text-black mx-5 " />
                        <input type="text" className="appearance-none bg-transparent w-full h-full p-3 rounded-lg focus:outline-none text-sm lg:text-base" placeholder="Temukan Kursus"></input>
                    </div>
                </div>

                <h2 className='font-bold text-lg'>Sedang Berlangsung</h2>
                <div className='my-4'>
                    {
                        data.length === 0 ?
                            <p className='text-center'>tidak ada materi selesai</p> :
                            data.map(data => {
                                return (
                                    <CardTask title={data?.topic?.title} id={data?.id} percentage={data?.precentage_done} key={data?.id} />
                                )
                            })
                    }
                </div>

                <h2 className='font-bold text-lg'>Selesai</h2>
                <div className='my-4'>
                    {
                        complete.length === 0 ?
                            <p className='text-center' id="errorDone">tidak ada materi selesai</p> :
                            complete.map(data => {
                                return <CardTask title={data.topic.title} id={data.id} isDone={true} percentage={data.precentage_done} key={data.id} />
                            })
                    }
                </div>
            </div>
        </div>
    )
}

export default History;