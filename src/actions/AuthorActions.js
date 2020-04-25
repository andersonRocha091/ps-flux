import dispatcher from "../AppDispatcher";
import * as authorApi from "../api/authorApi";
import ActionTypes from "./ActionTypes";

export function loadAuthors() {
  return authorApi.getAuthors().then((authors) => {
    dispatcher.dispatch({
      actionType: ActionTypes.LOAD_AUTHORS,
      authors: authors,
    });
  });
}

export function saveAuthor(author) {
  debugger;
  return authorApi.saveAuthor(author).then((savedAuthor) => {
    dispatcher.dispatch({
      actionType: author.id
        ? ActionTypes.UPDATE_AUTHOR
        : ActionTypes.SAVE_AUTHORS,
      author: savedAuthor,
    });
  });
}

export function deleteAuthor(id) {
  return authorApi.deleteAuthor(id).then(() => {
    dispatcher.dispatch({
      actionType: ActionTypes.DELETE_AUTHOR,
      id: id,
    });
  });
}
