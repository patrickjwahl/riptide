import Image from "next/image";
import styles from '../styles/FAQ.module.scss';
import cn from 'classnames';
import Expandable from "../components/expandable";
import img1 from '../public/img/program1.jpg';
import img2 from '../public/img/cutie.jpg';

const FAQ = () => {

    const data = [
        {
            header: "Why are the consultations and evaluations required?",
            content: "The free evaluation is required because it gives me the ability to observe behavioral traits and temperament instead of relying solely on anecdotal evidence. Your dog is constantly communicating, whether it be through body language or vocalization, and it is critical we are able to address the root issues and causes of unwanted behaviors. I do not wish to offer you a blanket training program, so I need to meet you and your pup to know how to best create a training plan catered to you specifically."
        },
        {
            header: "What do I need in order to start a program?",
            content: "After going through your free consultation, I will tell you everything you will need depending on what program you have chosen. The necessities will differ between board and trains and private lessons. I will go over what is included and what will be needed for each. Typically, medication, food/feeding instructions and vaccination records are all that will be required."
        },
        {
            header: "Can you offer a guarantee on your training programs?",
            content: "I can guarantee that your dog will be capable of performing every behavior and command it has completed in its specific program. The most important part of owning a dog is knowing that what you put into it is what you will get back. Dogs are not robots or computer programs; they require maintenance, structure, and practice. I will teach you how to maintain high level obedience by incorporating minimal daily obedience practice that becomes a fun routine."
        },
        {
            header: "Do I have access to follow up lessons?",
            content: "Not only are you able to do follow up lessons, but they are strongly encouraged/required. If you follow through the board and train program from start to finish, I offer a lifetime guarantee where I will continue giving free brush up training sessions in perpetuity. Your success with your dog is of the utmost importance!"
        },
        {
            header: "Will my dog lose his/her personality?",
            content: "Don’t worry, this is the most frequently asked question I receive as a dog trainer. Fortunately, there is nothing I can do to change your dog's temperament and personality! All I can do is give you the ability to have an “on and off” switch for reliable off leash obedience. Your dog will stay motivated to follow all commands while being able to maintain their same goofy personality!"
        },
        {
            header: "What style of training do you use?",
            content: "The style of training implemented is what is called reward based balanced dog training. The foundation of your dog's training will be completely positive; rewarding your dog for learning and progressing through our marker system until it has shown a level of comprehension that warrants introduction to the other quadrants of behavioral psychology. Once we start teaching more complex commands through distractions/stressors, we use a less invasive method with little force and utilize variable reward plans to keep your dog working and communicating at the highest possible level."
        },
        {
            header: "Will you come to my house for training?",
            content: "Absolutely! The first few lessons should always be done in a neutral environment such as a park so your dog can learn to find confidence and communication on its own. As we progress through the program, we will start to generalize your dog's obedience commands to different environments; whether it be the comfort of your own home, the beach, or a restaurant, I will get you comfortable managing your dog's behavior anywhere you will find beneficial!"
        },
        {
            header: "When should I start training with my dog?",
            content: "The best time to start training with your pup is today. Whether he/she is 8 weeks old or 8 years old, your dog desires to communicate with you more than you think. The sooner you start, the more your dog can retain information. At 8 weeks old, your dog is a sponge and you can teach them how you want them to behave from the start. At 8 years old, your dog has been longing for you to understand his communication for too long! Come train with me and I can show you that your dog has been speaking to you all this time."
        },
        {
            header: "How long does a training program take?",
            content: "All training programs are going to differ in length of time. Whether it be a board and train or private lessons, your dog's ability to learn and retain information will be different from the next. The private lessons have a set amount of sessions, but they can be completed at your own pace. However, we have programs that range from 14 days to 8 weeks. Each dog’s behavioral issues are different and each training plan is catered specifically to your life together."
        }
    ];

    return (
    <>
        <div className={styles.container}>
            <h1>FREQUENTLY ASKED QUESTIONS</h1>
            <div className='separator-container'>
                <div className='separator' />
            </div>
            <div className={styles.columnContainer}>
                <div className={styles.faqsContainer}>
                    {data.map(question => <Expandable key={question.header} header={question.header} content={question.content} style={{marginBottom: '10px'}} />)}
                    <h2>MORE QUESTIONS?</h2>
                    <div>Let me know in the contact form below!</div>
                </div>
                <div className={styles.imageContainer}>
                    <div className={cn(styles.image, styles.imageRetrograde)}>
                        <Image src={img1} />
                    </div>
                    <div className={cn(styles.image)}>
                        <Image src={img2} />
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default FAQ;