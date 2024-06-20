import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        pass: {},
      },
      async authorize(credentials) {
        const { email, pass } = credentials;
        if (!email || !pass) {
          return null;
        }
        const db = await connectDB();
        const currentUser = await db.collection("users").findOne({ email });
        if (!currentUser) {
          return null;
        }
        const passMatched = bcrypt.compareSync(pass, currentUser.pass);
        if (!passMatched) {
          return null;
        }
        return currentUser;
      },
    }),
  ],
  callbacks: {},
  pages: {
    signIn: "/login",
  },
});
export { handler as GET, handler as POST };
