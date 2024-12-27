// TODO: I need to find a way to import the data from the database for the courses 
// import { List } from "./list";
// import { getCourses } from "@/db/queries";

const CoursesPage = () => {

{/* const data = await getCourses(); */}

   return (
      <div className="h-full max-w-[912px] px-3 mx-auto">
         <h1 className="text-2xl font-bold text-neutral-700">
            Language Courses
         </h1>
         <p>List</p>
         {/* <List
         courses={courses}
         activeCourseId={1}
         /> */}
      </div>
   );
};

export default CoursesPage;