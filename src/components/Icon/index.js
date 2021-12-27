import React from 'react'

function Icon({ image, linkTo }) {
    return (
        <a href={linkTo}>
            <div className='bg-white shadow rounded-full p-3 w-10 h-10 hover:bg-gray-50'>
                <span>{image}</span>
            </div>
        </a>
    )
}

export default Icon