import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React from "react";


// import SiteHeader from "../../components/SiteHeader";
// import SiteFooter from "../../components/SiteFooter";
 import FeaturedImage from "../../components/FeaturedImage";
import Date from "../../components/Date";
import LoadMore from "../../components/LoadMore";
import { useState } from "react";
import { getPostList } from "../../components/lib/posts";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";

import { set } from "date-fns";
import Footer from "../../components/Layouts/Footer";

export async function getStaticProps() {
    const allPosts = await getPostList();

    return {
        props: {
            allPosts: allPosts,
        },
    }
}

export default function BlogHome({ allPosts }) {

    const [posts, setPosts] = useState(allPosts);

    return (
        <>
             <Navbar />
          <PageBanner
        pageTitle="Blog Grid"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Maranatha WellBlog"
        bgImgClass="item-bg5"
      />

     
        <div className="">
       

            <div className="container lg:max-w-4xl mx-auto">
                <div className="header-blog-home z-10 relative" />
            </div>
       

        </div>
        <main>
             <section className="blog-area ptb-110 layoutBlog">
        <div className="container">
            <div className="row">
          <div className="tempBlog" >
           
               
                    {
                        posts.nodes.map((post) => (
                            <div key={post.slug} >
                                 <div className="row mx-auto`">
                                <div className="single-blog-post">
                                    <div className="entry-thumbnail">
                                    <FeaturedImage post={post} />
                                </div>
                               
                                
<div className="py-4">
Published on <Date dateString={post.date} />
</div>

                                    <h2 className="py-4">
                                        <Link href={`/blog/${post.slug}`} className="text-blue-400 text-2xl hover:text-blue-600">{post.title}</Link>
                                    </h2>
                                    <div className="py-4">
                                    </div>
                                    <div className="text-lg" dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
                                    <div className="py-4">
                                        Posted under {
                                            post.categories.nodes.map((category) => (
                                                <Link className="text-blue-400 hover:text-blue-500" href={`/category/${category.slug}`} key={category.slug}>
                                                    {category.name}
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </div>
                                </div>
                                </div>

                           
                        ))
                    }
                </div>
                </div>
                </div>
                
               
            </section>
             <div className="py-4 text-center">
                <LoadMore posts={posts} setPosts={setPosts} />
                </div>
        </main>
      <Footer/>
        </>
    );
   
}