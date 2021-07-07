import React from 'react';

import {BrowserRouter,Route,Switch} from 'react-router-dom';

import NavBar from './NavBar';
import Home from './Home';
import Footer from './Footer';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience'
import Contact from './Contact'
import Page404 from './Page404'



//rendering the Routs //
class Router extends React.Component{
    render(){
        return(
           < BrowserRouter>
               <NavBar/>
               <div className="content">
                   <div className="content_cont">
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/Education" exact component={Education}/>
                            <Route path="/Skills" exact component={Skills}/>
                            <Route path="/Experience" exact component={Experience}/>
                            <Route path="/Contact" exact component={Contact}/>
                            <Route path="/" component={Page404} />
                            {/* <Route path="/xing" component={Redirect} loc="https://www.xing.com/profile/Bashar_Salman/cv"/> */}
                        </Switch>
                    </div>
                 <Footer/>
               </div>
               
           </BrowserRouter>
        )
    }
}

export default (Router)