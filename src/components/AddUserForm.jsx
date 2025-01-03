import React, { useState } from 'react';

function AddUserForm({ addUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !company) {
      alert("Please fill out all fields!");
    } else {
      addUser({ name, email, company });
      setName("");
      setEmail("");
      setCompany("");
      alert("Added successfully");
    }
  };
  

  return (
    <div className="flex justify-center items-center rounded-xl bg-gray-100 mb-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-[40rem] shadow-lg rounded-lg p-8 flex flex-col gap-6"
      >
        <h2 className="text-4xl font-bold text-center text-orange-600 mb-4">Add User</h2>
        <div>
          <label className="block font-bold text-xl text-gray-700 mb-2">Name</label>
          <input
            type="text"
            placeholder="Enter the name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-lg text-xl font-medium w-full p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
        <div>
          <label className="block font-bold text-xl text-gray-700 mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter the email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-lg text-xl font-medium w-full p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
        <div>
          <label className="block font-bold text-xl text-gray-700 mb-2">Company</label>
          <input
            type="text"
            placeholder="Enter the Company Name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="border border-gray-300 rounded-lg text-xl font-medium w-full p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold py-3 rounded-lg w-full transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddUserForm;
