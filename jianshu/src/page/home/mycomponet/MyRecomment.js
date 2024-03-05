import  React,{PureComponent}  from 'react'
import {Recommend,Recommenditem} from '../style'
import {connect} from 'react-redux'

class MyRecomment extends PureComponent{
 render(){
     return (
         <Recommend>
             {
             this.props.list.map((item)=>{
                 return (
<Recommenditem imgurl={item.get('imgurl')} key={item.get('id')} />
                 )
             })
             }
             
             
             
         </Recommend>
             )
         
 }

}
const mapstate=(state)=>({
  list:state.getIn(['home','recommendlist'])  
})
export default connect(mapstate,null)(MyRecomment);
