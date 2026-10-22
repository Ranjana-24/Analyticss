import ErrorMessage from "./pages/ErrorMessage.jsx";
import HomePage from "./pages/HomePage.jsx";
import TodoPage from "./pages/TodoPage.jsx";
import LeftLayout from "./components/Left-Layout/LeftLayout.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DragDropProvider } from "@dnd-kit/react";

import { useState, useEffect } from "react";

// post
import PostsPage from "./pages/PostsPage.jsx";
import DetailedPost from "./components/Posts/DetailedPost.jsx";
import CreatePost from "./components/Posts/CreatePost.jsx";
import EditPost from "./components/Posts/EditPost.jsx";
function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function getPosts() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    getPosts();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex min-h-screen">
              <LeftLayout />
              <HomePage />
            </div>
          }
        />
        <Route
          path="/dashboard"
          element={
            <div className="flex min-h-screen">
              {" "}
              <LeftLayout /> <HomePage />{" "}
            </div>
          }
        />
        <Route path="/analytics" element={<HomePage />} />
        <Route
          path="/pages/todo"
          element={
            <div className="flex min-h-screen">
              <LeftLayout />
              <DragDropProvider>
                {/* inside components can access its properties */}{" "}
                <TodoPage />{" "}
              </DragDropProvider>{" "}
            </div>
          }
        />

        <Route
          path="*"
          element={
            <div className="flex min-h-screen w-full">
              <LeftLayout />
              <ErrorMessage />
            </div>
          }
        />

        {/* post routes */}
        <Route
          path="/posts"
          element={
            <div className="flex min-h-screen">
              <LeftLayout />
              <PostsPage
                posts={posts}
                setPosts={setPosts}
                loading={loading}
                error={error}
              />
            </div>
          }
        />

        {/* detailed post */}
        <Route
          path="/posts/:id"
          element={
            <div className="flex min-h-screen">
              <LeftLayout />
              <DetailedPost posts={posts} />
            </div>
          }
        />

        {/* create post */}
        <Route
          path="/posts/create"
          element={
            <div className="flex min-h-screen">
              <LeftLayout />
              <CreatePost posts={posts} setPosts={setPosts} />
            </div>
          }
        />

        {/* edit post */}
        <Route
          path="/posts/:id/edit"
          element={
            <div className="flex min-h-screen">
              <LeftLayout />
              <EditPost posts={posts} setPosts={setPosts} />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
