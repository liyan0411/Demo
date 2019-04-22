import React, { Component,Fragment } from 'react';
import { Provider } from "react-redux";
import store from "./store"
import { GlobalStyle } from "./style.js";
import Header from "./common/header"
class App extends Component {
  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <GlobalStyle/>
          <div className="App txt">
            <Header></Header>
          </div>
        </Provider>
        
      </Fragment>
      
    );
  }
}

export default App;
