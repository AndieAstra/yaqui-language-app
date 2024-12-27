// app/api/courses/route.tsx
import { NextResponse } from 'next/server';
import { query } from '@/lib/db'; // Ensure this path is correct

export async function GET() {
  try {
    // Fetch data from the database
    const { rows: courses } = await query('SELECT * FROM courses', []); // Replace with your query
    return NextResponse.json(courses); // Respond with JSON
  } catch (error) {
    console.error('Database query failed:', error);
    return NextResponse.json({ error: 'Failed to fetch courses' }, { status: 500 });
  }
}
