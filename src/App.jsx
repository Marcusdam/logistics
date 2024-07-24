
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/about/About";
import Layout from "./layout/Layout";
import Projects from "./pages/project/Projects";
import Contact from "./pages/contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path:"/",
        element:<Home/>
    },
      {
        path:"/about",
        element:<About/>
    },
      {
        path:"/project",
        element:<Projects/>
    },
      {
        path:"/contact",
        element:<Contact/>
    },
    ]
   
  },
 
]);

function App() {
  
  return (
    <>
     <div className="">
      <div>
      <RouterProvider router={router} />
      </div>
     </div>
    </>
  )
}

export default App
