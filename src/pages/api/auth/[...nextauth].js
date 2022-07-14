import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import { getCurrentUser, signUser } from '../../../services/auth.services';

const providers = [
  GoogleProvider({
    clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
  }),
  FacebookProvider({
    clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET,
  }),
];

const secret = process.env.NEXT_PUBLIC_JWT_SECRET;

const callbacks = {};

callbacks.signIn = async function signIn({ user }) {
  const { data } = await signUser({
    email: user.email,
    name: user.name,
    image: user.image,
  });

  if (!data.success) {
    return false;
  }

  user.token = data.token;

  return true;
};

callbacks.jwt = async function jwt({ token, user }) {
  if (user?.token) {
    token.accessToken = user.token;
  }

  return token;
};

callbacks.session = async function session({ session, token }) {
  session.accessToken = token.accessToken;
  const { data } = await getCurrentUser(session.accessToken);

  session.user = { ...session.user, ...data.data };
  return session;
};

const options = {
  providers,
  secret,
  callbacks,
};

export default (req, res) => NextAuth(req, res, options);
