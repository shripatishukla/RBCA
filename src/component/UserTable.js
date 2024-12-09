import React from "react";

function UserTable({ users, onEdit, onDelete }) {
  return (
    <table className="table-auto w-full border">
      <thead>
        <tr>
          <th className="border p-2">Name</th>
          <th className="border p-2">Email</th>
          <th className="border p-2">Role</th>
          <th className="border p-2">Status</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className="border p-2">{user.name}</td>
            <td className="border p-2">{user.email}</td>
            <td className="border p-2">{user.role}</td>
            <td className="border p-2">{user.status}</td>
            <td className="border p-2">
              <button
                className="bg-blue-500 text-white px-2 py-1 mr-2"
                onClick={() => onEdit(user)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1"
                onClick={() => onDelete(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
