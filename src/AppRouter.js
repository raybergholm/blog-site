import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import AboutContainer from "./pages/AboutContainer";

import BlogFeedContainer from "./pages/BlogFeedContainer";
import ArchiveContainer from "./pages/ArchiveContainer";
import BlogPostContainer from "./pages/BlogPostContainer";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={BlogFeedContainer} />
      <Route exact path="/about" component={AboutContainer} />
      <Route path="/post/:postId" component={BlogPostContainer} />
      <Route path="/archive/:year/:month" component={ArchiveContainer} />
      <Redirect path="/blog/*" to="/" />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;