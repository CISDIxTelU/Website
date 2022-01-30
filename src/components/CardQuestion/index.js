import React from 'react'

function CardQuestion({ data, selected }) {
    return (
        <div className='rounded-lg bg-white border-l-8 shadow p-3 border-red-600 mb-3'>
            <div className='font-bold text-base mb-3' dangerouslySetInnerHTML={{ __html: data.question }} />
            <div className='mb-2 flex items-center'>
                <input type="radio" className='mr-3' name={`${data.id}`} value="answer_1" onChange={() => selected("answer_1")} />
                <label>{data.answer_1}</label>
            </div>
            <div className='mb-2 flex items-center'>
                <input type="radio" className='mr-3' name={`${data.id}`} value="answer_2" onChange={() => selected("answer_2")} />
                <label>{data.answer_2}</label>
            </div>
            <div className='mb-2 flex items-center'>
                <input type="radio" className='mr-3' name={`${data.id}`} value="answer_3" onChange={() => selected("answer_3")} />
                <label>{data.answer_3}</label>
            </div>
            <div className='mb-2 flex items-center'>
                <input type="radio" className='mr-3' name={`${data.id}`} value="answer_4" onChange={() => selected("answer_4")} />
                <label>{data.answer_4}</label>
            </div>
        </div>
    )
}

export default CardQuestion
