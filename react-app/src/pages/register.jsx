import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
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
        name,
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
    <div className="flex items-center justify-center min-h-screen bg-gray-300">
      <div className="w-full max-w-xs">

        <div className="mb-8 text-4xl font-bold text-center text-black">
          Inscription
        </div>

        <form
          onSubmit={handleRegister}
          className="mb-4 rounded-lg bg-white px-8 pt-6 pb-8 shadow-md">

          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Nom
            </label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded border px-3 py-2 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text" />

            {errors.name && (
              <p className="text-xs text-red-500">{errors.name[0]}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Email
            </label>

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded border px-3 py-2 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email" />

            {errors.email && (
              <p className="text-xs text-red-500">{errors.email[0]}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Mot de passe
            </label>

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded border px-3 py-2 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password" />

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
            className="w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
            S'inscrire
          </button>

        </form>
      </div>
    </div>
  );
}

export default Register;