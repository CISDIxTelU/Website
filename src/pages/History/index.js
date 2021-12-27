import React from 'react'
import { FaSistrix } from 'react-icons/fa';

const History = () => {
    return (
        <div className='bg-white'>
            <div className='container mx-auto pt-8'>
                <h1 className='font-bold text-3xl text-center text-red-600'>CISDI</h1>
                <div>
                    <h2 className='font-bold text-xl mt-10 mb-4'>Riwayat</h2>
                    <div className="border-2 border-red-600 py-2 rounded-lg flex wrap items-center content-center mb-5">
                        <FaSistrix className="text-black mx-5 " />
                        <input type="text" className="appearance-none bg-transparent w-full h-full p-3 rounded-lg focus:outline-none text-sm lg:text-base" placeholder="Temukan Kursus"></input>
                    </div>
                </div>

                <h2 className='font-bold text-lg'>Sedang Berlangsung</h2>
                <div>
                    
                </div>

                <h2 className='font-bold text-lg'>Selesai</h2>
            </div>
        </div>
    )
}

export default History;