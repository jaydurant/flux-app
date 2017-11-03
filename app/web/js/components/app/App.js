import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link, NavLink, withRouter, Switch, Route } from 'react-router-dom';
import {checkLoggedIn} from '../../actions';
import FluxHelpers from 'flux-sdk-helpers';
import FluxSdk from 'flux-sdk-browser';
import config from '../../utility/config';
import RouteWithSubRoutes from '../../routes/RouteWithSubRoutes';
import routes from '../../routes';


class App extends Component{
    constructor(props){
        super(props);
        this.sdk =  new FluxSdk(config.flux_client_id, { redirectUri: config.url, fluxUrl: config.flux_url });
        this.helpers = new FluxHelpers(this.sdk);
        this.redirectToFluxLogin = this.redirectToFluxLogin.bind(this);
        this.title = 'FLUX - TEST APP';

    }

    redirectToFluxLogin(){
        return this.helpers.redirectToFluxLogin();
    }

    componentDidMount(){
        const {dispatch} = this.props;
        
        
        dispatch(checkLoggedIn(this.helpers));

        
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.loginStatus && (nextProps.location.pathname == '/' || nextProps.location.pathname == '/app' )){
            const { history } = this.props;
            if(nextProps.location.pathname != '/app'){
                 history.push('/app');
            }
           
            return true;
        } else{

            return false;
        }
        
    }

    render(){
        const {loginStatus,history } = this.props;
        console.log(this.redirectToFluxLogin);
        
        return (
            <div>
                <h1>{this.title}</h1>
                <section>
                  <RouteWithSubRoutes {...routes.app}  helper={this.helpers} />
                  <RouteWithSubRoutes {...routes.login} redirectToLogin={this.redirectToFluxLogin} />
                </section>
            </div>
        );
    }
}

function mapStateToProps(state){
    const {loginStatus} = state;
    return state;
}

export default withRouter(connect(mapStateToProps)(App));