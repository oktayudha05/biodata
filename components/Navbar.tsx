import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar fixed backdrop-blur-sm overflow-hidden shadow-lg bg-black/35">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          Teknologi Informasi
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/login">login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}