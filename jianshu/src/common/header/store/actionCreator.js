import * as constants from './constants'
import axios from 'axios'
import {fromJS} from 'immutable'

const changelist=(data)=>({
    type:constants.CHNAGE_LIST,
    totalpage:Math.ceil(data.length/10),
    data:fromJS(data)
   
})

export const searchFous=()=>({
type:constants.SEARCH_FOCUS
});

export const searchBlur=()=>({
    type:constants.SEARCH_BLUR
})


export const Getlist=()=>{
   return (dispatch)=>{
       axios.get('/api/headerlist.json').then((res)=>{
            const data=res.data.data;
        dispatch(changelist(data))
       }).catch(()=>{
           console.log('error')
       })
   }
}

export const mouse=()=>({
    type:constants.MOUSE_ENTER
    });

export const mleave=()=>({
        type:constants.MOUSE_LEAVE
        });
export const  changepagelist=(page)=>({
            type:constants.CHANGE_PAGE,
            page:page
            });
       