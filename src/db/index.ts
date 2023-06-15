import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

// import your schemas here
import * as cvSchema from "@/db/schema/cv";

const connectionConfig = {
  url: process.env["DATABASE_URL"] || "",
  host: process.env["DATABASE_HOST"],
  username: process.env["DATABASE_USERNAME"],
  password: process.env["DATABASE_PASSWORD"],
};

const schema = {
  // add your schemas here
  ...cvSchema,
};

// create the connection client
const client = postgres(connectionConfig.url, {});
const migrationClient = postgres({ max: 1 });

// create the drizzle instance of the database
const db: PostgresJsDatabase = drizzle(client);

// migrations
migrate(drizzle(migrationClient), {
  migrationsFolder: "./src/db/migrations",
});

export default db;
