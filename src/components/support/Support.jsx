import React, { useEffect }  from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

import support1 from '../../assets/images/support-1.jpg';

const Support = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <div className='support container section'>
            <div className="sectionContainer">
                <div className="titlesDiv">
                    <small>travel support</small>
                    <h2>Plan your travel with confidence</h2>
                    <p>Find help with booking and travel plans, see what to expect along the journey!</p>
                </div>

                <div className="infoDiv grid">
                    <div className="textDiv grid">
                        <div className="singleInfo" data-aos="fade-down" data-aos-duration='2500'>
                            <span className="number">01</span>
                            <h4>Travel requirements for Dubai</h4>
                            <p>Find help with booking and travel plans, see what to expect along the journey!</p>
                        </div>

                        <div className="singleInfo" data-aos="fade-down" data-aos-duration='3500'>
                            <span className="number colorOne">02</span>
                            <h4>Chauffeur services at your arrival</h4>
                            <p>Find help with booking and travel plans, see what to expect along the journey!</p>
                        </div>

                        <div className="singleInfo" data-aos="fade-down" data-aos-duration='4500'>
                            <span className="number colorTwo">03</span>
                            <h4>Multi-risk travel insurance</h4>
                            <p>Find help with booking and travel plans, see what to expect along the journey!</p>
                        </div>
                    </div>

                    <div className="imgDiv" data-aos="fade-up" data-aos-duration='2500'>
                        <img src={support1} alt="support" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Support;
