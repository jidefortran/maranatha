import React from "react";
import Link from "next/link";
import BlogCommentsArea from "../components/Blog/BlogCommentsArea";
import BlogSidebar from "../components/Blog/BlogSidebar";

// import { getPostByUri } from '.././components/lib/test-data';
import Head from "next/head";
import { gql } from "@apollo/client";
import { client } from "../components/lib/apollo";
import Footer from "../components/layouts/footer";
import Header from "../components/layouts/header";
import NavbarFour from "../components/Layouts/NavbarFour";



const SlugPage = ({post}) => {
  return (
    <>
    <NavbarFour />
      <section className="blog-details-area ptb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details">
                <div className="article-image">
                  <img src={post.featuredImageId} alt="image" />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <span>Posted On:</span>
                        { new Date(post.date).toLocaleDateString() }
                      </li>
                      <li>
                        <span>Posted By:</span>
                        <Link href="#">{`${post.author.node.firstName} ${post.author.node.lastName}`}</Link>
                      </li>
                    </ul>
                  </div>

                  <h2>       {post.title}</h2>

              

             

                  <article dangerouslySetInnerHTML={{__html: post.content}}>   
            </article>

                    Equidem impedit officiis quo te. Illud partem sententiae mel
                    eu, euripidis urbanitas et sit. Mediocrem reprimique an vim,
                    veniam tibique omittantur duo ut, agam graeci in vim. Quot
                    appetere patrioque te mea, animal aliquip te pri. Ad vis
                    animal ceteros percipitur, eos tollit civibus percipitur no.
                

                  <ul className="wp-block-gallery columns-3">
                    <li className="blocks-gallery-item">
                      <figure>
                        <img src="/images/blog/blog1.jpg" alt="image" />
                      </figure>
                    </li>

                    <li className="blocks-gallery-item">
                      <figure>
                        <img src="/images/blog/blog2.jpg" alt="image" />
                      </figure>
                    </li>

                    <li className="blocks-gallery-item">
                      <figure>
                        <img src="/images/blog/blog3.jpg" alt="image" />
                      </figure>
                    </li>
                  </ul>

        
                </div>

                <div className="article-footer">
                  <div className="article-tags">
                    <span>
                      <i className="fas fa-bookmark"></i>
                    </span>

                    <Link href="#">Fashion</Link>
                    <Link href="#">Games</Link>
                    <Link href="#">Travel</Link>
                  </div>

                  <div className="article-share">
                    <ul className="social">
                      <li>
                        <a href="#" target="_blank" rel="noreferrer">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" rel="noreferrer">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" rel="noreferrer">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" rel="noreferrer">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Blog Comments Area */}
              <BlogCommentsArea />
            </div>

            <div className="col-lg-4 col-md-12">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default SlugPage;


export async function getStaticProps({ params }) {
  const GET_POST_BY_URI = gql`
    # query GetPostsByURI($id: ID!) {
    #   post(id: $id, idType: URI) {
    #     title
    #     uri
    #     date
    #     content
    #     featuredImageId
    #     author {
    #       node {
    #         firstName
    #         lastName
    #       }
    #     }
    #   }
    # }
    query NodebyUri($uri: String!) {
  nodeByUri(uri: $uri) {
    __typename
    ... on ContentType {
      name
      contentNodes {
        nodes {
          id
          ... on Post {
            title
            content 
              author {
                node {
                  id
                  name
                  avatar {
                    url
                  }
                }
              }
              categories {
                nodes {
                  name
                }
              }
            }
          }
        }
      }
    }
  }

  `;
  const response = await client.query({
    query: GET_POST_BY_URI,
    variables: {
      // id: params.uri
      "uri": "/"
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