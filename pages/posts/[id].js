import { InfoLoaderComponent } from "../../components/info-loader";
import { NavbarLayout } from "../../layouts/with-navbar";
import { postsData } from "../../mocks/posts.mock";

export default function Post({ post }) {
    return (
        <NavbarLayout>
            <InfoLoaderComponent data={post} />
        </NavbarLayout>
    )
}

export async function getStaticProps({ params }) {
    const post = postsData.find(post => post.id === params.id);
    return {
        props: {
            post
        }
    }
}

export async function getStaticPaths() {
    const paths = postsData.map( post => ({
            params: {
                id: post.id
            }
        })
    );
    return {
      paths,
      fallback: false
    }
}  
  