import React from 'react'
import styles from './HomeAds.module.css'
import bgm from '../../../../assets/images/Soyrik.png'
import news2 from '../../../../assets/images/news2.png'
import news1 from '../../../../assets/images/news1.png'
import news3 from '../../../../assets/images/news3.png'
import news4 from '../../../../assets/images/news4.png'
import news5 from '../../../../assets/images/news5.png'
import news6 from '../../../../assets/images/news6.png'
import news7 from '../../../../assets/images/news7.png'
import news8 from '../../../../assets/images/news8.png'
import news9 from '../../../../assets/images/news9.png'

const newsImages = [news1, news2, news3, news4, news5, news6, news7, news8, news9];

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