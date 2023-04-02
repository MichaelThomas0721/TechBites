export const GET = async ({ params, request }) => {
  return new Response(JSON.stringify("Hello World!"), { status: 200 });
};
