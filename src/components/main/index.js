import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import CollapsibleTable from "./details";
// import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
const Styles =(theme) => ({
    root: {
        flexGrow: 1,
        marginTop:"100px"
    },
    tableroot:{
        flexGrow: 1,
        marginTop:"50px"
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
});

class MainContent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
  componentDidMount(){
      
  }
    render() {
        function FormRow() {
            const types=['confirmed','Active','Deceased','Recovered'];
            return (
              <React.Fragment>
                <Grid item xs={3} md={3}>
            <Paper className={classes.paper} square elevation={4}>
                {types[0]}
               <div> total active cases are</div>
                </Paper>
                </Grid>
                <Grid item xs={3} md={3}>
                  <Paper className={classes.paper} square elevation={4}>
                      {types[1]}
                      <div> total active cases are</div>  
                    </Paper>
                </Grid>
                <Grid item xs={3} md={3}>
            <Paper className={classes.paper} square elevation={4}>
                {types[2]}
                <div> total active cases are</div>
            </Paper>
                </Grid>
                <Grid item xs={3} md={3}>
            <Paper className={classes.paper} square elevation={4}>
                {types[3]}
                <div> total active cases are</div>
            </Paper>
                </Grid>
              </React.Fragment>
            );
          }
       
        const {classes} = this.props
        return (
            <React.Fragment>
            <div className={classes.root}>
                <Grid container justify="center" alignItems="center">
                    <Grid container item xs={12} spacing ={5} direction="row">
                    <FormRow/>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.tableroot}>
                <Grid container justify="center" alignItems="center">
                    <Grid item xs={12} md={8}>
                    <CollapsibleTable/>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
        )
    }
}
export default withStyles(Styles)(MainContent);

