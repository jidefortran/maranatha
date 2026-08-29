const DEFAULT_GRAPHQL_URL =
  "https://test.maranathagroup.com.au/graphql";

export default async function graphqlRequest(query) {
  const url =
    process.env.WORDPRESS_GRAPHQL_URL ||
    process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL ||
    DEFAULT_GRAPHQL_URL;

  const res = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(query),
  });

  if (!res.ok) {
    throw new Error(`WordPress GraphQL request failed: ${res.status}`);
  }

  return res.json();
}
