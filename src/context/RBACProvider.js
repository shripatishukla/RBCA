import React, { useState } from "react";
import { RBACContext } from "./RBACContext";
import { mockUsers, mockRoles, mockPermissions } from "../services/mockData";

export const RBACProvider = ({ children }) => {
  const [users, setUsers] = useState(mockUsers);
  const [roles, setRoles] = useState(mockRoles);
  const [permissions, setPermissions] = useState(mockPermissions);

  const addUser = (user) => {
    setUsers((prev) => [...prev, { id: Date.now(), ...user }]);
  };

  const updateUser = (updatedUser) => {
    console.log("inside the updateUSer:",updatedUser);
    console.log("inside the updateUSer:",users)
    setUsers((prev) =>
      prev.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  const addRole = (role) => {
    setRoles((prev) => [...prev, { id: Date.now(), ...role }]);
  };

  const updateRole = (updatedRole) => {
    setRoles((prev) =>
      prev.map((role) => (role.id === updatedRole.id ? updatedRole : role))
    );
  };

  const deleteRole = (id) => {
    setRoles((prev) => prev.filter((role) => role.id !== id));
  };

  return (
    <RBACContext.Provider
      value={{
        users,
        roles,
        permissions,
        setPermissions,
        addUser,
        updateUser,
        deleteUser,
        addRole,
        updateRole,
        deleteRole,
      }}
    >
      {children}
    </RBACContext.Provider>
  );
};

