import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { NotFound } from '..';
import { CardQuestion } from '../../components'

const BASE_URL = process.env.REACT_APP_BASE_URL;

function Question() {
    const { id, slug } = useParams();
    const [question, setQuestion] = useState([]);
    const [userAnswer, setUserAnswer] = useState({
        "content": []
    });
    const navigate = useNavigate()

    const selectAnswer = (answer, id) => {
        setUserAnswer({ content: [...userAnswer.content, {'id': id, 'answerUser': answer},] })
    };

    const onClick = () => {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
        axios.post(`${BASE_URL}/answer-question/${id}/${slug}`, userAnswer, config).then(res => {
            return navigate(`/question-detail/${id}`,{state: {data: res.data}})
        })
    }

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
        axios.get(`${BASE_URL}/question/${id}/${slug}`, config).then(res => {
            let response = res.data.question
            setQuestion(response)
        }).catch(e => {
            return navigate(<NotFound />)
        })
    }, [id, slug]);

    return (
        <div className='container mx-auto p-3 py-10'>
            <h1 className='font-bold text-3xl mb-3'>Sesi Pertanyaan</h1>
            <p className='text-gray-600'>berikut pertanyaan yang harus dijawab : </p>
            <hr className='my-5' />
            {question.map((data, idx) => {
                return (
                    <CardQuestion data={data} key={idx} selected={answer => selectAnswer(answer, data.id)} />
                )
            })}
            <button type="submit" className='w-full bg-red-600 text-white font-bold py-3 hover:bg-opacity-75 rounded-lg' onClick={onClick}>Kirim Jawaban dan Lihat Hasil</button>
        </div>
    )
}

export default Question