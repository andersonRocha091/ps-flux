import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import CourseForm from "./CourseForm";
import NotFoundPage from "./NotFoundPage";

import * as CourseActions from "../actions/CourseAction";
import * as AuthorActions from "../actions/AuthorActions";
import CourseStore from "../stores/CourseStore";
import AuthorStore from "../stores/AuthorsStore";

export default (props) => {
  const [errors, setErrors] = useState({});
  const [courses, setCourses] = useState(CourseStore.getCourses());
  const [authors, setAuthors] = useState(AuthorStore.getAuthors());
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
    AuthorStore.addChangeListener(onAuthorChange);
    const slug = props.match.params.slug;

    if (courses.length === 0) {
      CourseActions.loadCourses().then(() => {
        if (authors.length === 0) {
          AuthorActions.loadAuthors();
        }
      });
    } else if (slug) {
      setCourse(CourseStore.getCoursesBySlug(slug));
    }
    return () => {
      CourseStore.removeChangeListener(onChange);
      AuthorStore.removeChangeListener(onAuthorChange);
    };
  }, [courses.length, props.match.params.slug, authors.length]);

  function onChange() {
    setCourses(CourseStore.getCourses());
  }

  function onAuthorChange() {
    setAuthors(AuthorStore.getAuthors());
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
        authors={authors}
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
