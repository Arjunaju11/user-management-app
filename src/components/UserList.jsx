import React from "react";

const UserList = ({ users, deleteUser }) => {
  return (
    <div className="bg-white w-[70%] shadow-md rounded-lg p-4 mb-10">
      <h2 className="text-4xl text-center font-bold mb-2">User List</h2>
      {users.length === 0 ? (
        <p>No users available</p>
      ) : (
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-xl text-left">Name</th>
              <th className="border px-4 py-2 text-xl text-left">Email</th>
              <th className="border px-4 py-2 text-xl text-left">Company</th>
              <th className="border px-4 py-2 text-xl text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              console.log(user.company);
              const companyName = user.company && typeof user.company === "object" 
                ? user.company.name 
                : user.company || "Company name not available";
              
              return (
                <tr key={user.id}>
                  <td className="border text-xl px-4 py-2">{user.name}</td>
                  <td className="border text-xl px-4 py-2">{user.email}</td>
                  <td className="border text-xl px-4 py-2">{companyName}</td>
                  <td className="border text-xl px-4 py-2 flex items-center justify-center">
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded "
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserList;
