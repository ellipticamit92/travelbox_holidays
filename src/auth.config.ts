import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

// This config is edge-compatible (no Prisma, no Node.js-only modules).
// Used by middleware for JWT verification only.
export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as { role?: string }).role ?? "user";
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id as string;
      session.user.role = token.role as string;
      return session;
    },
    authorized({ auth }) {
      return !!auth;
    },
  },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      // authorize is intentionally empty here — the full check runs in auth.ts
      authorize: () => null,
    }),
  ],
};
