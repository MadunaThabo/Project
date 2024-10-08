// pages/add-user.tsx
import { useState } from "react";

/**
 * Page component for adding a new user.
 *
 * Displays a form for adding a user. The form consists of two required fields
 * for the user's name and email. When the form is submitted, the user is added
 * to the database and the form is reset.
 */
export default function AddUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
            await fetch("/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email }),
        });
        setName("");
        setEmail("");
    };

    return (
        <div>
            <h1>Add User</h1>
            <form onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Email: </label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add User</button>
            </form>
        </div>
    );
}
