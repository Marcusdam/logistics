
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/about/About";
import Layout from "./layout/Layout";
import Projects from "./pages/project/Projects";
import Contact from "./pages/contact/Contact";
import Services from "./pages/services/Services";
import ServiceDetails from "./pages/services/ServiceDetails";
import SingleProject from "./pages/project/SingleProject";
import Blog from "./pages/blog/Blog";
import SingleBlog from "./pages/blog/SingleBlog";
import TeamPage from "./pages/team/TeamPage";
import PricingPage from "./pages/pricing/PricingPage";
import Error from "./pages/pricing/Error";
import Log from "./pages/log/Log";
import Lincense from "./pages/lincense/Lincense";
import Protection from "./pages/protection/Protection";

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
        path:"/blog",
        element:<Blog/>
    },
      {
        path:"/blog/single",
        element:<SingleBlog/>
    },
      {
        path:"/contact",
        element:<Contact/>
    },
      {
        path:"/services",
        element:<Services/>
    },
      {
        path:"/services/single",
        element:<ServiceDetails/>
    },
      {
        path:"/project/single",
        element:<SingleProject/>
    },
    
      {
        path:"/team",
        element:<TeamPage/>
    },
      {
        path:"/pricing",
        element:<PricingPage/>
    },
      {
        path:"/pricing/error",
        element:<Error/>
    },
      {
        path:"/update",
        element:<Log/>
    },
      {
        path:"/lincense",
        element:<Lincense/>
    },
      {
        path:"/protection",
        element:<Protection/>
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
