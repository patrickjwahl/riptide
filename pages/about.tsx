import Image from "next/image";
import styles from '../styles/About.module.scss';
import mainImage from '../public/img/resized/curtis-dennis-bw.jpeg';
import mainImage2 from '../public/img/resized/curt3.jpeg';
import mainImage3 from '../public/img/resized/curt4.jpeg';
import cn from 'classnames';
import pedigreeImage from '../public/img/resized/groot2.jpeg';
import storyImage from '../public/img/resized/story.jpeg';
import ffcImage from '../public/img/resized/curt2.jpeg';
import { useParallax } from "react-scroll-parallax";
import curtDogsImage from '../public/img/resized/about-page.jpeg';
import curtDogsImageSquare from '../public/img/resized/about-page-2.jpeg';
import Head from "next/head";

const About = () => {

    const { ref: parallaxRef } = useParallax({speed: -40});

    return (
    <>
        <Head>
                <title>About | Caravan K9</title>
        </Head>
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <div ref={parallaxRef as React.RefObject<HTMLDivElement>}>
                    <div className={styles.images}>
                        <Image src={mainImage} layout="responsive" className={styles.mainImage2} />
                        <Image src={mainImage2} layout="responsive" className={styles.mainImage2} />
                        <div className={styles.mainImageDisappearing}><Image src={mainImage3} layout='responsive' className={styles.mainImage2} /></div>
                    </div>
                    <div className={styles.imageText}>
                        <div>
                            <h2>EXPERIENCE | EXPERTISE</h2>
                            <h1>CARAVAN K9</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.bodyContent}>
                    <div className={cn(styles.sectionContent, styles.pedigreeSection)}>
                        <div>
                            <h1 style={{marginBottom: '15px'}}>My Pedigree</h1>
                            <h3 className={styles.pedigreeTitle}>Karma K9, Jacksonville FL</h3>
                            <div className={styles.checkList}>
                                <h4>Training Director</h4>
                                <ul>
                                    <li>Serviced 200+ clients</li>
                                </ul>
                            </div>
                            <div className={styles.pedigreeConnector}>|</div>
                            <h3 className={styles.pedigreeTitle}>Tarheel Canine Training, Sanford NC</h3>
                            <div className={styles.checkList}>
                                <h4>Serviced:</h4>
                                <ul>
                                    <li>11 police departments</li>
                                    <li>US Department of Defense</li>
                                    <li>US Army Rangers</li>
                                    <li>Australian Special Forces</li>
                                    <li>Indian Special Forces</li>
                                    <li>Personal Protection Dogs</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.pedigreeImageContainer}>
                            <Image src={pedigreeImage} layout="responsive" className={styles.pedigreeImage} />
                        </div>
                    </div>
                    <div className={styles.mobileImageContainer}>
                        <Image src={pedigreeImage} />
                    </div>
                    <div className={cn(styles.sectionContent, styles.highlightSection)}>
                        <div className={styles.storyText}>
                            <h1>My Philosophy</h1>
                            <p>The training philosophy at Caravan K9 stems from tried and true applications of behavioral science and psychology. Animal intelligence is nothing to scoff at; dogs are capable of much more complex tasks than we give them credit for, and the path to getting there is incredibly important. </p>
                            <p>At Caravan K9, foundation training starts with activating your dog's cognition by tapping into operant conditioning. We build a strong, confident relationship with your dog to give them the confidence to think for themselves and get rewards on their own. We then start applying the concept of classical conditioning and operating within the four quadrants of behavioral psychology with the least amount of pressure possible. Any behavior taught with force is destined to extinguish just as fast as it was learned. I invite you to come learn with me here at Caravan K9 to set you and your dog up for success for the rest of your life.</p>
                        </div>
                        <div className={styles.storyImageContainer}>
                        </div>
                    </div>
                    <div className={cn(styles.mobileImageContainer, styles.retrograde)}>
                        <Image src={curtDogsImage} />
                    </div>
                    <div className={cn(styles.sectionContent, styles.storySection)}>
                        <div className={styles.storyText}>
                            <h1>My Story</h1>
                            <p>I grew up in Glocester, Rhode Island with my family for the first 18 years of my life, living out in the woods and fostering an appreciation for nature and wildlife. My passion for dogs specifically stems from my father; he would always show me pictures of his dogs from when he was growing up and tell me stories about how well trained they were. When we got our first family dog, Bogey, I took it upon myself to do some of that training with him. I didn’t have a clue what I was doing, but it was a catalyst for me to start understanding the psychology behind animal intelligence and trying to see from different animals' perspectives.</p>
                            <p>I ended up going to school at the University of Rhode Island and graduated with a bachelor's degree in Textile Science with a minor in Marketing, two things completely unrelated to what my passion was growing up. I had always assumed training dogs was a pipe dream and that I should pursue something a bit more streamlined and accessible. As soon as I finished college, I knew the field of work I chose wasn’t for me. I dropped everything and started working at my first kennel as a kennel technician and apprentice groomer. I was willing to do anything to get my hands on some dogs and figure them out, even if it meant just scooping poop and giving a bath. That time spent in the kennel introduced me to the world I was desperate to be a part of and I coincidentally met a trainer who recommended a dog training school he had attended. He taught me the basics on shaping a foundation for canine learning and it opened up a whole new obsession for me.</p>
                            <p>I attended Tarheel Canine School for dog trainers when I was 22 years old and had no idea what I was getting into. I worked with some of the most well versed and established trainers I have ever met, who then introduced me to more of the same. I couldn’t get my hands on enough information; whether it was begging to stay late in Tarheel to get more in depth analysis of behaviors or purchasing every textbook on principles of animal training I could possibly find. At Tarheel Canine, I had the opportunity to get my hands on dogs of every breed and temperament possible. I worked with ten different police departments to help certify their police K-9 units for the real world and have helped on dozens of contracts for multiple countries' militaries. I have also trained personal protection dogs for families and have worked with hundreds of clients in the Jacksonville area up to this point.</p>
                            <p>My passion now is not only training dogs to do complex tasks and challenging behaviors, but also to teach people these same principles. From start to finish, my goal in training is not only for me to be able to train your dog, but to help you understand every concept behind why your dog learns and why he will continue to keep learning. My job is to motivate dogs to want to take their cognitive abilities to the next level by using in depth behavioral science and psychology.</p>
                        </div>
                        <div className={styles.storyImageContainer}>
                            <div className={styles.storyImage}>
                                <Image src={curtDogsImageSquare} />
                            </div>
                            <div className={styles.storyImage2}>
                                <Image src={storyImage} />
                            </div>
                            <div className={styles.storyImage}>
                                <Image src={ffcImage} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default About;
