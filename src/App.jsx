import React, { useState, useEffect } from "react";
import UserList from "./components/UserList";
import AddUserForm from "./components/AddUserForm";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data);
        console.log(response.data);
      } catch (err) {
        setError("Failed to fetch users details");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // Add user 
  const addUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, { ...newUser, id: Date.now() }]);
  };

  // Delete  a user
  const deleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className=" flex-col min-h-screen bg-gradient-to-r from-orange-300 via-orange-100 to-orange-300 flex justify-center items-center">
      <h1 className="text-4xl p-4 font-bold mb-4">User Management</h1>
      <AddUserForm addUser={addUser}/> 
      <UserList users={users} deleteUser={deleteUser} />
    </div>
  );
};

export default App;
