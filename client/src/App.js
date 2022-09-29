import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Post from "./pages/Post";
import Write from "./pages/Write";
import Contact from "./pages/Contact";
import About from "./pages/About";

import "./index.scss";

const Root = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/post/:id",
        element: <Post/>
      },
      {
        path: "write",
        element: <Write/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "contact",
        element: <Contact/>
      }
    ]
  }
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
