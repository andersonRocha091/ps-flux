import React from "react";

export default (props) => {
  return (
    <>
      <h2>Manage Course</h2>
      {props.match.params.slug}
    </>
  );
};
