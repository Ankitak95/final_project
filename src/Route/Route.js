import React, {   Component, Suspense, useEffect } from 'react';
import {BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom';
import Header from '../ShareModules/Header/Header';
import Footer from '../ShareModules/Footer/Footer';
import { useDispatch } from 'react-redux';
import { check_token } from '../Redux/authSlice';
import Home from '../Components/Home/Home'
import About from "../Components/About/About";
import Blog from '../Components/Blog/Blog';
import Contact from "../Components/Contact/Contact";
import Login from '../Components/Login/Login';
import Registration from '../Components/Registration/Registration';
import AddProduct from '../Components/CRUD/AddProduct/AddProduct';
import EditProduct from "../Components/CRUD/EditProduct/EditProduct"
import ShowProduct from '../Components/CRUD/ShowProduct/ShowProduct';
export default function Rout(){
const dispatch=useDispatch();
const publicRouteNames=[
{
    path:"/registration",
Component:<Registration/>
},
{
    path:"/login",
  Component:<Login/>
}
]
const privateRouteNames=[
{
    path:"/",
    Component:<Home/>
},
{
    path:"/about",
    Component:<About/>
},
{
    path:"/blog",
    Component:<Blog/>
},
{
    path:"/addproduct",
    Component:<AddProduct/>
},
{
    path:"/showproduct",
    Component:<ShowProduct/>
},
{
    path:"/product/detail/:id",
    Component:<EditProduct/>
},
{
    path:"/contact",
    Component:<Contact/>
},
]
useEffect(()=>
    {
        dispatch(check_token())
    },[]
)

function PrivateRoute({children}){
const token=localStorage.getItem("token")||sessionStorage.getItem("token")
return token!==null && token!==undefined?(children):(<Navigate to="/login"/>)
}
return(

<Router>
<Header/>
<Routes>
{publicRouteNames?.map((route,index)=>{
return(
<Route key={index+1} exact path={route.path} element={route.Component}>
</Route>
)
})}
{privateRouteNames?.map((route,index)=>{
return(
<Route key={index+2}
path={route.path}
element={<PrivateRoute>{route.Component}</PrivateRoute>}
>

</Route>
)
})}
</Routes>
<Footer/>
</Router>

)
}