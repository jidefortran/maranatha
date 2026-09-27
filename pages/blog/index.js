import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import FeaturedImage from "../../components/FeaturedImage";
import Date from "../../components/Date";
import LoadMore from "../../components/LoadMore";
import { getPostList } from "../../components/lib/posts";

export async function getStaticProps() {
    try {
        const allPosts = await getPostList();
        return {
            props: {
                allPosts: allPosts || { nodes: [] }, // Fallback for empty data
            },
            revalidate: 60, // Revalidate every 60 seconds
        };
    } catch (error) {
        console.error("Error fetching posts:", error);
        return {
            props: {
                allPosts: { nodes: [] }, // Fallback for error state
            },
        };
    }
}

export default function BlogHome({ allPosts }) {
    const [posts, setPosts] = useState(allPosts);

    if (!posts || !posts.nodes.length) {
        return (
            <div>
                <Navbar />
                <PageBanner
                    pageTitle="Blog Grid"
                    homePageUrl="/"
                    homePageText="Home"
                    activePageText="Maranatha WellBlog"
                    bgImgClass="item-bg5"
                />
                <div className="container py-16 text-center">
                    <h2>No posts available</h2>
                    <p>Check back later for updates.</p>
                </div>
                <Footer />
            </div>
        );
    }

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
            <main className="blog-area ptb-110 layoutBlog">
                <div className="container">
                    <div className="row tempBlog">
                        {posts.nodes.map((post) => (
                            <div key={post.slug} className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="entry-thumbnail">
                                        <FeaturedImage post={post} />
                                    </div>
                                    <div className="py-4">
                                        Published on <Date dateString={post.date} />
                                    </div>
                                    <h2 className="py-4">
                                        <Link href={`/blog/${post.slug}`} className="text-blue-400 text-2xl hover:text-blue-600">
                                            {post.title}
                                        </Link>
                                    </h2>
                                    <div className="text-lg" dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
                                    <div className="py-4">
                                        Posted under{" "}
                                        {post.categories.nodes.map((category) => (
                                            <Link
                                                href={`/category/${category.slug}`}
                                                className="text-blue-400 hover:text-blue-500"
                                                key={category.slug}
                                            >
                                                {category.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="py-4 text-center">
                        <LoadMore posts={posts} setPosts={setPosts} />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
