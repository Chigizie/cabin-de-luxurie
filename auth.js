import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./app/_lib/data-services";

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
      session.user.guestId = guest?.id || null;
      // console.log(guest);
      return session;
    },

    async signIn({ user, account, profile }) {
      try {
        const existingGuest = await getGuest(user.email);
        if (!existingGuest) {
          await createGuest({
            email: user.email,
            fullName: user.name,
          });
        }

        return true;
      } catch {
        return false;
      }
    },

    authorized({ auth }) {
      console.log(auth);
      return !!auth?.user;
    },
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

//  async signIn({ user, account, profile }) {
//       try {
//         const existingGuest = await getGuest(user.email);

//         if (!existingGuest)
//           await createGuest({ email: user.email, fullName: user.name });

//         return true;
//       } catch {
//         return false;
//       }
//     },

// import NextAuth from "next-auth";
// import Google from "next-auth/providers/google";
// import { getGuest, createGuest } from "./data-services";

// const authConfig = {
//   providers: [
//     Google({
//       clientId: process.env.AUTH_GOOGLE_ID,
//       clientSecret: process.env.AUTH_GOOGLE_SECRET,
//     }),
//   ],
//   callbacks: {
//     async session({ session }) {
//       try {
//         const guest = await getGuest(session.user.email);
//         session.user.guestId = guest?.id || null;
//       } catch {
//         session.user.guestId = null;
//       }
//       return session;
//     },
//     async signIn({ user }) {
//       try {
//         const existingGuest = await getGuest(user.email);
//         if (!existingGuest) {
//           await createGuest({
//             email: user.email,
//             fullName: user.name,
//           });
//         }
//         return true;
//       } catch (error) {
//         console.error("SignIn error:", error);
//         return false;
//       }
//     },
//     authorized({ auth }) {
//       return !!auth?.user;
//     },
//   },
//   pages: {
//     signIn: "/login",
//   },
// };

// export const {
//   auth,
//   signIn,
//   signOut,
//   handlers: { GET, POST },
// } = NextAuth(authConfig);
