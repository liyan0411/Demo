import React,{PureComponent} from "react";
import {connect} from "react-redux"
import {RecommendWrapper,RecommendItem,QrCode} from "../style"
import {actionCreator} from "../store"
class Recommend extends PureComponent {
	getCodeView(){
		const {showCode}=this.props;
		if(showCode){
			return (
				<div className="tooltips">
					<img width="240" height="240" className="imgs" src="http://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="二维码"/>
				</div>
			)
		}else{
			return null;
		}
	}
	render(){
		const {recommendList,handleMouseEnter,handleMouseLeave} = this.props;
		const newRecommendList=recommendList.toJS();
		return (
			<RecommendWrapper>
				{
					newRecommendList.map((item)=>{
						return (
							<RecommendItem className="pointer" key={item.id} imgUrl={item.imgUrl}></RecommendItem>
						)
					})
				}
				
				<QrCode
					className="pointer"
					onMouseEnter={()=>{handleMouseEnter()}}
					onMouseLeave={()=>{handleMouseLeave()}}
					>
					<img className="imgs" src="http://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="二维码"/>
					<div className="info">
						<div className="title">下载简书手机App <i className="iconfont iconnext"></i></div>
						<div className="description">随时随地发现和创作内容</div>
					</div>
					{this.getCodeView()}
				</QrCode>
			</RecommendWrapper>
		)
	}
}
const mapState=(state)=>({
	recommendList:state.getIn(["home","recommendList"]),
	showCode:state.getIn(["home","showCode"]),
})
const mapDispatch=(dispatch)=>({
	handleMouseEnter(){
		dispatch(actionCreator.toggleCodes(true))
	},
	handleMouseLeave(){
		dispatch(actionCreator.toggleCodes(false))
	}
})
export default connect(mapState,mapDispatch)(Recommend);