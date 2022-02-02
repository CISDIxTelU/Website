import React, { useState } from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FaRegCheckCircle, FaRegHeart } from 'react-icons/fa';

const AccordionSection = styled.div`
`;

const Container = styled.div`
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  border: 1px solid #0101;
  border-radius: 15px;
  margin-bottom: 10px;
  h1 {
    padding: 1rem;
    font-size: 1rem;
  }
  span {
    margin-right: 1.5rem;
  }
`;

export const Dropdown = ({ dataLesson, id }) => {
    let slice = [];
    const [isLike, setIsLike] = useState(false);

    return (
        <div style={{ width: "100 %", marginBottom: '30px' }}>
            {dataLesson.map((data, idx) => {
                // if (data.id_lo === id) {
                // data.forEach(element => {
                //     slice.push(element);
                // });
                return (
                    <div className='border-b py-3 px-6 border-gray-200 flex justify-between'>
                        <Link className="block active:font-bold hover:underline" to={`/course/${data.id}`}>{data.name}</Link>
                        <div className='flex gap-x-2'>
                            {<FaRegHeart />}
                            <FaRegCheckCircle />
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

    const toggle = index => {
        if (clicked === index) {
            //if clicked question is already active, then close it
            return setClicked(null);
        }

        setClicked(index);
    };
    console.log(dataLo);
    return (
        <IconContext.Provider value={{ color: 'gray', size: '20px' }}>
            <AccordionSection>
                <Container>
                    <Link to={`/question/${id}/pre_test`}>
                        <Wrap className='bg-red-600 text-white' onClick={() => toggle(100)} key={100}>
                            <h1 className="text-left font-semibold">Pre test</h1>
                        </Wrap>
                    </Link>
                    {dataLo.map((item, index) => {
                        return (
                            <>
                                <Wrap className='bg-white' onClick={() => toggle(index)} key={index}>
                                    <h1 className="text-left font-semibold">{item.name}</h1>
                                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                                </Wrap>
                                {clicked === index ? <Dropdown dataLesson={item.data_lesson} index={index} id={item.id} /> : null}
                            </>
                        );
                    })}
                    <Link to={`/question/${id}/post_test`}>
                        <Wrap className='bg-red-600 text-white' onClick={() => toggle(100)} key={100}>
                            <h1 className="text-left font-semibold">Post test</h1>
                        </Wrap>
                    </Link>
                    <Link to={`#`}>
                        <Wrap className='bg-red-600 text-white' onClick={() => toggle(100)} key={100}>
                            <h1 className="text-left font-semibold">Unggah Tugas</h1>
                        </Wrap>
                    </Link>
                    <Link to={`/feedback`}>
                        <Wrap className='bg-red-600 text-white' onClick={() => toggle(100)} key={100}>
                            <h1 className="text-left font-semibold">Feedback</h1>
                        </Wrap>
                    </Link>
                </Container>
            </AccordionSection>
        </IconContext.Provider >
    );
};

export default Accordion;