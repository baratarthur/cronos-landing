import Link from 'next/link'
import { useEffect, useState } from 'react'
import { postsData } from '../../mocks/posts.mock';
import styles from './Banner.module.css'

const NUMBER_OF_SLIDES = 3;

export function BannerComponent() {
    const [bannerChosen, setBannerChosen] = useState(0);

    const advanceBanner = () => {
        if (bannerChosen === NUMBER_OF_SLIDES - 1) setBannerChosen( 0 );
        else setBannerChosen(bannerChosen + 1);
    }

    const backBanner = () => {
        if (bannerChosen === 0) setBannerChosen( NUMBER_OF_SLIDES - 1 );
        else setBannerChosen(  bannerChosen - 1 );
    }

    useEffect(() => {
        const interval = setInterval(() => { advanceBanner() }, 10_000);

        return () => clearInterval(interval);
    });

    return (
        <div className={styles.banner}>
            {
                postsData.slice(0, NUMBER_OF_SLIDES).map( (banner, i) => (
                    <Link key={banner.id} href={banner.href} passHref>
                        <div
                            className={styles.bannerContainer}
                            style={{ backgroundImage: `url(${banner.img})`, right: i === bannerChosen ? 0 : '100%' }}>
                            <div className={styles.gradient}>
                                <h2>{banner.title}</h2>
                                <p>{banner.description}</p>
                            </div>
                        </div>
                    </Link>
                ))
            }
            <button className={styles.buttonAdvance} onClick={advanceBanner}>
                {'>'}
            </button>
            <button className={styles.buttonBack} onClick={backBanner}>
                {'<'}
            </button>
        </div>
    )
}
