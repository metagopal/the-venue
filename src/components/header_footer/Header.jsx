import React, { Component } from "react";

import { Toolbar, AppBar, IconButton } from "@mui/material";
import SideDrawer from "./SideDrawer";
// import MenuIcon from '@mui/icons-material/Menu';

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drawerOpen: false,
      headerShow: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

 

  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({ headerShow: true });
    } else {
      this.setState({ headerShow: false });
    }
  };

  toggleDrawer = (value) => {
    this.setState({ drawerOpen: value });
  };

  render() {
    return (
      <>
        <AppBar
          position="fixed"
          style={{
            backgroundColor: this.state.headerShow ? "#2f2f2f" : "transparent",
            boxShadow: "none",
            padding: "10px 10px",
          }}
        >
          <Toolbar>
            <div className="header_logo">
              <div className="font_righteous header_logo_venue">The Venue</div>
              <div className=" header_logo_title">Musical Events</div>
            </div>
            <IconButton
              aria-label="Menu"
              color="inherit"
              onClick={() => this.toggleDrawer(true)}
            >
              click
              {/* <MenuIcon /> */}
            </IconButton>
            <SideDrawer
              open={this.state.drawerOpen}
              onClose={(value) => this.toggleDrawer(value)}
            />
          </Toolbar>
        </AppBar>
      </>
    );
  }
}

export default Header;
