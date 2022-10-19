import React from 'react'
import { Slide } from 'react-slideshow-image'
import { slideImages } from '../Data'
import { RiArrowLeftSLine, RiArrowRightSLine} from 'react-icons/ri'
import 'react-slideshow-image/dist/styles.css'
import './TopSlider.css'

// Slider Styles

const buttonStyle = {
    width: "50px",
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'none',
    border: '0px',
    backgroundColor: '#fff',
    borderRadius: '50px',
    margin: '0 2%',
    fontSize: '2rem',
};

const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><RiArrowLeftSLine /></button>,
    nextArrow: <button style={{ ...buttonStyle }}><RiArrowRightSLine /></button>
}

const TopSlider = () => {
  return (
    <div className="slide-container" style={{backgroundColor: '#444444', width: '100vw', height: '65vh', textAlign: 'center', color: '#fff'}} >
        <Slide {...properties} >

                {slideImages.map((img, index)=> (
                <div className="each-slide" key={index}>
                    <div style={{backgroundImage: `url(${img.image}`, backgroundSize: '100%', height: '65vh', width: '100%', objectFit: 'cover', backgroundRepeat: 'no-repeat' }}>
                    <span>{img.caption}</span>
                    </div>
                </div>
                ))} 

        </Slide>
    </div>
  )
}

export default TopSlider