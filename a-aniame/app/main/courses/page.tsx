// page.tsx
"use client";

import { useEffect, useState } from "react";
import { List } from "./list";
import { Course } from "./types";  // Assuming Course type is defined as before

const CoursesPage = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [activeCourseId, setActiveCourseId] = useState<number>(1); // Example active course id

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/api/courses"); // Calls the /api/courses route we created
      const data = await res.json();
      setCourses(data);
    };

    fetchCourses();
  }, []);

  const handleCardClick = (id: number) => {
    setActiveCourseId(id); // Set the active course on card click
  };

  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-700">Language Courses</h1>
      <List
        courses={courses}
        activeCourseId={activeCourseId}
        onCardClick={handleCardClick} // Pass the click handler
      />
    </div>
  );
};

export default CoursesPage;
