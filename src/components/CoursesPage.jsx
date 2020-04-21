import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import CourseList from "./CourseList";
import CourseStore from "../stores/CourseStore";
import AuthorStore from "../stores/AuthorsStore";

import { loadCourses, deleteCourse } from "../actions/CourseAction";
import { loadAuthors } from "../actions/AuthorActions";

function CoursesPage() {
  const [courses, setCourses] = useState(CourseStore.getCourses());
  const [authors, setAuthors] = useState(AuthorStore.getAuthors());

  useEffect(() => {
    CourseStore.addChangeListener(onChange);
    AuthorStore.addChangeListener(onAuthorChange);
    if (CourseStore.getCourses().length === 0) loadCourses();
    if (AuthorStore.getAuthors().length === 0) loadAuthors();

    return () => {
      CourseStore.removeChangeListener(onChange);
      AuthorStore.removeChangeListener(onAuthorChange);
    };
  }, []);

  function onChange() {
    setCourses(CourseStore.getCourses());
  }

  function onAuthorChange() {
    setAuthors(AuthorStore.getAuthors());
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
      <CourseList courses={courses} authors={authors} onDelete={handleDelete} />
    </>
  );
}

export default CoursesPage;
