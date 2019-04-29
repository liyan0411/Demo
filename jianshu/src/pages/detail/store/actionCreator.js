import {actionTypes} from "./index"
import axios from "axios"
const changeDetailData=(res)=>({
		type:actionTypes.GET_DETAILS,
		title:res.title,
		dataTime:res.dataTime,
		detailList:res.detailList
})
export const getDetails=(ids)=>{
	return (dispatch)=>{
		axios.get('/api/detail.json?id='+ids).then((res)=>{
			const result = res.data.data;
			dispatch(changeDetailData(result))
		})
	}
}