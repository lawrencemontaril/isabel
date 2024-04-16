"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import SimpleBarReact from "simplebar-react";

export default function LeftSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex max-h-full flex-none flex-col gap-2 rounded-md">
      <div className="p-2">
        <Image
          width={512}
          height={512}
          priority
          src="/guinevere.png"
          alt="Guinevere logo"
        />
      </div>
      <div className="flex flex-auto flex-col overflow-hidden rounded-md ">
        <SimpleBarReact autoHide={false} className="max-h-full">
          <div className="flex flex-col gap-4 p-5 py-2">
            <Link href="/">
              <HomeIcon
                className={`hover:scale-110 ${pathname == "/" ? "text-zinc-50 " : "text-zinc-600 hover:text-zinc-100"}`}
              />
            </Link>
            <Link href="/search">
              <MagnifyingGlassIcon
                className={`hover:scale-110 ${pathname == "/search" ? "text-zinc-50" : "text-zinc-600 hover:text-zinc-100"}`}
              />
            </Link>
          </div>
        </SimpleBarReact>
      </div>
    </aside>
  );
}
