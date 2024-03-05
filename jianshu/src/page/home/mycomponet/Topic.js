import  React,{PureComponent}  from 'react'
import {TopicWrapper,Topicitem} from '../style'
import {connect} from 'react-redux'

class Topic extends PureComponent{
 render(){
     return (
         <TopicWrapper>
             {
              this.props.list.map((item)=>{
                    return <Topicitem key={item.get('id')}>{item.get('title')}</Topicitem >
                         }) 
             }
         
         </TopicWrapper>

     )
 }

}
const mapState=(state)=>({
 list:state.getIn(['home','topiclist'])
})

export default connect(mapState,null)(Topic);