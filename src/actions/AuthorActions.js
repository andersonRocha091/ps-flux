import dispatcher from "../AppDispatcher";
import * as authorApi from "../api/authorApi";
import actionTypes from "./ActionTypes";

export function loadAuthors() {
  return authorApi.getAuthors().then((authors) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_AUTHORS,
      authors: authors,
    });
  });
}
