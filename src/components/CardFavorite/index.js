import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { Banner1 } from '../../assets'

function CardHistory({title, count}) {
    return (
        <div className='shadow-md p-3 border-l-8 border-red-700'>
            <div className='flex'>
                <img src={Banner1} alt='foto' className='w-24 h-24 rounded-lg object-none' />
                <div className='flex-1 ml-5'>
                    <b className='text-lg'>Bagaimana Situasi Pandemi COVID-19 Saat ini?</b>
                    <FaHeart fill='#EB5757' className='float-right text-2xl' />
                </div>
            </div>
            <hr className='my-3'/>
            <b className='text-gray-300'>{count} Materi</b>
        </div>
    )
}

export default CardHistory
