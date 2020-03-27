import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Tabs, Tab } from "@material-ui/core";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
import AccountTreeRoundedIcon from "@material-ui/icons/AccountTreeRounded";
import Button from "@material-ui/core/Button";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import { Link } from "react-router-dom";

const drawerWidth = 180;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "space-around",
    alignItems: "space-around"
  },
  drawer: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
      display: "flex"
    }
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      display: "none"
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    backgroundColor: "#00695c",
    width: drawerWidth,
    justifyContent: "space-around",
    alignItems: "space-around"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  button: {
    padding: "20px 0"
  },
  icon: {
    margin: "0px 0px 0px 40px"
  }
}));

function ResponsiveDrawer(props) {
  const { container, handleChange, selectedTab } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleChangeEvent = (index) => (e) => {
    // console.log(index);
    
    handleChange(index)
  }
  
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Tabs
        orientation="vertical"
        value={selectedTab}
        indicatorColor="secondary"
        centered
      >
        <Link
          to={`/home/about`}
          style={{ color: "#fff", textDecoration: "none" }}
        >
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            name='0'
            onClick={handleChangeEvent(0)}
            className={classes.button}
            startIcon={
              <AccountCircleRoundedIcon
                className={classes.icon}
                color="secondary"
              />
            }
          >
            <Tab disableRipple component='div' label="About" value={0} />
          </Button>
        </Link>
        <Link
          to={`/home/Projects`}
          style={{ color: "#fff", textDecoration: "none" }}
        >
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            onClick={handleChangeEvent(1)}
            className={classes.button}
            startIcon={
              <AccountTreeRoundedIcon
                className={classes.icon}
                color="secondary"
              />
            }
          >
            <Tab disableRipple component='div' label="Portfolio" value={1} />
          </Button>
        </Link>
        <Link
          to={`/home/contact`}
          style={{ color: "#fff", textDecoration: "none" }}
        >
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            onClick={handleChangeEvent(2)}
            className={classes.button}
            startIcon={
              <PhoneOutlinedIcon className={classes.icon} color="secondary" />
            }
          >
            <Tab component='div' disableRipple label="Contact" value={2} />
          </Button>
        </Link>
        <Link
          to={`/home/contact`}
          style={{ color: "#fff", textDecoration: "none" }}
        >
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={
              <InsertDriveFileOutlinedIcon
                className={classes.icon}
                color="secondary"
              />
            }
          >
            <Tab component='div' disableRipple label="Resume" value={3} />
          </Button>
        </Link>
      </Tabs>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Muhammad Al-Abd
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            color="primary"
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.any
};

export default ResponsiveDrawer;
