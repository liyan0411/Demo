import * as actionTypes from "./actionTypes"
import axios from "axios"
import {fromJS} from "immutable"
// 创建creator 函数
const changeHomeData=(result)=>({
	type:actionTypes.CHANGE_HOME_DATA,
	TopicList:result.TopicList,
	articleList:result.articleList,
	recommendList:result.recommendList,
})
const addHomeList=(result)=>({
	type:actionTypes.ADD_HOME_LIST,
	articleList:fromJS(result.articleList)
})
export const getHomeInfo = ()=>{
	return (dispatch)=>{
		axios.get("/api/home.json").then((res)=>{
      const data=res.data.data;
      dispatch(changeHomeData(data))
    })
	}
}
export const getMoreList =()=>{
	return (dispatch)=>{
		axios.get("/api/homeList.json").then((res)=>{
			const data=res.data.data;
      dispatch(addHomeList(data))
    })
	}
}
export const toggleTops=(res)=>{
	return (dispatch)=>{
		const action={
			type:actionTypes.TOGGLE_TOPS,
			showScroll:res
		}
		dispatch(action)
	}
}
export const toggleCodes=(res)=>{
	return (dispatch)=>{
		const action={
			type:actionTypes.TOGGLE_CODES,
			showCode:res
		}
		dispatch(action)
	}
}