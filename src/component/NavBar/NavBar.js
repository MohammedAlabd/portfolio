import React from "react";
import { AppBar, CssBaseline, Drawer, Hidden, IconButton, Toolbar, Typography, Tabs, Tab, Button} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Menu, AccountCircleRounded, InsertDriveFileOutlined, AccountTreeRounded, PhoneOutlined } from "@material-ui/icons";
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
    padding: "20px 0",
    boxShadow:'none',
    borderRadius:0,
    color:'#fff',
  },
  icon: {
    margin: "0px 0px 0px 40px"
  },
  link:{
    color: "#fff",
    textDecoration: "none"
  },
  tab:{
    opacity:'1 !important'
  }
}));

function ResponsiveDrawer(props) {
  const { container, handleTabChange, selectedTab } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleChangeEvent = (index) => (e) => {
    
    handleTabChange(index)
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
          className={classes.link}
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
              <AccountCircleRounded
                className={classes.icon}
                color="secondary"
              />
            }
          >
            <Tab disableRipple disabled component='div' className={classes.tab} label="About" value={0} />
          </Button>
        </Link>
        <Link
          to={`/home/Projects`}
          className={classes.link}
        >
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            onClick={handleChangeEvent(1)}
            className={classes.button}
            startIcon={
              <AccountTreeRounded
                className={classes.icon}
                color="secondary"
              />
            }
          >
            <Tab disableRipple disabled component='div' className={classes.tab} label="Portfolio" value={1} />
          </Button>
        </Link>
        <Link
          to={`/home/contact`}
          className={classes.link}
        >
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            onClick={handleChangeEvent(2)}
            className={classes.button}
            startIcon={
              <PhoneOutlined className={classes.icon} color="secondary" />
            }
          >
            <Tab component='div' disableRipple disabled className={classes.tab} label="Contact" value={2} />
          </Button>
        </Link>
        <Link
          target='_blank'
          to={`https://drive.google.com/open?id=1URXY_v14za8qsBuB8ZGmFS89h1LBEFlW`}
          className={classes.link}
        >
          <Button
            fullWidth
            target='_blank'
            href={`https://drive.google.com/file/d/1Tbv7jyxkaUIJdSzoTw1tWTbMkx9mwF90/view?usp=sharing`}
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={
              <InsertDriveFileOutlined
                className={classes.icon}
                color="secondary"
              />
            }
          >
            <Tab component='div' disableRipple disabled className={classes.tab} label="Resume" value={3} />
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
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap>
            Muhammad Al-Abd
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
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
              keepMounted: true 
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


export default ResponsiveDrawer;
