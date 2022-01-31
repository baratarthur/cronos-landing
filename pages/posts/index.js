import Head from "next/head";
import { CardsComponent } from "../../layouts/cards";
import { NavbarLayout } from "../../layouts/with-navbar";
import { postsData } from "../../mocks/posts.mock";

export default function Posts() {
    return (
        <NavbarLayout>
            <Head>
                <title>Cronos - agência de marketing</title>
                <meta name="description" content="Venha ver como a melhor agência de marketing do mundo funciona"/>
            </Head>
            <CardsComponent
                title="Posts"
                link="/posts"
                useViewMore={false}
                data={postsData} />
        </NavbarLayout>
    )
}