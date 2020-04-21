import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import CourseForm from "./CourseForm";
import NotFoundPage from "./NotFoundPage";

import * as CourseActions from "../actions/CourseAction";
import CourseStore from "../stores/CourseStore";

export default (props) => {
  const [errors, setErrors] = useState({});
  const [courses, setCourses] = useState(CourseStore.getCourses());
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  //Este metodo sera sempre executando e especificando o slug
  // no array, apenas quando ele foSr alterado executaremos
  useEffect(() => {
    CourseStore.addChangeListener(onChange);
    const slug = props.match.params.slug;

    if (courses.length === 0) {
      CourseActions.loadCourses();
    } else if (slug) {
      setCourse(CourseStore.getCoursesBySlug(slug));
    }
    return () => CourseStore.removeChangeListener(onChange);
  }, [courses.length, props.match.params.slug]);

  function onChange() {
    setCourses(CourseStore.getCourses());
  }

  function handleChange(event) {
    const updatedCourse = {
      ...course,
      [event.target.name]: event.target.value,
    };
    setCourse(updatedCourse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    CourseActions.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course successfully saved.");
    });
  }

  function formIsValid() {
    const _errors = {};
    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "Author ID is required";
    if (!course.category) _errors.category = "Category is required";

    setErrors(_errors);

    return Object.keys(_errors).length === 0;
  }

  return course ? (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        errors={errors}
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  ) : (
    <>
      <NotFoundPage />
    </>
  );
};
