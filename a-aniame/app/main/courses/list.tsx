// components/list.tsx
"use client";

import { Card } from "./card";
import { Course } from "./types"; // Assuming you have a Course type defined

type Props = {
  courses: Course[];
  activeCourseId: number;
};

// components/list.tsx
export const List = ({ courses, activeCourseId }: Props) => {
  if (!Array.isArray(courses)) {
    console.error("Invalid courses data:", courses);
    return <div>Error: Invalid courses data</div>;
  }

  return (
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210,1fr))]">
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.image_src}
          onClick={() => {}}
          active={course.id === activeCourseId}
          disabled={false}
        />
      ))}
    </div>
  );
};
