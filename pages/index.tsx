import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Button from '../components/button'
import Reviews from '../components/reviews'
import Image from 'next/image'
import backgroundImage from '../public/img/hero2.jpeg'
import backgroundImageMobile from '../public/img/mobilebkg.jpg'
import programImage1 from '../public/img/boardtrain2.jpeg';
import programImage2 from '../public/img/program2.jpg'
import programImage3 from '../public/img/jump.jpg'
import reviewsImage from '../public/img/den-attila.jpg';
import reviewsImage2 from '../public/img/den-attila-2.jpg';
import { useParallax } from 'react-scroll-parallax'
import cn from 'classnames'
import { useState, useRef, useEffect } from 'react'
import Layout from '../components/layout'
import { ReactElement } from 'react'
import FlipCard from '../components/flipcard'
import Link from 'next/link'

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
                <title>Caravan K9 | Jacksonville's 2nd Best Dog Trainers</title>
            </Head>
            <div ref={parallaxRef as React.RefObject<HTMLDivElement>} className={styles.heroContainer}>
                <Image src={backgroundImage} layout="responsive" alt="doggie" className={cn(styles.bkgImage, {[styles.bkgVisible]: bannerVisible})} />
                <div className={cn(styles.bannerContainer, {[styles.isVisible]: bannerVisible})}>
                    <div className={styles.banner}>
                        <p>GIVE YOUR DOG THE GIFT OF</p>
                        <p><b>UNDERSTANDING</b></p>
                        <Link href='#contact-form'><a><Button isPrimary={true} style={{fontSize: '1.6vw', fontWeight: '300', marginTop: '20px'}}>SCHEDULE A FREE CONSULTATION</Button></a></Link>
                    </div>
                </div>
            </div>
            <div className={styles.mobileHeroContainer}>
                <Image src={backgroundImageMobile} layout="fill" alt="doggie" className={styles.mobileBkgImage} />
                <div className={cn(styles.mobileBannerContainer, {[styles.isVisible]: bannerVisible})}>
                    <div className={styles.banner}>
                        <p>GIVE YOUR DOG THE GIFT OF</p>
                        <p><b>UNDERSTANDING</b></p>
                        <Link href='#contact-form'><a><Button isPrimary={true} style={{fontSize: '28px', fontWeight: '300', marginTop: '20px', boxShadow: '0 0 30px 0 black'}}>GET A FREE CONSULTATION</Button></a></Link>
                    </div>
                </div>
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.keyPoints}>
                    <h1>JACKSONVILLE'S MOST SKILLED DOG TRAINER</h1>
                    <ul className={styles.keyPointsList} ref={keyPointsRef}>
                        <li className={cn(styles.keyPoint, styles.left, {[styles.isVisible]: keyPointsVisible})}>
                            <span className="material-symbols-outlined">psychology</span>
                            <div className={styles.keyPointsTitle}>PSYCHOLOGY</div>
                            <div className={styles.keyPointsText}>There's nothing old-fasioned about Riptide. I leverage up-to-date behavioral science to give your dog efficient training that will last. Not only that, I teach you the psychology behind canine cognition so you can maintain your dog's good behavior for their whole life.</div>
                        </li>
                        <li className={cn(styles.keyPoint, styles.middle, {[styles.isVisible]: keyPointsVisible})}>
                            <span className="material-symbols-outlined">school</span>
                            <div className={styles.keyPointsTitle}>EXPERIENCE</div>
                            <div className={styles.keyPointsText}>I've spent years with top-level trainers in both the police and civilian sectors. Having worked with temperaments from all across the canine spectrum, I can help you develop a stress-free and fulfilling line of communication built to set your dog up for success forever.</div>
                        </li>
                        <li className={cn(styles.keyPoint, styles.right, {[styles.isVisible]: keyPointsVisible})}>
                            <span className="material-symbols-outlined">house</span>
                            <div className={styles.keyPointsTitle}>COMFORT</div>
                            <div className={styles.keyPointsText}>Train in the comfort of a home environment rather than the stress of a facility. Practical results stem from a calm home environment that builds confidence for the real world.</div>
                        </li>
                    </ul>
                    <div className={styles.prompt}>CONSULTATIONS AND EVALUATIONS ARE FREE!</div>
                    <div className={styles.promptButtons}>
                        <Link href='#contact-form'><a><Button isPrimary={true}>SCHEDULE NOW</Button></a></Link>
                        <div className={styles.smallText}>OR</div>
                        <Link href='/programs'><a><Button>LEARN ABOUT OUR PROGRAMS</Button></a></Link>
                    </div>
                </div>
                <div className={styles.reviewContainer}>
                    <div className={styles.reviewTitle}>
                        <h1>DON'T TAKE MY WORD FOR IT...</h1>
                        <div className={styles.reviewImageContainer}>
                            <Image src={reviewsImage} />
                            <Image src={reviewsImage2} />
                        </div>
                        <h1 style={{textAlign: 'right'}}>...SEE WHAT OTHERS ARE SAYING!</h1>
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <h2 className={styles.mobileReviewTitle}>SEE WHAT OTHERS ARE SAYING!</h2>
                        <Reviews />
                        <div className={styles.moreReviewsButton}><Link href="/testimonials"><a><Button>READ MORE CUSTOMER REVIEWS</Button></a></Link></div>
                    </div>
                </div>
                <div className={styles.programsContainer}>
                    <h1>OUR PROGRAMS</h1>
                    <div className='separator-container'>
                        <div className='separator'/>
                    </div>
                    <div className={styles.programsBox}>
                        <FlipCard image={programImage1} frontText="BOARD & TRAIN" backText={
                            'Board and Trains are the most successful way to get results quickly with your dog. They will stay in a relaxing home environment with 24/7 care, giving both you and your pup the stress free experience you are looking for! Whether you need help with some bad manners or your dog has more complex behavioral issues, this program will be tailored directly for you and your life.'
                        } />
                        <FlipCard image={programImage3} frontText="PRIVATE LESSONS" backText={
                            'Work one-on-one with me at my home, your home, or out in public.  \
                            We will build a training plan catered to you and your dog\'s behavioral needs no matter how complex the issue.'
                        } />
                        <FlipCard image={programImage2} frontText="PUPPY SKILLS" backText={
                            'Dog training can be a struggle for you and your pooch. Don\'t let the puppy blues affect your dog\'s behavior. \
                            Come learn how to shape your dog\'s foundation of communication and develop an engaging relationship that sets you up for the future.'
                        } />
                    </div>
                    <Link href='/programs'><a><Button>LEARN MORE</Button></a></Link>
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