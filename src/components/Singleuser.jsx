import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Singleuser({users}) {
  const [allusers,setall] = useState(users)
  const id =useParams()
  let singleValue = allusers.filter((user)=>user.id===parseInt(id.id) )
  const po =  singleValue[0];
  return (
    
    <div>
      <ol>
        <li> ID    = {po.id || "Not present"}</li>
        <li> Title  = {singleValue.title || " Title Not present"}</li>
        <li> UserID ={singleValue.userId || "UserID Not present"}</li>
        <li> Completed flag = {JSON.stringify(singleValue.completed ) || "Completed Not present"}</li> 
      </ol>
    </div>
  );
}

export default Singleuser;


  // // const [userinfo, setuserinfo] = useState([]);
  // let paramId = useParams();

  // // let url = import.meta.env.VITE_URL;
  // // url +="/"
  // // url+= paramId.id;

  // // const singleData = useFetchdata(url);
  // console.log("singleData==",singleData);