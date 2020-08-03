import React, { Component } from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import './style.css';

class Search extends Component {
    constructor(props) {
        super(props);
    }  

    render() {
        const {
            onChangeText,
            text,
            onGoTo
        } = this.props;    

        return (
            <div className="main-container">
                <div className="container-icon">
                    <SearchIcon />
                </div>              
                <InputBase
                    placeholder="Search…"
                    value={text}
                    style={{ width: '100%' }}
                    onChange={(event) => {
                        const newText = event.target.value;
                        onChangeText(newText);
                    }}  
                    onKeyPress={(event) => {                        
                        if (event.key === 'Enter' && text) {  
                            onGoTo(`/details/${text}`);
                            this.setState({ text: text });
                        }
                    }}
                />                
            </div>
        );
    }
}

export default Search;
