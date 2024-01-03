import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Singleuser({ users }) {
  const [singleUser, setSingleUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const user = users.find((user) => user.id === Number(id));
    if (user) {
      setSingleUser(user);
    } else {
      // Handle user not found, you can redirect or show an error message
      setSingleUser("no user found");
      console.log("User not found");
    }
  }, [users]);

  if (!singleUser) {
    // You can render a loading state or an error message here
    return <div>Fetching...</div>;
  }
  return (
    <div>
      <ol>
        <li> ID = {singleUser.id || "Not present"}</li>
        <li> Title = {singleUser.title || " Title Not present"}</li>
        <li> UserID ={singleUser.userId || "UserID Not present"}</li>
        <li>
          {JSON.stringify(singleUser.completed) || "Completed Not present"}
        </li>
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
