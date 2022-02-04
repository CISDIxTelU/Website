import React from 'react'
import { BgFooter, LogoCisdiPrimary } from '../../assets';
import { Icon } from '../../components'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <div className='bg-white drop-shadow'>
            <div className='container mx-auto py-5'>
                <img src={LogoCisdiPrimary} className='mx-auto' width="200" alt='logo' />
                <p className='font-light text-2xl text-center mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className='flex justify-center my-4'>
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
            <img src={BgFooter} alt='footer' style={{height: "150px", width: "100%"}} />
        </div>
    )
}

export default Footer
