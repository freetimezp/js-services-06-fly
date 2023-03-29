import React, { useState } from 'react';

import { SiConsul } from 'react-icons/si';
import { BsPhoneVibrate } from 'react-icons/bs';
import { AiOutlineGlobal } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';

import logo from '../../assets/images/logo.png';

const Navbar = () => {
    /* set menu active */
    const [active, setActive] = useState('navBarMenu');
    const showNavBar = () => {
        setActive('navBarMenu showNavBar');
    };
    const removeNavBar = () => {
        setActive('navBarMenu');
    };

    /* add bg to menu on scroll */
    const [noBg, addBg] = useState('navBarTwo');
    const addBgColor = () => {
        if(window.scrollY >= 10) {
            addBg('navBarTwo navBar_With_Bg');
        }else{
            addBg('navBarTwo');
        }
    };
    window.addEventListener('scroll', addBgColor);

    return (
        <div className='navBar flex'>
            <div className="navBarOne flex">
                <div>
                    <SiConsul />
                </div>

                <div className='none flex'>
                    <li className="flex"><BsPhoneVibrate className='icon' /> Support</li>
                    <li className="flex"><AiOutlineGlobal className='icon' /> Languages</li>
                </div>

                <div className="atb flex">
                    <span>Sign In</span>
                    <span>Sign Out</span>
                </div>
            </div>

            <div className={noBg}>
                <div className="logoDiv">
                    <img src={logo} alt="logo" className='logo' />
                </div>

                <div className={active}>
                    <ul className="menu flex">
                        <li onClick={removeNavBar} className="listItem">Home</li>
                        <li onClick={removeNavBar} className="listItem">About</li>
                        <li onClick={removeNavBar} className="listItem">Offers</li>
                        <li onClick={removeNavBar} className="listItem">Seats</li>
                        <li onClick={removeNavBar} className="listItem">Destinations</li>
                    </ul>

                    <button onClick={removeNavBar} className='btn flex btnOne'>Contact</button>
                </div>

                <button className='btn flex btnTwo'>Contact</button>

                <div className='toggleIcon' onClick={showNavBar}>
                    <CgMenuGridO className='icon' />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
