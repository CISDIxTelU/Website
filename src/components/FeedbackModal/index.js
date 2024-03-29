import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaRegWindowClose } from 'react-icons/fa';
import { MdOutlineClose } from 'react-icons/md';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 24,
    padding: 10,
    p: 4,
};

const FeedbackModal = ({ handleClose, open, id }) => {
    const [feedback, setFeedback] = useState('')
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState('')
    const [error, setError] = useState('')


    const BASE_URL = process.env.REACT_APP_BASE_URL;

    const onSubmit = () => {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }

        const feedbackPost = () => {
            return axios.post(`${BASE_URL}/feedback/${id}`, {feedback: feedback}, config);
        }
        const ratingPost = () => {
            return axios.post(`${BASE_URL}/rating/${id}`, {rating: rating}, config);
        }

        Promise.all([feedbackPost(), ratingPost()])
        .then((res)=> {
            if(res[0].data.status || res[1].data.status){
                setMessage('terima kasih telah mengisi feedback')
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
                disableScrollLock={true}
            >
                <Box className='bg-gray-50 rounded-md relative w-96 md:w-1/2' style={style}>
                        <h1 className='font-bold text-xl' id="feedback">Feedback</h1>
                        <MdOutlineClose data-testid={'close'} className='absolute right-2 top-2 text-red-600 cursor-pointer' size={30} onClick={handleClose} />
                        <textarea rows={8} id="placeholder" className='my-3 p-2 w-full border border-gray-100 rounded-md shadow-sm' placeholder='tulis ulasanmu...' onChange={(e) => setFeedback(e.target.value)} />
                        <div className='bg-white p-3 rounded-lg shadow-sm my-5'>
                            <h2 className='font-bold text-center text-lg md:text-2xl'>Berapa bintang yang ingin anda berikan kepada kami?</h2>
                            <p className='md:text-base text-center text-sm my-3'>Pelatihan “Peningkatan Peran Kader dan Pendamping Kelompok dalam Respon Covid-19”</p>
                            <div className='w-full flex justify-center'>
                                <Rating
                                    defaultValue={0}
                                    precision={0.5}
                                    onChange={(event, newValue) => {
                                        setRating(newValue.toString());
                                    }}
                                    size='large'
                                    id="rating"
                                />
                            </div>
                        </div>
                        {error && <div data-testid={'error-msg'} className='bg-red-300 p-3 rounded-lg shadow-sm my-5 relative'>
                            <FaRegWindowClose fill='#FFF' className='absolute right-5' onClick={errorClose} data-testid={'error'} />
                            <p className='text-red-900'>{error}</p>
                            </div>}
                        {message && <div data-testid={'error-msg'} className='bg-green-300 p-3 rounded-lg shadow-sm my-5 relative'>
                            <FaRegWindowClose fill='#FFF' className='absolute right-5' onClick={errorClose} data-testid={'error'} />
                            <p className='text-green-900'>{message}</p>
                            </div>}
                        <button type='submit' id="submit" onClick={onSubmit} className='bg-red-600 p-3 text-white w-full rounded-lg'>Kirim</button>
                        <Link to={`/certificate/${id}`}>
                        <button className='bg-white border mt-3 border-red-600 p-3 text-red-600 w-full rounded-lg' id="sertifikat">Sertifikat</button>
                    </Link>
                </Box>
            </Modal>
        </div>
    )
}

export default FeedbackModal;
