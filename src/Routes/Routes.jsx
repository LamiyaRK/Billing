import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Layouts/Home";
import Bills from "../Components/Bills";
import BillCardDetails from "../Components/BillCardDetails";
import Login from "../Components/Login";
import Register from "../Components/Register";
import PrivateRoute from "../ContexApi/PrivateRoute";
import UserInfo from "../Components/UserInfo";
import Updateinfo from "../Components/Updateinfo";
import Error from "../Components/Error";
import Loadin from "../Components/Loadin";

const router=createBrowserRouter([
    {
        path:"/",
        Component:HomeLayout,
        children:[
            {
                index:true,
                path:'/',
                Component:Home
            },
            {
                path:'/bills',
              element:<PrivateRoute><Bills></Bills></PrivateRoute>,
                loader:()=>fetch('/Bills.json'),
                 hydrateFallbackElement:<Loadin></Loadin>

            },
            {path:'/billsdetails/:id',
                element:<PrivateRoute><BillCardDetails></BillCardDetails></PrivateRoute>,
                loader:()=>fetch('/Bills.json'),
                hydrateFallbackElement:<Loadin></Loadin>

            },
            {
                path:'/user',
                element:<PrivateRoute><UserInfo></UserInfo></PrivateRoute>,

            },
            {
                path:'/login',
                Component:Login
            },
            {
                path:'/register',
                Component:Register
            },
            {
                path:'/updateInfo',
                Component:Updateinfo
            },
            
        ]
    },
    {
        path:'*',
        element:<Error></Error>
    }
    
])
export {router}