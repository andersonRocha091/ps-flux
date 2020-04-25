import React from "react";
import PropTypes from "prop-types";

import TextInput from "./common/TextInput";
import SelectInput from "./common/SelectInput";

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        name="title"
        label="Title"
        error={props.errors.title}
        value={props.course.title}
        onChange={props.onChange}
      />

      <SelectInput
        id="author"
        name="authorId"
        label="Author"
        value={props.course.authorId || ""}
        className="form-control"
        options={props.authors}
        error={props.errors.authorId}
        onChange={props.onChange}
      />

      <TextInput
        id="category"
        name="category"
        label="Category"
        value={props.course.category}
        error={props.errors.category}
        onChange={props.onChange}
      />
      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default CourseForm;
