import axios from 'axios'
import * as constant from './constant'
import {fromJS} from 'immutable'

const changedetail=(title,content)=>({
   type:constant.CHANGEDETAIL,
   title:fromJS( title),
   content:fromJS(content)
})

export const getdetail=(id)=>{
    return (dispatch)=>{
axios.get('/api/detail.json?id='+id).then((res)=>{
    const result=res.data.data
    console.log(result.title)
    dispatch(changedetail(result.title,result.content))
})
    }
}