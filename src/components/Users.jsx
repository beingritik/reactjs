import { useNavigate } from "react-router-dom";
import Edit from "./Edit";
import { useState, useEffect } from "react";
function Users({ users, staticdata }) {
  //   const fetchUsers = () => {
  //     axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
  //       setUsers(res.data);
  //     });
  //   };
  //   useEffect(() => {
  //     fetchUsers();
  //   }, []);

  useEffect(() => {
    setStaticUsers(staticdata)
  }, [staticdata]);

  const [staticUsers, setStaticUsers] = useState(staticdata);
  // const [edit,setedit]= useState(null);
  const [toEdit, settoEdit] = useState("");
  const [isEditable, setisEditable] = useState(false);
  const navigate = useNavigate();
  const viewItem = (id) => {
    navigate(`/user/${id}`);
  };
  const editItem = (user) => {
    setisEditable(true);
    settoEdit(user);
  };

  const finaleditHandler = (data) => {
    const newArray = staticdata.map((prev) =>
    prev.id === data.id ? data : prev
    );
    setStaticUsers(newArray);
    // settoEdit(null);
  };
  return (
    <>
      <div>


        {isEditable ? <Edit user={toEdit} sendData={finaleditHandler} /> : null}


        the static are:
        {staticUsers &&
          staticUsers.map((staticUser) => (
            <ol key={staticUser.id}>
              <li>{staticUser.title} </li>
              <li>{JSON.stringify(staticUser.completed)} </li>
              <button onClick={() => editItem(staticUser)}> Edit </button>
            </ol>
          ))}



        {/* The users are : */}
        {/* <table>
          <tr>
            <th> title</th>
            <th> userId</th>
            <th> Flag</th>
            <th>Actions </th>
          </tr>
          {users &&
            users.map((user) => (
              <tr key={user.id}>
                <th>{user.title || "not available"}</th>
                <th>{user.userId || "not fetching .."}</th>
                <th>{JSON.stringify(user.completed) || "not having"}</th>
                <th>
                  <button onClick={() => viewItem(user.id)}> View </button>
                </th>
                <th>
                  <button onClick={() => editItem(user)}> Edit </button>
                </th>
              </tr>
            ))}
        </table> */}
        
      </div>
    </>
  );
}

export default Users;
