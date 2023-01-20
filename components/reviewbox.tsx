import styles from './reviewbox.module.scss';
import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';

interface Props {
    /** Author name */
    author: string,

    /** Review body */
    text: string,

    /** Link to external review */
    link?: string
}

const ReviewBox = ({author, text, link = null}: Props) => {

    const [ isVisible, setIsVisible ] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const { innerWidth: viewportWidth } = window;
        const threshold: number = (viewportWidth > 992) ? 0.1 : 0.1;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {setIsVisible(isVisible || entry.isIntersecting)})
        }, { threshold });
        if (ref.current) observer.observe(ref.current);
        return () => {if (ref.current) observer.unobserve(ref.current)};
    }, [ref, isVisible]);

    return (
        <div ref={ref} className={cn(styles.reviewContainer, {[styles.isVisible]: isVisible})}>
            <a href={link} target='_blank'>
                <div>
                    <h3>{author}</h3>
                    <div className={styles.stars}>
                        <span className='material-symbols-outlined'>star</span>
                        <span className='material-symbols-outlined'>star</span>
                        <span className='material-symbols-outlined'>star</span>
                        <span className='material-symbols-outlined'>star</span>
                        <span className='material-symbols-outlined'>star</span>
                    </div>
                    <div>{text}</div>
                </div>
            </a>
        </div>
    )
};

export default ReviewBox;