import React from "react";
import { Link } from "react-router-dom";

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
            <td>{author.id}</td>
            <td>
              <Link to={"/author/" + author.id}>{author.name}</Link>
            </td>
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
