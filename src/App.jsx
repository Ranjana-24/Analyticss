import ErrorMessage from "./pages/ErrorMessage.jsx";
import HomePage from "./pages/HomePage.jsx";
import TodoPage from "./pages/TodoPage.jsx";
import LeftLayout from "./components/Left-Layout/LeftLayout.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DragDropProvider } from "@dnd-kit/react";
function App() {
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
                {" "}
                <TodoPage />{" "}
              </DragDropProvider>{" "}
            </div>
          }
        />
        {/* <Route path="*" element={<HomePage />} /> */}
        {/* <Route path="*" element={<ErrorMessage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
