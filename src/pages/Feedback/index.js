import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Lottie from 'reactjs-lottie';
import { animation } from '../../assets';

const Feedback = () => {
    const [feedback, setFeedback] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    const handleSubmit = async e => {
        setLoading(true);
        e.preventDefault();

        const config = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
        axios.post(`https://api.storeximi.com/api/feedback/${id}`, {
            feedback: feedback,
        }, config).then(res => {
            setLoading(false)
            setSuccess(true)
        }).catch(error => {
            setLoading(false);
            let errorData = error.response.data.message;
            console.log(errorData)
            if (errorData) {
                setError(true);
                setMessage(errorData);
            }
        })
    }
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
    } else {
        return (
            <div>
                <div className="container mx-auto py-11">
                    {error === true ?
                        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-3" role="alert">
                            <span class="block sm:inline">{message}</span>
                            <span class="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => { setError(false) }}>
                                <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                            </span>
                        </div>
                        : ''}
                    {success === true ?
                        <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative my-3" role="alert">
                            <span class="block sm:inline">Terima kasih untuk feedback yang diberikan</span>
                            <span class="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => { setSuccess(false) }}>
                                <svg class="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                            </span>
                        </div>
                        : ''}
                    <p className="font-semibold text-4xl mb-4">Feedback</p>

                    <div className="container flex gap-5 p-3 flex flex-col">
                        <p>Halo, terima kasih telah membaca di aplikasi puspa ini, untuk meningkatkan performa dan kualitas dari aplikasi kami membutuhkan masukan dari teman-teman. feedback dari teman-teman sangat berharga bagi kami.</p>
                        <form onSubmit={handleSubmit}>
                            <textarea onChange={e => setFeedback(e.target.value)} class="resize-y rounded-md border p-2 h-72 w-full my-5"></textarea>
                            <div className='text-right'>
                                <button className='bg-blue-600 w-36 text-white py-3 rounded-md hover:bg-blue-400' type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Feedback
