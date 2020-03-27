import React from 'react';
import { Route, Redirect, Switch, useHistory } from "react-router-dom";
import Home from './components/home';
import Services from './components/services';
import Locations from './components/locations';
import Blog from './components/blog';
import Vehicles from './components/vehicles';
import Contact from './components/contact';
class Routing extends React.Component {
    render() {
        return (
            <div>
                 <Navigation history={useHistory()} />
                <Switch>
                    <PrivateRoute exact path="/homepage" component={Home}  />
                    <PrivateRoute exact path="/services" component={Services}  />
                    <PrivateRoute exact path="/locations" component={Locations}  />
                    <PrivateRoute exact path="/blog" component={Blog}  />
                    <PrivateRoute exact path="/vehicles" component={Vehicles}  />
                    <PrivateRoute exact path="/contact" component={Contact}  />
                </Switch>
            </div>
        )
    }
}
export default Routing;