import ContentfulRequest from "$services/Client_ContentfulRequest";
import request from "$cms/subjects/subject";

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ params, fetch }) => {
  const subjects = ["gaming", "general-tech", "programming"];
  if (!subjects.includes(params.subject)) return { status: 404 };
  const sub = Capitalize(params.subject.replace("-", " "));
  let posts = await ContentfulRequest(request, fetch, { subject: sub });
  posts = posts.pageBlogPostCollection.items;
  return { posts };
};

function Capitalize(str) {
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(" ");
}
