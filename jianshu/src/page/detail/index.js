import  React,{PureComponent}  from 'react'
import { DetailWrapper,Header,Content} from './style'
import {connect} from 'react-redux'
import * as actionCreator from './store/actionCreator'
class Detail extends PureComponent{
 render(){
     console.log(this.props.match.params.id)
     const {title,content}=this.props;
     return (
         <DetailWrapper>
             <Header>{title}</Header>
             <Content dangerouslySetInnerHTML={{__html:content}}>
             </Content>
         </DetailWrapper>
     )
 }
componentDidMount(){
    this.props.getdetail(this.props.match.params.id);
}
}
const mapstate=(state)=>({
    title:state.getIn(['detail','title']),
    content:state.getIn(['detail','content'])
})
const mapdispatch=(dispatch)=>({
getdetail(id){
dispatch(actionCreator.getdetail(id))
}
})
export default connect(mapstate,mapdispatch)(Detail);