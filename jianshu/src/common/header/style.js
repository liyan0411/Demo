import styled from "styled-components";

import logoPic from "../../statics/images/nav-logo.png";
export const HeaderWrapper=styled.div`
	height:58px;
	border-bottom:1px solid #f0f0f0;
	position:relative;
`;
export const Logo=styled.a`
	position:absolute;
	top:0;
	left:0;
	display:inline-block;
	width:100px;
	height:56px;
	background:url(${logoPic});
	background-size:contain;
`;
export const Nav=styled.div`
	width:960px;
	height:100%;
	padding-right:70px;
	box-sizing:border-box;
	margin:0 auto;
`;
export const NavItem=styled.div`
	line-height:56px;
	font-size:17px;
	padding:0 15px;
	color:#333;
	&.left{
		float:left;
	}
	&.right{
		float:right;
		color:#969696;
	}
	&.active{
		color:#ea6f5a;
	}
`;
export const SearchWipper=styled.div`
	float:left;
	position:relative;

	.iconfont{
		position:absolute;
		right:20px;
		top:14px;
		width:30px;
		border-radius:15px;
		text-align:center;
		line-height:30px;
		&.focused{
			background:#777;
			color:#fff;
		}
	}
	
`
export const NacSearch=styled.input.attrs({
	placeholder:"搜索"
})`
	width:160px;
	height:38px;
	margin:9px 20px;
	padding:0 25px 0 20px;
	box-sizing:border-box;
	border:0;
	outline:none;
	border-radius:19px;
	background:#eee;
	font-size:14px;
	color:#666;
	&::placeholder{
		color:#999;
	}
	&.focused{
		width:240px;
	}
	&.slide-enter{
		transition:all .2s ease-out;
	}
	&.slide-enter-active{
		width:240px;
	}
	&.slide-exit{
		transition:all .2s ease-out;
	}
	&.slide-exit-active{
		width:160px;
	}
`
export const Addition=styled.div`
	position:absolute;
	right:0;
	top:0;
	height:56px;
`
export const Button = styled.div`
 float:right;
 line-height:38px;
 border-radius:19px;
 padding:0 20px;
 margin:9px 20px 0 0;
 border:1px solid #ec6149;
 font-size:14px;
 cursor:pointer;
 &.reg{
	 color:#ec6149;
 }
 &.writting{
	 color:#fff;
	 background:#ec6149;
 }
`
export const SearchInfo=styled.div`
 width:240px;
 left:20px;
 top:56px;
 position:absolute;
 padding:0 10px 10px 10px;
 background:#fff;
 box-shadow:0 0 8px rgba(0,0,0,.2);
`
export const SearchTitle=styled.div`
	 color:#969696;
	 margin:15px 0;
	 line-height:20px;
	 font-size:14px;
`
export const SearchInfoSwitch=styled.span`
 	font-size:13px;
 	float:right;
`
export const SearchInfoItem=styled.a`
	display:block;
	float:left;
	margin:0 10px 10px 0;
	line-height:20px;
	border:1px solid #ddd;
 	font-size:12px;
	 padding:0 5px;
	 color:#333;
	 border-radius:3px;
`

export const SearchInfoList=styled.div`
	overflow:hidden;
`
