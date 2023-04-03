export default async function ContentfulRequest(request: any, fetch: any, params: any) {
  return {
    props: {
      data: await ApiRoute(
        "/api/posts",
        {
          request: request(),
        },
        fetch
      ),
    },
  };
}

async function ApiRoute(url: string, body: any, fetch: any) {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body.request),
    }).then((res) => {
      return res.json();
    });
    return res;
  } catch (error) {
    console.log("error: " + error);
    return error;
  }
}
