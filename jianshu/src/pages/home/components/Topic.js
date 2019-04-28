import React,{PureComponent} from "react";
import { connect } from "react-redux";
import { TopicWrapper,TopicItem } from "../style";
// import { actionCreator } from "./store"
class Topic extends PureComponent {
	
	render(){
		const { TopicList } =this.props;
		const newArr=TopicList.toJS();
		return (
			<TopicWrapper>
				{
					newArr.map((item)=>{
						return (
							<TopicItem className="pointer" key={item.id}>
								<img
									className="topic-pic"
									src={item.imgUrl}
									alt={item.title}
								/>
								{item.title}
							</TopicItem>
						)
					})
				}
			</TopicWrapper>
		)
	}
}
const mapStateToProps =(state)=>{
	return {
		TopicList:state.getIn(["home","TopicList"])
	}
}
const mapDispatchToProps=(dispatch)=>{
	return {

	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Topic);