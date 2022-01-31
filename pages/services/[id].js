import { InfoLoaderComponent } from "../../components/info-loader"
import { NavbarLayout } from "../../layouts/with-navbar"
import { servicesData } from "../../mocks/services.mock";

export default function Service({ service }) {
    return (
        <NavbarLayout>
            <InfoLoaderComponent data={service} />
        </NavbarLayout>
    )
}

export async function getStaticProps({ params }) {
    const service = servicesData.find(service => service.id === params.id);
    return {
        props: {
            service
        }
    }
}

export async function getStaticPaths() {
    const paths = servicesData.map( service => ({
            params: {
                id: service.id
            }
        })
    );
    return {
      paths,
      fallback: false
    }
}
