import axios from 'axios'
import * as constant from './constant'
import {fromJS} from 'immutable'

const changelogin=()=>({
    type:constant.CHANGELOGIN,
    value:true
})

export const login=(a,p)=>{
    return (dispatch)=>{
        axios.get('/api/login.json?account='+a+'&password='+p).then((res)=>{
            const result=res.data.data;
           if(result){
            dispatch(changelogin()) 
           }else{
               alert("登陆失败")
           }
           
         })
    }
}

export const logout=()=>({
    type:constant.LOGOUT,
    value:false
})


