import styled from "styled-components";
export const HomeWrapper=styled.div`
	overflow:hidden;
	width:960px;
	margin:0 auto;
`;
export const HomeLeft=styled.div`
	width:625px;
	margin-left:15px;
	padding-top:30px;
	float:left;
	.banner-img{
		width:625px;
		height:270px;
	}
`;
export const HomeRight=styled.div`
	width:280px;
	float:right;
`;
export const TopicWrapper=styled.div`
	padding:20px 0 10px 0;
	overflow:hidden;
	border-bottom:1px solid #dcdcdc;
`
export const TopicItem=styled.div`
	border:1px solid #dcdcdc;
	float:left;
	background:#f7f7f7;
	height:32px;
	line-height:32px;
	box-sizing:border-box;
	padding:0 3px 0 0;
	margin:0 0 13px 18px;
	font-size:14px;
	color:#000;
	border-radius:4px;
	.topic-pic{
		display:block;
		float:left;
		width:32px;
		height:30px;
		margin-right:10px;
	}
`
export const ListItem=styled.div`
	overflow:hidden;
	padding:20px 0;
	border-bottom:1px solid #dcdcdc;
	.pic{
		display:block;
		float:right;
		width:125px;
		height:100px;
	}
`
export const ListInfo=styled.div`
	width:500px;
	float:left;
	.title{
		line-height:27px;
		font-size:18px;
		font-weight:bold;
		color:#333;
	}
	.desc{
		font-size:13px;
		line-height:24px;
		color:#999;
	}
`
export const RecommendWrapper=styled.div`
	margin:30px 0;
	width:280px;

`
export const RecommendItem=styled.div`
	width:100%;
	height:50px;
	margin-bottom: 6px;
	border-radius: 4px;
	background:url(${(props)=>props.imgUrl});
	background-size:contain;

`
export const WriterWrapper=styled.div`
	width:278px;
	border:1px solid #dcdcdc;
	height:300px;
	line-height:300px;
	text-align:center;

`
export const LoadMore=styled.div`
	width:100%;
	height:40px;
	line-height:40px;
	background:#a5a5a5;
	text-align:center;
	border-radius:20px;
	color:#fff;
	margin:20px 0;
`
export const BackTop=styled.div`
	position:fixed;
	bottom:50px;
	right:50px;
	text-align:center;
	color: #409EFF;
	font-size:24px;
`
export const QrCode=styled.div`
	position:relative;
	box-sizing:border-box;
	margin-bottom: 30px;
	padding: 10px 22px;
	width: 100%;
	border: 1px solid #f0f0f0;
	border-radius: 6px;
	background-color: #fff;
	>.imgs{
		width: 60px;
    height: 60px;
		opacity: .85;
		vertical-align: middle;
	}
	>.info{
		display: inline-block;
    vertical-align: middle;
		margin-left: 7px;
		>.title{
			font-size: 15px;
			color: #333;
			.iconfont{
				color: #333;
				font-size: 14px;
			}
		}
		>.description{
			margin-top: 4px;
			font-size: 13px;
			color: #999;
		}
	}
	>.tooltips{
		width:250px;
		height:250px;
		background:#fff;
		border-radius:4px;
		text-align:center;
		box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
		position:absolute;
		top:-240px;
		left:15px;
		z-index:888;
		>img{
			margin-top:5px;
		}
		:before {
			content: "";
			left: 27px;
			width: 10px;
			height: 10px;
			transform: rotate(45deg);
			-ms-transform: rotate(45deg);
			-webkit-transform: rotate(45deg);
			top: -5px;
			z-index: -1;
		}
		:after {
			content: "";
			position: absolute;
			width: 0;
			height: 0;
			border: 12px solid transparent;
			border-top-color: #fff;
			left: 20px;
			bottom: -24px;
		}
	}
`