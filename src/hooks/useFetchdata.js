import { useState, useEffect } from "react";
import axios from "axios";

function useFetchdata(url) {
  const [userdata, setuserData] = useState([]);
  useEffect(()=>{
    axios.get(url)
    .then((res)=> res.data)
    .then((data)=>{
      setuserData(data)
    })
  },[url]);
  return userdata;
}

export default useFetchdata;
