import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./reviews.module.scss";
import { MdStarRate } from 'react-icons/md';

const Reviews = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className={styles.swiper}>
                <SwiperSlide className={styles.swiperSlide}>
                    <div className={styles.stars}>
                        <MdStarRate style={{fontSize: '24px'}}/>
                        <MdStarRate style={{fontSize: '24px'}}/>
                        <MdStarRate style={{fontSize: '24px'}}/>
                        <MdStarRate style={{fontSize: '24px'}}/>
                        <MdStarRate style={{fontSize: '24px'}}/>
                    </div>
                    <div className={styles.reviewBody}>"Both of our dogs absolutely thrived under the care & training of Curtis. The first round of photos we received without a doubt relieved every concern we had - it’s hard to be concerned when your pup is smiling in his photo! Our boys have learned how to maintain their manners even when excitement takes over, they are able to take walks that are truly enjoyable for them ... We have had company on several occasions since they have returned home & people just cannot believe the difference. Curtis trained our dogs and did so well beyond our expectations ... There is a healthy communication between our dogs & us now, game changing ... If you’re looking for someone who is going to love your dogs just like his own while they’re in his care - Curtis is it."</div>
                    {/* <div className={styles.reviewAuthor}>Lindsay Lyon</div> */}
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <div className={styles.stars}>
                        <MdStarRate style={{fontSize: '24px'}}/>
                        <MdStarRate style={{fontSize: '24px'}}/>
                        <MdStarRate style={{fontSize: '24px'}}/>
                        <MdStarRate style={{fontSize: '24px'}}/>
                        <MdStarRate style={{fontSize: '24px'}}/>
                    </div>
                    <div className={styles.reviewBody}>"This place is awesome, my dog Beau came out beautifully trained and happy. He came out trained and never lost his happy and energetic personality. Curtis and his team really know what they are doing over there and I absolutely recommend them to everybody I talk to."</div>
                    {/* <div className={styles.reviewAuthor}>Chase Pivarnik</div> */}
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <div className={styles.stars}>
                        <MdStarRate style={{fontSize: '24px'}}/>
                        <MdStarRate style={{fontSize: '24px'}}/>
                        <MdStarRate style={{fontSize: '24px'}}/>
                        <MdStarRate style={{fontSize: '24px'}}/>
                        <MdStarRate style={{fontSize: '24px'}}/>
                    </div>
                    <div className={styles.reviewBody}>"Curtis was an amazing trainer! We’re so thankful to find a place that loved our dog as much as we do! And accepts him for his flaws! We couldn’t thank them enough for all they’ve done for us!"</div>
                    {/* <div className={styles.reviewAuthor}>Dominic Gittens</div> */}
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <div className={styles.stars}>
                        <MdStarRate style={{fontSize: '24px'}}/>
                        <MdStarRate style={{fontSize: '24px'}}/>
                        <MdStarRate style={{fontSize: '24px'}}/>
                        <MdStarRate style={{fontSize: '24px'}}/>
                        <MdStarRate style={{fontSize: '24px'}}/>
                    </div>
                    <div className={styles.reviewBody}>"We took our Belgian Malinois here for training with Curtis who did an amazing job. We feel very comfortable with leaving our puppy while traveling. Not everyone can handle the neurotic behavior of a Malinois but I have peace of mind they are taking the best care of Odin."</div>
                    {/* <div className={styles.reviewAuthor}>Steven Reid</div> */}
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Reviews;