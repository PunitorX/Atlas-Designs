import React, { useState } from 'react'
import styled from 'styled-components'
import  { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md'
import { slideImages } from '../Data';

 const Container = styled.div`
    width: 100%;
    height: 65vh;
    position: relative;
    background-color: #444444;
 `

 const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: ${props => props.direction === 'left' && '325px'};
    right: ${props => props.direction === 'right' && '325px'};
    bottom: 0;
    margin: auto;
    opacity: 0.7;
    cursor: pointer;
    z-index: 1;
 `

 const Wrapper = styled.div`
    height: auto;
    display: flex;
    justify-content: center;
    transition: all 1.5s ease;    
    transform: translateX(${props=> props.slider * -101}rem); 
    overflow: hidden;
 `

 const Slide = styled.div`
    margin: 0 155px;
 `

 const ImgContainer = styled.div`
    display: flex;
    width: 1300px;  
    //  object-fit: fill;
 `

 const Image = styled.img`
    height: 65vh;
    width: 100%;
    
`
 

const Slider = () => {
    const [slider, setSlider] = useState(0);

    const handleClick = (direction) => {
        if(direction === "left"){
            setSlider(slider > 0 ? slider - 1 : 2)
        } else {
            setSlider(slider < 2 ? slider + 1 : 0)
        }
    };

    

  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <MdArrowBackIos  />
        </Arrow>
        <Wrapper slider={slider}>
            {slideImages.map((image) => (
                <Slide>
                    <ImgContainer>
                        <Image src={image.img} />
                    </ImgContainer>  
                </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <MdArrowForwardIos  />
        </Arrow>
    </Container>
  )
}

export default Slider