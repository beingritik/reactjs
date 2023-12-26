import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Users from "./components/Users";
import Layout from "./Layout";
import Home from "./Home";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Singleuser from "./components/Singleuser";


function App() {
  const [userlist, setUserlist] = useState([]);
  const  [sendId,setsendId] = useState([]);
  const fetchUserlist = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log("res", res.data);
      setUserlist(res.data);
    });
  };
  useEffect(() => {
    fetchUserlist();
  }, []);

  const viewsingleUser = (id)=>{
    setsendId(id);
  }


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="users" element={<Users users={userlist} onViewuser={viewsingleUser} />} />
        <Route path = "user/:sendId" element = {<Singleuser/>}/>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
