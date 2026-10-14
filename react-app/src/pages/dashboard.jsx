import LogoutButton from "../components/logoutButton";

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <header className="border-b border-slate-200 bg-slate-200/70 dark:border-slate-800 dark:bg-slate-900/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="!m-0 !text-xl !font-semibold !tracking-tight !text-slate-700 dark:!text-slate-200">
            Dashboard
          </h1>
          <LogoutButton />
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl justify-center px-6 py-16 sm:py-24">
        <div className="w-full max-w-lg rounded-2xl border border-gray-300 bg-gray-200 p-10 text-center shadow-lg shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">
          <h2 className="mb-2 !text-2xl !font-semibold !text-slate-900 dark:!text-slate-100">
            Bienvenue
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Vous êtes bien connecté !
          </p>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
