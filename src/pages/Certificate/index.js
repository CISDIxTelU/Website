import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const BASE_URL = process.env.REACT_APP_BASE_URL;

const Certificate = () => {

    const [image, setImage] = useState(false)
    const [isDone, setIsDone] = useState(false)
    const [message, setMessage] = useState('')
    const [name, setName] = useState('')
    const [topic, setTopic] = useState('')
    const { id } = useParams()

    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    }

    const generateCertificate = () => {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const download = document.getElementById('download-btn')
        const certificateUser = document.getElementById('sertifikat')
        // const image = new Image()
        // image.crossOrigin = "Anonymous";
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };

        const today = new Date();

        certificateUser.src = require('../../assets/images/sertif.png')
        certificateUser.onload = () => {
            drawImage();
        }

        const drawImage = () => {
            ctx.drawImage(certificateUser, 0, 0, canvas.width, canvas.height)
            ctx.font = "Bold 50px Poppins";
            ctx.textAlign = "center"
            ctx.fillText(name, 720, 370)
            ctx.font = "Bold 30px Poppins";
            ctx.fillText(topic, 720, 530)
            ctx.font = "20px Poppins";
            ctx.fillText(today.toLocaleDateString("id-ID", options), 720, 720)
        }

        download.addEventListener('click', () => {
            let canvasImage = canvas.toDataURL();
            const createEl = document.createElement('a');
            createEl.href = canvasImage;

            // This is the name of our downloaded file
            createEl.download = "download-this-canvas";

            // Click the download button, causing a download, and then remove it
            createEl.click();
            createEl.remove();

            let formData = new FormData()
            formData.append('file', canvasImage)

            axios.post(`${BASE_URL}/certificate/${id}`, formData, config).then(res => {
                    console.log(res.data)
                }).catch(err => {
                    console.log(err)
                })
        })
    }

    // const downloadCertificate = () => {
    //     const canvasSave = document.getElementById('canvas');
    //     const d = canvasSave.toDataURL('image/png');
    //     const w = window.open('about:blank', 'image from canvas');
    //     w.document.write("<img src='" + d + "' alt='from canvas'/>");
    //     console.log('Saved!');
        // let formData = new FormData()
        // formData.append('file', canvas.toDataURL())

        // console.log(formData)
        // axios.post(`${BASE_URL}/certificate/${id}`, {file: canvas.toDataURL}, config).then(res => {
        //     console.log(res)
        // }).catch(err => {
        //     console.log(err)
        // })
    // }

    const getTemplate = () => {
        axios.get(`${BASE_URL}/certificate/template`, config).then(res => {
            const certificateSrc = res.data.certificate
            setImage(!image)
            generateCertificate()
        })
    }

    const getTopic = () => {
        axios.get(`${BASE_URL}/topic/${id}`, config).then(res => {
            const topic = res.data.data_topic.title
            setTopic(topic)
        })
    }

    useEffect(() => {
        axios.get(`${BASE_URL}/certificate/${id}`, config).then(res => {
            console.log(res.data.status)
            if(res.data.status === 'success'){
                setIsDone(!isDone)
                setMessage('Terima kasih anda sudah mencetak sertifikat anda !')
            }
        })
        getTopic()
    }, [])

    return (
        <div className='bg-gray-100 p-10'>
            <div className='sm:container mx-auto pt-8 pb-10 px-10 bg-white rounded-lg'>
                <h1 className='font-bold text-3xl text-center text-red-600'>Membuat Sertifikat</h1>
                <div className='bg-slate-50 w-full rounded-lg p-4 my-5'>
                    <h3 className='font-semibold text-2xl mb-2'>Selamat!</h3>
                    <p>Anda telah menyelesaikan topik ini. Semoga ilmu yang telah dipelajari bermanfaat bagi Anda dan orang-orang di sekitar Anda. Sebagai bukti telah menyelesaikan topik ini, silakan tulis nama lengkap Anda di bawah ini dan klik “Kirim” untuk ditulis di sertifikat.</p>
                    <div className='py-5'>
                        <label className='text-gray-600 font-semibold'>Nama Lengkap</label>
                        {isDone ? <input type="text" placeholder={message} className='w-full rounded-lg p-3 my-2' disabled /> : <input type="text" placeholder='nama lengkap anda' className='w-full rounded-lg p-3 my-2' onChange={e => setName(e.target.value)} />}
                    </div>
                    <div className='text-center'>
                        {isDone ? <button className='bg-gray-500 py-3 text-white rounded font-semibold w-32 px-5 hover:bg-gray-700'>Kirim</button> : <button className='bg-red-600 py-3 text-white rounded font-semibold w-32 px-5 hover:bg-red-700' onClick={getTemplate}>submit</button>}
                    </div>
                </div>

                {/* image generate the certificate */}
                {image && <div className='bg-slate-50 w-full rounded-lg p-4 my-5'>
                    <h3 className='font-semibold text-2xl mb-2'>Tinjauan Sertifikat</h3>
                    <p>Pastikan nama Anda sudah benar. Apabila ada kesalahan, silakan tulis ulang nama Anda pada kolom sebelumnya. Apabila sudah sesuai, silakan klik “Unduh Sertifikat” untuk mengunduh sertifikat Anda.</p>
                    <div className='py-5 px-0'>
                        <canvas id="canvas" width="1440px" height="1000px" className='mb-5'>
                            <img alt="foto" id='sertifikat'></img>
                        </canvas>
                        <div className='text-center'>
                            <button
                                type='submit'
                                id='download-btn'
                                className='bg-red-600 py-3 text-white rounded font-semibold w-32 hover:bg-red-700'
                                >Unduh Sertifikat</button>
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

export default Certificate