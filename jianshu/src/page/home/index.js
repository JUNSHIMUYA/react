import  React,{PureComponent}  from 'react';
import {HomeWrapper,Homeleft,Homeright,BackTop} from './style';
import MyList from './mycomponet/MyList.js';
import Writer from './mycomponet/Writer';
import MyRecomment from './mycomponet/MyRecomment';
import Topic from './mycomponet/Topic';
import {actionCreator} from './store/index'
import {connect} from 'react-redux'
class Home extends PureComponent{
   

   handletop(){
      window.scrollTo(0,0);
   }
 render(){
     return (
        <HomeWrapper>
           <Homeleft>
           <Topic></Topic>
           <MyList></MyList>
           </Homeleft>
           <Homeright>
           <MyRecomment></MyRecomment> 
            <Writer></Writer>
           </Homeright>
           {this.props.show? <BackTop onClick={this.handletop}>回到顶部</BackTop>:null}
           
        </HomeWrapper>
     )
 }
componentDidMount(){
   this.props.changehomedata();
   this.bindEvents();
}
componentWillUnmount(){
   window.removeEventListener('scroll',this.props.changeTopshow)
}


bindEvents(){
   window.addEventListener('scroll',this.props.changeTopshow)
}
}

const mapstate=(state)=>({
show:state.getIn(['home','show'])
})

const mapdispatch=(dispatch)=>({
changehomedata(){
  const action=actionCreator.gethomeinfo()
  dispatch(action)
},
changeTopshow(){
if(document.documentElement.scrollTop>400){
   const action=actionCreator.Topshow(true)
   dispatch(action)
}else{
   const action=actionCreator.Topshow(false)
   dispatch(action)
}
}
})

export default connect(mapstate,mapdispatch)(Home);