import Head from "next/head";
import Image from "next/image";
import { NavbarLayout } from "../../layouts/with-navbar";
import {  peopleData } from "../../mocks/people.mock";

import styles from '../../styles/About.module.css';

export default function About() {
    return (
        <NavbarLayout>
            <Head>
                <title>Quem somos</title>
                <meta name="description" content="Veja esse time incrível que faz acontecer"/>
            </Head>
            <div className={styles.aboutContainer}>
                <h1>Quem Somos</h1>
                <div className={styles.peopleContainer}>
                    {
                        peopleData.map( people => (
                            <div className={styles.peopleCard} key={people.id}>
                                <Image className={styles.image} src={people.img} alt={people.name} width='80' height='80'/>
                                <h4>{people.name}</h4>
                                <p>{people.job}</p>
                            </div>
                        ) )
                    }
                </div>
            </div>
        </NavbarLayout>
    )
}
