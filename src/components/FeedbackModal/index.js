import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { FaRegWindowClose } from 'react-icons/fa';
import { MdOutlineClose } from 'react-icons/md';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    boxShadow: 24,
    padding: 10,
    p: 4,
};

const FeedbackModal = ({ handleClose, open, id }) => {
    const [feedback, setFeedback] = useState('')
    const [rating, setRating] = useState(0)
    const [error, setError] = useState('')


    const BASE_URL = process.env.REACT_APP_BASE_URL;

    const onSubmit = (e) => {
        e.preventDefault()
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }

        const feedbackPost = axios.post(`${BASE_URL}/feedback/${id}`, {feedback: feedback}, config);
        const ratingPost = axios.post(`${BASE_URL}/rating/${id}`, {rating: rating}, config);

        axios.all([feedbackPost, ratingPost])
        .then(([resFeedback, resRating])=> {
            if(resFeedback || resRating){
                return Navigate(`detail-course/${id}`)
            }
        }).catch(err => {
            setError(err.response.data.message)
        })
    }

    const errorClose = () => {
        setError('');
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='bg-gray-50 rounded-md relative' style={style}>
                    <form onSubmit={onSubmit}>
                        <h1 className='font-bold text-xl'>Feedback</h1>
                        <MdOutlineClose className='absolute right-2 top-2 text-red-600 cursor-pointer' size={30} onClick={handleClose} />
                        <textarea rows={8} className='my-3 p-2 w-full border border-gray-100 rounded-md shadow-sm' placeholder='tulis ulasanmu...' onChange={(e) => setFeedback(e.target.value)} />
                        <div className='bg-white p-3 rounded-lg shadow-sm my-5'>
                            <h2 className='font-bold text-center text-2xl'>Berapa bintang yang ingin anda berikan kepada kami?</h2>
                            <p className='text-base text-center my-3'>Pelatihan “Peningkatan Peran Kader dan Pendamping Kelompok dalam Respon Covid-19”</p>
                            <div className='w-full flex justify-center'>
                                <Rating
                                    value={rating}
                                    defaultValue={0}
                                    precision={0.5}
                                    onChange={(event, newValue) => {
                                        setRating(newValue.toString());
                                    }}
                                    size='large'
                                />
                            </div>
                        </div>
                        {error && <div className='bg-red-300 p-3 rounded-lg shadow-sm my-5 relative'>
                            <FaRegWindowClose fill='#FFF' className='absolute right-5' onClick={errorClose} />
                            <p className='text-red-900'>{error}</p>
                            </div>}
                        <button type='submit' className='bg-red-600 p-3 text-white w-full rounded-lg'>Kirim</button>
                    </form>
                </Box>
            </Modal>
        </div>
    )
}

export default FeedbackModal;
