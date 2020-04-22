import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import * as AuthorActions from "../actions/AuthorActions";
import AuthorStore from "../stores/AuthorsStore";
import AuthorForm from "./AuthorForm";

export default (props) => {
  const [errors, setErrors] = useState({});
  const [authors, setAuthors] = useState(AuthorStore.getAuthors());
  const [author, setAuthor] = useState({
    id: null,
    name: "",
  });

  useEffect(() => {
    AuthorStore.addChangeListener(onChange);
    const id = props.match.params.id;
  }, [props.match.params.id, authors.length]);

  function onChange() {
    setAuthors(AuthorStore.getAuthors());
  }

  function handleChange(event) {
    const updatedAuthor = {
      ...author,
      [event.target.name]: event.target.value,
    };
    setAuthor(updatedAuthor);
  }

  function formIsValid() {
    const _errors = {};
    if (!author.name) _errors.title = "Author's name is required";
    setErrors(_errors);

    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    debugger;
    event.preventDefault();
    if (!formIsValid()) return;
    AuthorActions.saveAuthor(author).then(() => {
      props.history.push("/authors");
      toast.success("Author successfully saved.");
    });
  }

  return (
    <>
      <h1>Manage Authors</h1>
      <AuthorForm
        onSubmit={handleSubmit}
        author={author}
        errors={errors}
        onChange={handleChange}
      />
    </>
  );
};
