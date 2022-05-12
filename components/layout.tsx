import Navbar from "./navbar";
import React from "react";
import { useState, useEffect } from 'react'

interface Props {
    children: React.ReactNode,

    /** Does the page contain a hero shot? */
    constainsHero?: boolean
}

const Layout = ({ children, containsHero = false }) => {
    const [ dropdownOpen, setDropdownOpen ] = useState<boolean>(false);
    const [ navbarTransparent, setNavbarTransparent ] = useState<boolean>(true);

    const handleScroll = (event) => {
        let scrollTop = window.scrollY;
        console.log(scrollTop);
        setNavbarTransparent(scrollTop < 200);
    }

    if (containsHero) {
        useEffect(() => {
            window.addEventListener('scroll', handleScroll);
        }, []);
    }

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    }

    return(
        <>
            <Navbar dropdownOpen={dropdownOpen} toggleDropdown={toggleDropdown} isTransparent={navbarTransparent} />
            <main onClick={() => {setDropdownOpen(false);}}>{children}</main>
        </>
    )
}

export default Layout;