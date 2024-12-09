import React, { useContext, useState } from "react";
import { RBACContext } from "../context/RBACContext";

const PermissionManagement = () => {
  const { permissions, setPermissions, roles, addRole, updateRole } = useContext(RBACContext);
  const [newPermission, setNewPermission] = useState("");

  const handleAddPermission = () => {
    if (!newPermission.trim()) return;
    roles.forEach((role) => {
      if (!role.permissions.includes(newPermission)) {
        // updateRole({ ...role, permissions: [...role.permissions, newPermission] });
        setPermissions([...permissions,{name:newPermission,isEnabled:false}]);
      }
    });
    setNewPermission("");
  };

  const handleRoleChange = (roleId, permission, isChecked) => {
    const role = roles.find((r) => r.id === roleId);
    const updatedPermissions = isChecked
      ? [...role.permissions, permission]
      : role.permissions.filter((perm) => perm !== permission);
    updateRole({ ...role, permissions: updatedPermissions });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="text-3xl">Permission Management</h1>

      <div className="mt-5 ">
        <input
          className="px-4 py-2 mr-2"
          type="text"
          placeholder="Enter new permission"
          value={newPermission}
          onChange={(e) => setNewPermission(e.target.value)}
        />
        <button onClick={handleAddPermission} className="bg-green-500 text-white px-4 py-2 mb-4">Add Permission</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h2 className="text-xl mb-3">Assign Permissions to Roles</h2>
        <ul>
          {roles.map((role) => (
            <li key={role.id} className="mb-3">
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
