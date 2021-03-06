import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import CollapsibleTable from "./details";
// import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import {getAllStateWiseData} from "../../redux/action";
import {connect} from "react-redux";

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
    constructor(props){
        super(props);
        this.state={
            allStateData:[],
            caseTypes:[]
        }   
        
    }
   
    componentDidMount(){
        this.props.getAllStateWiseData();
        //this.props.getAllStateDistrictData();
        // setInterval(this.props.getAllStateWiseData(),5000);
      }
      
    render() {
            const types=['Confirmed','Active','Recovered','Deceased'];
            // const {active,confirmed,recovered,death}=this.props.allStateData[0];
            const {classes} = this.props
        return (
            <React.Fragment>
            <div className={classes.root}>
                <Grid container justify="center" alignItems="center">
                    <Grid container item xs={12} spacing ={5} direction="row">
                    <Grid item xs={6} md={3}>
            <Paper className={classes.paper} square elevation={4}>
                <Typography 
                    variant="h4" 
                    component="h4"
                >{types[0]}
                </Typography>
            <div> {this.props.allStateData[0]!==undefined ? <Typography varient="h1" component="h1">{this.props.allStateData[0].confirmed}</Typography>:""} </div>
                </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Paper className={classes.paper} square elevation={4}>
                  <Typography 
                    variant="h4" 
                    component="h4">{types[1]}
                    </Typography>
        <div> {this.props.allStateData[0]!==undefined ? <Typography varient="h1" component="h1">{this.props.allStateData[0].active}</Typography>:""} </div>  
                    </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
            <Paper className={classes.paper} square elevation={4}>
            <Typography 
                    variant="h4" 
                    component="h4"> 
                    {types[2]}
            </Typography>
        <div>{this.props.allStateData[0]!==undefined ? <Typography varient="h1" component="h1">{this.props.allStateData[0].recovered}</Typography>:""} </div>
            </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
            <Paper className={classes.paper} square elevation={4}>
            <Typography 
                    variant="h4" 
                    component="h4">
                {types[3]}
                </Typography>
        <div>{this.props.allStateData[0]!==undefined ? <Typography varient="h1" component="h1">{this.props.allStateData[0].deaths}</Typography>:""} </div>
            </Paper>
                </Grid>
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
const mapStateToProps=state=>{
      return {
        allStateData:state.getAllData.statewise
      }
  }
  const mapDispatchToProps = dispatch=>{
      return {
          getAllStateWiseData:()=>dispatch(getAllStateWiseData()),
      }
  }
export default connect(mapStateToProps,mapDispatchToProps)(withStyles(Styles)(MainContent));

