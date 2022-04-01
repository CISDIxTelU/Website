import React from 'react'
import { PlayCircle } from '../../assets'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 700 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#B6000D' : '#B6000D',
  },
}));

function CardTask({title, progress, isDone}) {
  return (
    <div className='bg-card-task px-5 py-7 border-0 rounded-lg flex items-center mb-4'>
      {isDone ? (
        <div>
          <div className='bg-gray-700 py-2 px-10 rounded-t-lg'>
            <b className='text-white'>Nilai</b>
          </div>
          <div className='bg-red-700 text-center py-5 rounded-b-lg'>
            <b className='text-white text-5xl'>20</b>
          </div>
        </div>
      ) 
      : 
      <img src={PlayCircle} alt="circle play button" />
      }
      <div className='flex-1 mx-6'>
      <b className='text-xl'>{title}</b>
      </div>
      <div className='flex-1'>
        <b className='text-lg'>85% Complete</b>
        <BorderLinearProgress value={85} variant="determinate" className='mt-4' />
      </div>
    </div>
  )
}

export default CardTask