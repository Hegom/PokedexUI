import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';
import * as actionCreators from '../../redux/actions/';

class Results extends Component {
    constructor(props) {
        super(props);
        this.goTo = this.goTo.bind(this);
    }

    componentDidMount() {
        const {
            getAllPoke,            
        } = this.props;
        getAllPoke();
    } 

    goTo(path) {
        this.props.history.push(path);
    }    

    render() {
        const {
            text,
            list,
            getAllPoke,
        } = this.props;
        return (
            <Page
                getAllPoke={getAllPoke}
                results={list}
                goTo={this.goTo}
                text={text}
            />
        );
    }
}

const mapStateToProps=(state)=>{
    return state
};

export default connect (mapStateToProps, actionCreators)(Results);