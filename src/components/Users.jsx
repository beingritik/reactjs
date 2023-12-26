import { useNavigate } from "react-router-dom";

function Users({ users }) {

  //   const fetchUsers = () => {
  //     axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
  //       setUsers(res.data);
  //     });
  //   };
  //   useEffect(() => {
  //     fetchUsers();
  //   }, []);

  const navigate = useNavigate();
  const viewItem = (id)=>{
    navigate(`/user/${id}`);
  }

  return (
    <div>
      <table>
        The users are :
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
              <th>{JSON.stringify(user.completed ) || "not having"}</th>
              <th><button onClick={()=>viewItem(user.id)}> View </button></th>

            </tr>
          ))}
      </table>
    </div>
  );
}

export default Users;
