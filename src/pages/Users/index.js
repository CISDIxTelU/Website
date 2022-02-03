import React from 'react';
import { Link } from 'react-router-dom';
import { BgLogin, LogoCisdi, Pelatih, Peserta } from '../../assets';

function Users() {
    return (
        <div className="h-screen bg-cover bg-no-repeat" style={{ backgroundImage: `url(${BgLogin})`, backgroundColor: '#404042' }}>
            <img src={LogoCisdi} className="object-cover mx-auto w-72 py-12" alt='logo-cisdi' />
            <div className="container mx-auto z-50 mt-10 pt-10 h-2/12">
                <div className='w-4/12 mx-auto mt-18'>
                    <h2 className='text-white font-bold mb-3'>Login Sebagai...</h2>
                    <p className='text-white mb-10'>Pilih peran untuk melanjutkan!</p>
                    <div className='grid gap-2 grid-cols-2'>
                        <a href='https://adminhlp.pencerahnusantara.org/login'>
                            <div className='border-2 border-white p-3 rounded-lg flex justify-center text-white items-center hover:bg-white hover:text-black'>
                                <img src={Pelatih} alt='foto' width='70' />
                                <p className='font-bold ml-5'>pelatih</p>
                            </div>
                        </a>
                        <Link to='/login'>
                            <div className='border-2 border-white p-3 rounded-lg flex justify-center text-white items-center hover:bg-white hover:text-black'>
                                <img src={Peserta} alt='foto' width='70' />
                                <p className='font-bold ml-5'>Peserta</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <p className="text-white text-center mt-20 text-gray-50">created with ♥️ by ZDF.</p>
            </div>
        </div>
    )
}

export default Users
