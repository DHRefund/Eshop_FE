import NextAuth from "next-auth";
import { authConfig } from "@/config/auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;

          try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
              return null;
            }

            const data = await response.json();
            return data.user;
          } catch (error) {
            console.error("Authentication error:", error);
            return null;
          }
        }

        return null;
      },
    }),
  ],
});
