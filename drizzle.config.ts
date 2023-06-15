import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();

export default {
  schema: "./src/db/schema",
  out: "./src/db/migrations",
  password: process.env.PGPASSWORD ?? "",
  user: process.env.PGUSER ?? "",
  host: process.env.PGHOST ?? "",
  database: process.env.PGDATABASE ?? "railway",
} satisfies Config;
