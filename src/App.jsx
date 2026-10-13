import ErrorMessage from "./pages/ErrorMessage.jsx";
import HomePage from "./pages/HomePage.jsx";
import TodoPage from "./pages/TodoPage.jsx";
import LeftLayout from "./components/Left-Layout/LeftLayout.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./components/TodoSection/Add.jsx";
import Edit from "./components/TodoSection/Edit.jsx";
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
        <Route  path="/dashboard"  element={<div className="flex min-h-screen"> <LeftLayout /> <HomePage /> </div> }/>
        <Route path="/analytics" element={<HomePage />} />
        <Route path="/pages/todo" element={<div className="flex min-h-screen"> <LeftLayout /> <TodoPage /> </div> } />
        {/* <Route path="*" element={<HomePage />} /> */}
        {/* <Route path="*" element={<ErrorMessage />} /> */}
        <Route path="/pages/todo/add" element={<Add />} />
        <Route path="/pages/todo/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
