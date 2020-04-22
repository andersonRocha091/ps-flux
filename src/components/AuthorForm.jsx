import React from "react";

import TextInput from "./common/TextInput";

export default (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="name"
        name="name"
        label="Name"
        error={props.errors.title}
        value={props.author.name}
        onChange={props.onChange}
      />
      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
};
