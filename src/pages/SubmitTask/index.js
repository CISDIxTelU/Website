import axios from 'axios';
import React, { useState } from 'react';
import { FaFolderOpen } from 'react-icons/fa'

function SubmitTask() {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };

    const handleSubmission = () => {
        const formData = new FormData();

        formData.append('File', selectedFile);

        axios.post();
    };
    return (
        <div className='bg-gray-100 p-10'>
            <div className='sm:container mx-auto pt-8 pb-10 px-10 bg-white rounded-lg'>
                <h1 className='font-bold text-3xl text-center text-red-600'>Unggah Tugas</h1>
                <div className='bg-slate-50 w-full rounded-lg p-4 my-5'>
                    <h3 className='font-semibold'>Uraian Tugas</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan, nunc fusce quis risus vestibulum. Tellus libero a suspendisse ut. Amet tellus aliquam orci sagittis.</p>
                </div>
                <div className='bg-slate-50 w-full rounded-lg p-4 my-5'>
                    <h3 className='font-semibold mb-3'>Unggah Tugas</h3>
                    <div className='bg-white p-3 rounded-lg border border-gray-400'>
                        <div className='rounded-lg border border-dashed p-10 border-red-600'>
                            <FaFolderOpen className='text-red-700 w-28 h-28 mx-auto' />
                            <p className='font-semibold text-center'>Seret dokumen, foto, atau video kamu<br /> kesini untuk memulai unggah tugas.</p>
                            <div className='relative w-fit mx-auto'>
                                <hr className='w-52 border-gray-400 my-8' />
                                <p className='font-semibold text-gray-700 bg-white absolute -top-3 left-20'>ATAU</p>
                            </div>
                            <div className='text-center'>
                                <button className='bg-red-700 rounded-lg mx-auto py-3 px-10 text-white'>Jelajahi File</button>
                            </div>
                        </div>
                    </div>
                    <button type='submit' />
                    <button className='bg-red-700 rounded-xl mx-auto py-3 px-28 text-white my-5'>Kirim</button>
                </div>
                <div className='bg-slate-50 w-full rounded-lg p-4 my-5'>
                    <h3 className='font-semibold mb-4'>Status Pengiriman</h3>
                    <table className='border border-gray-400 w-full'>
                        <tbody>
                            <tr className='bg-gray-300'>
                                <td className='w-56 border border-gray-400 p-2 font-bold'>Status Pengiriman</td>
                                <td className='w-56 border border-gray-400 p-2'>Belum Mengirim</td>
                            </tr>
                            <tr className='bg-white'>
                                <td className='w-56 border border-gray-400 p-2 font-bold'>Tanggal Pengumpulan</td>
                                <td className='w-56 border border-gray-400 p-2'>19 agustus 2022</td>
                            </tr>
                            <tr className='bg-white'>
                                <td className='w-56 border border-gray-400 p-2 font-bold'>File Pengiriman</td>
                                <td className='w-56 border border-gray-400 p-2'>Tugas1.pdf</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default SubmitTask;