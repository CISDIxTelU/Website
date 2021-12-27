import React from 'react'

function CardQuestion({question, answer}) {
    return (
        <div className='rounded-lg bg-white border-l-8 shadow p-3 border-red-600 mb-3'>
            <h2 className='font-bold text-base mb-3'>{question}</h2>
            <div className='mb-2 flex items-center'>
            <input type="checkbox" className='mr-3'/>
            <label>Jawaban 1</label>
            </div>
            <div className='mb-2 flex items-center'>
            <input type="checkbox" className='mr-3'/>
            <label>Jawaban 2</label>
            </div>
            <div className='mb-2 flex items-center'>
            <input type="checkbox" className='mr-3'/>
            <label>Jawaban 3</label>
            </div>
            <div className='mb-2 flex items-center'>
            <input type="checkbox" className='mr-3'/>
            <label>Jawaban 4</label>
            </div>
           
        </div>
    )
}

export default CardQuestion
