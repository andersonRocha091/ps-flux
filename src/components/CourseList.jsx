import React from "react";
import { Link } from "react-router-dom";

export default (props) => {
  function getAuthorName(authorId) {
    if (props.authors.length > 0) {
      let author = props.authors.filter((_author) => {
        return _author.id === parseInt(authorId, 10);
      });
      return author ? author[0].name : "Anonymous";
    }
  }
  return (
    <table style={{ marginTop: 10 }} className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map((course) => (
          <tr key={course.id}>
            <td>
              <Link to={"/course/" + course.slug}>{course.title}</Link>
            </td>
            <td>{getAuthorName(course.authorId)}</td>
            <td>{course.category}</td>
            <td>
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => {
                  props.onDelete(course.id);
                }}
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
