import ContentfulRequest from "$services/Client_ContentfulRequest";
import request from "$cms/posts/slug";

export const load = async ({ params, fetch }) => {
  let data = await ContentfulRequest(request, fetch, { slug: params.slug });
  data = data.pageBlogPost.items[0];
  return { post: data };
};
