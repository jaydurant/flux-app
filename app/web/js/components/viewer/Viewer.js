import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getData} from '../../actions';
import { Link, NavLink, withRouter, Switch, Route } from 'react-router-dom';


class Viewer extends Component {

    constructor(props){
        super(props);
        this.viewport; 

    }

    componentDidMount(){
        const {dispatch,helper} = this.props;
        dispatch(getData(helper));
        this.viewport = new FluxViewport(document.querySelector("#view"));
        this.viewport.setupDefaultLighting();
    }

    shouldComponentUpdate(nextProps, nextState){
       if(nextProps.data.value.length > 0){
            this.viewport.setGeometryEntity(nextProps.data.value);
            return true;
       } else{
        return false;
       }
        
    }

    render(){

        return (
            <div id="geometry">
                <div id="view">
                </div>
            </div>
        );
    }

}

function mapStateToProps(state){
    const {data} = state;
    return state;
}

export default withRouter(connect(mapStateToProps)(Viewer));