import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import AuthorStore from "../stores/AuthorsStore";
import { loadAuthors, deleteAuthor } from "../actions/AuthorActions";

import AuthorList from "./AuthorsList";

function AuthorsPage() {
  const [_authors, setAuthors] = useState(AuthorStore.getAuthors());

  useEffect(() => {
    AuthorStore.addChangeListener(onChange);
    if (AuthorStore.getAuthors().length === 0) loadAuthors();
    return () => AuthorStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    debugger;
    setAuthors(AuthorStore.getAuthors());
  }

  function handleDelete(id) {
    deleteAuthor(id).then(() => {
      toast.success("Author successfully deleted.");
    });
  }

  return (
    <>
      <h2>Authors</h2>
      <Link className="btn btn-primary" to="/author">
        Add Author
      </Link>
      <AuthorList authors={_authors} onDelete={handleDelete} />
    </>
  );
}

export default AuthorsPage;
