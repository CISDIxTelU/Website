import axios from 'axios'
import { config } from 'dotenv';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CardQuestion } from '../../components'

const BASE_URL = process.env.REACT_APP_BASE_URL;

function Question() {
    const { id } = useParams();
    const [question, setQuestion] = useState([]);
    const [userAnswer, setUserAnswer] = useState({
        "content": []
    });
    const navigate = useNavigate()

    const selectAnswer = (answer, id) => {
        // setUserAnswer(prev => ({...prev.content, [id]: {id, answer}}));
        setUserAnswer({ content: [...userAnswer.content, {'id': id, 'answerUser': answer},] })
    };

    const onClick = () => {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
        console.log(userAnswer)
        axios.post(`${BASE_URL}/test`, userAnswer, config).then(res => {
            console.log("success sent", res)
            return navigate(`/question/detail/${id}`)
        }).catch(e => {
            console.log("something wrong")
        })
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