import axios from "axios";

const getAllStateWiseData=()=>{
    return dispatch => {
    axios.get('https://api.covid19india.org/data.json').then(res=>{
        //console.log(res);
        dispatch({type:'GET_ALL_STATE_DATA',payload:res.data})
    }).catch(err=>console.log(err));
    }
}

const getAllStateDistrictData = ()=>{
    return dispatch => {
    axios.get('https://api.covid19india.org/state_district_wise.json')
    .then(res=>{
        // dispatch({type:'GET_ALL_STATE_DISTRICT_DATA',payload:res.data[statename]})
        //console.log(res.data);
        dispatch({type:'GET_ALL_STATE_DISTRICT_DATA',payload:res.data})
        // console.log(res.data[statename]);
    }).catch(err=>console.log(err));
    }
}
const districtOfSelectedState =(statename)=>{

}

const clearAllStateDistrictData=()=>{
    return dispatch=>{
        dispatch({type:"CLEAR_ALL_STATE_DISTRICT_DATA"})
    }
}


export {
    getAllStateWiseData,
    getAllStateDistrictData,
    clearAllStateDistrictData,
    districtOfSelectedState
}