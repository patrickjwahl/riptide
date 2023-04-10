import Image, { StaticImageData } from 'next/image'
import styles from './flipcard.module.scss'
import { useState, useEffect } from 'react'
import cn from 'classnames'
import Button from './button'
import Link from 'next/link'

interface Props {
    /** Content for front and back sides of the flip card */
    image: StaticImageData,
    frontText: string,
    backText: string,
    link?: string
}

const FlipCard = ({ image, frontText, backText, link = null }: Props) => {

    const [isClicked, setIsClicked] = useState<boolean>(false);

    const [isMobile, setIsMobile] = useState<boolean>(false);

    const handleWindowSizeChange = () => {
        setIsMobile(window.innerWidth <= 992);
    }

    useEffect(() => {
        handleWindowSizeChange();

        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const handleClicked = () => {
        if (!isMobile) return;

        setIsClicked(!isClicked);
    }

    return (
        <div className={cn(styles.flipCard, {[styles.flipped]: isClicked})} onClick={handleClicked}>
            <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                    <div className={styles.imageContainer}>
                        <Image src={image} alt={`${frontText} image`} layout='fill' sizes='(max-width: 992px) 33vw, 95vw' />
                    </div>
                    <div className={styles.frontText}>
                        {frontText}
                    </div>
                </div>
                <div className={styles.flipCardBack}>
                    <div className={styles.backTitle}>
                        {frontText}
                    </div>
                    {backText}
                    {link ? (
                        <Link href={link}><a><Button>{`MORE ABOUT ${frontText}`}</Button></a></Link>
                    ) : (null)}
                </div>
            </div>
        </div>
    )
}

export default FlipCard;