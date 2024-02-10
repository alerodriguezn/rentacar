'use client'

import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"


export const SignInButton = () => {
  return (
    <Button
        variant={"default"}
        className="bg-green-600 hover:bg-green-800"
        onClick={() => signIn()}
    >
        Inicia Sesión con Google

    </Button>
  )
}
