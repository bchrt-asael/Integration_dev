import { useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await api.get("/sanctum/csrf-cookie");

      const res = await api.post("/api/login", {
        email,
        password,
      });

      console.log("LOGIN OK:", res.data);
      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Identifiants incorrects");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-xs">
        <div className="mb-8 text-4xl font-bold text-center text-black dark:text-[var(--text-h)]">
          Connexion
        </div>

        <form
          onSubmit={handleLogin}
          className="mb-4 rounded-lg bg-slate-50 px-8 pt-6 pb-8 shadow-md dark:bg-[var(--accent-bg)]"
        >
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-slate-300">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:ring-indigo-400"
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-slate-300">
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="************"
              className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:ring-indigo-400"
            />

            {error && (
              <p className="mt-2 text-xs italic text-red-500">{error}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="mr-3 rounded-lg bg-indigo-600 px-4 py-2 font-bold text-white transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus:ring-indigo-400 dark:focus:ring-offset-slate-900"
            >
              Se connecter
            </button>

            <a
              href="#"
              className="text-sm text-center font-semibold text-blue-600 hover:text-blue-800"
            >
              Mot de passe oublié ?
            </a>
          </div>
        </form>

        <Link
          to="/register"
          className="block rounded-lg bg-indigo-600 px-4 py-2 text-center font-bold text-white transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus:ring-indigo-400 dark:focus:ring-offset-slate-950"
        >
          Créer un compte
        </Link>
      </div>
    </div>
  );
}

export default Login;
