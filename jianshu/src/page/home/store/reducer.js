
import {fromJS} from 'immutable'
import * as constant from './constant'
const defaultstate=fromJS({
  topiclist:[],
  articlelist:[],
  recommendlist:[],
  articlepage:1,
  show:false
   })
   
export default (state=defaultstate,action)=>{
     if(action.type===constant.HOMELIST){
      console.log(action.recommendlist)
       return  state.merge({
          topiclist:fromJS(action.topiclist),
          articlelist:fromJS(action.articlelist),
          recommendlist:fromJS(action.recommendlist)
        }) 
     }
     if(action.type===constant.ADDHOMELIST){
      
      return  state.merge({
        'articlelist': state.get('articlelist').concat(action.list),
        'articlepage':action.nextpage
      }) 
    }
    if(action.type===constant.TOPCHANGE){
      
      return  state.set('show',action.show)
    }
   return state;
   }
   