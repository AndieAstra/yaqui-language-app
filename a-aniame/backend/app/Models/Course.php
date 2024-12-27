<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    // Specify the table name if it's not the default "courses"
    protected $table = 'courses';

    // Define fillable fields for mass assignment
    protected $fillable = ['name', 'description', 'duration'];
}
