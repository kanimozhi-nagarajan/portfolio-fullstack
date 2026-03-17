import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import AdminForm from "../components/AdminForm";

function Admin() {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("token");
    return token ? jwtDecode(token) : null;
  });

  const handleLogin = async (credentialResponse) => {
    const res = await fetch("http://localhost:5000/api/auth/google", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        credential: credentialResponse.credential,
      }),
    });

    const data = await res.json();

    localStorage.setItem("token", data.token);

    const decoded = jwtDecode(data.token);
    setUser(decoded);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  // Not logged in → show Google login
  if (!user) {
    return (
      <div className="bg-slate-950 min-h-screen flex flex-col items-center justify-center text-white">
        <h2 className="mb-6 text-xl">Admin Login</h2>

        <GoogleLogin onSuccess={handleLogin} />
      </div>
    );
  }

  // Logged in but NOT admin
  if (user.role !== "admin") {
    return (
      <div className="bg-slate-950 min-h-screen flex flex-col items-center justify-center text-white">
        <h2 className="text-2xl">Not Authorized</h2>

        <button onClick={logout} className="mt-6 bg-red-500 px-4 py-2 rounded">
          Logout
        </button>
      </div>
    );
  }

  // Admin view
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <div className="flex justify-end p-6">
        <button onClick={logout} className="bg-red-500 px-4 py-2 rounded">
          Logout
        </button>
      </div>

      <AdminForm />
    </div>
  );
}

export default Admin;
