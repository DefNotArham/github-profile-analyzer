import { useState } from "react";
import getGithubUser from "./api/github";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<any>(null);

  const searchUser = async () => {
    const data = await getGithubUser(username);
    setUser(data);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    searchUser();
  };

  return (
    <div className="min-h-screen w-full bg-[#0d1117] text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-8">GitHub Profile Analyzer</h1>

      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          className="w-80 px-4 py-3 rounded-xl bg-[#161b22] border border-gray-700 outline-none focus:border-blue-500"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="GitHub username"
        />

        <button
          type="submit"
          className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-500 font-semibold cursor-pointer"
        >
          Search
        </button>
      </form>

      {user && (
        <div className="mt-10 w-96 bg-[#161b22] border border-gray-700 rounded-2xl p-8 text-center">
          <img
            src={user.avatar_url}
            className="w-32 h-32 rounded-full mx-auto"
          />

          <h2 className="text-3xl font-bold mt-5">{user.login}</h2>

          <div className="mt-6 space-y-2 text-gray-300">
            <p>
              Repos: <span className="font-bold">{user.public_repos}</span>
            </p>

            <p>
              Followers: <span className="font-bold">{user.followers}</span>
            </p>

            <p>
              Following: <span className="font-bold">{user.following}</span>
            </p>
          </div>

          <a
            href={user.html_url}
            target="_blank"
            className="block mt-6 text-blue-400 hover:underline"
          >
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
