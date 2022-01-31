import Link from "next/link";
import { useEffect, useState } from "react";

import styles from './cards.module.css';

export function CardsComponent({ title, link, useViewMore, data }) {

    const [cardsToShow, setCardsToShow] = useState([]);
    
    useEffect(() => {
        if (!useViewMore) setCardsToShow(data);
        else setCardsToShow(data.slice(0,3));
    }, []);

    return (
        <div className={styles.cardsContainer}>
            <div className={styles.header}>
                <h2>{title}</h2>
                {
                    useViewMore ? <Link href={link}><a className={styles.viewMore}>+ ver mais</a></Link> : null
                }
            </div>
            <div className={styles.body} style={{ flexWrap: useViewMore? 'no-wrap' : 'wrap' }}>
                {
                    cardsToShow.map( (cardData) => (
                        <Link key={cardData.id} href={cardData.href} passHref>
                            <div className={styles.card}>
                                <h4>{cardData.title}</h4>
                                <p>{cardData.description}</p>
                            </div>
                        </Link>
                    ) )
                }
            </div>
        </div>
    )
}
