import React from 'react'
import { LogoNavbar } from '../../assets'

function Navbar() {
    return (
        <div className="shadow-md">
            <div className="container flex wrap justify-between items-center mx-auto py-4">
                <img src={LogoNavbar} />
                <div className="flex flex-1 items-center justify-center">
                    <a href="#" className="mr-10 h-auto">Courses</a>
                    <input type="text" className="p-3 px-5 border rounded-full w-5/12" placeholder="Search here..."></input>
                </div>
                <div className="flex flex-2 bg-gray-400">
                    <button type="submit" className="bg-blue-600 py-2 px-5 rounded-lg text-white hover:bg-blue-700">Log In</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
