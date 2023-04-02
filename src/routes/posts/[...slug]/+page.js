export const load = ({ params, fetch }) => {
    console.log(params);
    const fetchPosts = async () => {
        let data = await fetch(`/api/posts`);
        data = await data.json();
        return data;
    }

    return { posts: fetchPosts() };
}