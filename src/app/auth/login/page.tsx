import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SignInButton } from './ui/sign-in-button';

export default function LoginPage() {
  return (
    <div className=" flex flex-col min-h-screen pt-32 sm:pt-40 ">
      <h2 className="text-3xl font-bold text-center mb-4 ">Login</h2>
      <form className="flex flex-col">
        <label htmlFor="email" className="font-semibold mb-2">
          Email
        </label>
        <input type="text" className="bg-slate-200 rounded" />

        <label htmlFor="password" className="font-semibold mb-2">
          Password
        </label>
        <input type="password" className="bg-slate-200 rounded" />

        <Button className="my-2">Iniciar Sesión</Button>

        <div className="flex items-center my-5">
          <div className="flex-1 border-t border-gray-500"></div>
          <div className="px-2 text-gray-800">O</div>
          <div className="flex-1 border-t border-gray-500"></div>
        </div>

        <SignInButton/>
      </form>
    </div>
  );
}
