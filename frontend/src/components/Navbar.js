import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0  flex items-center justify-between bg-stone-800 p-2 md:px-32">
      <div className="text-lg font-bold text-white">
        <Link href="/">
          <span className="underline decoration-2 underline-offset-[3px]">
            Guin
          </span>
          <span className="">evere</span>
        </Link>
      </div>

      <Link
        href="/login"
        className="rounded-full border-[1px] border-stone-100 bg-stone-900 px-3 py-1 text-sm font-semibold text-stone-100 hover:bg-stone-100 hover:text-black"
      >
        Sign in
      </Link>
    </nav>
  );
}
