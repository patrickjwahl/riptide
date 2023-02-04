import Image from "next/image";
import styles from '../styles/Programs.module.scss';
import cn from 'classnames';
import hero from '../public/img/resized/programhero.jpeg';
import Layout from "../components/layout";
import { ReactElement, useEffect, useRef, useState } from "react";
import img1 from '../public/img/resized/cyrus-small.jpeg';
import img2 from '../public/img/resized/tilly-small.jpeg';
import img3 from '../public/img/resized/petting.jpeg';
import img4 from '../public/img/resized/wild.jpeg';
import img5 from '../public/img/resized/program3.jpeg';
import img6 from '../public/img/resized/smirk.jpeg';
import { useParallax } from "react-scroll-parallax";
import Link from "next/link";
import Button from "../components/button";
import Head from "next/head";

const Programs = () => {

    const [ section1Visible, setSection1Visible ] = useState(false);
    const [ section2Visible, setSection2Visible ] = useState(false);
    const [ section3Visible, setSection3Visible ] = useState(false);
    const [ section4Visible, setSection4Visible ] = useState(false);

    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);

    const { ref: parallaxRef } = useParallax({speed: -100});

    const [ bannerVisible, setBannerVisible ] = useState<boolean>(false);

    useEffect(() => {
        setBannerVisible(true);
    }, [bannerVisible]);

    useEffect(() => {
        const { innerWidth: viewportWidth } = window;
        const threshold: number = (viewportWidth > 992) ? 0.4 : 0.3;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                switch (entry.target.id) {
                    case 'section1':
                        setSection1Visible(section1Visible || entry.isIntersecting);
                        break;
                    case 'section2':
                        setSection2Visible(section2Visible || entry.isIntersecting);
                        break;
                    case 'section3':
                        setSection3Visible(section3Visible || entry.isIntersecting);
                        break;
                    case 'section4':
                        setSection4Visible(section4Visible || entry.isIntersecting);
                        break;
                }
            });
        }, { threshold });
        if (section1Ref.current) observer.observe(section1Ref.current);
        if (section2Ref.current) observer.observe(section2Ref.current);
        if (section3Ref.current) observer.observe(section3Ref.current);
        if (section4Ref.current) observer.observe(section4Ref.current);
        return () => {
            if (section1Ref.current) observer.unobserve(section1Ref.current);
            if (section2Ref.current) observer.unobserve(section2Ref.current);
            if (section3Ref.current) observer.unobserve(section3Ref.current);
            if (section4Ref.current) observer.unobserve(section4Ref.current);
        };
    }, [section1Ref, section1Visible, section2Ref, section2Visible, section3Ref, section3Visible, section4Ref, section4Visible]);

    return (
        <>
        <Head>
            <title>Programs | Caravan K9</title>
        </Head>
        <div className={styles.container}>
            <div className={styles.heroContainer}>
                <div className={styles.heroImage} ref={parallaxRef as React.RefObject<HTMLDivElement>}>
                    <Image priority src={hero} />
                    <div className={cn(styles.heroBanner, {[styles.bannerVisible]: bannerVisible})}>
                    <div className={styles.hero}>
                        <h1>OUR PROGRAMS</h1>
                        <div className='separator-container'>
                            <div className='separator'/>
                        </div>
                        <div className={styles.programList}>
                            <div>
                                <Link href='#board'><a><div className={styles.programBox}>
                                    {/* <h4>Holistic &#9728; Stress-Free</h4> */}
                                    <h2>Board & Train</h2>
                                </div></a></Link>
                                <Link href='#private'><a><div className={styles.programBox}>
                                    {/* <h4>Tailored &#9728; Owner-Focused</h4> */}
                                    <h2>Private Lessons</h2>
                                </div></a></Link>
                            </div>
                            <div>
                                <Link href='#puppy'><a><div className={styles.programBox}>
                                    {/* <h4>Foundational &#9728; Enriching</h4> */}
                                    <h2>Puppy Skills</h2>
                                </div></a></Link>
                                <Link href='#daytraining'><a><div className={styles.programBox}>
                                    {/* <h4>Immersive &#9728; Convenient</h4> */}
                                    <h2>Day Training</h2>
                                </div></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className={styles.heroContainerMobile}>
                <div className={styles.hero}>
                    <h1>OUR PROGRAMS</h1>
                </div>
                <div className='separator-container'>
                    <div className='separator-dark'/>
                </div>
                <div className={styles.programList}>
                    <div>
                        <Link href='#board'><a><div className={styles.programBox}>
                            {/* <h4>Holistic &#9728; Stress-Free</h4> */}
                            <h2>Board & Train</h2>
                        </div></a></Link>
                        <Link href='#private'><a><div className={styles.programBox}>
                            {/* <h4>Tailored &#9728; Owner-Focused</h4> */}
                            <h2>Private Lessons</h2>
                        </div></a></Link>
                    </div>
                    <div>
                        <Link href='#puppy'><a><div className={styles.programBox}>
                            {/* <h4>Foundational &#9728; Enriching</h4> */}
                            <h2>Puppy Skills</h2>
                        </div></a></Link>
                        <Link href='#daytraining'><a><div className={styles.programBox}>
                            {/* <h4>Immersive &#9728; Convenient</h4> */}
                            <h2>Day Training</h2>
                        </div></a></Link>
                    </div>
                </div>
            </div>
            <div className={styles.mainContainer}>
                <h1 style={{marginBottom: '-40px', textAlign: 'center'}}>CHOOSE THE PATH THAT'S RIGHT FOR YOU!</h1>
                <div className={styles.sectionBox} ref={section1Ref} id='section1'>
                    <div className={cn(styles.sectionTitle, {[styles.contentVisible]: section1Visible})}>
                        <h1 id='board'>Board & Train</h1>
                        <ul>
                            <li>Stress-free boarding in my home</li>
                            <li>Guaranteed results</li>
                            <li>Lifetime trainer support</li>
                            <li>Weekly report cards</li>
                            <li>Behavior modification</li>
                            <li>FREE follow-up lessons</li>
                            <li>Exclusive — limited availability!</li>
                        </ul>
                    </div>
                    <div className={cn(styles.sectionBody, {[styles.contentVisible]: section1Visible})}>
                        <p>The board and train program is the most efficient and effective way to get guaranteed results for your dog's behavioral needs. After completing a free consultation, your dog will be eligible to stay for this program where he will learn the foundations of communication and progress to advanced obedience commands all within a four week program. In the board and train program, your pup will work with me in multiple training sessions a day to learn a list of complex commands and behaviors that are applicable to the real world and the life you are living.</p>
                        <p>The training plan is catered specifically to you and your dog's wants and needs as every dog learns differently and they must be trained accordingly. Avoid the stress of loud and busy training facilities and kennels and put your pup in a spot where they can perform with confidence daily. The hardest part is leaving your best friend for a couple weeks, but you get report cards at the end of the week with plenty of pictures and updates!</p>
                    </div>
                </div>
                <div className={styles.imageRow}>
                    <div className={styles.storyImage}>
                        <Image src={img1} />
                    </div>
                    <div className={cn(styles.storyImage, styles.retrograde)}>
                        <Image src={img2} />
                    </div>
                </div>
                <div className={cn(styles.sectionBox, styles.offColorSection)} ref={section2Ref} id='section2'>
                    <div className={cn(styles.sectionTitle, {[styles.contentVisible]: section2Visible})}>
                        <h1 id='private'>Private Lessons</h1>
                        <ul>
                            <li>Train in public or at home</li>
                            <li>1.5-hour sessions</li>
                            <li>Training plan catered to you</li>
                            <li>In-depth instruction</li>
                            <li>Behavior modification</li>
                            <li>Scheduled at your convenience</li>
                        </ul>
                    </div>
                    <div className={cn(styles.sectionBody, {[styles.contentVisible]: section2Visible})}>
                        <p>Come learn with me once a week where I work with you and your dog on select behaviors and commands. This program is perfect for people with the time and energy to work with your dog in between sessions. I will do hands-on training with you and your dog while teaching the concepts and how to apply them.</p>
                        <p>Every week we are looking to make a progression towards our end goal to create a confident, successful line of communication between you and your pup. Pick and choose certain behaviors, a la carte, for us to work on from start to finish.</p>
                    </div>
                </div>
                <div className={styles.imageRow}>
                    <div className={styles.storyImage}>
                        <Image src={img3} />
                    </div>
                    <div className={cn(styles.storyImage, styles.retrograde)}>
                        <Image src={img4} />
                    </div>
                </div>
                <div className={cn(styles.sectionBox, styles.section3)} ref={section3Ref} id='section3'>
                    <div className={cn(styles.sectionTitle, styles.bowlSection, {[styles.contentVisible]: section3Visible})}>
                        <h1 id='puppy'>Puppy Skills</h1>
                        <ul>
                            <li>Build communication skills right away</li>
                            <li>Hybrid training model</li>
                            <li>Leap right into normal training!</li>
                        </ul>
                    </div>
                    <div className={cn(styles.sectionBody, {[styles.contentVisible]: section3Visible})}>
                        <p>This program is a hybrid between private lessons and a board & train. The greatest part of having a puppy is how receptive they are to training. Their brains are like a sponge so we have to take advantage while we can!</p>
                        <p>This hybrid program consists of four private lessons before the board and train where I teach you how to shape the foundation of communication and build a strong relationship right away. After the private lessons are complete, your pup will be enrolled in a board and train where we will continue their learning while they have a massive head start!</p>
                    </div>
                </div>
                <div className={styles.imageRow}>
                    <div className={styles.storyImage}>
                        <Image src={img5} />
                    </div>
                    <div className={cn(styles.storyImage, styles.retrograde)}>
                        <Image src={img6} />
                    </div>
                </div>
                <div className={cn(styles.sectionBox, styles.lastSection, styles.offColorSection)} ref={section4Ref} id='section4'>
                    <div className={cn(styles.sectionTitle, {[styles.contentVisible]: section4Visible})}>
                        <h1 id='daytraining'>Day Training</h1>
                        <ul>
                            <li>Pickup/dropoff included!</li>
                            <li>In public or at-home training</li>
                            <li>Multiple training sessions per day</li>
                            <li>Free time/socializing</li>
                            <li>Daycare + Training</li>
                        </ul>
                    </div>
                    <div className={cn(styles.sectionBody, {[styles.contentVisible]: section4Visible})}>
                        <p>Perfect for dog owners with busy schedules, with this program I'll take care of your dog during the day while also engaging them in multiple rewarding training sessions. In the morning I'll pick your dog up in my state-of-the-art training van, and I'll carry out the same training regimen as I would with a boarded dog.</p>
                        <p>All the while they'll get to interact with other dogs, getting them ready for going out in the real world with you!</p>
                    </div>
                </div>
                <div className={styles.heroBox}>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', border: 'none', boxShadow: 'none', textAlign: 'right'}}>
                        <h1>All of our programs teach:</h1>
                    </div>
                    <div className={styles.heroTablet}>
                        <h2>Behaviors</h2>
                        <h4>Learned:</h4>
                        <ul className={styles.checkList}>
                            <li>Manners</li>
                            <li>Crate Training</li>
                            <li>Socialization</li>
                        </ul>
                        <h4>Forgotten:</h4>
                        <ul className={cn(styles.checkList, styles.badList)}>
                            <li>Anxiety</li>
                            <li>Aggression</li>
                            <li>Reactivity</li>
                        </ul>
                    </div>
                    <div className={styles.heroTablet}>
                        <h2>Commands</h2>       
                        <h4>Learned:</h4>
                        <ul className={styles.checkList}>
                            <li>On/Off Leash</li>
                            <li>Sit Stay</li>
                            <li>Down Stay</li>
                            <li>Heel</li>
                            <li>Recall</li>
                            <li>Place</li>
                        </ul>
                    </div>
                </div> 
                <div className={styles.faqConsult}>
                    <h2>Want more info?</h2>
                    <Link href='/faq'><a><Button>CONSULT OUR FAQ</Button></a></Link>
                </div>
                <div className={styles.contactPrompt} style={{textAlign: 'center'}}>Or contact me through the form below!</div>
            </div>
        </div>
        </>
    )
};

Programs.getLayout = (page: ReactElement) => {
    return (
        <Layout containsHero={true}>
            {page}
        </Layout>
    );
}

export default Programs;