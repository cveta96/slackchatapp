import React from "react";
import "./App.css";
import { Grid, GridColumn } from "semantic-ui-react";
import { connect } from "react-redux";

import ColorPanel from "./colorpanel/ColorPanel";
import SidePanel from "./sidepanel/SidePanel";
import Messages from "./messages/Messages";
import MetaPanel from "./metapanel/MetaPanel";

const App = ({ currentUser }) => (
  <Grid columns="equal" className="app" style={{ background: "#eee" }}>
    <ColorPanel />
    <SidePanel currentUser={currentUser} />
    <GridColumn style={{ marginLeft: 320 }}>
      <Messages />
    </GridColumn>
    <GridColumn width={4}>
      <MetaPanel />
    </GridColumn>
  </Grid>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(App);
