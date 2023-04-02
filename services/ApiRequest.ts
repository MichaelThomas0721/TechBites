import { GraphQLClient } from "graphql-request";
import { SECRET_CONTENTFUL_ENDPOINT } from '$env/static/private';

export function RequestCreator(context, request) {
  let info = <any>{};
  if (context) {
    if (context.query.slug) {
      info.slug = context.query.slug;
    }
    if (context.locale == "en") {
      info.locale = "";
    } else {
      info.locale =
        context.locale.charAt(0).toUpperCase() + context.locale.slice(1);
    }
  }

  return request(info);
}

//THIS IS FOR SERVER SIDE USE IE: ONLY USE IN getServerSideProps
export async function ApiRoute(url: string, body: any) {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_BASEURL + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => {
      return res.json();
    });
    return res;
  } catch (error) {
    console.log("error: " + error);
    return error;
  }
}

export function GraphQLRequest(request) {
  const graphql = new GraphQLClient(SECRET_CONTENTFUL_ENDPOINT, {
    headers: {
      authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
  });

  return graphql.request(request);
}

export async function ContentfulRequest(context, request: any) {
  return {
    props: {
      data: await ApiRoute("/api/contentful", {
        request: RequestCreator(context, request),
      }),
      locale: context.locale
    },
  };
}