import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
function Users({ users,sendId }) {
  let url = import.meta.env.VITE_URL;
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState("");
  const [editid, seteditid] = useState();
  const navigate = useNavigate();

  const viewItem = (id) => {
    sendId(id);
    navigate(`/user/${id}`);
  };

  const editItem = (id, titleValue) => {
    setTitle(titleValue);
    setEdit(true);
    seteditid(id);
  };

  const saveItem = (editid, title) => {
    let body = {id:editid,title:title};
    url += `/${editid}`;
    axios.patch(url, body).then((res) => {
      //  return res.data;
       const newVal = allUsers.map((prev)=> 
       res.data.id === prev.id ? res.data:prev )
       setallUsers(newVal);
    })
    .catch((err)=>{
      console.log("err",err);
      return err
    })
    setEdit(false);
  };
  const [allUsers, setallUsers] = useState([]);

  useEffect(() => {
    setallUsers(users); 
  }, [users]);

  return (
    <>
      <div>
        The users are :
        <table>
          <tr>
            <th> title</th>
            <th> userId</th>
            <th> Flag</th>
            <th>Actions </th>
          </tr>
          {allUsers &&
            allUsers.map((user) => (
              <tr key={user.id}>
                {edit && editid === user.id ? (
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                ) : (
                  <p>{user.title}</p>
                )}
                <th>{user.userId || "not fetching .."}</th>
                <th>{JSON.stringify(user.completed) || "not having"}</th>
                <th>
                  <button onClick={() => viewItem(user.id)}> View </button>
                </th>
                <th>
                  {edit ? (
                    <button onClick={() => saveItem(editid, title)}>
                      Save
                    </button>
                  ) : (
                    <button onClick={() => editItem(user.id, user.title)}>
                      edit
                    </button>
                  )}
                </th>
              </tr>
            ))}
        </table>
      </div>
    </>
  );
}
export default Users;
