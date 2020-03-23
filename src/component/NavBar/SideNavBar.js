import React from 'react'
import { AppBar, Tabs, Tab, } from '@material-ui/core'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import AccountTreeRoundedIcon from '@material-ui/icons/AccountTreeRounded';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom"
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      justifyContent:'space-around',
      alignItems:'space-around',
    }
  }));
  

export default ({ handleChange, selectedTab}) => {
    const handleChangeEvent = (e,index) => {
        handleChange(index)
    }
    
    const classes = useStyles();
    return (
        
        <AppBar style={{
            position: 'fixed',
            left: 0,
            // height:100,
            maxWidth:150,
            top: 0,
            bottom: 0,
            // display:'none'
          }}  
          className={classes.root} 
          position="static">
            <Tabs
                orientation="vertical"
                value={selectedTab} 
                variant="fullWidth"
                indicatorColor="secondary"
                onChange={handleChangeEvent} 
                centered
            >
              <Link to={`/about`} style={{color:'#fff',textDecoration:'none'}} >
                <Tab onClick={() => handleChange(0)} icon={<AccountCircleRoundedIcon color='secondary' /> } label="About"  value={0} />
              </Link>
              <Link to={`/Projects`} style={{color:'#fff',textDecoration:'none'}}>
                <Tab onClick={() => handleChange(1)} icon={<AccountTreeRoundedIcon color='secondary' /> } label="Portfolio"value={1} />
              </Link>
              <Link to={`/contact`} style={{color:'#fff',textDecoration:'none'}}>
                <Tab onClick={() => handleChange(2)} icon={<PhoneOutlinedIcon color='secondary' /> } label="Contact" value={2} />
              </Link>
              <Link to={`/contact`} style={{color:'#fff',textDecoration:'none'}}>
                  <Tab  icon={<InsertDriveFileOutlinedIcon color='secondary' /> } label="Resume" value={3} />
              </Link>
            </Tabs>
        </AppBar>
        
        
    )
}

