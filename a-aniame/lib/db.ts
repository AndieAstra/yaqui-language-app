import { Pool, QueryResult, QueryResultRow } from 'pg';

// Configure the PostgreSQL connection
const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: parseInt(process.env.PG_PORT || '5432', 10), // Default PostgreSQL port
});

// Improved type-safe query function
export const query = async <T extends QueryResultRow>(
  text: string,
  params: unknown[] = [] // Use mutable unknown[] instead of readonly unknown[]
): Promise<QueryResult<T>> => {
  const client = await pool.connect();
  try {
    const result = await client.query<T>(text, params);
    return result;
  } finally {
    client.release();
  }
};
