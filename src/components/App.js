import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";
import ManageAuthorPage from "./ManageAuthorsPage";
import AuthorPage from "./AuthorsPage";

import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} />
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Route path="/authors" component={AuthorPage} />
        <Route path="/author" component={ManageAuthorPage} />
        <Redirect from="/about-page" to="about" />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
