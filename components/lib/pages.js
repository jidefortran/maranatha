import graphqlRequest from "./graphqlRequest";

export async function getPageSlugs() {
  const response = await graphqlRequest({
    query: `query getPageSlugs {
      pages {
        nodes {
          slug
        }
      }
    }`,
  });

  if (response.errors) {
    throw new Error("Unable to load WordPress page slugs");
  }

  return response?.data?.pages?.nodes || [];
}

export async function getSinglePage(slug) {
  const safeSlug = String(slug).replace(/\\/g, "\\\\").replace(/"/g, '\\"');

  const response = await graphqlRequest({
    query: `query getSinglePage {
      pages(where: {name: "${safeSlug}"}) {
        nodes {
          content(format: RENDERED)
          date
          modified
          slug
          title(format: RENDERED)
        }
      }
    }`,
  });

  if (response.errors) {
    throw new Error(`Unable to load WordPress page: ${slug}`);
  }

  return response?.data?.pages?.nodes?.[0] || null;
}
