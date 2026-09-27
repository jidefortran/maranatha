import graphqlRequest from "./graphqlRequest";

/**
 * Fetch a list of posts from the GraphQL API.
 * @param {string|null} endCursor - The cursor for pagination.
 * @param {Object|null} taxonomy - Optional taxonomy filter with {key, value}.
 * @returns {Object|null} The posts data or null in case of an error.
 */
export async function getPostList(endCursor = null, taxonomy = null) {
    try {
        // Construct the GraphQL query parts dynamically
        const conditions = [
            endCursor ? `after: "${endCursor}"` : null,
            `first: 5`,
            `where: {orderby: {field: DATE, order: DESC}${taxonomy ? `, ${taxonomy.key}: "${taxonomy.value}"` : ''}}`
        ]
            .filter(Boolean) // Remove null or undefined parts
            .join(', '); // Combine with commas

        const query = {
            query: `query getAllPosts {
                posts(${conditions}) {
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

        // Execute the GraphQL request
        const resJson = await graphqlRequest(query);

        // Validate the response
        if (!resJson || !resJson.data) {
            throw new Error('Invalid GraphQL response structure.');
        }

        return resJson.data.posts;
    } catch (error) {
        console.error('Error in getPostList:', {
            message: error.message,
            stack: error.stack
        });
        return { error: true, message: error.message }; // Return a descriptive error object
    }
}
