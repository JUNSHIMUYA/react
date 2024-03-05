
import {fromJS} from 'immutable'
import * as constant from './constant'
const defaultstate=fromJS({
  title:'',
  content:''
   })
   
export default (state=defaultstate,action)=>{
    if(action.type===constant.CHANGEDETAIL){
       return state.merge(
          {
             title:action.title,
             content:action.content
          }
       )
    }
   return state;
   }
   
   