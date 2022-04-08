import React from 'react'
import { MdNotifications } from 'react-icons/md'
import parse from 'html-react-parser';

const CardAnnouncement = ({title, description}) => {

    const createMarkUp = (data) => {
        console.log(parse(toString(data)))
        return {__html: data};
    }

    return (
        <div className='bg-card-task px-4 py-7 border-0 rounded-lg flex items-center mb-4 h-32'>
            <div className='border-l-8 rounded border-red-600 h-full mr-3'>
            </div>
                <MdNotifications className='text-5xl text-red-600 mr-5' />
                <div>
                    <h3 className='font-bold'>{title}</h3>
                    <span dangerouslySetInnerHTML={createMarkUp(description)}></span>
                </div>
        </div>
    )
}

export default CardAnnouncement