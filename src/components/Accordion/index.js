import React, { useState } from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

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
  border-bottom: 1px solid #0101;
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
        <div style={{ width: "100 %", padding: "10px 25px", borderBottom: "1px solid #0101", borderTop: "1px solid #0101" }} key={index}>
            {dataLesson.map((data, idx) => {
                if (idx === index) {
                    data.forEach(element => {
                        slice.push(element);
                    });
                    return slice.map(data => {
                        return (
                            <Link className="py-3 block active:font-bold" to={`/course/${id}/${data.id_lo}/${data.id}`}>{data.name}</Link>
                        );
                    })
                }
            })}
        </div>
    )
}

// 321654987

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
                    <Wrap onClick={() => toggle(100)} key={100}>
                        <Link to={`/feedback/${id}`}>
                            <h1 className="text-left font-semibold">Feedback</h1>
                        </Link>
                    </Wrap>
                </Container>
            </AccordionSection>
        </IconContext.Provider >
    );
};

export default Accordion;