import ErrorMessage from "./pages/ErrorMessage.jsx";
import HomePage from "./pages/HomePage.jsx";
import TodoPage from "./pages/TodoPage.jsx";
import LeftLayout from "./components/Left-Layout/LeftLayout.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DragDropProvider } from "@dnd-kit/react";
import PostsPage from "./pages/PostsPage.jsx";
import { useState, useEffect } from "react";
import CreatePost from "./components/Posts/CreatePost.jsx";
import DetailedPost from "./components/Posts/DetailedPost.jsx";
import EditPost from "./components/Posts/EditPost.jsx";
function App() {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    async function getPosts() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
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
        {/* <Route path="*" element={<HomePage />} /> */}
        <Route path="*" element={<div className="flex min-h-screen w-full">
              <LeftLayout />
              <ErrorMessage />
            </div>} />
        {/* list of posts */}
        <Route
          path="/posts/postList"
          element={
            <div className="flex min-h-screen w-full">
              <LeftLayout />
              <PostsPage posts={posts} setPosts={setPosts} />
            </div>
          }
        />

        {/* create new post */}
        <Route
          path="/posts/create"
          element={
            <div className="flex min-h-screen w-full">
              <LeftLayout />
              <CreatePost posts={posts} setPosts={setPosts} />
            </div>
          }
        />

        {/* read more about a post */}
        <Route
          path="/posts/:id"
          element={
            <div className="flex min-h-screen w-full">
              <LeftLayout />
              <DetailedPost posts={posts} setPosts={setPosts} />
            </div>
          }
        />
        {/* edit a post */}
        <Route
          path="/posts/:id/edit"
          element={
            <div className="flex min-h-screen w-full">
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
