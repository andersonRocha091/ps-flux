import React, { Component } from "react";
import { getCourses } from "../api/courseApi";

class CoursesPage extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       courses: [],
  //     };
  //   }
  state = {
    courses: [],
  };

  componentDidMount() {
    getCourses().then((courses) => {
      this.setState({ courses: courses });
    });
  }

  render() {
    return <h2>Courses</h2>;
  }
}

export default CoursesPage;
