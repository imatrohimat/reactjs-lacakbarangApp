import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { NavigationBar } from './Components/NavigationBar';
import Logout from './Components/Logout';
import Admin from './Components/Admin';
import { Footer } from './Components/footer';


class App extends Component {
    render () {
        return (
            // <React.Fragment>
                <Router>
                <NavigationBar/>
                {/* <Layout>   */}
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/logout" component={Logout}/>
                        <Route path="/admin" component={Admin}/>
                        <Route component={NoMatch}/>
                    </Switch>
                    {/* </Layout> */}
                    <Footer/>
                </Router>
            // </React.Fragment>
        );
    }
}
export default App; 