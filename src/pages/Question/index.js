/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CardQuestion } from '../../components'
import Lottie from 'reactjs-lottie';
import { animation } from '../../assets';

const BASE_URL = process.env.REACT_APP_BASE_URL;

function Question() {
    const { id, slug } = useParams();
    const [question, setQuestion] = useState([]);
    const [userAnswer, setUserAnswer] = useState({
        "content": []
    });
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [data] = useState([])

    const selectAnswer = (answer, id) => {
        setUserAnswer({ content: [...userAnswer.content, { 'id': id, 'answerUser': answer },] })
    };

    const onClick = (e) => {
        e.preventDefault()
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
        axios.post(`${BASE_URL}/answer-question/${id}/${slug}`, userAnswer, config).then(res => {
            console.log(res)
            return navigate(`/detail-question/${id}`,{state: {data: res.data}})
        })
        console.log(data)
    }

    const getData = () => {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
        axios.get(`${BASE_URL}/question/${id}/${slug}`, config).then(res => {
            setLoading(false)
            let response = res.data.question
            if(response){
                setQuestion(response)
            }else {
                return navigate(`/detail-course/${id}`)
            }
        })
    }

    useEffect(() => {
        setLoading(true)
        getData();
    }, []);

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