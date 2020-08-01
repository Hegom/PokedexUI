import { type as findResultsType } from '../actions/findResults';
import React, { useEffect } from 'react';

 const defaultState = [];

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case findResultsType: {
            return [];
            // if (!payload) {
            //     return [];
            // }
            // const regex = new RegExp(`^${payload}` , 'i');   
            // return items.filter(n => regex.test(n.title));
        }

        default:
            return state;
    }
}

export default reducer;
