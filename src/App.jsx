import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Home from "./routes/Home";
import About from "./routes/About";
import NewPost, { submitPost } from "./routes/NewPost";
import { fetch } from "./routes/Home";
import  Post from "./routes/Post";
export default function App(){
const router=createBrowserRouter([{
  path:'/',
  element:<Root/>,
  children:[
    {
      path:'/',
      element:<Home/>,
      loader:fetch
    },{
      path:'/about',
      element:<About/>
    },
    {
      path:'/new',
      element:<NewPost/>,
      action: submitPost,
    
    },
    {
      path:'/post/:id',
      element:<Post/>,}
  ]
}])
return(
  <RouterProvider router={router}/>
)

}