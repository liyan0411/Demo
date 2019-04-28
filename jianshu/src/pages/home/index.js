import React, { PureComponent } from "react";
import {connect} from "react-redux"
import Topic from "./components/Topic"
import List from "./components/List"
import Writer from "./components/Writer"
import Recommend from "./components/Recommend"
import { HomeWrapper, HomeLeft, HomeRight,BackTop } from "./style.js";
import {actionCreator} from "./store"
class Home extends PureComponent {
  handleScrollTop(){
    window.scrollTo(0,0);
  }
  render() {
    const {showScroll}=this.props;
    return (
      <div>
        <HomeWrapper>
          <HomeLeft>
            <img
              className="banner-img"
							src="https://upload.jianshu.io/admin_banners/web_images/4645/2082eac837471d244b9d319da17bdf5580db9ff0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
							alt="banner"
            />
						<Topic></Topic>
						<List></List>
          </HomeLeft>
          <HomeRight>
						<Recommend></Recommend>
						<Writer></Writer>
					</HomeRight>
          {
            showScroll?<BackTop className="pointer iconfont icon12" onClick={this.handleScrollTop}></BackTop>:null
          }
          
        </HomeWrapper>
      </div>
    );
  }
  componentDidMount(){
    this.props.changeHomeData();
    this.bindEvents();
  }
  componentWillUnmount(){
    window.removeEventListener("scroll",this.props.handleScrollTopShow);
  }
  bindEvents(){
    window.addEventListener("scroll",this.props.handleScrollTopShow);
  }
}
const mapState=(state)=>({
  showScroll:state.getIn(["home","showScroll"])

})
const mapDispatch = (dispatch)=>({
  changeHomeData(){
    const action=actionCreator.getHomeInfo();
    dispatch(action);
  },
  handleScrollTopShow(){
    let scrollTops=document.documentElement.scrollTop;
    if(scrollTops>400){
      dispatch(actionCreator.toggleTops(true));
    }else{
      dispatch(actionCreator.toggleTops(false));
    }
    
  }
})
export default connect(mapState,mapDispatch)(Home);
