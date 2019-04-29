import React,{PureComponent} from "react";
import {Redirect} from "react-router-dom"
import {connect} from "react-redux";
class Write extends PureComponent{
	render(){
		const {isLogin} = this.props;
		if(isLogin){
			return(
				<div>
					write
				</div>
			)
		}else{
			return <Redirect to="/"/>
		}
		
	}
}
const mapState=(state)=>({
	isLogin:state.getIn(["login","isLogin"])
})
export default connect(mapState,null)(Write);