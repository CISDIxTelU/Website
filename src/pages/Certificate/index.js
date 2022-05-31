import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const BASE_URL = process.env.REACT_APP_BASE_URL;

const Certificate = () => {

    const [image, setImage] = useState('')
    const [name, setName] = useState('')
    const [topic, setTopic] = useState('')
    const { id } = useParams()

    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }

    const generateCertificate = (src) => {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const image = new Image()
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const today = new Date();

        image.src = src
        image.onload = () => {
            drawImage();
            downloadCertificate();
        }
        const drawImage = () => {
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
            ctx.font = "Bold 50px Poppins";
            ctx.textAlign = "center"
            ctx.fillText(name, 720, 370)
            ctx.font = "Bold 30px Poppins";
            ctx.fillText(topic, 720, 530)
            ctx.font = "20px Poppins";
            ctx.fillText(today.toLocaleDateString("id-ID", options), 720, 720)
            console.log('print draw image')
        }
    }

    const getTemplate = () => {
        axios.get(`${BASE_URL}/certificate/template`, config).then(res => {
            const certificateSrc = res.data.certificate
            console.log(certificateSrc)
            setImage(certificateSrc)
            generateCertificate(certificateSrc)
        })
    }

    const downloadCertificate = () => {
        // const canvas = document.getElementById('canvas')
        // return canvas.toDataURL();
        // axios.post(`${BASE_URL}/certificate/${id}`, {file: canvas.toDataURL}, config).then(res => {
        //     console.log(res)
        // }).catch(err => {
        //     console.log(err)
        // })
    }

    const getTopic = () => {
        axios.get(`${BASE_URL}/topic/${id}`, config).then(res => {
            const topic = res.data.data_topic.title
            setTopic(topic)
        })
    }

    useEffect(() => {
        getTopic()
    }, [])

    return (
        <div className='bg-gray-100 p-10'>
            <div className='sm:container mx-auto pt-8 pb-10 px-10 bg-white rounded-lg'>
                <h1 className='font-bold text-3xl text-center text-red-600'>Membuat Sertifikat</h1>
                <div className='bg-slate-50 w-full rounded-lg p-4 my-5'>
                    <h3 className='font-semibold text-2xl mb-2'>Selamat!</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan, nunc fusce quis risus vestibulum. Tellus libero a suspendisse ut. Amet tellus aliquam orci sagittis.</p>
                    <div className='py-5'>
                        <label className='text-gray-600 font-semibold'>Nama Lengkap</label>
                        <input type="text" placeholder='nama lengkap anda' className='w-full rounded-lg p-3 my-2' onChange={e => setName(e.target.value)} />
                    </div>
                    <div className='text-center'>
                        <button className='bg-red-600 py-3 text-white rounded font-semibold w-32 px-5 hover:bg-red-700' onClick={getTemplate}>submit</button>
                    </div>
                </div>

                {/* image generate the certificate */}
                {image && <div className='bg-slate-50 w-full rounded-lg p-4 my-5'>
                    <h3 className='font-semibold text-2xl mb-2'>Preview Sertifikat</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan, nunc fusce quis risus vestibulum. Tellus libero a suspendisse ut. Amet tellus aliquam orci sagittis.</p>
                    <div className='py-5 px-0'>
                        <canvas id="canvas" width="1440px" height="1000px" className='mb-5'></canvas>
                        <div className='text-center'>
                            <button 
                            type='submit' 
                            id='download-btn' 
                            className='bg-red-600 py-3 text-white rounded font-semibold w-32 hover:bg-red-700' 
                            onClick={downloadCertificate}>Download</button>
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

export default Certificate