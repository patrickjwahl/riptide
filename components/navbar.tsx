import styles from './navbar.module.scss';
import Image from 'next/image';
import logoImage from '../public/img/riptide-logo.png'
import titleImage from '../public/img/title.png'
import Button from './button'
import cn from 'classnames'
import { useState } from 'react'
import Link from 'next/link'

interface Props {
    /** Should background be transparent? */
    isTransparent?: boolean;

    /** Is the dropdown menu open? */
    dropdownOpen: boolean;

    /** Function to toggle dropdown */
    toggleDropdown: () => void;
}

const Navbar = ({ isTransparent = false, dropdownOpen, toggleDropdown, ...otherProps }: Props) => {

    return (
        <>
        <div className={cn(styles.outerContainer, {[styles.solidBackground]: !isTransparent || dropdownOpen})}>
            <div className={styles.container}>
                <Link href="/">
                    <a>
                        <div className={cn(styles.image, styles.logo)}>
                            <Image src={logoImage} alt="logo" />
                        </div>
                        <div className={styles.image}>
                            <Image src={titleImage} alt="title" />
                        </div>
                    </a>
                </Link>
                <ul className={styles.linksList}>
                    <Link href="/about"><a><li>ABOUT</li></a></Link>
                    <li>PROGRAMS</li>
                    <li>TESTIMONIALS</li>
                    <li className={styles.navButton}>
                        <Button>SCHEDULE A CONSULTATION</Button>
                    </li>
                </ul>
                <div className={styles.dropdownButton} onClick={toggleDropdown}>
                    <span className={cn('material-symbols-outlined', styles.dropdownIcon, {[styles.activeIcon]: !dropdownOpen})}>menu</span>
                    <span className={cn('material-symbols-outlined', styles.dropdownIcon, {[styles.activeIcon]: dropdownOpen})}>close</span>
                </div>
            </div>
        </div>
        <ul className={cn(styles.dropdownMenu, {[styles.menuOpen]: dropdownOpen})}>
            <li><Link href="/about"><a>ABOUT</a></Link></li>
            <li>PROGRAMS</li>
            <li>TESTIMONIALS</li>
            <li className={styles.highlightColor}>SCHEDULE A CONSULTATION</li>
        </ul>
        </>
    )
}

export default Navbar;