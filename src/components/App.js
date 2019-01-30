import React from "react";
import "./App.css";
import { Grid, GridColumn } from "semantic-ui-react";
import { connect } from "react-redux";

import ColorPanel from "./colorpanel/ColorPanel";
import SidePanel from "./sidepanel/SidePanel";
import Messages from "./messages/Messages";
import MetaPanel from "./metapanel/MetaPanel";

const App = ({ currentUser, currentChannel, isPrivateChannel, userPosts }) => (
  <Grid columns="equal" className="app" style={{ background: "#eee" }}>
    <ColorPanel
      currentUser={currentUser}
      key={currentUser && currentUser.name}
    />
    <SidePanel key={currentUser && currentUser.uid} currentUser={currentUser} />
    <GridColumn style={{ marginLeft: 320 }}>
      <Messages
        key={currentChannel && currentChannel.id}
        currentChannel={currentChannel}
        currentUser={currentUser}
        isPrivateChannel={isPrivateChannel}
      />
    </GridColumn>
    <GridColumn width={4}>
      <MetaPanel
        userPosts={userPosts}
        currentChannel={currentChannel}
        key={currentChannel && currentChannel.name}
        isPrivateChannel={isPrivateChannel}
      />
    </GridColumn>
  </Grid>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  currentChannel: state.channel.currentChannel,
  isPrivateChannel: state.channel.isPrivateChannel,
  userPosts: state.channel.userPosts
});

export default connect(mapStateToProps)(App);
