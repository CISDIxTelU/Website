import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaFolderOpen } from 'react-icons/fa';
import { MdFileCopy, MdOutlineDeleteOutline } from 'react-icons/md';

const BASE_URL = process.env.REACT_APP_BASE_URL;

function Dropzone(props) {

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
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
                console.log(res.status)
            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <section className="container">
            <form onSubmit={submitTask}>
                <div {...getRootProps({ className: 'dropzone' })} className='rounded-lg border border-dashed p-10 border-red-600'>
                    <input {...getInputProps()} name='file' type='file' />
                    <FaFolderOpen className='text-red-700 w-28 h-28 mx-auto' />
                    <p className='font-semibold text-center'>Seret dokumen, foto, atau video kamu<br /> kesini untuk memulai unggah tugas.</p>
                    <div className='relative w-fit mx-auto'>
                        <hr className='w-52 border-gray-400 my-8' />
                        <p className='font-semibold text-gray-700 bg-white absolute -top-3 left-20'>ATAU</p>
                    </div>
                    <div className='text-center'>
                        <button className='bg-red-700 rounded-lg mx-auto py-3 px-10 text-white hover:bg-red-800'>Jelajahi File</button>
                    </div>
                </div>
                <ul>{files}</ul>
                <button className='bg-red-600 p-3 rounded-xl text-white hover:bg-red-800 w-48 mt-5' type='submit'>Kirim</button>
            </form>
        </section>
    );
}

export default Dropzone