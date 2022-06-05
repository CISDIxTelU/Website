import axios from 'axios';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Moment from 'react-moment';
import { useParams } from 'react-router-dom';
import { Dropzone } from '../../components';

const BASE_URL = process.env.REACT_APP_BASE_URL;

function SubmitTask() {
    const {id} = useParams()
    const [dataTask, setDataTask] = useState([])
    const [status, setStatus] = useState('Belum Mengirim')
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'multipart/form-data'
        }
    }

    const formatFileName = (data) => {
        return data.slice(6)
    }

    useEffect(() => {
        axios.get(`${BASE_URL}/task/${id}`, config)
        .then(res => {
            setDataTask(res.data.task)
            console.log(dataTask)
            if(res.data.task.user_task !== undefined){
                setStatus('Sudah Mengirim')
            }
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div className='bg-gray-100 p-10'>
            <div className='sm:container mx-auto pt-8 pb-10 md:px-10 px-3 bg-white rounded-lg'>
                <h1 className='font-bold text-3xl text-center text-red-600'>Unggah Tugas</h1>
                <div className='bg-slate-50 w-full rounded-lg p-4 my-5'>
                    <h3 className='font-semibold'>Uraian Tugas</h3>
                    <h4 className='font-semibold mt-4'>{dataTask.title}</h4>
                    <p>{dataTask.text}</p>
                </div>
                <div className='bg-slate-50 w-full rounded-lg p-4 my-5'>
                    <h3 className='font-semibold mb-3'>Unggah Tugas</h3>
                    <Dropzone id={id} />
                </div>
                <div className='bg-slate-50 w-full rounded-lg p-4 my-5'>
                    <h3 className='font-semibold mb-4'>Status Pengiriman</h3>
                    <table className='border border-gray-400 w-full'>
                        <tbody>
                            <tr className='bg-gray-300'>
                                <td className='w-56 border border-gray-400 p-2 font-bold'>Status Pengiriman</td>
                                <td className='w-56 border border-gray-400 p-2'>{status}</td>
                            </tr>
                            <tr className='bg-white'>
                                <td className='w-56 border border-gray-400 p-2 font-bold'>Tanggal Pengumpulan</td>
                                <td className='w-56 border border-gray-400 p-2'>{dataTask.user_task ? <Moment format="DD MMMM YYYY">{moment(dataTask.user_task.created_at)}</Moment> : ''}</td>
                            </tr>
                            <tr className='bg-white'>
                                <td className='w-56 border border-gray-400 p-2 font-bold'>File Pengiriman</td>
                                <td className='w-56 border border-gray-400 p-2'>{dataTask.user_task ? formatFileName(dataTask.user_task.file) : ''}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default SubmitTask;