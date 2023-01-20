import styles from './footer.module.scss';
import logoImage from '../public/img/main-logo-crop.png'
import Image from 'next/image';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logoBox}>
                <Image src={logoImage} />
            </div>
            <div>
                <h3>Riptide K9</h3>
                <div>JACKSONVILLE'S BEST MALE DOG TRAINER</div>
            </div>
            <div className={styles.infoBox}>
                <div>Hours</div>
                <div>24/7, bitch? What you think this is?</div>
            </div>
        </div>
    )
};

export default Footer;