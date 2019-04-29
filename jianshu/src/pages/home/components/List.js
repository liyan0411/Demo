import React,{PureComponent,Fragment} from "react";
import { connect } from "react-redux";
import {ListItem,ListInfo,LoadMore} from "../style"
import {actionCreator} from "../store"
import {Link} from "react-router-dom"
class List extends PureComponent {
	toDetail(index){
		console.log(index)
		// this.context.router.push({
		// 	path:"/detail",
		// 	query:{
		// 		id:index
		// 	}
		// })
	}
	render(){
		const {articleList,getMoreList} = this.props;
		const newArticleList=articleList.toJS();
		return (
			<Fragment>
				{
					newArticleList.map((item,index)=>{
						return (
							<Link key={index} to={"/detail/"+index}>
								<ListItem className="pointer" onClick={()=>this.toDetail(index)}>
									<img className="pic" src={item.imgUrl} alt="img"/>
									<ListInfo>
										<h3 className="title">{index}:{item.title}</h3>
										<p className="desc">{item.desc}</p>
									</ListInfo>
								</ListItem>
							</Link>
							
						)
					})
				}
				<LoadMore className="pointer" onClick={()=>getMoreList()}>加载更多</LoadMore>
			</Fragment>
			
		)
	}
}
const mapStateToProps =(state)=>{
	return {
		articleList:state.getIn(["home","articleList"])
	}
}
const mapDispatchToProps=(dispatch)=>{
	return {
		getMoreList(){
			dispatch(actionCreator.getMoreList());
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(List);