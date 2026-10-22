import PostList from "../components/Posts/postList";

export default function PostsPage({ posts, setPosts, loading, error }) {
  return (
    <div className="min-w-0 flex-1">
      <PostList
        posts={posts}
        setPosts={setPosts}
        loading={loading}
        error={error}
      />
    </div>
  );
}
