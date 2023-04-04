export default function () {
    return `
    query pageBlogPostCollectionQuery {
      pageBlogPostCollection {
        items {
          internalName
          slug
          author {
            name
            avatar {
              url
            }
          }
          title
          shortDescription
          featuredImage {
            url
          }
        }
      }
    }
    
      
    `
}