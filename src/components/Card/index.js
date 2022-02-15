import React from 'react'
import { Link } from 'react-router-dom';

function Card({ materi, judul, foto, linkTo, deskripsi }) {

    const setLengthText = (deskripsi, length) => {
        if(deskripsi.length > length){
            return deskripsi.slice(0, length).concat('...')
        }
        return deskripsi
    }

    return (
        <>
        <Link to={linkTo}>
        <div class="w-full rounded-xl bg-white shadow-md overflow-hidden md:h-52 transition duration-300 ease-in-out hover:bg-gray-100">
                <div class="md:flex h-full md:p-4">
                    <div class="md:shrink-0">
                        <img class="h-full w-full object-cover md:w-48 md:rounded-l-xl" src={foto} alt="Man looking at item at a store" />
                    </div>
                    <div className='p-3'>
                        <button class="block mt-1 text-lg text-left leading-tight font-medium text-black hover:underline"> {judul}</button>
                        <p class="my-2 text-gray-500">{setLengthText(deskripsi, 165)}</p>
                        <div className='flex justify-between'>
                            <p className="text-gray-400 font-semibold">19 Materi</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
        </>
    )
}

export default Card;
