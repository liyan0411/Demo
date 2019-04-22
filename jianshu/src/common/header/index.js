import React,{ Component,Fragment } from "react";
import { connect } from "react-redux"
import { CSSTransition } from 'react-transition-group';
import { actionCreator } from "./store"
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWipper,
	NacSearch,
	Addition,
	Button
} from "./style.js";
// const Header=(props)=>{]
	// 无状态组件
	// return (

	// )	
// }
class Header extends Component{
	// constructor(props){
	// 	super(props);

	// }
	render(){
		return (
			<div>
				<HeaderWrapper>
					<Logo href="/"/>
					<Nav>
						<NavItem className="left active pointer">首页</NavItem>
						<NavItem className="left pointer">下载App</NavItem>
						<NavItem className="right pointer">登录</NavItem>
						<NavItem className="right">
							<i className="iconfont iconAa pointer"></i>
						</NavItem>
						<SearchWipper>
							<CSSTransition in={this.props.focused} timeout={200} classNames="slide">
								<Fragment>
									<NacSearch
										className={this.props.focused?'focused':''}
										onFocus={(e)=>{this.props.handleInputFocus(e)}}
										onBlur={(e)=>{this.props.handleInputBlur(e)}}
									></NacSearch>
									<i className={`iconfont iconfangdajing pointer ${this.props.focused?"focused":""}`}></i>
								</Fragment>
							
							</CSSTransition>
							
						</SearchWipper>
						
					</Nav>
					<Addition>
						<Button className="reg pointer">注册</Button>
						<Button className="writting pointer"><i className="iconfont iconiconset0137"></i>写文章</Button>
					</Addition>
				</HeaderWrapper>
			</div>		
		)
	}

}
const mapStateToProps=(state)=>{
	return {
		focused:state.header.focused
	}	
}
const mapDispatchToProps=(dispatch)=>{
	return {
		handleInputFocus(){
			dispatch(actionCreator.searchFocus());
		},
		handleInputBlur(){
			dispatch(actionCreator.searchBlur());
		}
	}	
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);