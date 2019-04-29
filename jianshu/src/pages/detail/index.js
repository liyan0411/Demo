import React,{Component} from "react";
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import { DetailWrapper,DetailTitle,Author,ShowContent } from "./style.js";
import { actionCreator } from "../detail/store/index.js";

class Detail extends Component {
	render(){
		const {title,detailList,dataTime} = this.props;
		return (
			<DetailWrapper>
				<DetailTitle>{title}</DetailTitle>
				<Author>
					<span className="avatar pointer">
							<img src="http://upload.jianshu.io/users/upload_avatars/16146927/833afa24-ffaf-4b58-bbd0-206b83226c01.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" alt="96"/>
					</span>
					<div className="info">
            <span className="name pointer">玄占堂</span>
            <span className="btn btn-success follow pointer"><i className="iconfont iconbaseline-add-px"></i><span>关注</span></span>
            <div className="meta">
                <span className="publish-time" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="最后编辑于 {dataTime}">{dataTime}</span>
              <span className="wordage">字数 537</span>
            <span className="views-count">阅读 662</span><span className="comments-count">评论 1</span><span className="likes-count">喜欢 14</span></div>
          </div>
				</Author>
				<ShowContent dangerouslySetInnerHTML={{__html:detailList}}/>
			</DetailWrapper>
		)
	}
	componentDidMount(){
		const ids=this.props.match.params.id;
		this.props.getDetails(ids);
	}
}
const mapState=(state)=>({
	title:state.getIn(["detail","title"]),
	detailList:state.getIn(["detail","detailList"]),
	dataTime:state.getIn(["detail","dataTime"]),
})
const mapDispatch=(dispatch)=>({
	getDetails(ids){
		dispatch(actionCreator.getDetails(ids));
	}
})
export default connect(mapState,mapDispatch)(withRouter(Detail));