import GoogleProvider from 'next-auth/providers/google'

const emailAllowed = 'toxiclopes@gmail.com'

export const auth = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  secret: process.env.NEXT_PUBLIC_SECRET,
  callbacks: {
    async signIn({ user }: any) {
      const { email } = user

      if (email !== emailAllowed) {
        return false
      } else {
        return true
      }
    },
  },
}