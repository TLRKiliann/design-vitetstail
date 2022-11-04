import React, {Component} from 'react'
//import "react-responsive-carousel/lib/styles/carousel.min.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import saseo from '../assets/saoseo.jpg'
import colorada from '../assets/laguna_colorada.jpg'
import forest from "../assets/bg_forest.jpg"
//import '../StylePages/Carousel.scss'

export class MyCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={saseo} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={colorada} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={forest} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};
