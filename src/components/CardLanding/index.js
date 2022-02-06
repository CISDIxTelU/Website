import React, { useState } from 'react';
import { Modal } from '..';

function CardLanding({ foto, judul }) {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <div style={{width: 'fit-content'}}>
        <div className="w-80 rounded-xl bg-red-600 shadow-md overflow-hidden">
            <div>
                <div className="md:shrink-0">
                    <img className="h-full w-full object-cover" src={foto} alt="Man looking at item at a store" />
                </div>
                <div className="text-white">
                    <div className='p-8'>
                        <p className="block mt-1 text-lg leading-tight font-medium hover:underline"> {judul}</p>
                        <p className="my-2">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                    </div>
                    <button className='flex justify-center w-full bg-red-600 py-5 border-t-2 hover:underline' onClick={handleOpen}>
                        <p className="font-semibold hover:underline">deskripsi</p>
                    </button>
                </div>
            </div>
        </div>
        <Modal handleClose={handleClose} title={judul} description="hello world" open={open} foto={foto} />
        </div>
    )
}

export default CardLanding;
