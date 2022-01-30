import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BgForgot1, BgForgot2, BgForgot3 } from '../../assets';

function ForgotPassword() {
    return (
        <div className='bg-red-600 relative h-screen'>
            <img src={BgForgot1} className="absolute top-10" alt="bg-forgot"/>
            <img src={BgForgot2} className="absolute bottom-0 left-0" alt="bg-forgot"/>
            <img src={BgForgot3} className="absolute bottom-0 right-0" alt="bg-forgot"/>
            <div className='relative z-10 container mx-auto flex flex-col items-center py-10 '>
                <h1 className='text-2xl font-bold text-white mb-3 mt-5'>Lupa Password?</h1>
                <p className='text-bold text-medium text-white mb-5'>Jangan panik, silahkan menghubungi admin untuk reset password!</p>
                <Link to='/bla' className='bg-white text-red-600 py-3 px-8 rounded-full border-2 hover:border-white hover:bg-transparent hover:text-white'>
                    <a>Hubungi Admin Melalui WhatsApp</a>
                </Link>
                <Link to='/login' className='flex items-center mt-6'>
                    <FaChevronLeft className='text-white mr-5' />
                    <a className='text-white hover:underline'>Kembali ke masuk akun</a>
                </Link>
            </div>
        </div>
    )
}

export default ForgotPassword;
