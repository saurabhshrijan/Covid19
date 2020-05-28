import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import Box from '@material-ui/core/Box';
// import Collapse from '@material-ui/core/Collapse';
// import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
// import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
// import { withStyles } from '@material-ui/core/styles';
import Row from "./TableContent";
import {connect} from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import {clearAllStateDistrictData, getAllStateDistrictData} from "../../redux/action";



// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
//   createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
//   createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
//   createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
// ];
// active: "33996"
// confirmed: "50231"
// deaths: "1635"
// deltaconfirmed: "3041"
// deltadeaths: "58"
// deltarecovered: "1196"
// lastupdatedtime: "24/05/2020 22:25:03"
// recovered: "14600"
// state: "Maharashtra"
// statecode: "MH"


const Styles =(theme)=>({
  
  Paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 500
  },
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    }
  }
})


class CollapsibleTable extends React.Component {
  constructor(props){
    super(props);
    this.state={
      districtData:[],
      page:0,
      rowsPerPage:5
    }
    
    this.createData=this.createData.bind(this);
    this.createDistricts=this.createDistricts.bind(this);
    this.selectedState=this.selectedState.bind(this);
    this.setPage=this.setPage.bind(this);
    this.setRowsPerPage=this.setRowsPerPage.bind(this);
    this.handleChangePage=this.handleChangePage.bind(this);
    this.handleChangeRowsPerPage=this.handleChangeRowsPerPage.bind(this);
  }
 
  
  setPage =(newPage)=>{
    this.setState({page:newPage})
  }


  setRowsPerPage =(rowsPerPage)=>{
  this.setState({rowsPerPage:rowsPerPage});
}



  handleChangePage = (event, newPage) => {
    this.setPage(newPage);
  };
  


   handleChangeRowsPerPage = (event) => {
    this.setRowsPerPage(parseInt(event.target.value, 10));
    this.setPage(0);
  };




 createData = (state, confirmed,active, recovered, deaths)=>{
  return {
    state,
    confirmed,
    active,
    recovered,
    deaths
  };
}




createDistricts =(name,confirmed,active,recovered,deaths)=>{
      return{
      name,
    confirmed,
    active,
    recovered,
    deaths
      }
}



componentDidMount(){
  this.props.getAllStateDistrictData();
}

selectedState = (selectedDistricts)=>{
  console.log(selectedDistricts.districtData);
  //this.setState({rawdata:selectedDistricts},()=>console.log('state becomes',this.state));
  // console.log(values);
    const result= Object.keys(selectedDistricts.districtData).map(function(key){
      return [key, selectedDistricts.districtData[key]]
    })
    //this.setState({districtData:result},()=>console.log('done'))
    //console.log('result is',result);
    let x=result.map(val=>{
        let t={name:null,active:null,recovered:null,confirmed:null,deceased:null}
          val.forEach(p=>{
            if(t.name===null)
              t.name=p
            else{
              t.active=p.active;
              t.recovered=p.recovered;
              t.confirmed=p.confirmed
              t.deceased=p.deceased
            }
          })
          return t
      })
      console.log(x);
    return x;
}
    render(){
      const {classes} = this.props
      let rows=[]
      //console.log('value of ',this.props);
      if(this.props.allStateData !== undefined){
        //this.props.getAllcases()
        //console.log('inside if');
        const data=this.props.allStateData;
        //console.log('aloo',data);
        rows=data.map((val,index)=>{
         return this.createData(val.state,val.confirmed,val.active,val.recovered,val.deaths)
        });
        //console.log('gghh',rows);

      }
        return (
            <TableContainer component={Paper} style={{marginBottom:"10px"}}>
              <Table aria-label="collapsible table" className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell>State/UT</TableCell>
                    <TableCell align="right">Confirmed</TableCell>
                    <TableCell align="right">Active</TableCell>
                    <TableCell align="right">Recovered</TableCell>
                    <TableCell align="right">Deceased</TableCell>
                  </TableRow>
                </TableHead>
                {rows.length > 0  ? <TableBody>
                  {rows.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage).map((row) => (
                    <Row key={row.state}
                     row={row} 
                     selectedState={(selectedDistricts)=>this.selectedState(selectedDistricts)} 
                     />
                  ))}
                </TableBody>
              : <div className={classes.root}><TableBody><CircularProgress color="secondary" /></TableBody></div>
              }
                
                
                <TableFooter>
                <TableRow>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        count={rows.length}
                        rowsPerPage={this.state.rowsPerPage}
                        page={this.state.page}
                        onChangePage={this.handleChangePage}
                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    />
                   </TableRow>
                </TableFooter>
                
              </Table>
            </TableContainer>
          );
    }

}
const mapStateToProps =(state) =>{
return {
          allStateDistrictData:state.getAllData.stateDistrictWise,
          allStateData:state.getAllData.statewise
      }
}
const mapDispatchToProps = dispatch =>{
  return {
    getAllStateDistrictData:()=>dispatch(getAllStateDistrictData()),
    clearAllStateDistrictData:()=>dispatch(clearAllStateDistrictData())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(withStyles(Styles)(CollapsibleTable));