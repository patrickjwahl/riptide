import { useState } from 'react';
import styles from './expandable.module.scss';
import cn from 'classnames';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

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
                <MdExpandMore className={cn(styles.icon, {[styles.iconVisible]: !isOpen})} />
                <MdExpandLess className={cn(styles.icon, {[styles.iconVisible]: isOpen})} />
            </div>
            <div className={cn(styles.content, {[styles.contentVisible]: isOpen})}>
                {content}
            </div>
        </div>
    );
}

export default Expandable;