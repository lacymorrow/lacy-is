import type { Config } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  throw new Error("Missing DATABASE_URL");
}

// Supabase
// const nonPoolingUrl = process.env.DATABASE_URL.replace(":6543", ":5432");

const nonPoolingUrl = process.env.DATABASE_URL.replace("-pooler", "")

export default {
  schema: "./src/schema.ts",
  dialect: "postgresql",
  dbCredentials: { url: nonPoolingUrl },

} satisfies Config;
