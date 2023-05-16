import styles from './callbutton.module.scss';
import { MdPhoneEnabled } from 'react-icons/md';
import { useEffect, useState } from 'react';
import cn from 'classnames';

const CallButton = () => {

    const [ textVisible, setTextVisible ] = useState(false);

    useEffect(() => {
        setTextVisible(true);
    }, []);

    const hideText = () => {
        setTextVisible(false);
        document.removeEventListener('touchmove', hideText);
    };

    useEffect(() => {
        document.addEventListener('touchmove', hideText);

        return () => document.removeEventListener('touchmove', hideText);
    }, []);

    return (
        <div className={styles.container}>
            <a href='tel:4015249805'><button><MdPhoneEnabled /></button></a>
            <div className={cn({[styles.visible]: textVisible})}>Call us with any questions!</div>
        </div>
    );
}

export default CallButton;