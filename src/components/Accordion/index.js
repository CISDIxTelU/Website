import React, { useState } from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

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

export const Dropdown = ({ dataLesson, index }) => {
    const [name, setName] = useState([]);
    return (
        <div style={{
            width: "100 %", padding: "10px 25px", borderBottom: "1px solid #0101",
            borderTop: "1px solid #0101"
        }}>
            {dataLesson.forEach((element, idx) => {
                if (idx === index) {
                    element.map((data) => {
                        console.log(`index ${idx}`,data);
                        return (
                        <p>return</p>
                        );
                    })
                }
            })}
        </div>
            )
}

const Accordion = ({dataLo, dataLesson}) => {
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
                            // console.log(item);
                            // console.log('index lo : ', index)
                            // console.log('index lesson : ', idx);
                            // console.log(element)

                            return (
                                <>
                                    <Wrap onClick={() => toggle(index)} key={index}>
                                        <h1 className="font-semibold">{item.name}</h1>
                                        <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                                    </Wrap>
                                    {clicked === index ? <Dropdown dataLesson={dataLesson} index={index} key={index} /> : null}
                                </>
                            );
                        })}
                    </Container>
                </AccordionSection>
            </IconContext.Provider >
            );
};

            export default Accordion;