import { useEffect, useState } from "react";
import { CanceledError } from "./services/api-client";
import userService, { User } from "./services/user-service";
import useUsers from "./hooks/useUsers";

const App = () => {
  const { users, error, loading, setUsers, setError, setLoading } = useUsers();
  
  const deleteUser = (id: number) => {
    const originalUsers = [...users];
    setUsers(users.filter((user) => user.id !== id));
    userService.delete(id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, username: "Nathan" };
    setUsers([newUser, ...users]);
    userService
      .create(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (id: number, username: string) => {
    const originalUsers = [...users];
    const updatedUser = { id: id, username: username + "!" };
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));

    userService.update(id, updatedUser).catch((err) => {
      setUsers(originalUsers);
      setError(err.message);
    });
  };

  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      {loading && <div className="spinner-border"></div>}
      <button className="btn btn-primary" onClick={() => addUser()}>
        Add
      </button>
      <ul className="list-group">
        {users.map(({ id, username }) => {
          return (
            <li
              key={id}
              className="list-group-item d-flex justify-content-between"
            >
              {username}

              <div>
                <button
                  className="btn btn-outline-secondary mx-1"
                  onClick={() => updateUser(id, username)}
                >
                  Update
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => deleteUser(id)}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
