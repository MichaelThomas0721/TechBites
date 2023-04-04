export default function ({ subject }) {
    return `
    query pageBlogPostCollectionQuery {
      pageBlogPostCollection (where: {subject: {title: "${subject}"}})  {
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