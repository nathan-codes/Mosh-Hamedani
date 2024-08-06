import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    //get -> promise -.res/err
    setIsLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  const handleDelete = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers)
      });
  };


  return (
    <div className="p-5">
      {isLoading && <div className="spinner-border"></div>}
      {error && <p className="text-danger"> {error}</p>}
      <ul className="list-group">
        {users.map((user) => {
          return (
            <li className="list-group-item d-flex justify-content-between">
              {user.name} - {user.id}
              <button
                className="btn btn-outline-danger"
                onClick={() => handleDelete(user)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
