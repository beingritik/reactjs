import React from 'react'
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  
  const fetchAll = ()=>{
    navigate('/users')
  }
  const fetchStatic = ()=>{
    navigate('/staticusers')
  }
  return (
    <>
    <div>HOme page </div>
    <button onClick={()=>fetchAll()}>Fetch All Users</button>
    <button onClick={()=>fetchStatic()}>Fetch Static Users</button>
    </>
  )
}

export default Home