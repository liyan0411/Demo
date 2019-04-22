import * as actionTypes from "./actionTypes"
const defaultState={
	focused:false
};
export default (state=defaultState,action)=>{
	if(action.type===actionTypes.SEARCH_FOCUS){
		const states=JSON.parse(JSON.stringify(state));
		states.focused=true;
		return states;
	}
	if(action.type===actionTypes.SEARCH_BLUR){
		const states=JSON.parse(JSON.stringify(state));
		states.focused=false;
		return states;
	}
	return state;
}