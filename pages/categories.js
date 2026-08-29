import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import PageBanner from "../components/Common/PageBanner";
import { getCategorySlugs } from "../components/lib/posts";

export async function getServerSideProps() {
  try {
    const categories = await getCategorySlugs();
    return { props: { categories: categories || [], error: false } };
  } catch (error) {
    console.error("Category loading failed:", error);
    return { props: { categories: [], error: true } };
  }
}

export default function Categories({ categories, error }) {
  return (
    <>
      <Head>
        <title>Blog Categories | Maranatha Wellbeing Support</title>
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="Blog Categories"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Categories"
        bgImgClass="item-bg5"
      />
      <main className="container py-5">
        {error ? (
          <div className="alert alert-warning">Categories are temporarily unavailable.</div>
        ) : categories.length === 0 ? (
          <p>No blog categories are currently available.</p>
        ) : (
          <div className="row">
            {categories.map((category) => (
              <div className="col-md-4 mb-3" key={category.slug}>
                <Link className="d-block p-3 border rounded" href={`/category/${category.slug}/`}>
                  {category.name || category.slug}
                </Link>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
