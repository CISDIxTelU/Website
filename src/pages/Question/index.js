import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CardQuestion } from '../../components'

const BASE_URL = process.env.REACT_APP_BASE_URL;

function Question() {
    const { id, slug } = useParams();
    const [question, setQuestion] = useState([]);
    const [userAnswer, setUserAnswer] = useState({
        "content": []
    });
    const navigate = useNavigate()
    const [error, setError] = useState('') 

    const selectAnswer = (answer, id) => {
        setUserAnswer({ content: [...userAnswer.content, { 'id': id, 'answerUser': answer },] })
    };

    const onClick = (e) => {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
        
        axios.post(`${BASE_URL}/answer-question/${id}/${slug}`, userAnswer, config).then(res => {
            return navigate(`/detail-question/${id}/${slug}`)
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
            console.log(res)
            
            if(res.data.status === 'failed'){
                return navigate(`/detail-question/${id}/${slug}`, {replace: true})
            }else {
                return setQuestion(response)
            }
        }).catch(err => {
            setError(err)
        })
    }, [id, slug, navigate]);

    return (
        <div className='container mx-auto p-3 py-10'>
            <h1 className='font-bold text-3xl mb-3'>Sesi Quiz</h1>
            <p className='text-gray-600'>Silahkan jawab pertanyaan di bawa ini.</p>
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