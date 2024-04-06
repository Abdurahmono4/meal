import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { toast } from "react-hot-toast";
// const notify = () => toast.loading("Here is your toast.");

//layouts
import MainLayout from "./layouts/MainLayout.jsx";

//pages
import Home from "./pages/Home.jsx";
import Create from "./pages/Create.jsx";
import SingleRecipe from "./pages/SingleRecipe.jsx";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/create", element: <Create /> },
        { path: "/recipe/:id", element: <SingleRecipe /> },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
