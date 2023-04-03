import ContentfulRequest from "$services/Client_ContentfulRequest";
import request from "$cms/posts/index";

export const load = ({ params, fetch }) => {
  const data = ContentfulRequest(request, fetch, {});

  return { posts: data };
};
