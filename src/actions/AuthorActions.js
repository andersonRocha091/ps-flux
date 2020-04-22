import dispatcher from "../AppDispatcher";
import * as authorApi from "../api/authorApi";
import actionTypes from "./ActionTypes";
import ActionTypes from "./ActionTypes";

export function loadAuthors() {
  return authorApi.getAuthors().then((authors) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_AUTHORS,
      authors: authors,
    });
  });
}

export function saveAuthor(author) {
  return authorApi.saveAuthor(author).then((savedAuthor) => {
    dispatcher.dispatch({
      actionType: ActionTypes.SAVE_AUTHORS,
      author: savedAuthor,
    });
  });
}
