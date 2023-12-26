import React from 'react'
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const fetchAll = ()=>{
    console.log("fetch all called");
    navigate('/users')
  }
  return (
    <>
    <div>HOme page </div>
    <button onClick={()=>fetchAll()}>Fetch All Users</button>
    </>
  )
}

export default Home