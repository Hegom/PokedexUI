import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';
import findResults from '../../redux/actions/findResults';
// import * as actionCreators from '../../redux/actions/findCurrentItem';


class IAppBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
           text: '',
        };

        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeSelection = this.onChangeSelection.bind(this);
        this.onGoTo = this.onGoTo.bind(this);
    }

    // componentDidMount() {
    //     const {
    //         getAllPoke,            
    //     } = this.props;
    //     getAllPoke();
    // } 

    onGoTo(path) {
        const {
            history,
        } = this.props;

        history.push(path);
    }

    onChangeText(text) {
        this.setState({ text });
    }

    onChangeSelection(text) {
        const {
            // getAllPoke,
            findResults,
            match,
            history,
        } = this.props;

        this.setState({ text });

        findResults(text);
        // getAllPoke();

        if (match.path !== '/results') {
            history.push('/results');
        }
    }

    render() {
        const {
            text,
        } = this.state;        

        return (
            <Page
                text={text}
                onChangeText={this.onChangeText}
                onChangeSelection={this.onChangeSelection}
                onGoTo={this.onGoTo}
            />
        );
    }
}

// const mapStateToProps=(state)=>{
//     return state
// };

// export default connect (mapStateToProps, actionCreators)(IAppBar);

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
    findResults,
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(IAppBar)
);