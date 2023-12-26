import "./App.css";
import React, { useEffect, useState } from "react";
import Users from "./components/Users";
import Layout from "./Layout";
import Home from "./Home";
import useFetchdata from  "./hooks/useFetchdata";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Singleuser from "./components/Singleuser";

function App() {
  const [userlist, setUserlist] = useState([]);
  let url = import.meta.env.VITE_URL;

  //using custom hooks for the userlist fucntion
  const userData = useFetchdata(url) ;
  console.log("userdata==", userData);

  useEffect(() => {
    // Update the userlist state when userData changes
    setUserlist(userData);
  }, [userData]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="users" element={<Users users={userlist} />} />
        <Route path="user/:id" element={<Singleuser />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;


  // const fetchUserlist = () => {
  //   axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
  //     setUserlist(res.data);
  //   });
  // };
  // useEffect(() => {
  //   fetchUserlist();
  // }, []);
