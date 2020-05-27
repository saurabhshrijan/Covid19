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
// import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
// import { withStyles } from '@material-ui/core/styles';
import Row from "./TableContent";
import {connect} from "react-redux";
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

class CollapsibleTable extends React.Component {
  constructor(props){
    super(props);
    this.state={
      districtData:[]
    }
    this.createData=this.createData.bind(this);
    this.createDistricts=this.createDistricts.bind(this);
    this.selectedState=this.selectedState.bind(this);
  }
  


 createData = (state, confirmed,active, recovered, deaths)=>{
   //console.log('inside createdata');
  // if(this.props.allStateDistrictData!==undefined){
  //   console.log('chicken',this.props.allStateDistrictData);
  // }
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
      let rows=[]
      //console.log('value of ',this.props);
      if(this.props.allStateData !== undefined){
        //this.props.getAllcases()
        const data=this.props.allStateData;
        rows=data.splice(1).map((val,index)=>{
         return this.createData(val.state,val.confirmed,val.active,val.recovered,val.deaths)
        });

      }
        return (
            <TableContainer component={Paper}>
              <Table aria-label="collapsible table">
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
                <TableBody>
                  {rows.map((row) => (
                    <Row key={row.state}
                     row={row} 
                     selectedState={(selectedDistricts)=>this.selectedState(selectedDistricts)} 
                     />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          );
    }

}
const mapStateToProps =(state) =>{
  //console.log('aloo',state.getAllData);
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
export default connect(mapStateToProps,mapDispatchToProps)(CollapsibleTable);