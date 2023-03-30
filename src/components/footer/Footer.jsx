import React, { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { TiSocialFacebook } from 'react-icons/ti';
import { FaPinterestP } from 'react-icons/fa';

import logo from '../../assets/images/logo.png';

const Footer = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <div className='footer'>
            <div className="sectionContainer container grid">
                <div className="gridOne" data-aos="fade-up" data-aos-duration='2500'>
                    <div className="logoDiv">
                        <img src={logo} alt="logo" className='logo' />
                    </div>
                    <p>Your mind should be stronger than your feelings.</p>
                    <div className="socialIcon flex">
                        <TiSocialFacebook className='icon' />
                        <AiOutlineTwitter className='icon' />
                        <AiFillYoutube className='icon' />
                        <FaPinterestP className='icon' />
                    </div>
                </div>

                <div className="footerLinks" data-aos="fade-down" data-aos-duration='2500'>
                    <span className="linkTitle">Information</span>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Explore</a>
                    </li>
                    <li>
                        <a href="">Flight Status</a>
                    </li>
                    <li>
                        <a href="">Travel</a>
                    </li>
                    <li>
                        <a href="">Check-In</a>
                    </li>
                    <li>
                        <a href="">Manage your booking</a>
                    </li>
                </div>

                <div className="footerLinks" data-aos="fade-up" data-aos-duration='2500'>
                    <span className="linkTitle">Quick Guide</span>
                    <li>
                        <a href="">FAQ</a>
                    </li>
                    <li>
                        <a href="">How To</a>
                    </li>
                    <li>
                        <a href="">Features</a>
                    </li>
                    <li>
                        <a href="">Baggage</a>
                    </li>
                    <li>
                        <a href="">Route Map</a>
                    </li>
                    <li>
                        <a href="">Communities</a>
                    </li>
                </div>

                <div className="footerLinks" data-aos="fade-down" data-aos-duration='2500'>
                    <span className="linkTitle">Quick Guide</span>
                    <li>
                        <a href="">Chauffuer</a>
                    </li>
                    <li>
                        <a href="">Our Partners</a>
                    </li>
                    <li>
                        <a href="">Destination</a>
                    </li>
                    <li>
                        <a href="">Careers</a>
                    </li>
                    <li>
                        <a href="">Transportation</a>
                    </li>
                    <li>
                        <a href="">Rules</a>
                    </li>
                </div>
            </div>

            <div className="copyrightDiv flex">
                <p>
                    Design 2023 | Developed by <a href="#" target="_blank">Freetime</a>
                </p>
            </div>
        </div>
    );
}

export default Footer;
