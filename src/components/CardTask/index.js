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

function CardTask({ title, progress, isDone, percentage, id }) {
  return (
    <div className='bg-card-task px-4 py-7 border-0 rounded-lg flex items-center mb-4'>
      {isDone ? (
        <div className='flex-2'>
          <div className='bg-gray-700 py-2 px-7 rounded-t-lg'>
            <b className='text-white'>Presentasi</b>
          </div>
          <div className='bg-red-700 text-center py-4 rounded-b-lg'>
            <b className='text-white text-5xl'>{percentage}</b>
          </div>
        </div>
      )
        :
        <img src={PlayCircle} alt="circle play button" />
      }
      <div className='flex-1 mx-6'>
        <b className='text-xl' id={id}>{title}</b>
      </div>
      <div className='flex-1'>
        <b className='text-lg'>{percentage}% Complete</b>
        <BorderLinearProgress value={percentage} variant="determinate" className='mt-4' />
      </div>
    </div>
  )
}

export default CardTask