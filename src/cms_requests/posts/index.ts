export default function () {
    return `
    query pageBlogPostCollectionQuery {
      pageBlogPostCollection {
        items {
          internalName
          slug
          author {
            name
          }
          title
          shortDescription
        }
      }
    }
    
      
    `
}