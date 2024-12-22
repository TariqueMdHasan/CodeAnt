import React, {useState} from 'react'
import "./Navbar.css";
import Logo from './Logo'
import Sidebar from './Sidebar';
function Navbar() {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setIsNavbarOpen((prev) => !prev);
        document.body.style.overflow = isNavbarOpen ? "auto" : "hidden";
    };


    return (
        <div className='navbar'>
            <div className='navbar__logo' >
                <Logo />
            </div>
            <div className='navbar__menu' onClick={toggleNavbar}>
                <div className={isNavbarOpen ? "line rotate1" : "line"}></div>
                <div className={isNavbarOpen ? "line hide" : "line"}></div>
                <div className={isNavbarOpen ? "line rotate2" : "line"}></div>
            </div>
            <div className={isNavbarOpen ? "overlay" : ""}></div>
            {isNavbarOpen && (
                <div className="navbar-nv">
                    <Sidebar />
                </div>
            )}
        </div>
    )
}

export default Navbar