import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  username: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/xusers")
      .then((res) => setUsers(res.data))
      .catch((error)=>setError(error.message));
  }, []);

  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map(({ id, username }) => {
          return <li key={id}>{username}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
