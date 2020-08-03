import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Page from './page';

class IAppBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
           text: '',
        };

        this.onChangeText = this.onChangeText.bind(this);
        this.onGoTo = this.onGoTo.bind(this);
    }

    onGoTo(path) {
        const {
            history,
        } = this.props;

        history.push(path);
    }

    onChangeText(text) {
        this.setState({ text });
    }

    render() {
        const {
            text,
        } = this.state;        

        return (
            <Page
                text={text}
                onChangeText={this.onChangeText}
                onGoTo={this.onGoTo}
            />
        );
    }
}

export default withRouter(IAppBar);