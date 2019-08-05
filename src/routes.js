import React from "react";
import { Switch, Route } from "react-router-dom";
import Album from "./components/Album/Album";

export default (
  <Switch>
    <Route exact path="/" component={Album} />

    {/* keep at bottom incase of inpropper path  */}
    <Route path="/" render={() => <h1>404 Page not found</h1>} />
  </Switch>
);
