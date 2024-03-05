import  React,{PureComponent}  from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
class Writer extends PureComponent{
 render(){
     const {logins}=this.props
     if(logins){
        return(<div>写文章</div>)
     }else
     {
return <Redirect to='/login'></Redirect>
     }
    
 }

}

const mapstate=(state)=>({
   logins:state.getIn(['login','login'])
    })



export default connect(mapstate,null)(Writer);

