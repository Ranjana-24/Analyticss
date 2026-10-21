import PostList from "../components/Posts/postList";

export default function PostsPage({ posts, setPosts }) {
  return (
    <div className="min-w-0 flex-1">
      <PostList posts={posts} setPosts={setPosts} />
    </div>
  );
}
