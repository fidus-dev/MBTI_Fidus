import React, { FC } from 'react'

import { img } from './Carousel/Carousel';
import Carousel from './Carousel/Carousel';

import black from '../static/black.jpg';
import blue from '../static/blue.png';
import green from '../static/green.png';
import yellow from '../static/yellow.png';
import red from '../static/red.jpg';

const testArr: img[] = [black, blue, green, yellow, red];

interface CarouselTestProps {

}

const CarouselTest: React.FC<CarouselTestProps> = ({ }) => {
    return (
        <div style={{
            display: 'flex',
            width: '100%',
            height: '20rem;',
        }}>
            <Carousel imageArray={testArr} />
        </div>
    );
}

export default CarouselTest;