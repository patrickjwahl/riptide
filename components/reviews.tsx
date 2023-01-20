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
                    <div className={styles.reviewBody}>"This place is awesome, my dog Beau came out beautifully trained and happy. He came out trained and never lost his happy and energetic personality. Curtis and his team really know what they are doing over there and I absolutely recommend them to everybody I talk to."</div>
                    <div className={styles.reviewAuthor}>Chase Pivarnik</div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <div className={styles.stars}>
                        <span className='material-symbols-outlined'>star</span>
                        <span className='material-symbols-outlined'>star</span>
                        <span className='material-symbols-outlined'>star</span>
                        <span className='material-symbols-outlined'>star</span>
                        <span className='material-symbols-outlined'>star</span>
                    </div>
                    <div className={styles.reviewBody}>"Curtis was an amazing trainer! We’re so thankful to find a place that loved our dog as much as we do! And accepts him for his flaws! We couldn’t thank them enough for all they’ve done for us!"</div>
                    <div className={styles.reviewAuthor}>Dominic Gittens</div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <div className={styles.stars}>
                        <span className='material-symbols-outlined'>star</span>
                        <span className='material-symbols-outlined'>star</span>
                        <span className='material-symbols-outlined'>star</span>
                        <span className='material-symbols-outlined'>star</span>
                        <span className='material-symbols-outlined'>star</span>
                    </div>
                    <div className={styles.reviewBody}>"We took our Belgian Malinois here for training with Curtis who did an amazing job. We feel very comfortable with leaving our puppy while traveling. Not everyone can handle the neurotic behavior of a Malinois but I have peace of mind they are taking the best care of Odin."</div>
                    <div className={styles.reviewAuthor}>Steven Reid</div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Reviews;