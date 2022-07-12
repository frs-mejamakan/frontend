import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import { getOrCreateUser } from '../../../services/auth.services';

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

callbacks.signIn = async function signIn() {
  return true;
};

callbacks.session = async function session(session, token) {
  const requestData = await getOrCreateUser({
    email: session.session.user.email,
    name: session.session.user.name,
    image: session.session.user.image,
  });

  session.user = requestData.data.data;

  return session;
};

const options = {
  providers,
  secret,
  callbacks,
};

export default (req, res) => NextAuth(req, res, options);
