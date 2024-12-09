import React, { useContext, useState } from "react";
import { RBACContext } from "../context/RBACContext";

const PermissionManagement = () => {
  const { permissions, roles, addRole, updateRole } = useContext(RBACContext);
  const [newPermission, setNewPermission] = useState("");

  // Add new permission to all roles
  const handleAddPermission = () => {
    if (!newPermission.trim()) return; // Prevent empty or spaces-only input
    // Check if the permission already exists
    if (!permissions.includes(newPermission)) {
      permissions.push(newPermission); // Add to the permissions list (in the context)
    }
    // Add the new permission to each role's permission list
    roles.forEach((role) => {
      if (!role.permissions.includes(newPermission)) {
        updateRole({
          ...role,
          permissions: [...role.permissions, newPermission],
        });
      }
    });
    setNewPermission(""); // Reset the input field after adding
  };

  // Handle permission change for each role
  const handleRoleChange = (roleId, permission, isChecked) => {
    const role = roles.find((r) => r.id === roleId); // Find the role by ID
    const updatedPermissions = isChecked
      ? [...role.permissions, permission] // Add permission if checked
      : role.permissions.filter((perm) => perm !== permission); // Remove if unchecked
    updateRole({ ...role, permissions: updatedPermissions }); // Update the role with the new permissions
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Permission Management</h1>

      <div>
        <input
          type="text"
          placeholder="Enter new permission"
          value={newPermission}
          onChange={(e) => setNewPermission(e.target.value)}
        />
        <button onClick={handleAddPermission}>Add Permission</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h2>Assign Permissions to Roles</h2>
        <ul>
          {roles.map((role) => (
            <li key={role.id}>
              <strong>{role.name}</strong>
              <ul>
                {permissions.map((perm, index) => (
                  <li key={`${role.id}-${perm.id || perm.name || index}`}>
                    <label>
                      <input
                        type="checkbox"
                        checked={role.permissions.includes(perm.name || perm)}
                        onChange={(e) =>
                          handleRoleChange(role.id, perm.name || perm, e.target.checked)
                        }
                      />
                      {perm.name || perm}
                    </label>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PermissionManagement;
