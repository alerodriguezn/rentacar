import Link from "next/link";
import { titleFont } from "@/config/fonts";
import { DropdownMenuLayout } from "./dropdown-menu-layout";

export const TopMenu = () => {
  return (
    <header className="w-full h-12">
      <nav className="grid grid-cols-3 items-center my-2">
        <div className="flex justify-start ml-4">
          <h2 className={`${titleFont.className} font-bold antialiased`}>
            <span>Rodriguez |</span>
            <span className="font-medium"> Rentacar</span>
            </h2>
        </div>
        <ul className="flex justify-center gap-2 font-medium">
          <li className="rounded-md hover:bg-slate-200 py-1 px-2 ">
            <Link href="/">Inicio</Link>
          </li>
          <li className="rounded-md hover:bg-slate-200  py-1 px-2">
            <Link href="/rent">Rentar</Link>
          </li>
          <li className="rounded-md hover:bg-slate-200  py-1 px-2">
            <Link href="/contact">Contáctanos</Link>
          </li>
        </ul>
        <div className="flex justify-end mr-4">
          <DropdownMenuLayout />
        </div>
      </nav>
    </header>
  );
};
