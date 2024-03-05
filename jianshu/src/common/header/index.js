import React ,{Component}from 'react';
import {HeaderWrapper,Logo,Nav,NavItem,
    NavSearch,Addition,Button,SearchWrapper,
    SearchInfo,SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList

} from './style';
import {CSSTransition}  from 'react-transition-group';
import {connect} from 'react-redux';
import {actionCreators}  from './store'
import {Link} from 'react-router-dom'
import {actionCreator as loginac} from '../../page/login/store'

class Header extends Component{
    getlist(){
      const {list,page,totalpage,focused,mousein,mouseenter,mouseleave,changepage}=this.props
        const pagelist=[]
        const newlist=list.toJS()
        if(newlist.length){
        for(let i=(page-1)*10;i<page*10;i++){
          pagelist.push(
          <SearchInfoItem key={newlist[i]}>{newlist[i]}</SearchInfoItem>
          )
        }}
        if(focused||mousein){
            return(
                <SearchInfo
                 onMouseEnter={mouseenter}
                 onMouseLeave={mouseleave}
                 >
                    <SearchInfoTitle>
                     热门搜索
                     <SearchInfoSwitch onClick={()=>{
                         changepage(page,totalpage,this.spinIcon)}}>
                             <span ref={(icon)=>{this.spinIcon=icon}} className="iconfont spin" >&#xe606;</span>
                             换一批
                             </SearchInfoSwitch>
                     </SearchInfoTitle>
                     <SearchInfoList>
                            {
                                pagelist
                               /*  React.Children.map(this.props.list,(item)=>{
                                    return <SearchInfoItem >{item}</SearchInfoItem>
                                         }) */
                             /* this.props.list.map((item)=>{
                        return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                             }) */
                            }
   
   </SearchInfoList>
                   
                  </SearchInfo>
            )
        }
            else{
               return null;
            }
        }
    
 render(){
    const {focused,handleinputblur,handleinputfocuse,list,login,logout}=this.props
return(
    <HeaderWrapper>
              <Link to='/'>
                 <Logo  />
                 </Link>
                 <Nav>
                  <NavItem className='left active'>首页</NavItem>
                  <NavItem className='left'>下载App</NavItem>
                  {
                      login? 
                      <NavItem className='right' onClick={logout}>退出</NavItem>:
                      <Link to='/login'><NavItem className='right'>登录</NavItem></Link>
                  }
                 
                  <NavItem className='right'><span className="iconfont">&#xe636;</span></NavItem>
                  <SearchWrapper>
                   <CSSTransition
                   timeout={200}
                   in={focused}
                   className="slide"
                   >
                       <div>
                   <NavSearch
                  className={focused?'focused':''}
                  onFocus={()=>handleinputfocuse(list)}
                  onBlur={handleinputblur}
                  ></NavSearch>
                 <span className={focused?'focused iconfont zoom':'iconfont zoom'} >&#xe62b;</span>
                 </div>
                  </CSSTransition>
                  {this.getlist()}
                  </SearchWrapper>
                 </Nav>
                 <Addition>
                     <Link to='/writer'>
                     <Button className='writting'><span className="iconfont">&#xe624;</span>写文章</Button>
                     </Link>
                
                   <Button className='reg'>注册</Button>
                 </Addition>
             </HeaderWrapper>
        )

 }


}

const mapStateToProps=(state)=>{
return {
    focused:state.getIn(['header','focused']),
   /* focused:state.get('header').get('focused') */
   list:state.getIn(['header','list']),
   page:state.getIn(['header','page']),
   mousein:state.getIn(['header','mousein']),
   totalpage:state.getIn(['header','totalpage']),
   login:state.getIn(['login','login'])
}
}

const mapDispatchToProps=(dispatch)=>{
return{
    logout(){
        dispatch(loginac.logout())
    },
    handleinputfocuse(list){
        if(list.size===0){
        dispatch(actionCreators.Getlist())}
     dispatch(actionCreators.searchFous())
    },
    handleinputblur(){
        dispatch(actionCreators.searchBlur())
    },
    mouseenter(){
        dispatch(actionCreators.mouse())
    },
    mouseleave(){
        dispatch(actionCreators.mleave())
    },
    changepage(page,totalpage,spin){
        let oldangle=spin.style.transform.replace(/[^0-9]/ig,'');
       if(oldangle){
        oldangle=parseInt( oldangle,10);
       }else{
           oldangle=0;
       }
        spin.style.transform='rotate('+(oldangle+360)+'deg)'
      if(page<totalpage){
        dispatch(actionCreators.changepagelist(page+1))
      }
       else{
        dispatch(actionCreators.changepagelist(1))
       }
    }
}

}
export default connect(mapStateToProps,mapDispatchToProps)(Header);