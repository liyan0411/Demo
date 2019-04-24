import * as actionTypes from "./actionTypes"
import {fromJS} from "immutable"

const defaultState=fromJS({
	focused:false,
	mouseIn:false,
	List:[],
	page:1,
	totalPage:1
});
export default (state=defaultState,action)=>{
	switch(action.type){
		case actionTypes.SEARCH_FOCUS:
			return state.set("focused",true);
		case actionTypes.SEARCH_BLUR:
			return state.set("focused",false);
		case actionTypes.CHANGE_LIST:
		// merge同时多次调用set  同时修改多个值
			return state.merge({
				List:action.list,
				totalPage:action.totalPage
			}) 
			// 等价于
			// return state.set("List",action.list).set("totalPage",action.totalPage);
		case actionTypes.MOUSE_ENTER:
			return state.set("mouseIn",true);
		case actionTypes.MOUSE_LEAVE:
			return state.set("mouseIn",false);	
		case actionTypes.CHANGE_PAGE:
			return state.set("page",action.page);
		default:
			return state;
	}
	// if(action.type===actionTypes.SEARCH_FOCUS){
	// 	// const states=JSON.parse(JSON.stringify(state));
	// 	// states.focused=true;
	// 	// immutable 对象的set 方法，会结合之前immutable 对象的值和设置的值，返回一个全新的对象

	// 	return state.set("focused",true);
	// }
	// if(action.type===actionTypes.SEARCH_BLUR){
	// 	// const states=JSON.parse(JSON.stringify(state));
	// 	// states.focused=false;
	// 	// return states;
	// 	return state.set("focused",false);
	// }
	// if(action.type===actionTypes.CHANGE_LIST){
	// 	// const states=JSON.parse(JSON.stringify(state));
	// 	// states.focused=false;
	// 	// return states;
	// 	return state.set("List",action.list);
	// }
	// return state;
}