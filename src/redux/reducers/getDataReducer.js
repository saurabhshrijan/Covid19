const initialstate={
    cases_time_series:[],
    statewise:[],
    tested:[],
    stateDistrictWise:[]
}

const getAllData =(state=initialstate,action)=>{
    switch(action.type){
        case "GET_ALL_STATE_DATA":
            return {
                ...state,
                cases_time_series:action.payload.cases_time_series,
                statewise:action.payload.statewise,
                tested:action.payload.tested
            }
        case "GET_ALL_STATE_DISTRICT_DATA":
            return {
                ...state,
                stateDistrictWise:action.payload
            }
        case "CLEAR_ALL_STATE_DISTRICT_DATA":
            return {
                ...state,stateDistrictWise:[]
            }
        default:
            return state;
    }
}
export default getAllData;