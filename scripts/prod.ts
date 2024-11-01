import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import "dotenv/config"; // Loads environment variables

import * as schema from "@/db/schema";

// Set up your PostgreSQL connection using pg's Pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Ensure DATABASE_URL is correctly set in your .env file
});

const db = drizzle(pool, { schema }); // Initialize Drizzle with the Postgres connection

const main = async () => {
  try {
    // Skip seeding in production
    if (process.env.NODE_ENV === "production") {
      console.log("Skipping database seeding in production");
      return;
    }

    console.log("Seeding database");

    // Delete all existing data
    await Promise.all([
      db.delete(schema.userProgress),
      db.delete(schema.challenges),
      db.delete(schema.units),
      db.delete(schema.lessons),
      db.delete(schema.courses),
      db.delete(schema.challengeOptions),
      db.delete(schema.userSubscription),
    ]);

    const courses = await db
    .insert(schema.courses)
    .values([{ title: "Spanish", imageSrc: "/es.svg" }])
    .returning();
  
    // Example usage of 'courses'
    console.log("Inserted courses:", courses);

    // Seeding logic for units, lessons, challenges, and challenge options...
    
    console.log("Database seeded successfully");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed database");
  }
};

void main();
