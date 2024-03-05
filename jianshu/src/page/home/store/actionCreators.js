import axios from 'axios'
import * as constant from './constant'
import {fromJS} from 'immutable'
const changehomedata=(result)=>({
    type:constant.HOMELIST,
    topiclist:result.topiclist,
    articlelist:result.articlelist,
    recommendlist:result.recommendlist
})

const addhomelist=(list,nextpage)=>({
    type:constant.ADDHOMELIST,
   list:fromJS(list),
   nextpage
})

export const gethomeinfo=()=>{
    return (dispatch)=>{
        axios.get('/api/home.json').then((res)=>{
            const result=res.data.data
            console.log(result)
            console.log(result.articlelist)
            console.log(result.recommendlist)
            const action=changehomedata(result)
            dispatch(action)
           
         })
    }
}

export const getMorelist=(page)=>{
    return (dispatch)=>{
        axios.get('/api/homelist.json?page='+page).then((res)=>{
            const result=res.data.data
            console.log(result)
            const action=addhomelist(result,page+1)
            dispatch(action)
         })
    }
}

export const Topshow=(show)=>({
type:constant.TOPCHANGE,
show
})