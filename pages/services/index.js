import Head from "next/head";
import { CardsComponent } from "../../layouts/cards";
import { NavbarLayout } from "../../layouts/with-navbar";
import { servicesData } from "../../mocks/services.mock";

export default function Services() {
    return (
        <NavbarLayout>
            <Head>
                <title>Cronos - agência de marketing</title>
                <meta name="description" content="Venha ver como a melhor agência de marketing do mundo funciona"/>
            </Head>
            <CardsComponent
                title="Serviços"
                link="/services"
                useViewMore={false}
                data={servicesData} />
        </NavbarLayout>
    )
}
