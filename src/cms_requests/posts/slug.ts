export default function ({ slug }) {
  return `
    query pageBlogPostCollectionQuery {
        pageBlogPost : pageBlogPostCollection (where: {slug: "${slug}"}, limit:1) {
            items {
              internalName
              slug
              author {
                        name
                        avatar {
                            url
                        }
              }
              publishedDate
              title
              shortDescription
              featuredImage {
                url
              }
              content {
                json
                links {
                    entries {
                       block {
                        ...on ComponentRichImage {
                            sys {
                                id
                            }
                            image {
                                url
                            }
                        }
                       }
                    }
                }
              }
            }
          }
        }
    `;
}
