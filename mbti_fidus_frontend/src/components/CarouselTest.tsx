import React, { FC } from 'react'

import { img } from './Carousel/Carousel';
import Carousel from './Carousel/Carousel';

import Item1 from '../static/Item1.jpg';
import Item2 from '../static/Item2.jpg';
import Item3 from '../static/Item3.jpg';
import Item4 from '../static/Item4.jpg';
import Item5 from '../static/Item5.jpg';


const testArr: img[] = [Item1, Item2, Item3, Item4, Item5];

interface CarouselTestProps {

}

const CarouselTest: React.FC<CarouselTestProps> = ({ }) => {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            overflow: 'hidden'
        }}>
            <Carousel imageArray={testArr} imageRatio={4/3}/>
        </div>
    );
}

export default CarouselTest;