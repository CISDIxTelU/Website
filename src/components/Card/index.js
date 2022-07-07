import React from 'react'
import { Link } from 'react-router-dom';

function Card({ judul, foto, linkTo, deskripsi, count }) {

    const setLengthText = (deskripsi, length) => {
        if(deskripsi.length > length){
            return deskripsi.slice(0, length).concat('...')
        }
        return deskripsi
    }

    return (
        <>
        <Link to={linkTo}>
        <div id='card' className="w-full rounded-xl bg-white shadow-md overflow-hidden md:h-52 transition duration-300 ease-in-out hover:bg-gray-100">
                <div className="md:flex h-full md:p-3">
                    <div className="md:shrink-0">
                        <img className="h-full w-full object-cover md:w-48 md:rounded-l-xl" src={foto} alt="Man looking at item at a store" />
                    </div>
                    <div className='p-1'>
                        <button className="block mt-1 text-lg text-left leading-tight font-medium text-black hover:underline"> {judul}</button>
                        <p className="my-2 text-gray-500">{setLengthText(deskripsi, 165)}</p>
                        <div className='flex justify-between'>
                            <p className="text-gray-400 font-semibold">{count} Materi</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
        </>
    )
}

export default Card;
