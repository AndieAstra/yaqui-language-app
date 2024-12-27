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

// Fetch user progress along with the active course
export const getUserProgressWithCourse = async (userId: string) => {
  const client = await pool.connect();
  
  try {
    const result = await client.query(
      `
      SELECT 
        user_progress.user_id, 
        user_progress.user_name, 
        user_progress.user_image_src, 
        user_progress.hearts, 
        user_progress.points, 
        courses.id AS course_id,
        courses.title AS course_title,
        courses.image_src AS course_image_src
      FROM user_progress
      LEFT JOIN courses ON user_progress.active_course_id = courses.id
      WHERE user_progress.user_id = $1
      `,
      [userId]
    );
    return result.rows[0]; // Returns the first (and ideally only) row for that user
  } catch (err) {
    console.error('Error fetching user progress:', err);
    throw err;
  } finally {
    client.release();
  }
};
