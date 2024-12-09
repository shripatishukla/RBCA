import React, { useState, useContext } from "react";
import RoleTable from "../component/RoleTable";
import Modal from "../component/Modal";
import PermissionMatrix from "../component/PermissionMatrix";
import { RBACContext } from "../context/RBACContext";
import { logDOM } from "@testing-library/react";

function Roles() {
  const { roles, permissions,setPermissions, addRole, updateRole, deleteRole } = useContext(RBACContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState(null);

  const handleSave = (role) => {
    console.log("inside role handleSave",currentRole);
    currentRole ? updateRole({...currentRole,name:role.name,permissions:role.permissions}) : addRole(role);
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Roles</h1>
      <button
        className="bg-green-500 text-white px-4 py-2 mb-4"
        onClick={() => {
          setCurrentRole(null);
          setIsModalOpen(true);
        }}
      >
        Add Role
      </button>

      <RoleTable
        roles={roles}
        onEdit={(role) => {
          setCurrentRole(role);
          setIsModalOpen(true);
        }}
        onDelete={deleteRole}
      />
      
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={currentRole ? "Edit Role" : "Add Role"}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const role = {
              ...Object.fromEntries(formData.entries()),
              permissions: permissions
                .filter((perm) => perm.isEnabled)
                .map((perm) => perm.name),
            };

            console.log("role inside submit",role);
            
            handleSave(role);
          }}
        >
          <input
            name="name"
            defaultValue={currentRole?.name || ""}
            placeholder="Role Name"
            required
            className="w-full border p-2 mb-4"
          />
          {/* <PermissionMatrix
            permissions={permissions}
            onChange={(permName) => {
              const perm = permissions.find((p) => p.name === permName);
              perm.isEnabled = !perm.isEnabled;
            }}
          /> */}
          <button className="bg-blue-500 text-white px-4 py-2" type="submit">
            Save
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default Roles;
