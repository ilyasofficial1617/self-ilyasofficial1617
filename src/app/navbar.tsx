"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { title: "WebDev", path: "/webdev" },
  { title: "AI / ML", path: "/aiml" },
  { title: "DevOps", path: "/devops" },
  { title: "Project", path: "/project" },
  { title: "Personal", path: "/personal" },
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <div className="fixed flex h-12 w-screen items-center justify-between bg-teal-400 px-2 text-teal-50">
      <div className="px-2 text-2xl font-bold">ilyasofficial1617</div>
      <ul className="flex hidden flex-row font-medium md:inline-flex">
        {menu.map(function (item, index) {
          const isActive = pathname.startsWith(item.path);
          const addClass = isActive ? " text-amber-200" : "";
          return (
            <li key={index}>
              <Link href={item.path} className={"m-2 p-2" + addClass}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
