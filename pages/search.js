import Link from "next/link";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import PageBanner from "../components/Common/PageBanner";
import SearchBox from "../components/search/search-box";
import Seo from "../components/Common/Seo";
import graphqlRequest from "../components/lib/graphqlRequest";
import { searchLocalContent } from "../components/search/localIndex";

function escapeGraphQL(value) {
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

export async function getServerSideProps({ query }) {
  const searchQuery = typeof query.q === "string" ? query.q.trim() : "";

  // Services and static pages (About, FAQ, Contact, etc.) are plain
  // Next.js pages, not WordPress content — search them locally first,
  // regardless of whether the WordPress request below succeeds.
  const { services, pages: localPages } = searchLocalContent(searchQuery);

  if (!searchQuery) {
    return { props: { searchQuery: "", posts: [], pages: [], services: [], localPages: [], searchError: false } };
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
        props: { searchQuery, posts: [], pages: [], services, localPages, searchError: true },
      };
    }

    const posts = response?.data?.posts?.nodes || [];
    const pages = response?.data?.pages?.nodes || [];

    return { props: { searchQuery, posts, pages, services, localPages, searchError: false } };
  } catch (error) {
    console.error("Site search failed:", error);
    // The WordPress request failing shouldn't take local results down
    // with it — a person searching "case management" should still find
    // the service page even if the blog backend is unreachable.
    return {
      props: { searchQuery, posts: [], pages: [], services, localPages, searchError: true },
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

export default function SearchPage({ searchQuery, posts, pages, services, localPages, searchError }) {
  const total = posts.length + pages.length + services.length + localPages.length;

  return (
    <>
      <Seo
        title={searchQuery ? `Search results for "${searchQuery}"` : "Search"}
        description="Search Maranatha Wellbeing Support services, pages and blog articles."
        path={searchQuery ? `/search/?q=${encodeURIComponent(searchQuery)}` : "/search/"}
        noindex
      />

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
        {searchError && (
          <div className="alert alert-warning" role="alert">
            Blog search is temporarily unavailable, but service and page results below are unaffected.
          </div>
        )}

        {searchQuery ? (
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
                {services.length > 0 && (
                  <section aria-labelledby="service-results">
                    <h2 id="service-results" className="h4 mb-3">
                      Services
                    </h2>
                    {services.map((service) => (
                      <ResultCard
                        key={`service-${service.slug}`}
                        title={service.title}
                        href={`/${service.slug}/`}
                        excerpt={service.excerpt}
                        type="Service"
                      />
                    ))}
                  </section>
                )}

                {localPages.length > 0 && (
                  <section aria-labelledby="site-page-results" className="mt-5">
                    <h2 id="site-page-results" className="h4 mb-3">
                      Pages
                    </h2>
                    {localPages.map((page) => (
                      <ResultCard
                        key={`local-${page.slug}`}
                        title={page.title}
                        href={`/${page.slug}/`}
                        excerpt={page.excerpt}
                        type="Page"
                      />
                    ))}
                  </section>
                )}

                {posts.length > 0 && (
                  <section aria-labelledby="blog-results" className="mt-5">
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
                      More pages
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
