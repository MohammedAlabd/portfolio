import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Tabs, Tab, } from '@material-ui/core'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import AccountTreeRoundedIcon from '@material-ui/icons/AccountTreeRounded';
import Button from '@material-ui/core/Button';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import {Link} from "react-router-dom"

const drawerWidth = 220;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    justifyContent:'space-around',
    alignItems:'space-around',
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    //   display:"none"
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    backgroundColor:'#00695c',
    width: drawerWidth,
    justifyContent:'space-around',
    alignItems:'space-around',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  button:{
    padding:'20px 0'
  },
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Tabs
                orientation="vertical"
                value={0} 
                variant="fullWidth"
                indicatorColor="secondary"
                // onChange={handleChangeEvent} 
                centered
            >
              <Link to={`/about`} style={{color:'#fff',textDecoration:'none'}} >
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<AccountCircleRoundedIcon color='secondary' />}
                >
                    <Tab disableRipple  label="About"  value={0} />
                </Button>
              </Link>
              <Link to={`/Projects`} style={{color:'#fff',textDecoration:'none'}}>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<AccountTreeRoundedIcon color='secondary' />}
                >
                    <Tab disableRipple  label="Portfolio"value={1} />
                </Button>
              </Link>
              <Link to={`/contact`} style={{color:'#fff',textDecoration:'none'}}>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<PhoneOutlinedIcon color='secondary' />}
                >
                    <Tab   disableRipple label="Contact" value={2} />
                </Button>
              </Link>
              <Link to={`/contact`} style={{color:'#fff',textDecoration:'none'}}>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<InsertDriveFileOutlinedIcon color='secondary' />}
                >
                  <Tab  disableRipple label="Resume" value={3} />
                </Button>
              </Link>
            </Tabs>
      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" color='primary' className={classes.appBar}>
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
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <nav  className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden  smUp implementation="css">
          <Drawer
            color='primary'
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
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
  container: PropTypes.any,
};

export default ResponsiveDrawer;
