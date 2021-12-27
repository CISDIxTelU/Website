import React from 'react'
import { CardQuestion } from '../../components'

function Question() {
    return (
        <div className='container mx-auto p-3'>
            <h1 className='font-bold text-3xl mb-3'>Sesi Pertanyaan</h1>
            <p className='text-gray-600'>berikut pertanyaan yang harus dijawab : </p>
            <hr className='my-5' />
            <CardQuestion question="Apa yang dimaksud dengan ..." />
            <CardQuestion question="Apa yang dimaksud dengan ini ..." />
            <CardQuestion question="Apa yang dimaksud dengan itu ..." />
            <CardQuestion question="Apa yang dimaksud dengan bla ..." />
            <CardQuestion question="Apa yang dimaksud dengan bla bla ..." />
            <button className='w-full bg-red-600 text-white font-bold py-3 hover:bg-opacity-75 rounded-lg'>Kirim Jawaban dan Lihat Hasil</button>
        </div>
    )
}

export default Question
