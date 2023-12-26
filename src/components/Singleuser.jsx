import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Singleuser() {
  const [userinfo, setuserinfo] = useState([]);

  let paramId = useParams();
  console.log("paramid",paramId)
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${paramId.sendId}`)
      .then((response) => {
        console.log("singledata", response.data);
        setuserinfo(response.data);
      });
  }, [paramId]);

  return (
    <div>
      <ol>
        <li>ID = {userinfo.id}</li>
        <li>Title = {userinfo.title}</li>
        <li>UserIDv={userinfo.userId}</li>
        <li>Completed flag = {JSON.stringify(userinfo.completed)}</li>
      </ol>
    </div>
  );
}

export default Singleuser;
