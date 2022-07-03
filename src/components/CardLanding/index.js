import React, { useState } from 'react';
import { Modal } from '..';

function CardLanding({ foto, judul, deskripsi, id }) {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <div style={{ width: 'fit-content' }}>
            <div className="w-80 h-full rounded-xl bg-red-600 shadow-md overflow-hidden">
                <div className='flex flex-col'>
                    <div className="md:shrink-0 h-44">
                        <img className="h-full w-full object-cover" src={foto} alt="Man looking at item at a store" />
                    </div>
                    <div className='p-8 h-32'>
                        <p className="block mt-1 text-white text-lg leading-tight font-bold text-center hover:underline" data-testid="paragraf">{judul}</p>
                    </div>
                    <button className='flex justify-center w-full h-auto py-5 border-t-2 border-white hover:underline text-white' onClick={handleOpen}>
                        <p className="font-semibold hover:underline text-white" data-testid={`open${id}`}>Deskripsi</p>
                    </button>
                </div>
            </div>
            <Modal handleClose={handleClose} title={judul} description={deskripsi} open={open} foto={foto} />
        </div>
    )
}

export default CardLanding;
