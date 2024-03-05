import * as constants from './constants'
import {fromJS} from 'immutable'

const defaultstate=fromJS({
    focused:false,
    mousein:false,
    list:[],
    page:1,
    totalpage:1
   })
   
   export default (state=defaultstate,action)=>{
       if(action.type===constants.SEARCH_FOCUS){
         return state.set('focused',true)
       }
       if(action.type===constants.SEARCH_BLUR){
        return state.set('focused',false)
         }
         if(action.type===constants.CHNAGE_LIST){
            return state.merge({
              list:action.data,
              totalpage:action.totalpage
            })
          /* return state.set('list',action.data).set('totalpage',action.totalpage) */
           }
           if(action.type===constants.MOUSE_ENTER){
            return state.set('mousein',true)
             }
             if(action.type===constants.MOUSE_LEAVE){
              return state.set('mousein',false)
               }
               if(action.type===constants.CHANGE_PAGE){
                return state.set('page',action.page)
                 }
   return state;
   }