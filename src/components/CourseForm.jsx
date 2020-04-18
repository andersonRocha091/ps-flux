import React from "react";
import TextInput from "./common/TextInput";
import SelectInput from "./common/SelectInput";

export default (props) => {
  const authorOptions = [
    { value: 1, label: "Cory House" },
    { value: 2, label: "Scott Allen" },
  ];
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        name="title"
        label="Title"
        value={props.course.title}
        onChange={props.onChange}
      />

      <SelectInput
        id="author"
        name="authorId"
        label="Author"
        value={props.course.authorId || ""}
        className="form-control"
        options={authorOptions}
        onChange={props.onChange}
      />

      <TextInput
        id="category"
        name="category"
        label="Category"
        value={props.course.category}
        onChange={props.onChange}
      />
      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
};
