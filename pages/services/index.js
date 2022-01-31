import { CardsComponent } from "../../layouts/cards";
import { NavbarLayout } from "../../layouts/with-navbar";
import { servicesData } from "../../mocks/services.mock";

export default function Services() {
    return (
        <NavbarLayout>
            <CardsComponent
                title="Serviços"
                link="/services"
                useViewMore={false}
                data={servicesData} />
        </NavbarLayout>
    )
}
