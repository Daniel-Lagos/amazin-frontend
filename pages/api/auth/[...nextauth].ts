import NextAuth, { SessionStrategy } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email', type: 'Email', placeholder: 'correo@uptc.edu.co'
        },
        password: { label: 'Password', type: 'password' },
        token: { label: 'token', type: 'Text' }
      },
      authorize: async (credentials) => {

        if (!credentials) return null;

        const resp = await fetch(`${process.env.BACKEND_URL}auth/sign-in`, {
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials),
          method: 'POST'
        });
        const data = await resp.json();

        if (!data.success) return null;

        //TODO: delete this endpoint and validate token in sign-in endpoint
        /*
             const tokenResponse = await fetch(
                  `${process.env.BACKEND_URL}auth/validate-jwt`, {
                    headers: {
                      'Content-Type': 'application/json',
                      'x-token': data.token,
                    },
                  });
                const dataToken = await tokenResponse.json();

                if (!dataToken.success) return null;
       */

        //TODO: get userData
        return {
          email: credentials.email,
          user: data.user,
          token: data.token
        };
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      // first time jwt callback is run, user object is avaible
      if (user) {
        token.id === user.id;
      }
      return token;
    },
    session: ({ token, session }) => {
      if (token) {
        session.id = token.id;
      }
      return session;
    },
  },
  secret: 'test',
  session: {
    strategy: 'jwt' as SessionStrategy,
    maxAge: 300
  },
  jwt: {
    secret: 'test',
    // encryption: true
    maxAge: 300,
  },
  pages: {
    signIn: '/log-in',
  }
});
