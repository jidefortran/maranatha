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

    const resJson = await graphqlRequest(query);
    if (resJson.errors) throw new Error("Unable to load posts");
    return resJson?.data?.posts || { nodes: [], pageInfo: {} };
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

    const resJson = await graphqlRequest(query);
    if (resJson.errors) throw new Error("Unable to load post slugs");
    return resJson?.data?.posts?.nodes || [];
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

  const resJson = await graphqlRequest(query);
  if (resJson.errors) throw new Error("Unable to load categories");
  return resJson?.data?.categories?.nodes || [];
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
