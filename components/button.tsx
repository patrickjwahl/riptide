import { useState } from 'react';
import styles from './button.module.scss';
import cn from 'classnames';

interface Props {
    /** Is the button the primary option? */
    isPrimary?: boolean,
    /** Additional styles */
    style?: { [key: string]: string },
    /** Text for the button */
    children: string
}

const Button = ({ isPrimary = false, style = {}, children }: Props) => {
    return (
        <div className={cn(styles.container, {[styles.primary]: isPrimary})} style={style}>
            {children}
        </div>
    );
}

export default Button;