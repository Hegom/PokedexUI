import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';
import * as actionCreators from '../../redux/actions/';

class Details extends Component {
    constructor(props) {
        super(props);
        this.goTo = this.goTo.bind(this);
    }    

    componentDidMount() {
        const {
            match: { params: { itemId } },
            findItem,            
        } = this.props;

        findItem(itemId);
    } 

    goTo(path) {
        this.props.history.push(path);
    }

    render() {
        const {
            match: { params: { itemId } },
            item
        } = this.props;

        return (
            <Page
                currentItem={item}
                goTo={this.goTo}
                itemId={itemId}
            />
        );
    }
}

const mapStateToProps=(state)=>{
    return state
};

export default connect (mapStateToProps, actionCreators)(Details);