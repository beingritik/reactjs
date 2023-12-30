import React, { useState } from "react";

function Edit({ user,sendData }) {
  const [title, setTitle] = useState(user.title);
  const [flag, setFlag] = useState(user.completed);
  // const [id,setId] = useState(null);
  
  
  const handleCompleted = (e) => {
    setFlag(e.target.value === "true");
  };
  
  const submitHandler = (e) => {
    e.preventDefault();
    let id = user.id;
    console.log("clicked submitted====", {title,flag,id});
    sendData({title,completed:flag,id});

  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="radio"
          checked={flag === true}
          value={true}
          onChange={handleCompleted}
        />
        True
        <input
          type="radio"
          checked={flag === false}
          value={false}
          onChange={handleCompleted}
        />
        False
        <button type="submit"> Save </button>
      </form>
    </>
  );
}

export default Edit;
