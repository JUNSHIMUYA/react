import React,{Component,Fragment} from 'react';
import { Globalstyle } from './style'
import {Globalstyle1} from './static/iconfont/iconfont'
import Header  from './common/header/index.js'
import store from './store/index'
import {Provider } from 'react-redux'
import {BrowserRouter,Route} from 'react-router-dom'
import Home  from './page/home/index'
import Detail  from './page/detail/index'
import Login  from './page/login/index'
import Writer  from './page/writer/index'
class App extends Component {
  render(){
    return(
      <Fragment>
      <Globalstyle>
      </Globalstyle>
      <Globalstyle1></Globalstyle1>
      <Provider store={store}>
      <BrowserRouter>
      <div>
        <Header/>
         <Route path='/' exact component={Home}> </Route>
         <Route path='/login' exact component={Login}> </Route>
         <Route path='/detail/:id' exact component={Detail}> </Route>
         <Route path='/writer' exact component={Writer}> </Route>
      </div>
      </BrowserRouter>
      </Provider>
      </Fragment>
    )
    
  }
}

export default App;
