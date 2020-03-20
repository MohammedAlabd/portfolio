import React from 'react'
import { AppBar, Tabs, Tab, } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    }
  }));
  

export default ({ handleChange, selectedTab}) => {

    const handleChangeEvent = (event,index) => {
        handleChange(index)
        
    }
    
    const classes = useStyles();
    return (
        <>
        <AppBar className={classes.root} position="static">
            <Tabs
                value={selectedTab} 
                aria-label="simple tabs example"
                indicatorColor="secondary"
                onChange={handleChangeEvent} 
                centered
            >
            <Tab label="About" value={0} />
            <Tab label="Projects"value={1} />
            <Tab label="CV" value={2} />
            <Tab label="Contact" value={3} />
            </Tabs>
        </AppBar>
        
        </>
    )
}

