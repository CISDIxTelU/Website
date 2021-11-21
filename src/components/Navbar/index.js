import React from 'react'
import { Link } from 'react-router-dom'
import { LogoNavbar } from '../../assets'

function Navbar({ isLogged }) {
    return (
        <div className="shadow-md bg-white sticky top-0 z-1">
            <div className="container flex wrap justify-between items-center mx-auto py-4">
                <img src={LogoNavbar} alt="foto" />
                <div className="flex flex-1 items-center justify-center">
                    <Link to="/courses" className="mr-10 h-auto">Courses</Link>
                    <input type="text" className="p-3 px-5 border rounded-full w-5/12" placeholder="Search here..."></input>
                </div>
                <div className="flex flex-2">
                    <Link to="/login" className="bg-blue-600 py-2 px-5 rounded-lg text-white hover:bg-blue-700">Log Out</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
