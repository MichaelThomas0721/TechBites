import ContentfulRequest from "$services/Client_ContentfulRequest";
import request from "$cms/posts/index";

export const load = async ({ params, fetch }) => {
    let posts = await ContentfulRequest(request, fetch, {});
    posts = posts.pageBlogPostCollection.items;
  return { posts };
};
