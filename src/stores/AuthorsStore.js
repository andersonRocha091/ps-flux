import { EventEmitter } from "events";

import Dispatcher from "../AppDispatcher";
import ActionTypes from "../actions/ActionTypes";
const CHANGE_EVENT = "change";

let _authors = [];

class AuthorStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getAuthors() {
    return _authors;
  }

  getAuthorsById(id) {
    return _authors.find((author) => author.id === parseInt(id, 10));
  }
}

const store = new AuthorStore();

Dispatcher.register((action) => {
  switch (action.actionType) {
    case ActionTypes.LOAD_AUTHORS:
      _authors = action.authors;
      store.emitChange();
      break;
    case ActionTypes.DELETE_AUTHOR:
      _authors = _authors.filter((author) => {
        return author.id !== action.id;
      });
      store.emitChange();
      break;
    case ActionTypes.SAVE_AUTHORS:
      _authors.push(action.author);
      break;
    default:
  }
});

export default store;
