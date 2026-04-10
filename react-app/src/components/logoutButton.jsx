import api from "../services/api";

export default function LogoutButton() {
  const handleLogout = async () => {
    try {
      await api.post("/api/logout");
      console.log("LOGOUT OK");
      window.location.href = "/login";
    } catch (err) {
      console.error("Logout error", err);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-700">
      Déconnexion
    </button>
  );
}