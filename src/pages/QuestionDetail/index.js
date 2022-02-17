import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { CardQuestionDetail } from '../../components';

const BASE_URL = process.env.REACT_APP_BASE_URL;

function QuestionDetail() {
    const { id, slug } = useParams();
    const navigate = useNavigate();
    const [value, setValue] = useState([])
    const [grade, setGrade] = useState([])

    const onClick = () => {
        return navigate(`/detail-course/${id}`)
    }

    const getDetailQuestion = () => {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }

        axios.get(`${BASE_URL}/result/${id}/${slug}`, config).then(res => {
            setValue(res.data.question)
            setGrade(res.data.grade)
        })
    }

    useEffect(() => {
        getDetailQuestion()
    })

    return (
        <div className='h-full'>
            <div className='container mx-auto p-3 py-10'>
                <div className='flex justify-center items-center relative mb-7'>
                    <FaChevronLeft className='absolute left-0 text-xl cursor-pointer' onClick={onClick} />
                    <h1 className='font-bold text-3xl text-red-600'>Pembahasan</h1>
                </div>
                <h1 className='font-bold text-3xl mb-3'>Pembahasan</h1>
                <p className='text-gray-600'>Berikut merupakan pembahasan dari pertanyaan yang telah Anda jawab sebelumnya.</p>
                <hr className='my-5' />
                {value.map((data, idx) => {
                    return (
                        <CardQuestionDetail data={data} key={idx} />
                    )
                })}
                <button type="submit" className='w-full bg-red-600 text-white font-bold py-3 hover:bg-opacity-75 rounded-lg' onClick={() => navigate(`/question/grade/${id}`, { state: { grade: grade.grade } })}>Selesaikan Quiz</button>
            </div>
        </div>
    )
}

export default QuestionDetail;
