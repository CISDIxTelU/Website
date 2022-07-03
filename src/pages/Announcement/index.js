import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CardAnnouncement } from '../../components';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Announcement = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }
    axios.get(`${BASE_URL}/announcement`, config).then(res => {
      setData(res.data.data)
    }).catch(err => {
      // console.log(err)
    })
  }, [])

  return (
    <div className='bg-card-task py-10'>
      <div className='container bg-white mx-auto py-8 px-8 rounded-lg'>
        <h1 className='font-bold text-3xl text-center text-red-600 my-5'>Pemberitahuan</h1>
        <div className='my-4'>
          {
            data.length === 0 ?
              (
                <div className='text-center'>
                  <b>Tidak ada pemberitahuan untuk saat ini</b>
                </div>
              )
              :
              data.map(index => {
                return (
                  <CardAnnouncement title={index.title} description={index.text} key={index.id} />
                )
              })
          }
        </div>
      </div>
    </div>
  )
}

export default Announcement