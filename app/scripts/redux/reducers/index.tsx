import {combineReducers} from 'redux';
import loginReducers from './loginReducers/loginReducers';
var rootReducer = combineReducers({
  loginReducers:loginReducers
});
export default rootReducer;