import styles from './footer.module.scss';
import logoImage from '../public/img/resized/logo.png';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logoBox}>
                <Image src={logoImage} />
            </div>
            <div>
                <h3>CARAVAN K9</h3>
                <div>Proudly serving Duval and St. Johns Counties, Florida</div>
            </div>
            <div className={styles.infoBox}>
                <div>&copy; 2023 Caravan K9</div>
            </div>
        </div>
    )
};

export default Footer;