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
    <div className="flex items-center justify-center min-h-screen bg-gray-300">
      <div className="w-full max-w-xs">

        <div className="mb-8 text-4xl font-bold text-center text-black">
          Connexion
        </div>

        <form
          onSubmit={handleLogin}
          className="mb-4 rounded-lg bg-white px-8 pt-6 pb-8 shadow-md">

          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full rounded border px-3 py-2 text-white shadow focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>

          <div className="mb-6">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="************"
              className="w-full rounded border px-3 py-2 text-white shadow focus:outline-none focus:ring-2 focus:ring-blue-500" />

            {error && (
              <p className="mt-2 text-xs italic text-red-500">
                {error}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 mr-3">
              Se connecter
            </button>

            <a
              href="#"
              className="text-sm text-center font-semibold text-blue-500 hover:text-blue-800">
              Mot de passe oublié ?
            </a>
          </div>
        </form>

        <Link
          to="/register"
          className="block text-center rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-green-400">
          Créer un compte
        </Link>

      </div>
    </div>
  );
}

export default Login;