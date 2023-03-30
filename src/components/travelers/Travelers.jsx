import React, { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

import travel1 from '../../assets/images/travel-1.jpg';
import travel2 from '../../assets/images/travel-2.jpg';
import travel3 from '../../assets/images/travel-3.jpg';
import travel4 from '../../assets/images/travel-4.jpg';

import traveler1 from '../../assets/images/traveler-1.jpg';
import traveler2 from '../../assets/images/traveler-2.jpg';
import traveler3 from '../../assets/images/traveler-3.jpg';
import traveler4 from '../../assets/images/traveler-4.jpg';

const travelers = [
    {
        id: 1,
        destinationImage: travel1,
        travelerImage: traveler1,
        travelerName: 'Yodo Fun',
        socialLink: '@yodafun357',
    },
    {
        id: 2,
        destinationImage: travel2,
        travelerImage: traveler2,
        travelerName: 'Seggy',
        socialLink: '@seggy23',
    },
    {
        id: 3,
        destinationImage: travel3,
        travelerImage: traveler3,
        travelerName: 'Riana',
        socialLink: '@riana2010',
    },
    {
        id: 4,
        destinationImage: travel4,
        travelerImage: traveler4,
        travelerName: 'Briyan',
        socialLink: '@briyan34',
    },
];

const Travelers = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <div className='travelers container section'>
            <div className="sectionContainer">
                <h2>Top trevelers of this month</h2>

                <div className="travelersContainer grid">
                    {travelers.map(({ id, destinationImage, travelerImage, travelerName, socialLink }) => (
                        <div className="singleTraveler" key={id} data-aos="fade-down" data-aos-duration='2500'>
                            <img src={destinationImage} alt="city" className='destinationImage' />
                            <div className="travelerDetails">
                                <div className="travelerPicture">
                                    <img src={travelerImage} alt="traveler" className='travelerImage' />
                                </div>
                                <div className="travelerName">
                                    <span>{travelerName}</span>
                                    <p>{socialLink}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Travelers;
