import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Button from '../components/button'
import Reviews from '../components/reviews'
import Image from 'next/image'
import backgroundImage from '../public/img/hero-bkg.jpg'
import backgroundImageMobile from '../public/img/hero-bkg-mobile.jpg'
import { useParallax } from 'react-scroll-parallax'
import cn from 'classnames'
import { useState, useRef, useEffect } from 'react'
import Layout from '../components/layout'
import { ReactElement } from 'react'

const Home = () => {
    const { ref: parallaxRef } = useParallax({speed: -100});

    const [ keyPointsVisible, setKeyPointsVisible ] = useState<boolean>(false);
    const keyPointsRef = useRef(null);

    const [ bannerVisible, setBannerVisible ] = useState<boolean>(false);

    useEffect(() => {
        const { innerWidth: viewportWidth } = window;
        const threshold: number = (viewportWidth > 992) ? 0.5 : 0.1;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {setKeyPointsVisible(keyPointsVisible || entry.isIntersecting)})
        }, { threshold });
        if (keyPointsRef.current) observer.observe(keyPointsRef.current);
        return () => {if (keyPointsRef.current) observer.unobserve(keyPointsRef.current)};
    }, [keyPointsRef, keyPointsVisible]);

    useEffect(() => {
        setBannerVisible(true);
    }, [bannerVisible]);

    return (
        <div style={{overflowX: 'hidden'}}>
            <Head>
                <title>Riptide K9 | Oahu's Best Dog Trainers</title>
            </Head>
            <div ref={parallaxRef as React.RefObject<HTMLDivElement>} className={styles.heroContainer}>
                <Image src={backgroundImage} width={1278} height={660} layout="responsive" alt="doggie" className={cn(styles.bkgImage, {[styles.bkgVisible]: bannerVisible})} />
                <div className={cn(styles.bannerContainer, {[styles.isVisible]: bannerVisible})}>
                    <div className={styles.banner}>
                        <p>IT'S NOT JUST TRAINING.</p>
                        <p>IT'S UNDERSTANDING.</p>
                        <Button isPrimary={true} style={{fontSize: '2.2vw', fontWeight: '300', marginTop: '20px'}}>GET STARTED</Button>
                    </div>
                </div>
            </div>
            <div className={styles.mobileHeroContainer}>
                <Image src={backgroundImageMobile} layout="responsive" width={654} height={1365} alt="doggie" className={styles.mobileBkgImage} />
                <div className={cn(styles.mobileBannerContainer, {[styles.isVisible]: bannerVisible})}>
                    <div className={styles.banner}>
                        <p>CUM SLUT PISS.</p>
                        <p>FAT FUCK TASSONI.</p>
                        <Button isPrimary={true} style={{fontSize: '7vw', fontWeight: '300', marginTop: '20px'}}>SUCK A DICK</Button>
                    </div>
                </div>
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.keyPoints}>
                    <h1>BUILT DIFFERENT</h1>
                    <ul className={styles.keyPointsList} ref={keyPointsRef}>
                        <li className={cn(styles.keyPoint, styles.left, {[styles.isVisible]: keyPointsVisible})}>
                            <span className="material-symbols-outlined">psychology</span>
                            <div className={styles.keyPointsTitle}>PSYCHOLOGY</div>
                            <div className={styles.keyPointsText}>There's nothing old-fasioned about Riptide. I leverage up-to-date behavioral science to give your dog efficient training that will last. Not only that, I teach you the psychology behind different canine behaviors so you can maintain your dog's good behavior for their whole life.</div>
                        </li>
                        <li className={cn(styles.keyPoint, styles.middle, {[styles.isVisible]: keyPointsVisible})}>
                            <span className="material-symbols-outlined">school</span>
                            <div className={styles.keyPointsTitle}>EXPERIENCE</div>
                            <div className={styles.keyPointsText}>I've spent years with top-level trainers in both the police and civilian sectors, so I've seen pretty much every canine temperament there is. Whether your pet is mild-mannered, rambunctious, or aggressive, I can help you develop a stress-free and fulfilling relationship.</div>
                        </li>
                        <li className={cn(styles.keyPoint, styles.right, {[styles.isVisible]: keyPointsVisible})}>
                            <span className="material-symbols-outlined">house</span>
                            <div className={styles.keyPointsTitle}>COMFORT</div>
                            <div className={styles.keyPointsText}>Whether it's your house or my house, I do all my training in a home environment, not a facility, ensuring your dog will retain good behavior outside of lessons. I also offer 24/7 care room and board!</div>
                        </li>
                    </ul>
                    <div className={styles.prompt}>CONSULTATIONS AND EVALUATIONS ARE FREE!</div>
                    <div className={styles.promptButtons}>
                        <Button isPrimary={true}>SCHEDULE NOW</Button>
                        <div className={styles.smallText}>OR</div>
                        <Button>LEARN ABOUT OUR PROGRAMS</Button>
                    </div>
                </div>
                <div className={styles.reviewContainer}>
                    <Reviews />
                </div>
            </div>
        </div>
    )
}

Home.getLayout = (page: ReactElement) => {
    return (
        <Layout containsHero={true}>
            {page}
        </Layout>
    );
}

export default Home;
