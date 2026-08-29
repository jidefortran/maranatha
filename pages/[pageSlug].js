import Head from "next/head";
import { getPageSlugs, getSinglePage } from "../components/lib/pages";
import PageBanner from "../components/Common/PageBanner";

export async function getStaticProps({ params }) {
  try {
    const pageData = await getSinglePage(params.pageSlug);

    if (!pageData) {
      return { notFound: true };
    }

    return { props: { pageData } };
  } catch (error) {
    console.error(`Failed to load page "${params.pageSlug}":`, error);
    return { notFound: true };
  }
}

export async function getStaticPaths() {
  try {
    const pageSlugs = await getPageSlugs();
    return {
      paths: (pageSlugs || []).map((page) => ({
        params: { pageSlug: page.slug },
      })),
      fallback: false,
    };
  } catch (error) {
    console.error("Failed to load WordPress page slugs:", error);
    return { paths: [], fallback: false };
  }
}

export default function Page({ pageData }) {
  return (
    <>
      <Head>
        <title>{pageData.title}</title>
        <meta
          name="description"
          content={`${pageData.title} | Maranatha Wellbeing Support`}
        />
      </Head>

      <PageBanner
        pageTitle={pageData.title}
        homePageUrl="/"
        homePageText="Home"
        activePageText={pageData.title}
        bgImgClass="item-bg1"
      />

      <section className="content-area py-8">
        <article>
          <h1 className="text-6xl text-center text-slate-700 relative py-8">
            {pageData.title}
          </h1>
          <div
            dangerouslySetInnerHTML={{ __html: pageData.content }}
            className="post-content container mx-auto lg:max-w-4xl"
          />
        </article>
      </section>
    </>
  );
}
