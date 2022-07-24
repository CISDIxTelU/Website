import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { DummyProfile } from '../../assets';

const BASE_URL = process.env.REACT_APP_BASE_URL;

function Profile() {

    const [profile, setProfile] = useState([])
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('')
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }

    const updateProfile = () => {
        axios.post(`${BASE_URL}/profile/update`, { name: name, no_telp: phoneNumber }, config).then(res => {
            console.log(res.data)
            if (res) {
                setMessage('Update Profile Berhasil')
                setTimeout(() => {
                    setMessage('')
                }, 5000)
            }
            // setMessage(res.data)
        }).catch(err => {
            console.log(err.response)
            setMessage('Update Profile Tidak Berhasil')
            setTimeout(() => {
                setMessage('')
            }, 5000)
        })
    }

    useEffect(() => {
        axios.get(`${BASE_URL}/profile`, config).then(res => {
            setProfile(res.data)
            console.log(res.data)
        })
    }, [])

    return (
        <>
            <div className='container mx-auto p-3'>
                <h2 className='font-bold text-3xl text-red-600 text-center my-4'>CISDI</h2>
                <h2 className='font-bold text-2xl mb-3'>Profile</h2>
                <div className='border-l-8 border-r-8 rounded-lg p-3 bg-gray-200 border-red-600 mb-5'>
                    <div className='rounded-full bg-red-200 mx-auto my-10 relative' style={{ width: "200px", height: "200px" }}>
                        <img src={DummyProfile} className="absolute rounded-full" style={{ width: "200px", height: "200px", objectFit: 'cover' }} alt="foto profil" />
                    </div>
                    <div className='mx-20 mb-3'>
                        <p className='font-bold text-md mb-2'>Nama Lengkap</p>
                        <input type="text" placeholder="Nama lengkap anda" defaultValue={profile.name} onChange={(e) => setName(e.target.value)} className='w-full rounded p-2' />
                    </div>
                    <div className='mx-20 mb-3'>
                        <p className='font-bold text-md mb-2'>Nama Pengguna</p>
                        <input type="text" placeholder="Nama pengguna anda" defaultValue={profile.username} className='w-full rounded p-2' readOnly />
                    </div>
                    <div className='mx-20 mb-3'>
                        <p className='font-bold text-md mb-2'>Nomor Telepon</p>
                        <input type="text" placeholder="Nomor telepon anda" defaultValue={profile.no_telp} onChange={(e) => setPhoneNumber(e.target.value)} className='w-full rounded p-2' />
                    </div>
                    <div className='mx-20 mb-3'>
                        <p className='font-bold text-md mb-2'>Asal Instansi</p>
                        <div className='relative inline-block w-full text-gray-700'>
                            <select className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Asal instansi anda...">
                                <option>{profile.asal_instansi}</option>
                                <option>Another option</option>
                                <option>And one more</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                            </div>
                        </div>
                    </div>
                    <div className='mx-20 my-8'>
                        <button type='submit' className='bg-red-600 text-white py-3 font-bold w-full rounded-lg hover:bg-opacity`-75 hover:text-red-100' onClick={updateProfile}>Simpan</button>
                        <p className='mt-3 text-green-800 text-center'>{message}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
