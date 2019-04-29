import React from "react"
import Loadable from 'react-loadable';
import { Spin } from 'antd';
let container = {
	textAlign:"center",
	marginTop:200
};
const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading(){
		return (
			<div style={container}>
				<Spin tip="Loading..." size="large">
				</Spin>
			</div>
		)
	}
});

export default class App extends React.Component {
  render() {
    return <LoadableComponent/>;
  }
}