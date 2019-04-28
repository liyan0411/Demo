import React,{Component} from "react";
import { DetailWrapper,DetailTitle,Author,ShowContent } from "./style.js";
class Detail extends Component {
	render(){
		return (
			<DetailWrapper>
				<DetailTitle>你有没有偏财运，看面相就知道了</DetailTitle>
				<Author>
					<span className="avatar pointer">
							<img src="http://upload.jianshu.io/users/upload_avatars/16146927/833afa24-ffaf-4b58-bbd0-206b83226c01.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" alt="96"/>
					</span>
					<div className="info">
            <span className="name pointer">玄占堂</span>
            <span className="btn btn-success follow pointer"><i className="iconfont iconbaseline-add-px"></i><span>关注</span></span>
            <div className="meta">
                <span className="publish-time" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="最后编辑于 2019.03.07 15:24">2019.03.07 15:13*</span>
              <span className="wordage">字数 537</span>
            <span className="views-count">阅读 662</span><span className="comments-count">评论 1</span><span className="likes-count">喜欢 14</span></div>
          </div>
				</Author>
				<ShowContent>
          <div className="show-content-free">
            <p>武侠翻拍年年有，今年貌似特别多，除了目前在播的新版《倚天屠龙记》，新版《神雕侠侣》和《天龙八部》等金庸剧也已拍摄完毕。除了金庸，其实还有一个人的武侠作品也深受导演们的喜爱，他就是和金庸、梁羽生并称为“中国武侠小说三大宗师”之一的古龙。今天我们要说的，便是翻拍自古龙经典武侠小说的新版《绝代双骄》。</p>

        	</div>
					<div className="image-package">
						<div className="image-view" data-width="1024" data-height="683">
							<img src="http://upload-images.jianshu.io/upload_images/2289219-f8df0302143b4ebe?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp" alt="123"/>
						</div>
					</div>
				</ShowContent>
			</DetailWrapper>
		)
	}
}
export default Detail;