import { useState } from 'react';
import styles from './expandable.module.scss';
import cn from 'classnames';

interface Props {
    /** Header text */
    header: string,

    /** Content text */
    content: string;

    /** Style for the wrapper div */
    style?: { [key: string]: string },
}

const Expandable = ({ header, content, style={}, ...otherProps }: Props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={styles.container} style={style}>
            <div className={cn(styles.header, {[styles.headerVisible]: isOpen})} onClick={toggleIsOpen}>
                <span className={styles.headerText}>{header}</span>
                <span className={cn('material-symbols-outlined', styles.icon, {[styles.iconVisible]: !isOpen})}>expand_more</span>
                <span className={cn('material-symbols-outlined', styles.icon, {[styles.iconVisible]: isOpen})}>expand_less</span>
            </div>
            <div className={cn(styles.content, {[styles.contentVisible]: isOpen})}>
                {content}
            </div>
        </div>
    );
}

export default Expandable;