import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { BgSuccess } from '../../assets';

function Complete() {
    const {id} = useParams();
    return (
        <div className='container mx-auto p-10 my-8 bg-white rounded-lg'>
            <h1 className='font-semibold text-center text-red-700 my-5'>Pelatihan Selesai</h1>
            <div className='bg-red-600 w-full'>
                <div className='container text-center mx-auto py-10'>
                    <img src={BgSuccess} alt="bg-success" className='w-96 mx-auto' />
                    <h1 className='font-black text-white text-4xl mb-3 mt-5'>Pelatihan Selesai!</h1>
                    <Link to={`/detail-course/${id}`}>
                        <button className='bg-white text-red-600 font-bold py-3 px-5 mt-5 rounded-lg hover:bg-opacity-75'>Kembali Ke Halaman Pelatihan</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Complete
