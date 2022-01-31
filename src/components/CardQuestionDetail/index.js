import React from 'react'
import { FaCheckSquare } from 'react-icons/fa'

function CardQuestionDetail({ data, selected, answer }) {
    return (
        <div className='rounded-lg bg-white border-l-8 shadow p-3 border-red-600 mb-3'>
            <div className='font-bold text-base mb-3' dangerouslySetInnerHTML={{ __html: data.question  }} />
            <div className='mb-2 flex items-center border border-2 border-red-400 rounded-lg p-2'>
                <b className='mr-2 ml-3'>A.</b>
                <label>{data.answer_1}</label>
                {data.key === 'answer_1' ? <FaCheckSquare className='text-green-600 ml-auto text-xl'/> : ''}
            </div>
            <div className='mb-2 flex items-center border border-2 border-red-400 rounded-lg p-2'>
                <b className='mr-2 ml-3'>B.</b>
                <label>{data.answer_2}</label>
                {data.key === 'answer_2' ? <FaCheckSquare className='text-green-600 ml-auto text-xl'/> : ''}
            </div>
            <div className='mb-2 flex items-center border border-2 border-red-400 rounded-lg p-2'>
                <b className='mr-2 ml-3'>C.</b>
                <label>{data.answer_3}</label>
                {data.key === 'answer_3' ? <FaCheckSquare className='text-green-600 ml-auto text-xl'/> : ''}
            </div>
            <div className={answer === data.key ? 'mb-2 flex items-center border border-2 border-green-400 rounded-lg p-2' : 'mb-2 flex items-center border border-2 border-red-400 rounded-lg p-2'}>
                <b className='mr-2 ml-3'>D.</b>
                <label>{data.answer_4}</label>
                {data.key === 'answer_4' ? <FaCheckSquare className='text-green-600 ml-auto text-xl'/> : ''}
            </div>
            <h2 className='font-bold text-2xl mb-3 mt-5'>Pembahasan</h2>
            <div className='border border-2 border-red-400 p-3 rounded-lg'>
                <p>{data.explanation}</p>
            </div>
        </div>
    )
}

export default CardQuestionDetail
