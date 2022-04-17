import React, { useState } from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaHeart, FaRegHeart } from 'react-icons/fa';
import { FeedbackModal } from '..';

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
// const BASE_URL = process.env.REACT_APP_BASE_URL;

export const Dropdown = ({ dataLesson, id }) => {

    return (
        <div style={{ width: "100 %", marginBottom: '30px' }}>
            {dataLesson.map((data, idx) => {
                return (
                    <div className='border-b py-3 px-6 border-gray-200 flex justify-between' key={idx}>
                        <Link className="block active:font-bold hover:underline" to={`/course/${data.id}`}>{data.name}</Link>
                        <div className='flex gap-x-2'>
                            <button>
                                {data['is_favorit'] ? <FaHeart fill='#EB5757' /> : <FaRegHeart />}
                            </button>
                            {data['is_done'] === 1 ? <FaCheckCircle fill='#00CE62' /> : <FaCheckCircle />}
                        </div>
                    </div>
                );
            })
            }
        </div>
    )
}

const Accordion = ({ dataLo, id }) => {
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
                    <Link to={`/question/${id}/pre_test`}>
                        <Wrap className='bg-red-600 text-white rounded-lg' onClick={() => toggle(100)} key={100}>
                            <h1 className="text-left font-semibold">Pre test</h1>
                        </Wrap>
                    </Link>
                    {dataLo.map((item, index) => {
                        return (
                            <div key={index}>
                                <Wrap className='bg-white justify-between rounded-lg' onClick={() => toggle(index)} key={index}>
                                    <h1 className="text-left font-semibold">{item.name}</h1>
                                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                                </Wrap>
                                {clicked === index ? <Dropdown dataLesson={item.data_lesson} key={item.id} index={index} id={item.id} /> : null}
                            </div>
                        );
                    })}
                    <Link to={`/question/${id}/post_test`}>
                        <Wrap className='bg-red-600 text-white rounded-lg' onClick={() => toggle(100)} key={100}>
                            <h1 className="text-left font-semibold">Post test</h1>
                        </Wrap>
                    </Link>
                    <Link to={`#`}>
                        <Wrap className='bg-red-600 text-white rounded-lg' onClick={() => toggle(100)} key={100}>
                            <h1 className="text-left font-semibold">Unggah Tugas</h1>
                        </Wrap>
                    </Link>
                    <button className='w-full' onClick={() => handleOpen()}>
                        <Wrap className='bg-red-600 text-white rounded-lg' onClick={() => toggle(100)} key={100}>
                            <h1 className="text-left font-semibold">Feedback</h1>
                        </Wrap>
                    </button>
                    <Link to={`/complete/${id}`}>
                        <button className='w-96 mt-8'>
                            <Wrap className='bg-red-600 text-white justify-center rounded-full' onClick={() => toggle(100)} key={100}>
                                <h1 className="font-semibold">Selesaikan Pelatihan</h1>
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