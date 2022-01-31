import { BannerComponent } from '../components/banner'
import { CardsComponent } from '../layouts/cards'
import { FooterComponent } from '../components/footer'
import { NavbarLayout } from '../layouts/with-navbar'
import { postsData } from '../mocks/posts.mock'
import { servicesData } from '../mocks/services.mock'

export default function Home() {
  return (
    <NavbarLayout>
      <BannerComponent />
      <CardsComponent title="Serviços" link="/services" useViewMore={true} data={servicesData} />
      <CardsComponent title="Posts" link="/posts" useViewMore={true} data={postsData} />
      <FooterComponent />
    </NavbarLayout>
  )
}
