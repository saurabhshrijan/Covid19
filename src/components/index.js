import React,{useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
        transform: 'translateY(0)',
        transition: 'transform .5s',
      },
      show: {
        transform: 'translateY(-110%)',
        transition: 'transform .5s',
      },
  }));

export default function NavigationBar(props) {
    
    const classes=useStyles();
    const trigger = useScrollTrigger();
  return (
    <React.Fragment>
          <CssBaseline />
        <AppBar className={trigger ? classes.show : classes.hide}>
          <Toolbar variant="dense" >
            <Typography variant="h6">Covid19 Pandemic</Typography>
          </Toolbar>
        </AppBar>
      <Toolbar />
      <Container maxWidth="md">
        <Box my={2} >
         
        </Box>
      </Container>
    </React.Fragment>
  );
}
