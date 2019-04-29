import {fromJS} from "immutable";
import {actionTypes} from "./index"
const defaultState=fromJS({
	title:"",
	dataTime:"",
	detailList:""
});
const changeHomeData=(state,action)=>{
	return state.merge({
		title:action.title,
		dataTime:action.dataTime,
		detailList:action.detailList,
	})
}
export default (state=defaultState,action)=>{
	switch(action.type){
		case actionTypes.GET_DETAILS:
			return changeHomeData(state,action);
		default:
			return state;
	}
}
