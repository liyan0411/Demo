import styled from "styled-components";
export const DetailWrapper=styled.div`
	overflow: hidden;
	margin: 0 auto;
	padding-top: 20px;
	padding-bottom: 40px;
	width: 620px;
`
export const DetailTitle=styled.h1`
	word-break: break-word!important;
	word-break: break-all;
	margin: 20px 0 0;
	font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
	font-size: 34px;
	font-weight: 700;
	line-height: 1.3;
`
export const Author=styled.div`
	margin: 30px 0 40px;
	>.avatar{
		width: 48px;
    height: 48px;
    vertical-align: middle;
		display: inline-block;
		>img{
			width: 100%;
			height: 100%;
			border: 1px solid #ddd;
			border-radius: 50%;
		}
	}
	>.info{
		vertical-align: middle;
    display: inline-block;
		margin-left: 8px;
		.meta span {
			padding-right: 5px;
			margin-top: 5px;
    	font-size: 12px;
    	color: #969696;
		}
		>.btn-success{
			margin-left:10px;
			border-radius: 40px;
			color: #fff;
			background-color: #42c02e;
			border-color: #42c02e;
			padding:0 8px;
			>.iconfont{
				font-size: 12px;
			}
			&.follow{
				border-color: #42c02e;
				
				font-size: 12px;
			}
		}
		
	}
	
`
export const ShowContent=styled.div`
	color: #2f2f2f;
	word-break: break-word!important;
	word-break: break-all;
	font-size: 16px;
	font-weight: 400;
	line-height: 1.7;
	>.show-content-free p{
    word-break: break-word!important;
    word-break: break-all;
	}
	.image-view{
		margin:20px 0;
		>img{
			max-width:100%;
		}
	}
`