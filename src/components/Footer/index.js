import React from 'react'
import { BgFooter, LogoCisdiPrimary } from '../../assets';
import { Icon } from '../../components'
import { Link } from 'react-router-dom';
import { FaFigma, FaGithub, FaGitlab, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
    return (
        <div className='bg-white drop-shadow'>
            <div className='container mx-auto py-10'>
                <img src={LogoCisdiPrimary} className='mx-auto' alt='logo' />
                <p className='font-light text-2xl text-center mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className='flex justify-center my-8'>
                    <Link to="/contact" className='bg-red-600 py-4 px-8 rounded-full text-center text-white hover:opacity-75'>
                        Contact Us
                    </Link>
                </div>
                <div className='flex justify-between w-72 mx-auto'>
                    <Icon linkTo='https://www.instagram.com/' image={<FaInstagram />} />
                    <Icon linkTo='https://www.instagram.com/' image={<FaFigma />} />
                    <Icon linkTo='https://www.instagram.com/' image={<FaGitlab />} />
                    <Icon linkTo='https://www.instagram.com/' image={<FaWhatsapp />} />
                    <Icon linkTo='https://www.instagram.com/' image={<FaGithub />} />
                </div>
            </div>
            <img src={BgFooter} alt='footer' />
        </div>
    )
}

export default Footer
