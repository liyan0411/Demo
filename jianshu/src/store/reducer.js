import { combineReducers } from "redux-immutable";
import { reducer as headerReducer } from "../common/header/store"
import { reducer as homeReducer } from "../pages/home/store"
import { reducer as detailReducer } from "../pages/detail/store"
import { reducer as loginReducer } from "../pages/login/store"
// combineReducers 辅助函数的作用是，把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数，然后就可以对这个 reducer 调用 createStore。
const reducer=combineReducers({
	header:headerReducer,
	home:homeReducer,
	detail:detailReducer,
	login:loginReducer
})
export default reducer;