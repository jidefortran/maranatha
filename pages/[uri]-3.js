import Footer from "../components/layouts/footer";
import Header from "../components/layouts/header";
 import { getPostByUri } from '../components/lib/test-data';
import Head from "next/head";
import { gql } from "@apollo/client";
import { client } from "../components/lib/apollo";


export default function SlugPage({ post }) {

  return (
    <div>
      <Head>
        <title>Headless WP Next Starter</title>
        <link rel="icon" href="favicon.ico"></link>
      </Head>

      <main>
          <div className="siteHeader">
            <h1 className="title">
                {post.title}
            </h1>
            <p>✍️  &nbsp;&nbsp;{`${post.author.node.firstName} ${post.author.node.lastName}`} | 🗓️ &nbsp;&nbsp;{ new Date(post.date).toLocaleDateString() }</p>
          </div>
            <article dangerouslySetInnerHTML={{__html: post.content}}>   
            </article>
      </main>

      <Footer></Footer>

    </div>
  )
}


export async function getStaticProps({ params }) {
  const GET_POST_BY_URI = gql`
    query GetPostsByURI($id: ID!) {
      post(id: $id, idType: URI) {
        title
        uri
        date
        content
        author {
          node {
            firstName
            lastName
          }
        }
      }
    }
  `;
  const response = await client.query({
    query: GET_POST_BY_URI,
    variables: {
      id: params.uri
    },
  });
    //  const response = await getPostByUri(params.uri);

  const post = response?.data?.post;
  return {
    props: {
      post,
    },
  };
}



export async function getStaticPaths(){
    const paths = []
    return {
        paths,
        fallback: 'blocking'
    }
}