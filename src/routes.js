import React from "react";
import { Switch, Route } from "react-router-dom";
import Album from "./components/Album/Album";
import Landscape from "./components/Pictures/Landscape";

export default (
  <Switch>
    <Route exact path="/" component={Album} />
    <Route exact path="/album/landscape" component={Landscape} />

    {/* keep at bottom incase of inpropper path  */}
    <Route
      path="/"
      render={() => (
        <h1 className="page-not-found">Error 404: Page Not Found</h1>
      )}
    />
  </Switch>
);
