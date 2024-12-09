import React, { useState, useContext } from "react";
import UserTable from "../component/UserTable";
import Modal from "../component/Modal";
import { RBACContext } from "../context/RBACContext";

function Users() {
  const { users, addUser, updateUser, deleteUser } = useContext(RBACContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleSave = (user) => {
    console.log("inside the handleSave :",user);
    currentUser ? updateUser({...currentUser,name:user.name,email:user.email,role:user.role,status:user.status}) : addUser(user);
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <button
        className="bg-green-500 text-white px-4 py-2 mb-4"
        onClick={() => {
          setCurrentUser(null);
          setIsModalOpen(true);
        }}
      >
        Add User
      </button>
      <UserTable
        users={users}
        onEdit={(user) => {
            console.log("onEdit",user);
            
          setCurrentUser(user);

          setIsModalOpen(true);
        }}
        onDelete={deleteUser}
      />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={currentUser ? "Edit User" : "Add User"}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const user = Object.fromEntries(formData.entries());

            console.log("user detail:",user);
            handleSave(user);
          }}
        >
          <input
            name="name"
            defaultValue={currentUser?.name || ""}
            placeholder="Name"
            required
            className="w-full border p-2 mb-4"
          />
          <input
            name="email"
            defaultValue={currentUser?.email || ""}
            placeholder="Email"
            required
            className="w-full border p-2 mb-4"
          />
          <input
            name="role"
            defaultValue={currentUser?.role || ""}
            placeholder="Role"
            required
            className="w-full border p-2 mb-4"
          />
          <input
            name="status"
            defaultValue={currentUser?.status || ""}
            placeholder="Status"
            required
            className="w-full border p-2 mb-4"
          />
          <button className="bg-blue-500 text-white px-4 py-2" type="submit">
            Save
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default Users;
