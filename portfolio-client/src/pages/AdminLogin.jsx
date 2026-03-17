import { useState } from "react";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/admin/login", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem("token", data.token);

      window.location.href = "/admin";
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="bg-slate-900 p-8 rounded-xl border border-sky-500 w-80 space-y-4"
      >
        <h2 className="text-xl text-white text-center">Admin Login</h2>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded bg-slate-800 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 rounded bg-slate-800 text-white"
        />

        <button className="w-full bg-sky-500 py-2 rounded">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
