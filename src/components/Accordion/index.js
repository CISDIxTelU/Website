import React, { useState } from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FaRegCheckCircle } from 'react-icons/fa';

const AccordionSection = styled.div`
`;

const Container = styled.div`
`;

const Wrap = styled.div`
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  border: 1px solid #0101;
  border-radius: 15px;
  margin-bottom: 10px;
  background-color: #fff;
  h1 {
    padding: 1rem;
    font-size: 1rem;
  }
  span {
    margin-right: 1.5rem;
  }
`;

export const Dropdown = ({ dataLesson, index, id }) => {
    let slice = [];

    return (
        <div style={{ width: "100 %", marginBottom: '30px' }} key={index}>
            {dataLesson.map((data, idx) => {
                    if (idx === index) {
                    data.forEach(element => {
                        slice.push(element);
                    });
                    return slice.map(data => {
                        return (
                            <div className='border-b py-3 px-6 border-gray-200 flex justify-between'>
                                <Link className="block active:font-bold hover:underline" to={`/course/${id}/${data.id_lo}/${data.id}`}>{data.name}</Link>
                                <FaRegCheckCircle />
                            </div>
                        );
                    })
                }
            })}
        </div>
    )
}

const Accordion = ({ dataLo, dataLesson, id }) => {
    const [clicked, setClicked] = useState(false);

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
                    {dataLo.map((item, index) => {
                        return (
                            <>
                                <Wrap onClick={() => toggle(index)} key={index}>
                                    <h1 className="text-left font-semibold">{item.name}</h1>
                                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                                </Wrap>
                                {clicked === index ? <Dropdown dataLesson={dataLesson} index={index} id={id} /> : null}
                            </>
                        );
                    })}
                    <Link to={`/feedback/${id}`}>
                        <Wrap onClick={() => toggle(100)} key={100}>
                            <h1 className="text-left font-semibold">Feedback</h1>
                        </Wrap>
                    </Link>
                </Container>
            </AccordionSection>
        </IconContext.Provider >
    );
};

export default Accordion;