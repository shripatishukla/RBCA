export const mockUsers = [
    { id: 1, name: "Admin User", email: "admin@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Editor User", email: "editor@example.com", role: "Editor", status: "Active" },
  ];
  
  export const mockRoles = [
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  ];
  
  export const mockPermissions = [
    { name: "Read", isEnabled: false },
    { name: "Write", isEnabled: false },
    { name: "Delete", isEnabled: false },
  ];
  