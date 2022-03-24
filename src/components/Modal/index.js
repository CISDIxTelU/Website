import React from 'react';
import Modal from '@mui/material/Modal';
import { MdOutlineClose } from "react-icons/md";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
};

const ModalComponent = ({ handleClose, title, description, open, foto }) => {

    const setLengthText = (deskripsi, length) => {
        return deskripsi.slice(0, length).concat('...')
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div style={style} className="w-full rounded-xl bg-white shadow-md overflow-hidden md:h-92 md:w-1/2 transition duration-300">
                    <div className="md:flex h-full">
                        <div className="md:shrink-0 flex-1">
                            <img className="h-full w-full object-cover md:rounded-l-xl" src={foto} alt="Man looking at item at a store" />
                        </div>
                        <div className="p-8 flex-1 relative">
                            <MdOutlineClose className='absolute right-10 top-5 text-red-600 cursor-pointer' size={30} onClick={handleClose} />
                            <h1 className='font-bold text-4xl mb-3 text-red-600'>Jangan <br/>Lewatkan <br/>Pelatihan Ini!</h1>
                            <button className="block mt-1 text-lg leading-tight text-left font-medium text-black hover:underline"> {title}</button>
                            <p className="my-2 text-gray-500">
                                {description}
                                </p>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ModalComponent;
