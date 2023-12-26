import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import useFetchdata from "../hooks/useFetchdata";

function Singleuser() {
  const [userinfo, setuserinfo] = useState([]);
  let paramId = useParams();

  let url = import.meta.env.VITE_URL;
  url +="/"
  url+= paramId.id;

  const singleData = useFetchdata(url);
  console.log(singleData);


  return (
    <div>
      <ol>
        <li>ID = {singleData.id || "Not present"}</li>
        <li>Title = {singleData.title || " Title Not present"}</li>
        <li>UserIDv={singleData.userId || "UserID Not present"}</li>
        <li>Completed flag = {JSON.stringify(singleData.completed )|| "Completed Not present"}</li>
      </ol>
    </div>
  );
}

export default Singleuser;
