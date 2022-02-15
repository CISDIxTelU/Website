import React from 'react'
import { BgFooter, LogoCisdiPrimary } from '../../assets';
import { Icon } from '../../components'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <div className='bg-white drop-shadow'>
            <div className='container mx-auto py-5'>
                <img src={LogoCisdiPrimary} className='mx-auto' width="170" alt='logo' />
                <p className='font-light text-xl text-center mt-5'>Health Learning Platform merupakan platform manajemen pembelajaran daring terkait kesehatan dan pembangunan yang dikelola oleh Center for Indonesia’s Strategic Development Initiatives (CISDI)</p>
                <div className='flex justify-center my-3'>
                    <p className='text-red-600 text-xl py-4 px-8 rounded-full text-center hover:opacity-75'>
                    <strong>Hubungi Kami</strong>
                    </p>
                </div>
                <div className='flex justify-between w-72 mx-auto'>
                    <Icon linkTo='https://www.instagram.com/cisdi_id/' image={<FaInstagram />} />
                    <Icon linkTo='https://www.facebook.com/cisdi' image={<FaFacebook />} />
                    <Icon linkTo='https://www.youtube.com/c/CISDITV' image={<FaYoutube />} />
                    <Icon linkTo='https://www.linkedin.com/company/center-for-indonesias-strategic-development-initiatives-cisdi-/' image={<FaLinkedin />} />
                </div>
            </div>
            <img src={BgFooter} alt='footer' style={{height: "100px", width: "100%"}} />
        </div>
    )
}

export default Footer
