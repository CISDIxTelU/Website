import React, { useState } from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaHeart, FaRegHeart } from 'react-icons/fa';
import { FeedbackModal } from '..';
import axios from 'axios';

const AccordionSection = styled.div`
`;

const Container = styled.div`
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  border: 1px solid #0101;
  margin-bottom: 10px;
  h1 {
    padding: 1rem;
    font-size: 1rem;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const Dropdown = ({ dataLesson, id }) => {

    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    }

    const favorite = (ids) => {
        axios.post(`${BASE_URL}/favorit/add/${ids}`, {}, config).then(res => {
            if(res.data.status === 'success'){
                window.location.reload()
            }
        })
    }
    const deleteFavorite = (ids) => {
        axios.delete(`${BASE_URL}/favorit/delete/${ids}`, config).then(res => {
            if(res.data.status === 'success'){
                window.location.reload()
            }
        })
    }

    return (
        <div style={{ width: "100 %", marginBottom: '30px' }}>
            {dataLesson.map((data, idx) => {
                return (
                    <div className='border-b py-3 px-6 border-gray-200 flex justify-between items-center' key={idx}>
                        <Link className="block active:font-bold text-sm md:text-md hover:underline" to={`/course/${data.id}`} id="dropdown">{data.name}</Link>
                        <div className='flex gap-x-2'>
                            <button id='like' onClick={() => {
                                if (data['is_favorit'] === 0) {
                                    favorite(data.id)
                                }
                                else if (data['is_favorit'] === 1) {
                                    deleteFavorite(data.id)
                                }
                            }
                            }
                            >
                                {data['is_favorit'] ? <FaHeart id="isLike" fill='#EB5757' /> : <FaRegHeart id="dislike" />}
                            </button>
                            {data['is_done'] === 1 ? <FaCheckCircle fill='#00CE62' /> : <FaCheckCircle />}
                        </div>
                    </div>
                );
            })
            }
        </div >
    )
}

const Accordion = ({ dataLo, id, isDone }) => {
    const [clicked, setClicked] = useState(false);
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const toggle = index => {
        if (clicked === index) {
            //if clicked question is already active, then close it
            return setClicked(null);
        }
        setClicked(index);
    };
    return (
        <IconContext.Provider value={{ color: 'gray', size: '20px' }}>
            <AccordionSection>
                <Container>
                    <Link to={`/question/${id}/pre_test`} id="preTest">
                        <Wrap className='bg-red-600 text-white rounded-lg' onClick={() => toggle(100)} key={100}>
                            <h1 className="text-left font-semibold">Pre test</h1>
                        </Wrap>
                    </Link>
                    {dataLo.map((item, index) => {
                        return (
                            <div key={index}>
                                <Wrap className='bg-white justify-between rounded-lg' onClick={() => toggle(index)} key={index} id="accordion">
                                    <h1 className="text-left font-semibold">{item.name}</h1>
                                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                                </Wrap>
                                {clicked === index ? <Dropdown dataLesson={item.data_lesson} key={item.id} index={index} id={item.id} /> : null}
                            </div>
                        );
                    })}
                    <Link to={isDone ? `/question/${id}/post_test` : ''} id="postTest">
                        <Wrap className='bg-red-600 text-white rounded-lg' onClick={() => toggle(100)} key={100}>
                            <h1 className="text-left font-semibold">Post test</h1>
                        </Wrap>
                    </Link>
                    <Link to={`/task-upload/${id}`} id="taskTest">
                        <Wrap className='bg-red-600 text-white rounded-lg' onClick={() => toggle(100)} key={100}>
                            <h1 className="text-left font-semibold">Unggah Tugas</h1>
                        </Wrap>
                    </Link>
                    <button className='w-full' onClick={() => handleOpen()} id="feedback">
                        <Wrap className='bg-red-600 text-white rounded-lg' onClick={() => toggle(100)} key={100}>
                            <h1 className="text-left font-semibold">Feedback</h1>
                        </Wrap>
                    </button>
                    <Link to={`/complete/${id}`}>
                        <button className='w-fit md:w-96 mt-8'>
                            <Wrap className='bg-red-600 text-white justify-center rounded-full' onClick={() => toggle(100)} key={100}>
                                <h1 className="font-semibold" data-testid='selesai'>Selesaikan Pelatihan</h1>
                            </Wrap>
                        </button>
                    </Link>
                    <FeedbackModal handleClose={handleClose} open={open} id={id} />
                </Container>
            </AccordionSection>
        </IconContext.Provider >
    );
};

export default Accordion;