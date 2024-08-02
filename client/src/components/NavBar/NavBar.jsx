// styles

// hooks & functions
import { useMobile } from '../hooks/useMobile.js';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// logo
import { noBgLogo } from '../utils/consts.js';

const NavBar = ({ page }) => {
    let isMobile = useMobile();
    let [icons, setIconsClass] = useState([
        {
            id: 1,
            page: '/',
            class: 'fa-solid fa-house fa-4x', // font awesome classes
        },
        {
            id: 2,
            page: '/upcoming-events',
            class: 'fa-solid fa-clock fa-4x',
        },
        {
            id: 3,
            page: '/profile',
            class: 'fa-solid fa-user fa-4x',
        },
        {
            id: 4,
            page: '/newsletter',
            class: 'fa-solid fa-envelope fa-4x',
        }
    ]);

    if (isMobile) {
        return (
            <nav className="navigation-bar-mobile">
               {icons.map((icon) => (
                    <Link to={icon.page} key={icon.id}>
                        <i className={icon.class}></i>
                    </Link>
                ))}
            </nav>
        )
    } else {
        return (
            <nav className="navigation-bar-normal">
               <div>
                <Link to={"/"}><img src={noBgLogo} alt="logo" /></Link>
               </div>
               <div className='icons'>
                {icons.map((icon) => (
                    <Link to={icon.page} key={icon.id}>
                        <i className={icon.class}></i>
                    </Link>
                ))}
                </div>
                <div className='search-menu'>
                    <input id="checkbox2" type="checkbox"></input>
                    <label className="toggle toggle2" htmlFor="checkbox2">
                        <div id="bar4" className="bars"></div>
                        <div id="bar5" className="bars"></div>
                        <div id="bar6" className="bars"></div>
                    </label>
                </div>
            </nav>
        )
    }
}

export default NavBar;