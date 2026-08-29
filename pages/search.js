import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import PageBanner from "../components/Common/PageBanner";
import SearchBox from "../components/search/search-box";
import graphqlRequest from "../components/lib/graphqlRequest";

function escapeGraphQL(value) {
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

export async function getServerSideProps({ query }) {
  const searchQuery = typeof query.q === "string" ? query.q.trim() : "";

  if (!searchQuery) {
    return { props: { searchQuery: "", posts: [], pages: [], searchError: false } };
  }

  try {
    const safeQuery = escapeGraphQL(searchQuery);
    const response = await graphqlRequest({
      query: `query SiteSearch {
        posts(first: 20, where: { search: "${safeQuery}" }) {
          nodes {
            slug
            title
            excerpt(format: RENDERED)
            date
          }
        }
        pages(first: 20, where: { search: "${safeQuery}" }) {
          nodes {
            slug
            title(format: RENDERED)
            content(format: RENDERED)
          }
        }
      }`,
    });

    if (response.errors) {
      console.error("Site search GraphQL error:", response.errors);
      return {
        props: { searchQuery, posts: [], pages: [], searchError: true },
      };
    }

    const posts = response?.data?.posts?.nodes || [];
    const pages = response?.data?.pages?.nodes || [];

    return { props: { searchQuery, posts, pages, searchError: false } };
  } catch (error) {
    console.error("Site search failed:", error);
    return {
      props: { searchQuery, posts: [], pages: [], searchError: true },
    };
  }
}

function stripHtml(html = "") {
  return html.replace(/<[^>]*>/g, " ").replace(/&nbsp;/gi, " ").replace(/&amp;/gi, "&").replace(/&quot;/gi, '"').replace(/\s+/g, " ").trim();
}

function ResultCard({ title, href, excerpt, type = "Content" }) {
  return (
    <article className="search-result-card">
      <span className="search-result-meta">{type}</span>
      <h3 className="h5 mb-2">
        <Link href={href}>{stripHtml(title)}</Link>
      </h3>
      {excerpt ? (
        <p className="mb-0 text-muted">{stripHtml(excerpt).slice(0, 260)}{stripHtml(excerpt).length > 260 ? "…" : ""}</p>
      ) : null}
    </article>
  );
}

export default function SearchPage({ searchQuery, posts, pages, searchError }) {
  const total = posts.length + pages.length;

  return (
    <>
      <Head>
        <title>
          {searchQuery
            ? `Search results for "${searchQuery}" | Maranatha Wellbeing Support`
            : "Search | Maranatha Wellbeing Support"}
        </title>
        <meta
          name="description"
          content="Search Maranatha Wellbeing Support services, pages and blog articles."
        />
      </Head>

      <Navbar />

      <PageBanner
        pageTitle="Search"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Search"
        bgImgClass="item-bg5"
      />

      <SearchBox initialQuery={searchQuery} />

      <main className="container pb-5" style={{ maxWidth: 900 }}>
        {searchError ? (
          <div className="alert alert-warning" role="alert">
            Search is temporarily unavailable. Please try again in a moment.
          </div>
        ) : searchQuery ? (
          <>
            <h1 className="h3 mb-4">
              {total} result{total === 1 ? "" : "s"} for “{searchQuery}”
            </h1>

            {total === 0 ? (
              <div className="alert alert-info search-result-card">
                No matching content was found. Try another search term.
              </div>
            ) : (
              <>
                {posts.length > 0 && (
                  <section aria-labelledby="blog-results">
                    <h2 id="blog-results" className="h4 mb-3">
                      Blog
                    </h2>
                    {posts.map((post) => (
                      <ResultCard
                        key={`post-${post.slug}`}
                        title={post.title}
                        href={`/blog/${post.slug}/`}
                        excerpt={post.excerpt}
                        type="Blog article"
                      />
                    ))}
                  </section>
                )}

                {pages.length > 0 && (
                  <section aria-labelledby="page-results" className="mt-5">
                    <h2 id="page-results" className="h4 mb-3">
                      Pages
                    </h2>
                    {pages.map((page) => (
                      <ResultCard
                        key={`page-${page.slug}`}
                        title={page.title}
                        href={`/${page.slug}/`}
                        excerpt={page.content}
                        type="Page"
                      />
                    ))}
                  </section>
                )}
              </>
            )}
          </>
        ) : (
          <p className="text-muted">Enter a word or phrase above to search the site.</p>
        )}
      </main>

      <Footer />
    </>
  );
}
