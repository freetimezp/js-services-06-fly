import React, { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

import lounge1 from '../../assets/images/lounge-1.jpg';

const Lounge = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <div className='lounge container section'>
            <div className="sectionContainer grid">
                <div className="imgDiv" data-aos="fade-up" data-aos-duration='2500'>
                    <img src={lounge1} alt="lounge" />
                </div>

                <div className="textDiv" data-aos="fade-up" data-aos-duration='2500'>
                    <h2>Unaccompanied Minor Lounge</h2>

                    <div className="grids grid">
                        <div className="singleGrid" data-aos="fade-down" data-aos-duration='2500'>
                            <span className='gridTitle'>Help through the airport</span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Perferendis eveniet consequatur quia pariatur voluptate aliquid.
                            </p>
                        </div>

                        <div className="singleGrid" data-aos="fade-down" data-aos-duration='3500'>
                            <span className='gridTitle'>Care on the flight</span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Perferendis eveniet consequatur quia pariatur voluptate aliquid.
                            </p>
                        </div>

                        <div className="singleGrid" data-aos="fade-down" data-aos-duration='4500'>
                            <span className='gridTitle'>Helpfull services</span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Perferendis eveniet consequatur quia pariatur voluptate aliquid.
                            </p>
                        </div>

                        <div className="singleGrid" data-aos="fade-down" data-aos-duration='5500'>
                            <span className='gridTitle'>Priority boarding</span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Perferendis eveniet consequatur quia pariatur voluptate aliquid.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lounge;
