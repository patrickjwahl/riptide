import styles from './navbar.module.scss';
import Image from 'next/image';
import logoImage from '../public/img/resized/logo-outline.png';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MdMenu, MdClose } from 'react-icons/md';
import instaLogo from '../public/img/resized/Instagram_Glyph_Gradient.svg';
import yelpLogo from '../public/img/resized/yelp_burst.svg';

interface Props {
    /** Should background be transparent? */
    isTransparent?: boolean;

    /** Is the dropdown menu open? */
    dropdownOpen: boolean;

    /** Function to toggle dropdown */
    toggleDropdown: () => void;
}

const Navbar = ({ isTransparent = false, dropdownOpen, toggleDropdown, ...otherProps }: Props) => {

    const router = useRouter();

    return (
        <>
        <div className={cn(styles.outerContainer, {[styles.solidBackground]: (!isTransparent || dropdownOpen), [styles.noShadow]: dropdownOpen})}>
            <div className={styles.container}>
                <Link href="/">
                    <a>
                        <div onClick={() => {if (dropdownOpen) toggleDropdown()}} className={cn(styles.image, styles.logo)}>
                            <Image src={logoImage} alt="logo" />
                        </div>
                    </a>
                </Link>
                <ul className={styles.linksList}>
                    <Link href="/about"><a className={styles.headerLink}><li className={router.pathname == '/about' ? styles.activeLink : ''}>ABOUT</li></a></Link>
                    <Link href="/programs"><a className={styles.headerLink}><li className={router.pathname == '/programs' ? styles.activeLink : ''}>PROGRAMS</li></a></Link>
                    <Link href="/testimonials"><a className={styles.headerLink}><li className={router.pathname == '/testimonials' ? styles.activeLink : ''}>TESTIMONIALS</li></a></Link>
                    <Link href="/faq"><a className={styles.headerLink}><li className={router.pathname.startsWith('/faq') ? styles.activeLink : ''}>FAQ</li></a></Link>
                    <Link href="/blog"><a className={styles.headerLink}><li className={router.pathname.startsWith('/blog') ? styles.activeLink : ''}>BLOG</li></a></Link>
                    <div className={styles.contactContainer}><Link href="#contact-form"><a><li className={styles.navButton}>
                        <div className={styles.button}>SCHEDULE A CONSULTATION</div>
                    </li></a></Link>
                        <div className={styles.contactList}>
                            <div className={styles.email}><a href='mailto:curtis@caravank9.com' target="_blank">curtis@caravank9.com</a></div>
                            <div className={styles.email}>&#x2022;</div>
                            <a href='https://www.instagram.com/caravank9/' target='_blank'>
                                <Image src={instaLogo} alt="instagram" />
                            </a>
                            <a href='https://www.yelp.com/biz/caravan-k9-jacksonville' target='_blank'>
                                <Image src={yelpLogo} alt="yelp" />
                            </a>
                        </div>
                    </div>
                </ul>
                <div className={styles.dropdownButton} onClick={toggleDropdown}>
                    <MdMenu className={cn(styles.dropdownIcon, {[styles.activeIcon]: !dropdownOpen})} />
                    <MdClose className={cn(styles.dropdownIcon, {[styles.activeIcon]: dropdownOpen})} />
                </div>
            </div>
        </div>
        <ul className={cn(styles.dropdownMenu, {[styles.menuOpen]: dropdownOpen})}>
            <li onClick={toggleDropdown}><Link href="/about"><a>ABOUT</a></Link></li>
            <li onClick={toggleDropdown}><Link href="/programs"><a>PROGRAMS</a></Link></li>
            <li onClick={toggleDropdown}><Link href="/testimonials"><a>TESTIMONIALS</a></Link></li>
            <li onClick={toggleDropdown}><Link href="/faq"><a>FAQ</a></Link></li>
            <li onClick={toggleDropdown}><Link href="/blog"><a>BLOG</a></Link></li>
            <li className={styles.highlightColor} onClick={toggleDropdown}><Link href="#contact-form"><a>SCHEDULE A CONSULTATION</a></Link></li>
            <li className={styles.mobileSocialsContainer}>
                <a href='https://www.instagram.com/caravank9/' target='_blank'>
                    <Image src={instaLogo} alt="instagram" />
                </a>
                <a href='https://www.yelp.com/biz/caravan-k9-jacksonville' target='_blank'>
                    <Image src={yelpLogo} alt="yelp" />
                </a>
            </li>
        </ul>
        </>
    )
}

export default Navbar;