import axios from 'axios';
import React, {useState} from 'react';
import { useDropzone } from 'react-dropzone';
import { FaFolderOpen } from 'react-icons/fa';
import { MdFileCopy, MdOutlineDeleteOutline } from 'react-icons/md';

const BASE_URL = process.env.REACT_APP_BASE_URL;

function Dropzone(props) {

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
    const [Status, setStatus] = useState(false)
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'multipart/form-data'
        }
    }

    const files = acceptedFiles.map(file => {
        return (
            <li className='bg-white rounded-lg mt-3 flex flex-row' key={file.path}>
                <div className='flex-1 p-3 flex'>
                    <span>
                        <MdFileCopy className='text-red-700 text-xl mr-3' />
                    </span>
                    <p>
                        {file.path}
                    </p>
                </div>
                <p className='p-3'>{file.size * 0.001} Kb</p>
                <button className='bg-red-600 p-3 rounded-r hover:bg-red-800'>
                    <MdOutlineDeleteOutline className='text-white text-xl' />
                </button>
            </li>
        )
    }
    );

    const submitTask = (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append('file', acceptedFiles[0])
        formData.append('user_notes', 'testing dari dev')
        axios.post(`${BASE_URL}/task/${props.id}`, formData, config)
            .then(res => {
                if(res.status === 200){
                    setStatus(!Status)
                }
            }).catch(err => {
                setStatus(false)
            })
    }

    return (
        <section className="container">
            <form onSubmit={submitTask}>
                <div {...getRootProps({ className: 'dropzone' })} id="input-file" className='rounded-lg border border-dashed p-10 border-red-600'>
                    <input {...getInputProps()} name='file' type='file' id="input-file" />
                    <FaFolderOpen className='text-red-700 w-28 h-28 mx-auto' />
                    <p className='font-semibold text-center'>Seret dokumen, foto, atau video kamu<br /> kesini untuk memulai unggah tugas.</p>
                    <div className='relative w-fit mx-auto'>
                        <hr className='md:w-52 w-32 border-gray-400 my-8' />
                        <p className='font-semibold text-gray-700 bg-gray-50 absolute -top-3 md:left-20 left-11'>ATAU</p>
                    </div>
                    <div className='text-center'>
                        <button className='bg-red-700 rounded-lg mx-auto py-3 px-10 text-white hover:bg-red-800'>Jelajahi File</button>
                    </div>
                </div>
                <ul>{files}</ul>
                <button className='bg-red-600 p-3 rounded-xl text-white hover:bg-red-800 md:w-48 w-full mt-5' type='submit' id="button">Kirim</button>
                <p className={`${Status === true ? 'text-green-400': 'text-red-400'}`} id="message">{Status === true ? 'file berhasil dikirim' : 'file tidak berhasil dikirim. coba lagi'}</p>
            </form>
        </section>
    );
}

export default Dropzone