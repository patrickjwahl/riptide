import Navbar from "./navbar";
import React from "react";
import { useState, useEffect } from 'react'
import styles from './layout.module.scss'
import cn from "classnames";
import Contact from "./contact";
import Footer from "./footer";
import CallButton from "./callbutton";

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
        setNavbarTransparent(scrollTop < 200);
    }

    useEffect(() => {
        if (containsHero) {
            window.addEventListener('scroll', handleScroll);
            setNavbarTransparent(true);
            return () => window.removeEventListener('scroll', handleScroll);
        } else {
            window.removeEventListener('scroll', handleScroll);
            setNavbarTransparent(false);
        }
    }, [containsHero]);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    }

    return(
        <>
            <Navbar dropdownOpen={dropdownOpen} toggleDropdown={toggleDropdown} isTransparent={navbarTransparent} />
            <main onClick={() => {setDropdownOpen(false);}} className={cn({[styles.navbarPadding]: !containsHero})}>{children}</main>
            <Contact />
            <Footer />
            <CallButton />
        </>
    )
}

export default Layout;