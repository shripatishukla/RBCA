import React from "react";

function RoleTable({ roles, onEdit, onDelete }) {
  return (
    <table className="table-auto w-full border">
      <thead>
        <tr>
          <th className="border p-2">Role Name</th>
          <th className="border p-2">Permissions</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {roles.map((role) => (
          <tr key={role.id}>
            <td className="border p-2">{role.name}</td>
            <td className="border p-2">{role.permissions.join(", ")}</td>
            <td className="border p-2">
              <button
                className="bg-blue-500 text-white px-2 py-1 mr-2"
                onClick={() => onEdit(role)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1"
                onClick={() => onDelete(role.id)}
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

export default RoleTable;
