import React from 'react'
import { Link } from 'react-router-dom';

function Card({materi, judul, foto, linkTo}) {
    return (
        <div className="filter drop-shadow-lg bg-white rounded-xl">
            <img src={foto} alt="foto" className="w-full rounded-t-xl h-52 object-cover" />
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-5">
                    {judul}
                </h2>
                <div className="flex wrap justify-between items-center">
                    <div>
                        <p className="text-gray-300 font-semibold">Materi : </p>
                        <p className="text-blue-600 font-semibold">{materi}</p>
                    </div>

                    <Link to={linkTo} className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">See more</Link>
                </div>
            </div>
        </div>
    )
}

export default Card;
