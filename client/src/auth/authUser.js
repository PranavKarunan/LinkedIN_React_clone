import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Signin from "../Pages/user/Signin";

const LoggedIn = () => {
    const {user} = useSelector((state) =>({ ...state }));
    
    return user ? <Outlet /> : <Signin />
}


const NotLoggedIn = () => {
    const {user} =useSelector((state) =>({ ...state }));
  
    
    return user ? <Navigate to = "/"/> : <Outlet />
}


export { LoggedIn ,NotLoggedIn }