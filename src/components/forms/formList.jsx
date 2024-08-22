// pages/table.js
import React from "react";

export default function Table() {
  const data = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Editor" },
    { id: 4, name: "Alice Brown", email: "alice@example.com", role: "User" },
  ];

  return (
    <div className="flex items-center justify-center h-[90vh] bg-gray-100">
      <div className="w-full max-w-7xl p-4 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-bold text-center text-gray-800">User Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left text-gray-600">ID</th>
                <th className="px-4 py-2 text-left text-gray-600">customer</th>
                <th className="px-4 py-2 text-left text-gray-600">Email</th>
                <th className="px-4 py-2 text-left text-gray-600">Role</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <tr key={user.id} className="border-b">
                  <td className="px-4 py-2 text-gray-700">{user.id}</td>
                  <td className="px-4 py-2 text-gray-700">{user.name}</td>
                  <td className="px-4 py-2 text-gray-700">{user.email}</td>
                  <td className="px-4 py-2 text-gray-700">{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
