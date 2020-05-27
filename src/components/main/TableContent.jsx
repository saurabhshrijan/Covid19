import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Typography from '@material-ui/core/Typography';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import Table from '@material-ui/core/Table';
import React from 'react';
import {connect} from "react-redux";
const Styles =(theme)=>({
    root: {
        '& > *': {
          borderBottom: 'unset',
        }
    }
})
class Row extends React.Component{
    constructor(props){
        super(props);
        this.state={
            open:false,
            districtData:[]
        }
        this.setOpen=this.setOpen.bind(this);
    }

    setOpen = (value,name)=>{
      if(value===true){
        //console.log(name);
      let final=this.props.selectedState(this.props.allStateDistrictData[name]);
      //console.log('final data is',final);
       this.setState({open:value,districtData:final})
      }
      if(value===false){
        // this.props.clearAllStateDistrictData();
        this.setState({open:value})
      }
       
    }
   
    render(){
        const {classes} = this.props
        const { row } = this.props;
        //console.log('inside tablecntent',row);
        // if(this.props.allStateDistrictData!==undefined ){
        //   let obj=(this.props.allStateDistrictData).districtData;
        //     let result=Object.keys(obj).map((values)=>{
        //       return [values,obj[values]]
        //     })
        //     console.log('final result is',result);
        // }

        return (
            <React.Fragment>
              <TableRow className={classes.root}>
                <TableCell>
                  <IconButton aria-label="expand row" size="small" onClick={()=>this.setOpen(!this.state.open,row.state)}>
                    {this.state.open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                  </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.state}
                </TableCell>
                <TableCell align="right">{row.confirmed}</TableCell>
                <TableCell align="right">{row.active}</TableCell>
                <TableCell align="right">{row.recovered}</TableCell>
                <TableCell align="right">{row.deaths}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                  <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    <Box margin={1}>
                      <Typography variant="h6" gutterBottom component="div">
                        District Wise Data of {row.state}
                      </Typography>
                      <Table size="small" aria-label="districts">
                        <TableHead>
                          <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>confirmed</TableCell>
                            <TableCell align="right">active</TableCell>
                            <TableCell align="right">recovered</TableCell>
                            <TableCell align="right">deceased</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {/* {console.log(this.state.districtData)} */}
                          {this.state.districtData.length!==0 ? this.state.districtData.map((value) => (
                            <TableRow key={value.name}>
                              <TableCell component="th" scope="row">
                                {value.name}
                              </TableCell>
                              <TableCell>{value.confirmed}</TableCell>
                              <TableCell align="right">{value.active}</TableCell>
                              <TableCell align="right">{value.recovered}</TableCell>
                              <TableCell align="right">{value.deceased}</TableCell>
                            </TableRow>
                          )):<Typography>no data to  display</Typography>}
                        </TableBody>
                      </Table>
                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
            </React.Fragment>
          );

        }
 
}
const mapStateToProps =(state) =>{
  //console.log('inside tablecontent..',state.getAllData.stateDistrictWise);
  return {
    
    allStateDistrictData:state.getAllData.stateDistrictWise
  }
  }
export default connect(mapStateToProps,null)(withStyles(Styles)(Row))