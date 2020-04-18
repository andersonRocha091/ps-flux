import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Redirect from="/about-page" to="about" />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
