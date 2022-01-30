import React from 'react';
import { Link } from 'react-router-dom';

function CardLanding({ foto, judul }) {
    return (
        <div className="w-80 rounded-xl bg-red-600 shadow-md overflow-hidden">
            <div>
                <div className="md:shrink-0">
                    <img className="h-full w-full object-cover" src={foto} alt="Man looking at item at a store" />
                </div>
                <div className="text-white">
                    <div className='p-8'>
                        <a href="#" className="block mt-1 text-lg leading-tight font-medium hover:underline"> {judul}</a>
                        <p className="my-2">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                    </div>
                    <Link className='flex justify-center w-full bg-red-600 py-5 border-t-2 hover:underline' to='#'>
                        <p className="font-semibold">deskripsi</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardLanding;
