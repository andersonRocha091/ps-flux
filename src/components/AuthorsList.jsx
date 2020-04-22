import React from "react";

// import { Container } from './styles';

export default (props) => {
  return (
    <table style={{ marginTop: 10 }} className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.authors.map((author) => (
          <tr key={author.id}>
            <td>
              {
                /* <Link to={"/course/" + course.slug}>{course.title}</Link> */
                author.id
              }
            </td>
            <td>{author.name}</td>
            <td>
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => {
                  props.onDelete(author.id);
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
