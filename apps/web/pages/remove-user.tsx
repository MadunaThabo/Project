// pages/remove-user.tsx
import { useState, useEffect } from 'react';

export default function RemoveUser() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await fetch('/api/users');
    const data = await res.json();
    setUsers(data);
  };

  const handleRemove = async (id: number) => {
    await fetch('/api/remove-user', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    fetchUsers(); // Refresh the user list after removal
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Remove User</h1>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => handleRemove(user.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
