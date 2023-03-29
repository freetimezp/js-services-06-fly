import React from 'react';

import video from '../../assets/videos/fly.mp4';
import aeroplane from '../../assets/images/aeroplane.png';

const Home = () => {
    return (
        <div className='home flex container'>
            <div className="mainText">
                <h1>Create Ever-lasting Memories With Us</h1>
            </div>

            <div className="homeImages flex">
                <div className="videoDiv">
                    <video src={video} className='video' autoPlay muted loop></video>
                </div>

                <img src={aeroplane} alt="home" className='plane' />
            </div>
        </div>
    );
}

export default Home;
