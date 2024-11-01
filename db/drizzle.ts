import { drizzle } from "drizzle-orm/node-postgres"; // Use node-postgres adapter instead
import { Pool } from "pg";

import * as schema from "./schema";

// Create a connection pool for PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Update this with your PostgreSQL connection string
});

// Initialize drizzle with the PostgreSQL pool and schema
const db = drizzle(pool, { schema });

export default db;
