import { BannerComponent } from '../components/banner'
import { CardsComponent } from '../layouts/cards'
import { FooterComponent } from '../components/footer'
import { NavbarLayout } from '../layouts/with-navbar'
import { postsData } from '../mocks/posts.mock'
import { servicesData } from '../mocks/services.mock'
import Head from 'next/head'

export default function Home() {
  return (
    <NavbarLayout>
      <Head>
        <title>Cronos - agência de marketing</title>
        <meta name="description" content="Venha ver como a melhor agência de marketing do mundo funciona"/>
      </Head>
      <BannerComponent />
      <CardsComponent title="Serviços" link="/services" useViewMore={true} data={servicesData} />
      <CardsComponent title="Posts" link="/posts" useViewMore={true} data={postsData} />
      <FooterComponent />
    </NavbarLayout>
  )
}
