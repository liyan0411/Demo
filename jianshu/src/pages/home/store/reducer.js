// import * as actionTypes from "./actionTypes"
import {fromJS} from "immutable"
import {actionTypes} from "./index"
// 初始化数据
const defaultState=fromJS({
	TopicList:[],
	articleList:[],
	recommendList:[],
	showScroll:false,
	showCode:false
});
const changeHomeData=(state,action)=>{
	return state.merge({
		TopicList:fromJS(action.TopicList),
		articleList:fromJS(action.articleList),
		recommendList:fromJS(action.recommendList),
	})
}
const addHomeList=(state,action)=>{
	return state.set("articleList",state.get("articleList").concat(action.articleList))
}
export default (state=defaultState,action)=>{
	switch(action.type){
		case actionTypes.CHANGE_HOME_DATA:
			return changeHomeData(state,action)
		case actionTypes.ADD_HOME_LIST:
			return addHomeList(state,action)
		case actionTypes.TOGGLE_TOPS:
			return state.set("showScroll",action.showScroll)
		case actionTypes.TOGGLE_CODES:
			return state.set("showCode",action.showCode)
		default:
			return state;
	}

}