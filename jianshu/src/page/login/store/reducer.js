
import {fromJS} from 'immutable'
import * as constant from './constant'
const defaultstate=fromJS({
 login:false
   })
   
export default (state=defaultstate,action)=>{
    if(action.type===constant.CHANGELOGIN){
       return state.set('login',action.value)
    }
    if(action.type===constant.LOGOUT){
      return state.set('login',action.value)
   }
   return state;
   }
   