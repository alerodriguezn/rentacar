import { NextRequest } from "next/server"
import { NextResponse } from 'next/server'
import { auth } from "./auth.config"

export default auth((req) => {
  // req.auth

  const userRole = req.auth?.user.role

  if(userRole === 'admin') {
    return NextResponse.next()
  }

  return NextResponse.redirect(new URL('/', req.url))

  
})

export const config = { matcher: ["/admin"] }