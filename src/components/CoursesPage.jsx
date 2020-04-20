import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import CourseList from "./CourseList";
import CourseStore from "../stores/CourseStore";

function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(CourseStore.getCourses());
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList courses={courses} />
    </>
  );
}

export default CoursesPage;
