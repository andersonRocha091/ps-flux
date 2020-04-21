import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import CourseList from "./CourseList";
import CourseStore from "../stores/CourseStore";
import { loadCourses, deleteCourse } from "../actions/CourseAction";

function CoursesPage() {
  const [courses, setCourses] = useState(CourseStore.getCourses());

  useEffect(() => {
    CourseStore.addChangeListener(onChange);
    if (CourseStore.getCourses().length === 0) loadCourses();
    return () => CourseStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setCourses(CourseStore.getCourses());
  }

  function handleDelete(courseId) {
    deleteCourse(courseId).then(() => {
      toast.success("Course successfully deleted.");
    });
  }

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList courses={courses} onDelete={handleDelete} />
    </>
  );
}

export default CoursesPage;
