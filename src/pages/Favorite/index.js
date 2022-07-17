import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaSistrix } from 'react-icons/fa';
import { CardFavorite } from '../../components';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Favorite = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState([])

    useEffect(() => {
        const fetchData = () => {
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }
            axios.get(`${BASE_URL}/favorit`, config).then(res => {
                const data = res.data.data
                setData(data)
                console.log(data[0].id_lesson)
                axios.get(`${BASE_URL}/lesson/${data[0].id_lesson}`, config).then(res => {
                    console.log(res.data.data.name)
                    setName(res.data.data.name)
                })
            })
        }
        
        fetchData()
    }, [])
    
    return (
        <div className='bg-card-task py-10'>
            <div className='container bg-white mx-auto py-8 px-8 rounded-lg'>
                <h1 className='font-bold text-3xl text-center text-red-600 my-5'>Favorit</h1>
                <div>
                    <div className="border-2 border-red-600 py-2 rounded-lg flex wrap items-center content-center mb-5">
                        <FaSistrix className="text-black mx-5 " />
                        <input type="text" className="appearance-none bg-transparent w-full h-full p-3 rounded-lg focus:outline-none text-sm lg:text-base" placeholder="Temukan Kursus"></input>
                    </div>
                </div>

                <h2 className='font-bold text-lg my-5'>Daftar Materi Favorit</h2>
                {
                    data.length === 0 ?
                        <p className='text-center' id="errorDone">Tidak ada materi favorit</p>
                        :
                        <div className='grid md:grid-cols-2 gap-5'>
                            {data.map(data => {
                                return (
                                    <CardFavorite title={name} />
                                )
                            })}
                        </div>
                }
            </div>
        </div>
    )
}

export default Favorite;