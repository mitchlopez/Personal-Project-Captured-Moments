import React from "react";
import { Switch, Route } from "react-router-dom";
import Album from "./components/Album/Album";
import Landscape from "./components/Pictures/Landscape";
import Moon from "./components/Pictures/Moon";
import Other from "./components/Pictures/Other";
import Wildlife from "./components/Pictures/Wildlife";
import Sunset from "./components/Pictures/Sunset";
import Travel from "./components/Pictures/Travel";
import SinglePicture from "./components/SinglePicture/SinglePicture";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminConsole from "./components/Admin/AdminConsole";
import Bio from "./components/Album/Bio/Bio";

export default (
  <Switch>
    <Route exact path="/" component={Album} />
    <Route
      exact
      path="/photo/0"
      render={() => (
        <h1 className="page-not-found">
          Error: Link does not exist. Please right click (or touch and hold on
          mobile) and select "Open image in a new tab" to view this image in
          full size
        </h1>
      )}
    />
    <Route exact path="/album/landscape" component={Landscape} />
    <Route exact path="/album/moon" component={Moon} />
    <Route exact path="/album/other" component={Other} />
    <Route exact path="/album/wildlife" component={Wildlife} />
    <Route exact path="/album/travel" component={Travel} />
    <Route exact path="/album/sunset" component={Sunset} />
    <Route path="/photo/:id" component={SinglePicture} />
    <Route path="/auth" component={AdminLogin} />
    <Route path="/admin" component={AdminConsole} />
    <Route path="/bio" component={Bio} />
    <Route
      path="/instagram"
      component={() => {
        window.location.href = "https://instagram.com/smlopez05";
        return null;
      }}
    />

    {/* keep at bottom incase of inpropper path  */}
    <Route
      path="/"
      render={() => (
        <h1 className="page-not-found">Error 404: Page Not Found</h1>
      )}
    />
  </Switch>
);
