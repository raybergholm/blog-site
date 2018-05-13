import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import AboutView from "./pages/AboutView";

import FeedView from "./pages/FeedView";
import ArchiveView from "./pages/ArchiveView";
import BlogPostView from "./pages/BlogPostView";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={FeedView} />
      <Route exact path="/about" component={AboutView} />
      <Route path="/post/:postId" component={BlogPostView} />
      <Route path="/archive/:year/:month" component={ArchiveView} />
      <Redirect path="/blog/*" to="/" />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;