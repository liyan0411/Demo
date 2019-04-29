import React, { Component,Fragment } from 'react';
import { Provider } from "react-redux";
import {BrowserRouter,Route} from "react-router-dom";
import store from "./store"
import { GlobalStyle } from "./style.js";
import Header from "./common/header";
import Home from "./pages/home"
// import Detail from "./pages/detail"
import Detail from "./pages/detail/loadable"
import Login from "./pages/login"
import Write from "./pages/write"
class App extends Component {
  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <GlobalStyle/>
            <BrowserRouter className="App txt">
              <Header></Header>
            {/* exact 路径完全匹配的时候才显示*/}
              <Route path="/" exact component={Home}></Route>
              <Route path="/login" exact component={Login}></Route>
              <Route path="/detail/:id" exact component={Detail}></Route>
              <Route path="/write" exact component={Write}></Route>
              
            </BrowserRouter>
        </Provider>
        
      </Fragment>
      
    );
  }
}

export default App;
