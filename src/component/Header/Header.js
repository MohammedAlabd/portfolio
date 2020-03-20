import React from 'react'
import { AppBar, Tabs, Tab, } from '@material-ui/core'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import AccountTreeRoundedIcon from '@material-ui/icons/AccountTreeRounded';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      justifyContent:'space-around',
      alignItems:'space-around',
    }
  }));
  

export default ({ handleChange, selectedTab}) => {

    const handleChangeEvent = (event,index) => {
        handleChange(index)
        
    }
    
    const classes = useStyles();
    return (
        
        <AppBar style={{
            position: 'fixed',
            left: 0,
            maxWidth:150,
            top: 0,
            bottom: 0
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
            <Tab icon={<AccountCircleRoundedIcon color='secondary' /> } label="About" value={0} />
            <Tab icon={<AccountTreeRoundedIcon color='secondary' /> } label="Projects"value={1} />
            <Tab icon={<InsertDriveFileOutlinedIcon color='secondary' /> } label="Resume" value={2} />
            <Tab icon={<PhoneOutlinedIcon color='secondary' /> } label="Contact" value={3} />
            </Tabs>
        </AppBar>
        
        
    )
}

