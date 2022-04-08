import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CardAnnouncement } from '../../components';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Announcement = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
      axios.get(`${BASE_URL}/announcement`, config).then(res => {
        const data = res.data.data
        console.log(data)
        setData(data)
      })
    }

    fetchData()
  }, [])

  return (
    <div className='bg-card-task py-10'>
      <div className='container bg-white mx-auto py-8 px-8 rounded-lg'>
        <h1 className='font-bold text-3xl text-center text-red-600 my-5'>Pemberitahuan</h1>
        <div className='my-4'>
          {
            data.map(data => {
              return (
                <CardAnnouncement title={data.title} description={data.text} key={data.id} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Announcement