import React from "react";

function PermissionMatrix({ permissions, onChange }) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-2">Permissions</h3>
      {permissions.map((permission, index) => (
        <div key={index} className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={permission.isEnabled}
            onChange={() => onChange(permission.name)}
          />
          <label className="ml-2">{permission.name}</label>
        </div>
      ))}
    </div>
  );
}

export default PermissionMatrix;
