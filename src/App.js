import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import ContactUS from "./components/ContactUs";






const AppLayout = () => {
 return(
    <div className="app">
     <Header/>
     <Outlet/>
    </div>
 )

}


const appRouter = createBrowserRouter([
   {
      path: "/",
      element: <AppLayout/>,
      errorElement: <ErrorPage/>,
      children: [
         {
            path: "/",
            element: <Body/>
         },
         {
            path: "/about",
            element: <About/>
         },
         {
            path: "/contact",
            element: <ContactUS/>
         }
      ]
   },
  
])

const root = ReactDOM.createRoot(document.getElementById("root")) 
root.render(<RouterProvider router = {appRouter}/>)