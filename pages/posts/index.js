import { CardsComponent } from "../../layouts/cards";
import { NavbarLayout } from "../../layouts/with-navbar";
import { postsData } from "../../mocks/posts.mock";

export default function Posts() {
    return (
        <NavbarLayout>
            <CardsComponent
                title="Posts"
                link="/posts"
                useViewMore={false}
                data={postsData} />
        </NavbarLayout>
    )
}