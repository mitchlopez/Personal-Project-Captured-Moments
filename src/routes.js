import React from "react";
import { Switch, Route } from "react-router-dom";
import Album from "./components/Album/Album";
import Landscape from "./components/Pictures/Landscape";
import Moon from "./components/Pictures/Moon";
import Other from "./components/Pictures/Other";
import Wildlife from "./components/Pictures/Wildlife";
import Sunset from "./components/Pictures/Sunset";
import Travel from "./components/Pictures/Travel";

export default (
  <Switch>
    <Route exact path="/" component={Album} />
    <Route exact path="/album/landscape" component={Landscape} />
    <Route exact path="/album/moon" component={Moon} />
    <Route exact path="/album/other" component={Other} />
    <Route exact path="/album/wildlife" component={Wildlife} />
    <Route exact path="/album/travel" component={Travel} />
    <Route exact path="/album/sunset" component={Sunset} />

    {/* keep at bottom incase of inpropper path  */}
    <Route
      path="/"
      render={() => (
        <h1 className="page-not-found">Error 404: Page Not Found</h1>
      )}
    />
  </Switch>
);
