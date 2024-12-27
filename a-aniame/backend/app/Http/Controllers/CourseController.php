<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course; // Assuming you have a Course model

class CourseController extends Controller
{
    // Fetch all courses
    public function index()
    {
        $courses = Course::all(); // Fetch all courses
        return response()->json($courses); // Return courses as JSON
    }

    // Fetch a specific course by ID
    public function show($id)
    {
        $course = Course::find($id); // Fetch the course by ID

        if (!$course) {
            return response()->json(['error' => 'Course not found'], 404); // Handle course not found
        }

        return response()->json($course); // Return the course as JSON
    }
}
