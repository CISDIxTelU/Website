import React from 'react'
import { FaCheckSquare } from 'react-icons/fa'

function CardQuestionDetail({ data }) {
    console.log(data.user_answer)

    return (
        <div className='rounded-lg bg-gray-100 border-l-8 shadow p-3 border-red-600 mb-3'>
            <div className='font-bold text-base mb-3' dangerouslySetInnerHTML={{ __html: data.question }} />
            <div className={'answer_1' === data.user_answer && data.is_right ? 'mb-2 flex items-center border bg-white border-2 border-green-400 rounded-lg p-2' : 'mb-2 flex items-center border bg-white border-2 border-black rounded-lg p-2'}>
                <b className='mr-2 ml-3'>A.</b>
                <label>{data.answer_1}</label>
                {data.key === 'answer_1' ? <FaCheckSquare className='text-green-600 ml-auto text-xl' /> : ''}
            </div>
            <div className={'answer_2' === data.user_answer && data.is_right ? 'mb-2 flex items-center border bg-white border-2 border-green-400 rounded-lg p-2' : 'mb-2 flex items-center border bg-white border-2 border-black rounded-lg p-2'}>
                <b className='mr-2 ml-3'>B.</b>
                <label>{data.answer_2}</label>
                {data.key === 'answer_2' ? <FaCheckSquare className='text-green-600 ml-auto text-xl' /> : ''}
            </div>
            <div className={'answer_3' === data.user_answer && data.is_right ? 'mb-2 flex items-center border bg-white border-2 border-green-400 rounded-lg p-2' : 'mb-2 flex items-center border bg-white border-2 border-black rounded-lg p-2'}>
                <b className='mr-2 ml-3'>C.</b>
                <label>{data.answer_3}</label>
                {data.key === 'answer_3' ? <FaCheckSquare className='text-green-600 ml-auto text-xl' /> : ''}
            </div>
            <div className={'answer_4' === data.user_answer && data.is_right ? 'mb-2 flex items-center border bg-white border-2 border-green-400 rounded-lg p-2' : 'mb-2 flex items-center border bg-white border-2 border-black rounded-lg p-2'}>
                <b className='mr-2 ml-3'>D.</b>
                <label>{data.answer_4}</label>
                {data.key === 'answer_4' ? <FaCheckSquare className='text-green-600 ml-auto text-xl' /> : ''}
            </div>
            <h2 className='font-bold text-2xl mb-3 mt-5'>Pembahasan</h2>
            <div className='border border-2 border-black p-3 bg-white rounded-lg'>
                <p>{data.explanation}</p>
            </div>
        </div>
    )
}

export default CardQuestionDetail
