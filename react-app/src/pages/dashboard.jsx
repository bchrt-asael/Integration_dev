import LogoutButton from "../components/LogoutButton";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-200">
      <div className="flex items-center justify-between bg-white p-4 shadow-md">
        <h1 className="text-xl text-black font-bold">Dashboard</h1>
        <LogoutButton />
      </div>

      <div className="flex items-center justify-center mt-20">
        <div className="rounded-lg bg-white p-10 shadow-md text-center">
          <h2 className="text-2xl text-black font-bold mb-2">
            Bienvenue 
          </h2>
          <p className="text-gray-600">
            Vous êtes bien connecté !
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;