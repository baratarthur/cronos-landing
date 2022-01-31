import Head from "next/head";

import styles from './loader.module.css';

export function InfoLoaderComponent({ data }) {
    return (
        <div className={styles.infoLoaderContainer}>
            <Head>
                <title>{data.title}</title>
                <meta name="description" content={data.description}/>
            </Head>
            <h1 className={styles.infoLoaderTitle}>{data.title}</h1>
            <p className={styles.infoLoaderContent}>{data.content}</p>
        </div>
    )
}
