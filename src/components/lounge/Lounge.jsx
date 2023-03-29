import React from 'react';

import lounge1 from '../../assets/images/lounge-1.jpg';

const Lounge = () => {
    return (
        <div className='lounge container section'>
            <div className="sectionContainer grid">
                <div className="imgDiv">
                    <img src={lounge1} alt="lounge" />
                </div>

                <div className="textDiv">
                    <h2>Unaccompanied Minor Lounge</h2>

                    <div className="grids grid">
                        <div className="singleGrid">
                            <span className='gridTitle'>Help through the airport</span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Perferendis eveniet consequatur quia pariatur voluptate aliquid.
                            </p>
                        </div>

                        <div className="singleGrid">
                            <span className='gridTitle'>Care on the flight</span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Perferendis eveniet consequatur quia pariatur voluptate aliquid.
                            </p>
                        </div>

                        <div className="singleGrid">
                            <span className='gridTitle'>Helpfull services</span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Perferendis eveniet consequatur quia pariatur voluptate aliquid.
                            </p>
                        </div>

                        <div className="singleGrid">
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
