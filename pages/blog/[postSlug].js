import Head from "next/head";
// import SiteHeader from "../../components/SiteHeader";
// import SiteFooter from "../../components/SiteFooter";
// import CommentForm from "../../components/CommentForm";
// import { getComments } from "../../lib/comments";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Date from "../../components/Date";
import { getPostSlugs, getSinglePost } from "../../components/lib/posts";
import { getSeo } from "../../components/lib/seo";
import { Rubik, Roboto_Slab } from '@next/font/google';

import FeaturedImage from "../../components/FeaturedImage";
import BlogSidebar from '../../components/Blog/BlogSidebar'
import Footer from "../../components/Layouts/Footer";

const rubik = Rubik({ subsets: ['latin'], display: 'swap' });
const roboto_slab = Roboto_Slab({ subsets: ['latin'], display: 'swap' });

// console.log(roboto_slab);

export async function getStaticProps({ params }) {
    const postData = await getSinglePost(params.postSlug);
    // const {comments, commentCount} = await getComments(params.postSlug);
    const seoData = await getSeo('post', params.postSlug);

    let featuredImageUrl = "https://wp.abhinavr.com/wp-content/uploads/2022/12/travel_icy-polar_022K.jpg";

    if(postData.featuredImage) {
        featuredImageUrl = postData.featuredImage.node.mediaDetails.sizes[0].sourceUrl;
    }

    if(!postData) {
        return {
            notFound: true
        };
    }

    return {
        props: {
            postData,
            featuredImageUrl: "url(" + featuredImageUrl + ")",
            // comments,
            // commentCount,
            seoData
        },
        notFound: false,
    };
}

export async function getStaticPaths() {
    const postSlugs = await getPostSlugs();

    return {
        paths: postSlugs.map((s) => (
            {
                params: {
                    postSlug: s.slug
                }
            }
        )),
        fallback: 'blocking'
    }
}

export default function Post({ postData, featuredImageUrl, comments, commentCount, seoData }) {
    console.log(comments);

    let jsonSchema = seoData.schema.raw.replace(/https:\/\/wp.abhinavr.com(?!\/wp-content\/uploads)/g, 'https://coolnomad.abhinavr.com/blog')

    return (
        <>
        <Head>
            
            <title key="title">{seoData.title}</title>
            <meta name="description" content={seoData.metaDesc} key="metadesc" />
            
            <meta property="og:title" content={seoData.opengraphTitle} />
            <meta key="og-description" property="og:description" content={seoData.metaDesc} />
            <meta property="og:url" content={seoData.opengraphUrl} />
            <meta property="og:image" content={seoData.opengraphImage.mediaItemUrl} />
            <meta property="og:type" content={seoData.opengraphType} />
            <meta property="og:locale" content="en_IN" />
            
            <meta property="og:site_name" content={seoData.opengraphSiteName} />
            
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonSchema }}></script>

            <style>
                {`
                    .post-content ul {
                        font-family: ${rubik.style.fontFamily}
                    }
                `}
            </style>
        </Head>

        <Navbar />
          <PageBanner
        pageTitle={`${postData.title}`}
        homePageUrl="/"
        homePageText="Home"
        activePageText={`blog | ${postData.title}`}
        
        style={{backgroundImage: featuredImageUrl}}
      />
        <section className="blog-details-area ptb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
        <section className="bg-slate-700 bg-opacity-70 absolute w-full z-20">

        </section>

        <article className={`${rubik.className} font-light`}>
            {/* <section className="hero-area h-[60vh] min-h-[30rem] bg-no-repeat bg-cover bg-center relative" style={{backgroundImage: featuredImageUrl}}>
                <div className="absolute inset-0 bg-slate-900 opacity-40"></div>

                <div className="container mx-auto h-full flex flex-col justify-center lg:max-w-4xl">

                    <div className="pb-4 text-slate-100 z-10">
                        Posted by Abhinav, last updated on <Date dateString={postData.modified} />
                    </div>

                    <div dangerouslySetInnerHTML={{ __html: postData.excerpt }} className="relative z-10 text-left text-slate-200 text-2xl pl-4 border-l-4 border-lime-200"/>
                </div>
            </section> */}
            <div className="entry-thumbnail">
                                  <div className=" bg-no-repeat bg-cover bg-center relative" style={{backgroundImage: featuredImageUrl , maxWidth:'100%' , height: 600 }}></div>
                                </div>
            <section className="content-area py-8">
                <div dangerouslySetInnerHTML={{ __html: postData.content }} className="post-content container lg:max-w-4xl mx-auto"/>
            </section>
        </article>
        <div className="pb-4 text-slate-100 z-10">
                        Posted by Abhinav, last updated on <Date dateString={postData.modified} />
                    </div>
        <div className="container mx-auto lg:max-w-4xl">
            {/* <h3 className="text-xl py-2 my-4 border-l-4 border-l-lime-300 pl-4">{commentCount ? commentCount : 'No'} comments on this post so far:</h3> */}
            {/* <CommentForm postId={postData.databaseId} /> */}
        </div>

</div>
<div className="col-lg-4 col-md-12">
              <BlogSidebar />
            </div>
</div>
</div>


</section>
        <div className="container mx-auto lg:max-w-4xl">
{/* 
            <section>
                <ul>
                    {
                        comments.nodes.map((comment) => (
                            <li key={comment.id} className="pb-4 border-b">
                                <div className="comment-header flex justify-start items-center">
                                    <div className="py-4">
                                        <img src={comment.author.node.avatar.url} width={comment.author.node.avatar.width} height={comment.author.node.avatar.height} className="rounded-full max-w-[50px] mr-4" />
                                    </div>
                                    <div>
                                        <div className="font-bold">
                                            {comment.author.node.name}
                                        </div>
                                        <div className="text-sm">
                                            <Date dateString={comment.date} />
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-body pl-[66px]">
                                    <div dangerouslySetInnerHTML={{ __html: comment.content}}></div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                
            </section> */}
        </div>
        
      <Footer/>
        </>
    );
}                    {/* <h1 className={`${roboto_slab.className} text-6xl font-normal text-slate-100 relative z-10 py-8 mt-12`}>{postData.title}</h1> */}
