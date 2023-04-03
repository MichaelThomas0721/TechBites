import {
  SECRET_CONTENTFUL_ENDPOINT,
  SECRET_CONTENTFUL_PREVIEW_ACCESS_TOKEN,
} from "$env/static/private";

import { GraphQLClient } from "graphql-request";

export function GraphQLRequest(request) {
  const graphql = new GraphQLClient(SECRET_CONTENTFUL_ENDPOINT, {
    headers: {
      authorization: `Bearer ${SECRET_CONTENTFUL_PREVIEW_ACCESS_TOKEN}`,
    },
  });

  return graphql.request(request);
}
