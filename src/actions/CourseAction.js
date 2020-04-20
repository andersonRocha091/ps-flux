import dispatcher from "../AppDispatcher";
import * as courseApi from "../api/courseApi";
import actionTypes from "./ActionTypes";

//Action creator
export function saveCourse(course) {
  return courseApi.saveCourse(course).then((savedCourse) => {
    dispatcher.dispatch({
      //action
      actionType: actionTypes.CREATE_COURSE,
      course: saveCourse,
    });
  });
}
