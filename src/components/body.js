import React, { useState } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const Body = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        './images/img.png',
        './images/heart.webp',
        './images/mug.webp',
    ];

    const handleUpClick = () => {
        setCurrentImageIndex((prevIndex) => {
            const newIndex = prevIndex + 1;
            return newIndex <= 3 ? newIndex : prevIndex;
        });
    };
    

    const handleDownClick = () => {
        setCurrentImageIndex((prevIndex) => {
            const newIndex = prevIndex - 1;
            return newIndex >= 0 ? newIndex : prevIndex;
        });
    };
    

    return (
        <div className='upper'>
            <div className='position'>
                <div className='name'>
                    <h1>
                        Nulla facilisi <br />
                        morbi <span>tempus</span> <br />
                        iaculis urna
                    </h1>
                </div>
                <div className='flex'>
                    <div className='text'>
                        <span>Pretium fusce</span>
                        <p>Sem integer vitae justo eget</p>
                    </div>
                    <div className='image'>
                        <img
                            src={images[currentImageIndex]}
                            alt={`Image ${currentImageIndex + 1}`}
                            style={{ cursor: 'pointer' }}
                        />
                        <span>$ 7.99</span>
                    </div>
                </div>
                <div className='slider'>
                    <FaArrowUp className='up' onClick={handleUpClick} style={{ cursor: 'pointer' }} />
                    <FaArrowDown className='up' onClick={handleDownClick} style={{ cursor: 'pointer' }} />
                </div>
            </div>
            <div className='box'>
                <div className='row'>
                    <div className='radius'>
                        <div className='border'></div>
                        <span>imperdiet</span>
                        <p>Nec feugiat in fermentum</p>
                    </div>
                    <div className='radius'>
                        <div className='border1'></div>
                        <span>imperdiet</span>
                        <p>Nec feugiat in fermentum</p>
                    </div>
                    <div className='radius'>
                        <div className='border2'></div>
                        <span>imperdiet</span>
                        <p>Nec feugiat in fermentum</p>
                    </div>
                </div>
                <div className='icons'>
                    <img src='./images/icon.png' alt='icon' />
                    <img src='./images/icon1.png' alt='icon' />
                    <img src='./images/icon2.webp' alt='icon' />
                </div>
            </div>
        </div>
    );
};

export default Body;
