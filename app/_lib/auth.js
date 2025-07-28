import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { getGuest } from "./data-services";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      const guest = await getGuest(session.user.email);
      session.user.guestId = guest.id;
      return session;
    },
    authorized({ auth, request }) {
      return !!auth?.user;
    },
  },
  async session({ session, user }) {
    const guest = await getGuest(session.user.email);
    session.user.guestId = guest[0]?.id || null; // Ensure guestId is set or null
    return session;
  },

  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
