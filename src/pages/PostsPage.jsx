import PostList from "../components/Posts/postList.jsx";
export default function PostsPage({ posts, setPosts }) {
  return (
    <>
      <PostList posts={posts} setPosts={setPosts} />
    </>
  );
}
