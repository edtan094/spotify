import { AUTH_URL } from "@/lib/spotify";

export default function Home() {
  return <div className="p-3.5">
    <button className="rounded-full border-4 border-indigo-500/100 w-56">
      <a href={AUTH_URL}>Login</a>
    </button>
  </div>;
}
