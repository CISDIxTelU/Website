import React from 'react'
import {BgSuccess} from '../../assets';

function Complete() {
    return (
        <div className='bg-red-600 w-full'>
            <div className='container text-center mx-auto py-10'>
                <img src={BgSuccess} alt="bg-success" className='w-96 mx-auto' />
            <h1 className='font-black text-white text-4xl mb-3 mt-5'>Kursus Selesai!</h1>
            <button className='bg-white text-red-600 font-bold py-3 px-5 rounded-lg hover:bg-opacity-75'>Kembali Ke Halaman Kursus</button>
            </div>
        </div>
    )
}

export default Complete
