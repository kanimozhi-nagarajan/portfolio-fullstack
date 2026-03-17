import AdminForm from "../components/AdminForm";

function Admin() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/admin-login";
  };

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <div className="flex justify-end p-6">
        <button
          onClick={logout}
          className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <AdminForm />
    </div>
  );
}

export default Admin;
