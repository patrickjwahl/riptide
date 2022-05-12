import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./reviews.module.scss";

const Reviews = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className={styles.swiper}>
                <SwiperSlide className={styles.swiperSlide}>
                    <div className={styles.stars}>
                        <span className='material-symbols-outlined'>star</span>
                        <span className='material-symbols-outlined'>star</span>
                        <span className='material-symbols-outlined'>star</span>
                        <span className='material-symbols-outlined'>star</span>
                        <span className='material-symbols-outlined'>star</span>
                    </div>
                    <div className={styles.reviewBody}>"My canine companion, Freddie, was a wild doggo that did not listen to many instructions. After enrolling him at Karma K9, he was trained by Curtis. Curtis did an exceptional job teaching Freddie commands, and he is so much calmer now. I recommend Karma K9 to all my friends, and will definitely bring my future dogs to be trained by Curtis."</div>
                    <div className={styles.reviewAuthor}>David "Dave" Tassoni</div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <div className={styles.stars}>
                        <span className='material-symbols-outlined'>star</span>
                        <span className='material-symbols-outlined'>star</span>
                        <span className='material-symbols-outlined'>star</span>
                        <span className='material-symbols-outlined'>star</span>
                        <span className='material-symbols-outlined'>star</span>
                    </div>
                    <div className={styles.reviewBody}>"I absolutely love Karma K9. The staff is super friendly and very knowledgeable. I recommend them to any dog owner! Ask for Curtis, he trained both of my dogs and I couldn't be happier with the results!"</div>
                    <div className={styles.reviewAuthor}>Megan Gebhardt</div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <div className={styles.stars}>
                        <span className='material-symbols-outlined'>star</span>
                        <span className='material-symbols-outlined'>star</span>
                        <span className='material-symbols-outlined'>star</span>
                        <span className='material-symbols-outlined'>star</span>
                        <span className='material-symbols-outlined'>star</span>
                    </div>
                    <div className={styles.reviewBody}>"Had the pleasure of undergoing training sessions with Curtis, and couldn't be happier with the results! He was very friendly and professional, and was so good with my dog. Recommending Karma to everyone I know!"</div>
                    <div className={styles.reviewAuthor}>Clay Dreier</div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Reviews;