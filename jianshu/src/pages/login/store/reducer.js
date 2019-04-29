import {fromJS} from "immutable";
import {actionTypes} from "./index"
const defaultState=fromJS({
	isLogin:false
})
export default (state=defaultState,action)=>{
	switch(action.type){
		case actionTypes.CHANGE_LOGIN:
			return state.set("isLogin",action.isLogin);
		case actionTypes.CHANGE_LAYOUT:
			return state.set("isLogin",action.isLogin);
		default:
			return state;
	}
}