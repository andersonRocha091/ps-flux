import React from "react";

export default (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map((course) => (
          <tr key={course.id}>
            <td>{course.title}</td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
