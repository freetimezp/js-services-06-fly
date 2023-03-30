import React, { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

import video from '../../assets/videos/fly.mp4';
import aeroplane from '../../assets/images/aeroplane.png';

const Home = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <div className='home flex container'>
            <div className="mainText">
                <h1 data-aos="fade-up" data-aos-duration='2500'>Create Ever-lasting Memories With Us</h1>
            </div>

            <div className="homeImages flex">
                <div className="videoDiv" data-aos="fade-up" data-aos-duration='2500'>
                    <video src={video} className='video' autoPlay muted loop></video>
                </div>

                <img src={aeroplane} alt="home" className='plane' data-aos="fade-down" data-aos-duration='3500' />
            </div>
        </div>
    );
}

export default Home;
