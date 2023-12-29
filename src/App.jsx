import React, { useEffect, useState } from "react";
import "./App.css";
import Users from "./components/Users";
import Layout from "./Layout";
import Home from "./Home";
import useFetchdata from  "./hooks/useFetchdata";
import StaticUsers from "./components/StaticUsers";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Singleuser from "./components/Singleuser";

function App() {
  const [userlist, setUserlist] = useState([]);
  // const [singleId,setsingleId] = useState('');
  let url = import.meta.env.VITE_URL;

  //using custom hooks for the userlist fucntion
  const userData = useFetchdata(url) ;
  const staticUsers = userData.map(({title,completed,id})=>({title,completed,id}));
  const [oneuser,setoneUser] = useState("");

  useEffect(() => {
    // Update the userlist state when userData changes
    setUserlist(userData);
    setoneUser(oneuser)
  }, [userData]);

  const viewsingleHandler = (id)=>{
    // console.log("clicked single",id);
    const singleValue = userData.filter((prev)=> prev.id===id);
    setoneUser(singleValue[0]);
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="users" element={<Users users = {userlist} sendId={viewsingleHandler}/>} />
        <Route path="user/:id" element={<Singleuser users={userlist} />} />
        <Route path="staticusers" element= {< StaticUsers staticdata= {staticUsers}/>}/>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
