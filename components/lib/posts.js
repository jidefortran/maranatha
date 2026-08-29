import graphqlRequest from "./graphqlRequest";




export async function getPostList(endCursor = null, taxonomy = null) {

  let condition = `after: "${endCursor}", first: 5, where: {orderby: {field: DATE, order: DESC}}`;

  if(taxonomy) {
    condition = `after: "${endCursor}", first: 5, where: {orderby: {field: DATE, order: DESC}, ${taxonomy.key}: "${taxonomy.value}"}`;
  }

    const query = {
        query: `query getAllPosts {
            posts(${condition}) {
              nodes {
                date
                slug
                title
                excerpt(format: RENDERED)
                featuredImage {
                  node {
                    mediaDetails {
                      file
                      sizes {
                        sourceUrl
                        width
                        height
                      }
                    }
                  }
                }
                categories {
                  nodes {
                    name
                    slug
                  }
                }
              }
              pageInfo {
                endCursor
                hasNextPage
                hasPreviousPage
                startCursor
              }
            }
          }`
    };

    // Used directly in getStaticProps for the static /blog index page
    // (no fallback/revalidate), so a backend hiccup here must not throw
    // or it takes down the whole build. Return an empty result instead.
    try {
        const resJson = await graphqlRequest(query);
        if (resJson.errors) {
            console.error("getPostList: GraphQL returned errors", resJson.errors);
            return { nodes: [], pageInfo: {} };
        }
        return resJson?.data?.posts || { nodes: [], pageInfo: {} };
    } catch (error) {
        console.error("getPostList: failed to reach WordPress backend", error);
        return { nodes: [], pageInfo: {} };
    }
}

export async function getSinglePost(slug) {
    const query = {
        query: `query getSinglePost {
            post(id: "${slug}", idType: SLUG) {
              content(format: RENDERED)
              date
              excerpt(format: RENDERED)
              modified
              slug
              title(format: RENDERED)
              databaseId
              featuredImage {
                node {
                  mediaDetails {
                    sizes {
                      sourceUrl
                      width
                      height
                    }
                  }
                }
              }
              categories {
                nodes {
                  name
                  slug
                }
              }
            }
          }`
    };

    const resJson = await graphqlRequest(query);
    if (resJson.errors) throw new Error("Unable to load post");
    return resJson?.data?.post || null;
}

export async function getPostSlugs() {
    const query = {
        query: `query getPostSlugs {
            posts {
              nodes {
                slug
              }
            }
          }`
    };

    // Used in getStaticPaths — must never throw, or the entire build fails.
    // If the WordPress backend is temporarily unreachable (network error,
    // cert issue, timeout, etc.), fall back to an empty path list. Pages
    // will still be generated on-demand at request time via
    // `fallback: 'blocking'`.
    try {
        const resJson = await graphqlRequest(query);
        if (resJson.errors) {
            console.error("getPostSlugs: GraphQL returned errors", resJson.errors);
            return [];
        }
        return resJson?.data?.posts?.nodes || [];
    } catch (error) {
        console.error("getPostSlugs: failed to reach WordPress backend, skipping build-time paths", error);
        return [];
    }
}

export async function getCategorySlugs() {
  const query = {
    query: `query getCatetorySlugs {
      categories {
        nodes {
          slug
        }
      }
    }`
  };

  // Also used in a getStaticPaths — same reasoning as getPostSlugs above.
  try {
    const resJson = await graphqlRequest(query);
    if (resJson.errors) {
      console.error("getCategorySlugs: GraphQL returned errors", resJson.errors);
      return [];
    }
    return resJson?.data?.categories?.nodes || [];
  } catch (error) {
    console.error("getCategorySlugs: failed to reach WordPress backend, skipping build-time paths", error);
    return [];
  }
}

export async function getCategoryDetails(categoryName) {
  const query = {
    query: `query getCategoryDetails {
      category(id: "${categoryName}", idType: SLUG) {
        count
        name
        slug
      }
    }`
  };

  const resJson = await graphqlRequest(query);
  if (resJson.errors) throw new Error("Unable to load category");
  return resJson?.data?.category || null;
}
