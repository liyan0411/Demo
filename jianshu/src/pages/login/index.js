import React,{PureComponent} from "react";
import { Redirect } from "react-router-dom"
import {connect} from "react-redux";
import {actionCreator} from "./store"
import {LoginWrapper,LoginBox,Input,Button} from "./style"
class Login extends PureComponent {
	render(){
		const {isLogin,handleLogin} = this.props;
		if(!isLogin){
			return (
				<LoginWrapper>
					<LoginBox>
						{isLogin}
						<Input placeholder="账号" type="text" ref={(input)=>{this.account=input}}/>
						<Input placeholder="密码" type="password" ref={(input)=>{this.password=input}}/>
						<Button onClick={()=>handleLogin(this.account,this.password)}>登录</Button>
					</LoginBox>
				</LoginWrapper>
			)
		}else{
			return <Redirect to="/"/>
		}
		
	}
}
const mapState=(state)=>({
	isLogin:state.getIn(["login","isLogin"])
})
const mapDispatch=(dispatch)=>({
	handleLogin(account,password){
		dispatch(actionCreator.handleLogin(account.value,password.value))
	}
})
export default connect(mapState,mapDispatch)(Login)