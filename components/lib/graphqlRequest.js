const DEFAULT_GRAPHQL_URL =
  "https://test.maranathagroup.com.au/graphql";

const REQUEST_TIMEOUT_MS = 10000;

export default async function graphqlRequest(query) {
  const url =
    process.env.WORDPRESS_GRAPHQL_URL ||
    process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL ||
    DEFAULT_GRAPHQL_URL;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const res = await fetch(url, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(query),
      signal: controller.signal,
    });

    if (!res.ok) {
      throw new Error(`WordPress GraphQL request failed: ${res.status}`);
    }

    return res.json();
  } finally {
    clearTimeout(timeout);
  }
}
