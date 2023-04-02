import { GraphQLRequest } from "./../../../../services/ApiRequest";
import { SECRET_CONTENTFUL_ENDPOINT } from '$env/static/private';

export const GET = async ({ params, request }) => {
  // let data = await GraphQLRequest(req.)
  return new Response(JSON.stringify("Hello World!"), { status: 200 });
};
