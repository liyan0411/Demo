import Axios from "axios";
import {actionTypes} from "./index"
export const handleLayout=()=>({
	type:actionTypes.CHANGE_LAYOUT,
	isLogin:false
})
export const handleLogin=(account,password)=>{
	return (dispatch)=>{
		Axios.get("/api/login.json?account="+account+"&password="+password).then((res)=>{
			const result=res.data.data;
			if(result){
				const action={
					type:actionTypes.CHANGE_LOGIN,
					isLogin:result
				}
				dispatch(action);
			}else{
				alert("登录失败")
			}
		})
	}
}