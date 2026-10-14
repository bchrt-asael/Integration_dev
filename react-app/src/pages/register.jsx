import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrors({});
    setGeneralError("");

    try {
      await api.get("/sanctum/csrf-cookie");

      const res = await api.post("/api/register", {
        firstname,
        lastname,
        email,
        password,
      });

      console.log("REGISTER OK:", res.data);

      navigate("/");
    } catch (err) {
      console.error(err);

      if (err.response?.data?.errors) {
        setErrors(err.response.data.errors);
      } else {
        setGeneralError("Erreur lors de l'inscription");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-xs">
        <div className="mb-8 text-4xl font-bold text-center text-black dark:text-[var(--text-h)]">
          Inscription
        </div>

        <form
          onSubmit={handleRegister}
          className="mb-4 rounded-lg bg-slate-50 px-8 pt-6 pb-8 shadow-md dark:bg-[var(--accent-bg)]"
        >
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-slate-300">
              Prénom
            </label>

            <input
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:ring-indigo-400"
              type="text"
            />

            {errors.firstname && (
              <p className="text-xs text-red-500">{errors.firstname[0]}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-slate-300">
              Nom
            </label>

            <input
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:ring-indigo-400"
              type="text"
            />

            {errors.lastname && (
              <p className="text-xs text-red-500">{errors.lastname[0]}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-slate-300">
              Email
            </label>

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:ring-indigo-400"
              type="email"
            />

            {errors.email && (
              <p className="text-xs text-red-500">{errors.email[0]}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-slate-300">
              Mot de passe
            </label>

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:ring-indigo-400"
              type="password"
            />

            {errors.password && (
              <p className="text-xs text-red-500">{errors.password[0]}</p>
            )}
          </div>

          {generalError && (
            <p className="mb-4 text-sm text-red-500 text-center">
              {generalError}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 px-4 py-2 font-bold text-white transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus:ring-indigo-400 dark:focus:ring-offset-slate-900"
          >
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
