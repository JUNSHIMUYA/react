import  React,{PureComponent}  from 'react'
import {Listitem,Listinfo,Loadmore} from '../style'
import {connect} from 'react-redux'
import {actionCreator} from '../store';
import {Link} from 'react-router-dom'
class MyList extends PureComponent{
 render(){
     const {list,getmorelist,page}=this.props
     return (
         <div>
             {
                 list.map((item,index)=>{
                    return(
                        <Link key={index} to={'/detail/'+item.get("id")}>
                        <Listitem >
                        <img className='pic' src={item.get("imgurl")} alt=''></img>
                      <Listinfo>
                          <h3 className='title'>{item.get("title")}</h3>
                          <p className='desc'>{item.get("desc")}</p>
                      </Listinfo>
                      </Listitem>
                      </Link>
                    );
                 })
             }
       <Loadmore onClick={()=>getmorelist(page)}>更多文章</Loadmore>
         </div>
     )
 }

}

const mapstate =(state)=>(
    {
     list:state.getIn(['home','articlelist']),
     page:state.getIn(['home','articlepage'])
    }
)
const mapdispatch=(dispatch)=>({
getmorelist(page){
dispatch(actionCreator.getMorelist(page))
}
})
export default connect(mapstate,mapdispatch)(MyList);

