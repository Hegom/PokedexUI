import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';

class Results extends Component {
    constructor(props) {
        super(props);
        this.goTo = this.goTo.bind(this);
    }

    goTo(path) {
        this.props.history.push(path);
    }

    render() {
        const {
            text,
            results,
        } = this.props;

        return (
            <Page
                results={results}
                goTo={this.goTo}
                text={text}
            />
        );
    }
}

const mapStateToProps = state => ({
    results: state.results,
});

export default withRouter(
    connect(mapStateToProps)(Results)
);
