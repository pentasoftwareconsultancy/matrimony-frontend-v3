import React from 'react'
import styles from './HomeAds.module.css'
import bgm from '../../../../assets/images/Soyrik.png'
import news2 from '../../../../assets/images/news2.png'
import news1 from '../../../../assets/images/news1.png'
import news3 from '../../../../assets/images/news3.png'
import news4 from '../../../../assets/images/news4.png'
import news5 from '../../../../assets/images/news5.png'

const newsImages = [news1, news2, news3, news4, news5];

const HomeAds = () => {
    return (
        <>
            <div className={styles.container}>
                <img className={styles.bgimg} src={bgm} alt="" />
                <div className={styles.box}>
                    <h1 className={styles.bold}>We feature on following Newspapers:</h1>
                    <div className={styles.scroller}>
                        <ul>
                            {newsImages.concat(newsImages).map((img, idx) => (
                                <li key={idx}>
                                    <img src={img} alt="newspaper logo" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeAds