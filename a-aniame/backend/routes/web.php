<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CourseController;

// Root route
Route::get('/', function () {
    return view('welcome');
});

// Course routes
Route::get('/courses', [CourseController::class, 'index'])->name('courses.index'); // Get all courses
Route::get('/courses/{id}', [CourseController::class, 'show'])->name('courses.show'); // Get a specific course by ID
