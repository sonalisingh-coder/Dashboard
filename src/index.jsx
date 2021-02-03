import React, { Fragment,useState } from 'react'
import ReactDOM from 'react-dom';
import './index.scss';
import store from './store'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import App from './components/app'
import { CSSTransition,TransitionGroup } from 'react-transition-group'
import {routes} from './route';
//import ConfigDB  from './data/customizer/config'



const Root = () =>  {

  const [anim, setAnim] = useState("");
  //const animation = localStorage.getItem("animation") || ConfigDB.data.router_animation || 'fade'

 

    return(
      <Fragment>
      
        <Provider store={store}>
        <BrowserRouter basename={`/`}>
        <Switch>   
          <App>

          <Route exact path={`/`} render={() => {
              return (<Redirect to={`dashboard`} />)
          }} /> 
          <TransitionGroup>
              {routes.map(({ path, Component }) => (
                <Route key={path}  exact  path={`${path}`}>
                    {({ match }) => (
                        <CSSTransition 
                          in={match != null}
                          timeout={100}
                          classNames={anim} 
                          unmountOnExit>
                          <div><Component/></div>
                        </CSSTransition> 
                    )}
                </Route>
                ))}
          </TransitionGroup> 
          
          </App>
      
        </Switch>
        </BrowserRouter>
     
        </Provider>
      </Fragment>
      )
}

ReactDOM.render(<Root/>,
  document.getElementById('root')
);
serviceWorker.unregister();
