export default function Home() {
  const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=826100f6f4324de2996854d7db907dad&response_type=code&redirect_uri=http://localhost:3000'
  return <div className="p-3.5">
    <button className="rounded-full border-4 border-indigo-500/100 w-56">
      <a href={AUTH_URL}>Login</a>
    </button>
  </div>;
}
