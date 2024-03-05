import  React,{PureComponent}  from 'react'
import {connect} from 'react-redux'
import {LoginWrapper, LoginBox,Input,Button} from './style'
import {actionCreator} from './store/index'
import {Redirect} from 'react-router-dom'
class Login extends PureComponent{
 render(){
     const {logins}=this.props
     if(!logins){
        return (
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder='账号' ref={(input)=>{this.account=input}}></Input>
                    <Input placeholder='密码' type='password' ref={(input)=>{this.password=input}}></Input>
                    <Button onClick={()=>this.props.login(this.account,this.password)}>登录</Button>
                </LoginBox>
                </LoginWrapper>
              )
     }else
     {
return <Redirect to='/'></Redirect>
     }
    
 }

}

const mapstate=(state)=>({
   logins:state.getIn(['login','login'])
    })

const mapdispatch=(dispatch)=>({
login(a,p){
    dispatch(actionCreator.login(a.value,p.value))
}
})

export default connect(mapstate,mapdispatch)(Login);

