import Image from "next/image";
import styles from '../styles/Programs.module.scss';
import cn from 'classnames';
import hero from '../public/img/tilly2.jpg';
import Layout from "../components/layout";
import { ReactElement, useEffect, useRef, useState } from "react";
import img1 from '../public/img/cyrus.jpg';
import img2 from '../public/img/tilly.jpg';

const Programs = () => {

    const [ section1Visible, setSection1Visible ] = useState(false);
    const [ section2Visible, setSection2Visible ] = useState(false);
    const [ section3Visible, setSection3Visible ] = useState(false);

    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);

    const [ bannerVisible, setBannerVisible ] = useState<boolean>(false);

    useEffect(() => {
        setBannerVisible(true);
    }, [bannerVisible]);

    useEffect(() => {
        const { innerWidth: viewportWidth } = window;
        const threshold: number = (viewportWidth > 992) ? 0.5 : 0.1;

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
                }
            });
        }, { threshold });
        if (section1Ref.current) observer.observe(section1Ref.current);
        if (section2Ref.current) observer.observe(section2Ref.current);
        if (section3Ref.current) observer.observe(section3Ref.current);
        return () => {
            if (section1Ref.current) observer.unobserve(section1Ref.current);
            if (section2Ref.current) observer.unobserve(section2Ref.current);
            if (section3Ref.current) observer.unobserve(section3Ref.current);
        };
    }, [section1Ref, section1Visible, section2Ref, section2Visible, section3Ref, section3Visible]);

    return (
        <div className={styles.container}>
            <div className={styles.heroContainer}>
                <Image src={hero} className={styles.heroImage} />
                <div className={cn(styles.heroBanner, {[styles.bannerVisible]: bannerVisible})}>
                    <h1>OUR PROGRAMS</h1>
                    <div className='separator-container'>
                        <div className='separator'/>
                    </div>
                    <div className={styles.heroBox}>
                        <div>
                            <h2>Behaviors</h2>
                            <h4>Learned:</h4>
                            <ul className={styles.checkList}>
                                <li>Manners</li>
                                <li>Crate Training</li>
                                <li>Socialization</li>
                                <li>Reactivity</li>
                            </ul>
                            <h4>Forgotten:</h4>
                            <ul className={cn(styles.checkList, styles.badList)}>
                                <li>Anxiety</li>
                                <li>Aggression</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Commands</h2>
                            <h4>Learned:</h4>
                            <ul className={styles.checkList}>
                                <li>On/Off Leash</li>
                                <li>Sit</li>
                                <li>Sit Stay</li>
                                <li>Down Stay</li>
                                <li>Heel</li>
                                <li>Recall</li>
                                <li>Place</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <h1 style={{marginBottom: '-40px', textAlign: 'center'}}>CHOOSE THE OPTION THAT'S RIGHT FOR YOU!</h1>
            <div className={styles.sectionBox} ref={section1Ref} id='section1'>
                <div className={cn(styles.sectionTitle, styles.boneSection, {[styles.contentVisible]: section1Visible})}>
                    <h1>Board and Train</h1>
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
                <div className={cn(styles.sectionBody, {[styles.contentVisible]: section2Visible})}>
                    <p>Come learn with me once a week where I work with you and your dog on select behaviors and commands. This program is perfect for people with the time and energy to work with your dog in between sessions. I will do hands-on training with you and your dog while teaching the concepts and how to apply them.</p>
                    <p>Every week we are looking to make a progression towards our end goal to create a confident, successful line of communication between you and your pup. Pick and choose certain behaviors, a la carte, for us to work on from start to finish.</p>
                </div>
                <div className={cn(styles.sectionTitle, {[styles.contentVisible]: section2Visible})}>
                    <h1>Private Lessons</h1>
                </div>
            </div>
            <div className={styles.sectionBox} ref={section3Ref} id='section3'>
                <div className={cn(styles.sectionTitle, styles.bowlSection, {[styles.contentVisible]: section3Visible})}>
                    <h1>Puppy Skills</h1>
                </div>
                <div className={cn(styles.sectionBody, {[styles.contentVisible]: section3Visible})}>
                    <p>This program is a hybrid between private lessons and a board and train. The greatest part of having a puppy is how receptive they are to training. Their brains are like a sponge so we have to take advantage while we can!</p>
                    <p>This hybrid program consists of four private lessons before the board and train where I teach you how to shape the foundation of communication and build a strong relationship right away. After the private lessons are complete, your pup will be enrolled in a board and train where we will continue their learning while they have a massive head start!</p>
                </div>
            </div>
        </div>
    )
};

export default Programs;