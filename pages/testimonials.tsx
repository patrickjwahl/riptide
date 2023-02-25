import styles from '../styles/Testimonials.module.scss';
import ReviewBox from '../components/reviewbox';
import Head from 'next/head';

const Testimonials = () => {

    const data = [
        {
            author: 'Steven Reid',
            text: 'We took our Belgian Malinois here for training with Curtis who did an amazing job. We feel very comfortable with leaving our puppy while traveling. Not everyone can handle the neurotic behavior of a Malinois but I have peace of mind they are taking the best care of Odin.',
            link: 'https://goo.gl/maps/pFVXM48r8GBVZKDc7'
        },
        {
            author: 'Chase Pivarnik',
            text: 'This place is awesome, my dog Beau came out beautifully trained and happy. He came out trained and never lost his happy and energetic personality. Curtis and his team really know what they are doing over there and I absolutely recommend them to everybody I talk to.',
            link: 'https://goo.gl/maps/ybtnnBScpkFEnbq67'
        },
        {
            author: 'Dominic Gittens',
            text: "Curtis was an amazing trainer! We’re so thankful to find a place that loved our dog as much as we do! And accepts him for his flaws! We couldn’t thank them enough for all they’ve done for us!",
            link: 'https://goo.gl/maps/3QmDY8kUkNCzNLxDA'
        },
        {
            author: 'Ashley Myers',
            text: "Curtis trained my puppy and she learned so much in a very short amount of time.  I hated being apart from her but loved the updates and it was worth it in the end!",
            link: 'https://goo.gl/maps/9k2XDVVADNpuCvnWA'
        },
        {
            author: 'Angel Agosto',
            text: "Marley is now able to walk past dogs without being reactive. Marley also had problems with jumping on people when they entered our home and now with the place command our guest are able to come over and get settled before he greets them. Our trainer Curtis has made this experience so wonderful. Curtis takes as much time with the dog and owners to insure they understand everything needed to be successful with the training. I would highly recommend bringing your dog here if they have any behaviors you need help correcting!",
            link: 'https://goo.gl/maps/uXKeYa4WURXfkPyg6'
        },
        {
            author: 'April Garland',
            text: "My rescued Malinois was full of anxiety and I simply did not know how to help her. Curtis, Melissa and the whole K9 crew are a total godsend. It’s definitely not easy to be away from your best friend while they’re at camp, but knowing that they are in the hands of those who truly care about your pup as much as you do helps to ease the mind. My Mercy came home with a new lease on life - full of confidence and poise with her same goofy personality. It’s so important to comprehend that training a dog doesn’t happen overnight and it’s an ever-evolving journey. Curtis taught Mercy to understand all of her commands and obedience, but my responsibility  to make sure I’m putting in the effort required to keep the progress up. The refresher lessons help to train me on learning how to communicate effectively and strengthen the bond... Mercy is positively thriving and we both couldn’t be happier!",
            link: 'https://goo.gl/maps/QETSLs8QEK5SfEaE9'
        },
        {
            author: 'Lindsay Lyon',
            text: "My husband & I have two male Great Danes- 5 & 2 years old. The biggest issues we saw were jumping, barking, horrible walking, and sadly growling from my anxiety filled doggo anytime my husband would get near me. Everyone in our life loves our boys and aggression with others was never an issue- but having large breed dogs means they do need to be on their best behavior, their size alone can make the most innocent behaviors feel intimidating to those who visit our home or those we may encounter out in public. I finally realized that we couldn’t fix these issues on our own & that’s how I found Curtis. With every intention of only sending our youngest, we met with Curtis & left there to go home and grab our old man as well. I always believed beings he was 5 that he was untrainable- but Curtis assured us old dogs can in fact learn new tricks! Board and train is hard enough but felt even harder beings my velcro dog would struggle with being away from me. Or so I thought at least! Both of our dogs absolutely thrived under the care & training of Curtis. The first round of photos we received without a doubt relieved every concern we had- it’s hard to be concerned when your pup is smiling in his photo! Our boys have learned how to maintain their manners even when excitement takes over, they are able to take walks that are truly enjoyable for them & us, and most importantly- my husband and my velcro dog have been able to build their own bond & it seems they actually kind of like one another now 😉 And the self confidence these dogs build through training really lessens the anxieties they have! We have had company on several occasions since they have returned home & people just cannot believe the difference. Curtis trained our dogs and did so well beyond our expectations but that was not his toughest challenge… the real challenge was training my husband & I. Worth every single penny- we have zero regrets. There is a healthy communication between our dogs & us now, game changing. We still do follow up training so he can make sure we’re doing everything right and when we pull up the boys get so excited- that tells me there was absolutely nothing traumatic about this experience for them! If you’re looking for someone who is going to love your dogs just like his own while they’re in his care- Curtis is it. 🙂",
            link: ''
        },
        {
            author: 'Blaire, Lindsay, CeCe',
            text: "The whole experience ... has been life changing. We didn’t know what to do anymore since she had been aggressive to our other dog several times. After meeting with Curtis ... I knew we were in the right spot. \n\n We did the 4 week board and train. Was it cheap, no, was it worth it, my wife and I would have paid double. Curtis sent us 2 updates a week with pics and progress of how Quinn was coming along. Finally after 4 weeks we came to get her. The difference is night and day. She is the same lovable sweet dog, but now she can handle stressful situations without lashing out at our other dog. Curtis helped with her, but as important worked with us to make sure what he taught her we can implement at home. Training us is prob harder than training Quinn, but the post sessions and the contact we’ve had are very helpful.",
            link: 'https://goo.gl/maps/K1MqvKFf1tWboHLfA'
        },
        {
            author: 'Nikitha Maccherone',
            text: "This place has been great for training our Rottweiler. She was super sweet but triggered by other dogs  and small animals. After their trading she’s been doing 100% better. Actually able to take her on walks with no issues and if she’s triggered we use the command and work with her. Curtis has been great as well with our handler lessons. Tracking us hours you with with her new training.",
            link: 'https://goo.gl/maps/a1w76mhMcrfXY8ve9'
        },
        {
            author: 'Julie Wilbanks Henderson',
            text: "After completing the off-leash training program, our rambunctious, stubborn, ill-mannered puppy is now better behaved, more confident ... Louis absolutely loves Curtis and obeys him happily. Now Curtis is patiently training US and Louis is responding.",
            link: "https://goo.gl/maps/voKC5EGamJCd6aQk6"
        }
    ];

    return (
    <>
        <Head>
            <title>Testimonials | Caravan K9</title>
        </Head>
        <div className={styles.container}>
            <h1>TESTIMONIALS</h1>
            <div className='separator-container'>
                <div className='separator-dark' />
            </div>
            {/* <h3>See what people have said about my work!</h3> */}
            <div className={styles.bodyContainer}>
                {data.map(review => <ReviewBox author={review.author} text={review.text} link={review.link} />)}
            </div>
        </div>
    </>
    );
};

export default Testimonials;