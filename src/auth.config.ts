import type { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from 'next-auth/adapters';
import { PrismaClient } from "@prisma/client"
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import NextAuth from "next-auth";
import bcryptjs from 'bcryptjs';

const prisma = new PrismaClient()

export const authConfig: NextAuthConfig = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? " ",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? " ",
      allowDangerousEmailAccountLinking: true
    }),

    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (!parsedCredentials.success) return null;

        const { email, password } = parsedCredentials.data;

        console.log(email, password)

        const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });

        if (!user?.password) return null;

        console.log(user)

        if(!user) return null

        if(!bcryptjs.compareSync( password, user.password )) return null

        const { password: _, ...rest } = user;

        return rest

      },
    }),
  ],
  session: {
    strategy: "jwt",
  },

  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.data = user;
      }

      return token;

    },
    session({ session, token, user }) {
      session.user = token.data as any;
      return session;
    },

  },
} satisfies NextAuthConfig;

export const { signIn, signOut, auth, handlers } = NextAuth(authConfig);
