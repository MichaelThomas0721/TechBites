import { GraphQLRequest } from "$services/Server_ContentfulRequest";

export const POST = async ({ params, request }) => {
  let data = await request.json();
  let rData = await GraphQLRequest(data)
  return new Response(JSON.stringify(rData), { status: 200 });
};
