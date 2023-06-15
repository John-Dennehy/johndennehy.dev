import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();

export default {
  schema: "./src/db/schema",
  out: "./src/db/migrations",
  password: process.env.PGPASSWORD ?? "",
  user: process.env.PGUSER ?? "",
  host: process.env.PGHOST ?? "",
  port: process.env.PGPORT ?? 7075,
  database: process.env.PGDATABASE ?? "railway",
} satisfies Config;
