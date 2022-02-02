import React from 'react';
import { FaCalendar, FaTrophy } from 'react-icons/fa';
import { BgGrade1, BgGrade2, BgGrade3 } from '../../assets';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link, useLocation, useParams } from 'react-router-dom';

function QuestionGrade() {
    const { id } = useParams()
    const data = useLocation()
    const grade = data.state.grade.grade;
    const final = grade * 100;

    console.log(grade)

    return (
        <div className='container mx-auto'>
            <div className='my-4'>
                <h2 className='text-4xl font-bold mb-3'>Selamat!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='bg-red-700 w-full p-10 h-96 rounded-lg mb-52 flex relative'>
                <img src={BgGrade1} alt='foto' className='absolute bottom-0 left-0' />
                <img src={BgGrade2} alt='foto' className='absolute top-0 right-24' />
                <img src={BgGrade3} alt='foto' className='absolute bottom-0 right-0' />
                <div className='w-6/12 relative z-50'>
                    <div className='flex'>
                        <div className='bg-gray-800 mr-5 w-28 h-28 flex justify-center items-center rounded-lg inline-block'>
                            <FaTrophy className='text-white text-5xl' />
                        </div>
                        <div className='w-64'>
                            <h2 className='text-white text-xl font-bold mb-3'>QUIZ TOPIK</h2>
                            <p className='text-white text-medium'>Peningkatan Peran Kader dan Pendamping Kelompok dalam Respon Covid-19</p>
                        </div>
                    </div>
                    <div className='shadow-2xl bg-white flex h-10 rounded-lg w-2/4 mt-16 items-center z-50'>
                        <div className='h-full rounded-l-lg px-3 flex items-center justify-center bg-gray-800 mr-5'>
                            <FaCalendar className='text-white text-xl' />
                        </div>
                        <p className=' text-red-600 block'>19 Januari 2022 10.00 AM</p>
                    </div>
                </div>
                <div className='w-6/12 z-50'>
                    <div className='bg-white px-3 py-5 shadow-2xl w-1/2 mx-auto rounded-lg'>
                        <div className='flex justify-between mb-3'>
                            <div>
                                <p className='text-lg'>Nilai Kamu</p>
                                <p className='text-base'>Lorem Ipsum</p>
                            </div>
                            <p className='text-lg text-red-600'>{final}/100</p>
                        </div>
                        <CircularProgressbar value={final} text={`${final}%`} styles={buildStyles({
                            pathColor: '#B6000D',
                            textColor: '#404042',
                            trailColor: '#404042',
                        })} />
                    </div>
                </div>
            </div>
            <div className='flex justify-center my-5'>
            <Link to={`/detail-course/${id}`}>
                <button
                    className='
                bg-red-600 
                p-3 rounded-lg 
                text-white border-2 
                hover:bg-white 
                hover:border-red-600 
                hover:text-red-600'
                >
                    Kembali ke course
                </button>
            </Link>
            </div>
        </div>
    )
}

export default QuestionGrade;
