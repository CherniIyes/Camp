import React, { useState } from 'react'
import { Navbar, Container, Carousel, FormControl, Nav } from 'react-bootstrap'
import logoo from "../pics/logoo.png" 

const Slider = () => {
    const [index, setIndex] = useState(0)
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    }
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className="slider-background" interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "480px", width: "99%" }}
                        className=""
                        src="https://cdn.media.amplience.net/i/jpl/231206-Sale-Cat-pages-camping"
                        alt="First slide"
                    />
                   
                </div>
            </Carousel.Item>
            <Carousel.Item className="slider-background2" interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "480px", width: "99%" }}
                        className=""
                        src="https://cdn.media.amplience.net/i/jpl/231127-Sale-Homepage-sale-desktop.jpg?v=286"
                        alt="First slide"
                    />
                   
                </div>
            </Carousel.Item>

            {/* <Carousel.Item className="slider-background3" interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "480px", width: "99%" }}
                        className=""
                        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftrekthehimalayas.com%2Fsar-pass-trek&psig=AOvVaw1DTbfi4QQ-TSrDm8EkUm97&ust=1706049133714000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj3lcCG8oMDFQAAAAAdAAAAABAD"
                        alt="First slide"
                    />
                    
                </div>
            </Carousel.Item> */}

            {/* <Carousel.Item className="slider-background4" interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "480px", width: "373.53px" }}
                        className=""
                        src="https://outdoorishome.com/wp-content/uploads/2021/11/Hammocking-in-winter-e1636475924383.jpg"
                        alt="First slide"
                    />
                 
                </div>
            </Carousel.Item> */}
        </Carousel>
    )
}
export default Slider;
