import { Auth } from "@auth/core";
import Discord from "@auth/core/providers/discord";
import GitHub from "@auth/core/providers/github";
import { eventHandler, toWebRequest } from "h3";

export default eventHandler(async (event) =>
  Auth(toWebRequest(event), {
    basePath: "/r",
    secret: process.env.NEXTAUTH_SECRET,
    trustHost: !!process.env.VERCEL,
    redirectProxyUrl: process.env.AUTH_REDIRECT_PROXY_URL,
    providers: [
      ...(process.env?.AUTH_DISCORD_CLIENT_ID && process.env?.AUTH_DISCORD_SECRET ? [
        Discord({
          clientId: process.env.AUTH_DISCORD_CLIENT_ID,
          clientSecret: process.env.AUTH_DISCORD_SECRET,
        }),
      ] : []),
      ...(process.env?.AUTH_GITHUB_CLIENT_ID && process.env?.AUTH_GITHUB_CLIENT_SECRET ? [
        GitHub({
          clientId: process.env.AUTH_GITHUB_CLIENT_ID,
          clientSecret: process.env.AUTH_GITHUB_CLIENT_SECRET
        }),
      ] : []),
    ],
  }),
);
