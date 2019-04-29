import React,{ Component,Fragment } from "react";
import {Link} from "react-router-dom"
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
	Button,
	SearchInfo,
	SearchTitle,
	SearchInfoSwitch,
	SearchInfoItem,
	SearchInfoList
} from "./style.js";
import {actionCreator as loginActionCreator} from "../../pages/login/store"
// const Header=(props)=>{]
	// 无状态组件
	// return (

	// )	
// }
class Header extends Component{
	// constructor(props){
	// 	super(props);

	// }
	
	getLists(){
		const {
			focused,
			mouseIn,
			list,
			page,
			totalPage,
			handleMouseEnter,
			handleMouseLeave,
			handleChangePage
		}=this.props;
		const newList=list.toJS();
		const pageList=[];
		if(newList.length){
			for(let i=((page-1)*10);i<page*10;i++){
				if(newList[i]){
					pageList.push(
						<SearchInfoItem className="pointer" key={newList[i]}>{newList[i]}</SearchInfoItem>
					)
				}
			}
		}
		if(focused||mouseIn){
			return (
				<SearchInfo 
					onMouseEnter={()=>{handleMouseEnter()}}
					onMouseLeave={()=>{handleMouseLeave()}}
				>
					<SearchTitle>
						热门搜索
						<SearchInfoSwitch className="pointer" onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}>
							<i ref={(icon)=>{this.spinIcon=icon}} className="iconfont iconspin spins"></i>换一换
						</SearchInfoSwitch>
					</SearchTitle>
					<SearchInfoList>
						{pageList}
					</SearchInfoList>
				</SearchInfo>
			)
		}else{
			return null;
		}
	}
	render(){
		const {focused,handleInputFocus,handleInputBlur,list,isLogin,handleLayout}=this.props;
		return (
			<div>
				<HeaderWrapper>
					<Link to="/">
						<Logo/>
					</Link>
					
					<Nav>
						<NavItem className="left active pointer"><Link to="/">首页</Link></NavItem>
						<NavItem className="left pointer">下载App</NavItem>
						{
							isLogin?
							<Link to="/"><NavItem className="right pointer" onClick={handleLayout}>退出</NavItem></Link>
							:
							<Link to="/login"><NavItem className="right pointer">登录</NavItem></Link>
						}
						<NavItem className="right">
							<i className="iconfont iconAa pointer"></i>
						</NavItem>
						<SearchWipper>
							<CSSTransition in={focused} timeout={200} classNames="slide">
								<Fragment>
									<NacSearch
										className={focused?'focused':''}
										onFocus={(e)=>{handleInputFocus(e,list)}}
										onBlur={(e)=>{handleInputBlur(e)}}
									></NacSearch>
									<i className={`iconfont iconfangdajing pointer ${focused?"focused":""}`}></i>
									{this.getLists()}
								</Fragment>
							
							</CSSTransition>
							
						</SearchWipper>
						
					</Nav>
					<Addition>
						<Button className="reg pointer">注册</Button>
						<Link to="/write">
							<Button className="writting pointer"><i className="iconfont iconiconset0137"></i>写文章</Button>
						</Link>
						
					</Addition>
				</HeaderWrapper>
			</div>		
		)
	}

}
const mapStateToProps=(state)=>{
	return {
		// focused:state.get("header").get("focused")
		focused:state.getIn(["header","focused"]),
		list:state.getIn(["header","List"]),
		page:state.getIn(["header","page"]),
		totalPage:state.getIn(["header","totalPage"]),
		mouseIn:state.getIn(["header","mouseIn"]),
		isLogin:state.getIn(["login","isLogin"]),
	}	
}
const mapDispatchToProps=(dispatch)=>{
	return {
		handleInputFocus(e,list){
			(list.size===0)&&dispatch(actionCreator.getList());
			// 相当于   if(list.size===0){dispatch(actionCreator.getList())}	
			dispatch(actionCreator.searchFocus());
		},
		handleInputBlur(){
			dispatch(actionCreator.searchBlur());
		},
		handleMouseEnter(){
			dispatch(actionCreator.mouseEnter());
		},
		handleMouseLeave(){
			dispatch(actionCreator.mouseLeave());	
		},
		handleChangePage(page,totalPage,spin){
			// 通过ref 获取dom 的style值，截取度数
			const originAngle=spin.style.transform.replace(/[^0-9]/ig,"");
			spin.style.transform=`rotate(${Number(originAngle)+360}deg)`;
			if(page<totalPage){
				dispatch(actionCreator.changePage(page+1));	
			}else{
				dispatch(actionCreator.changePage(1));	
			}
			
		},
		handleLayout(){
			dispatch(loginActionCreator.handleLayout());
		}
	}	
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);