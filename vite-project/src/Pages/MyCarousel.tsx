import React, {Component} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import saseo from '../assets/saoseo.jpg'
import colorada from '../assets/laguna_colorada.jpg'
import forest from "../assets/bg_forest.jpg"
import '../StylePages/MyCarousel.scss'

export class MyCarousel extends Component {
    render() {
        return (
            <div className="div--carousel">
                <Carousel>
                    <div className="align--carousel">
                        <img src={saseo}  alt="img Carousel1" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src={colorada}  alt="img Carousel2" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src={forest}  alt="img Carousel3" />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
            </div>
        );
    }
};
