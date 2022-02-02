import React from 'react';
import { Link } from 'react-router-dom';
import { BgLogin, LogoCisdi } from '../../assets';

function Users() {
    return (
        <div className="h-screen relative bg-cover bg-no-repeat flex items-center" style={{ backgroundImage: `url(${BgLogin})`, backgroundColor: '#404042' }}>
            <div className="container mx-auto z-50 mt-10 pt-10 h-2/12">
                <img src={LogoCisdi} className="object-cover mx-auto w-40" alt='logo-cisdi' />
                <Link to='https://cisdi.mfaiztriputra.id/login'>
                    <div className='bg-white p-3 rounded-lg w-1/4'>
                        <p>pelatih</p>
                    </div>
                </Link>
                <p className="text-white text-center mt-20 text-gray-50">created with ♥️ by ZDF.</p>
            </div>
        </div>
    )
}

export default Users
