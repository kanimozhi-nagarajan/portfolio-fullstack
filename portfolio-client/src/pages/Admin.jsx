import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import AdminForm from "../components/AdminForm";
import { API_URL } from "../config/api";
import { motion } from "framer-motion";

function Admin() {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("token");
    return token ? jwtDecode(token) : null;
  });

  const handleLogin = async (credentialResponse) => {
    const res = await fetch(`${API_URL}/api/auth/google`, {
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
        <motion.div
          className="absolute w-72 h-72 bg-red-500/10 rounded-full blur-3xl pointer-events-none z-0"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        />
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-3xl font-semibold"
        >
          Not Authorized 🚫
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.9 }}
          className="mt-2 text-gray-400"
        >
          You don’t have access to this page.
        </motion.p>

        <button
          onClick={logout}
          className="mt-6 bg-red-500 px-6 py-2 rounded-lg hover:scale-105 transition-transform duration-300"
        >
          Logout
        </button>
      </div>
    );
  }

  // Admin view
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <div className="flex justify-end p-6 pt-20">
        <button onClick={logout} className="bg-red-500 px-4 py-2 rounded">
          Logout
        </button>
      </div>

      <AdminForm />
    </div>
  );
}

export default Admin;
