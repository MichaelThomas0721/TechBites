export default function () {
    return `
    query pageBlogPostCollectionQuery {
      pageBlogPostCollection (limit: 3) {
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