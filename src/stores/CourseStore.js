import { EventEmitter } from "events";

import Dispatcher from "../AppDispatcher";
import ActionTypes from "../actions/ActionTypes";
const CHANGE_EVENT = "change";

let _courses = [];

class CourseStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getCourses() {
    return _courses;
  }

  getCoursesBySlug(slug) {
    return _courses.find((course) => course.slug === slug);
  }
}

const store = new CourseStore();

Dispatcher.register((action) => {
  switch (action.actionType) {
    case ActionTypes.CREATE_COURSE:
      _courses.push(action.course);
      store.emitChange();
      break;
    case ActionTypes.LOAD_COURSES:
      _courses = action.courses;
      store.emitChange();
      break;
    default:
  }
});
export default store;
