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
      className="rounded-lg border border-slate-300 bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
    >
      Déconnexion
    </button>
  );
}
