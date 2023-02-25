import styles from './navbar.module.scss';
import Image from 'next/image';
import logoImage from '../public/img/resized/logo-outline.png';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
                            <Image src={logoImage} priority alt="logo" />
                        </div>
                    </a>
                </Link>
                <ul className={styles.linksList}>
                    <Link href="/about"><a className={styles.headerLink}><li className={router.pathname == '/about' ? styles.activeLink : ''}>ABOUT</li></a></Link>
                    <Link href="/programs"><a className={styles.headerLink}><li className={router.pathname == '/programs' ? styles.activeLink : ''}>PROGRAMS</li></a></Link>
                    <Link href="/testimonials"><a className={styles.headerLink}><li className={router.pathname == '/testimonials' ? styles.activeLink : ''}>TESTIMONIALS</li></a></Link>
                    <Link href="/faq"><a className={styles.headerLink}><li className={router.pathname == '/faq' ? styles.activeLink : ''}>FAQ</li></a></Link>
                    <div className={styles.contactContainer}><Link href="#contact-form"><a><li className={styles.navButton}>
                        <div className={styles.button}>SCHEDULE A CONSULTATION</div>
                    </li></a></Link>
                        <div className={styles.email}><a href='mailto:curtis@caravank9.com' target="_blank">curtis@caravank9.com</a></div>
                    </div>
                </ul>
                <div className={styles.dropdownButton} onClick={toggleDropdown}>
                    <span className={cn('material-symbols-outlined', styles.dropdownIcon, {[styles.activeIcon]: !dropdownOpen})}>menu</span>
                    <span className={cn('material-symbols-outlined', styles.dropdownIcon, {[styles.activeIcon]: dropdownOpen})}>close</span>
                </div>
            </div>
        </div>
        <ul className={cn(styles.dropdownMenu, {[styles.menuOpen]: dropdownOpen})}>
            <li onClick={toggleDropdown}><Link href="/about"><a>ABOUT</a></Link></li>
            <li onClick={toggleDropdown}><Link href="/programs"><a>PROGRAMS</a></Link></li>
            <li onClick={toggleDropdown}><Link href="/testimonials"><a>TESTIMONIALS</a></Link></li>
            <li onClick={toggleDropdown}><Link href="/faq"><a>FAQ</a></Link></li>
            <li className={styles.highlightColor} onClick={toggleDropdown}><Link href="#contact-form"><a>SCHEDULE A CONSULTATION</a></Link></li>
        </ul>
        </>
    )
}

export default Navbar;