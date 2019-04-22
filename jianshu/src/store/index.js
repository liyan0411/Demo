import { createStore } from "redux";
import reducer from "./reducer";
// redux-devtools-extension    调试工具
const store=createStore(reducer);
export default store;