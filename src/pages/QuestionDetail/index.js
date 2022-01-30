import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { CardQuestionDetail } from '../../components';

const BASE_URL = process.env.REACT_APP_BASE_URL;

function QuestionDetail() {
    const { id } = useParams();
    const [question, setQuestion] = useState([]);
    const navigate = useNavigate();

    const onClick = () => {
        navigate('/course')
    }

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
        axios.get(`${BASE_URL}/question/${id}`, config).then(res => {
            let response = res.data.question
            setQuestion(response)
        })
    }, [id]);

    return (
        <div className='h-full'>
            <div className='container mx-auto p-3 py-10'>
                <div className='flex justify-center items-center relative mb-7'>
                    <FaChevronLeft className='absolute left-0 text-xl' onClick={onClick} />
                    <h1 className='font-bold text-3xl text-red-600'>Pembahasan</h1>
                </div>
                <h1 className='font-bold text-3xl mb-3'>Pembahasan</h1>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <hr className='my-5' />
                {question.map((data, idx) => {
                    return (
                        <CardQuestionDetail data={data} key={idx} />
                    )
                })}
                <button type="submit" className='w-full bg-red-600 text-white font-bold py-3 hover:bg-opacity-75 rounded-lg' onClick={() => navigate(`/question/grade/${id}`)}>Selesaikan Quiz</button>
            </div>
        </div>
    )
}

export default QuestionDetail;
