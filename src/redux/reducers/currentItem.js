import { type as findCurrentItemType } from '../actions/findCurrentItem';
import React, { Fragment, useEffect, useState } from 'react';
import items from '../../data/items';

const defaultState = [];

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case findCurrentItemType: {
           


            if (!payload) {
                return null;
            }         

           


            // fetch(`https://pokeapi.co/api/v2/pokemon/${payload}/`)
            // .then(response => response.json())
            // .then(data => { 


            //     console.log("this._isMounted");
            //     console.log(this._isMounted);
                

            //     if(this._isMounted)
            //     {
                  
            //     console.log(data);   

            //     this.setState({
            //         state: data,
            //         currentItem: data
            //       });

                
            //     return data; 
            //     }
            // });

            // var fasd = defaultState.date;
            // //  const response = fetch(`https://pokeapi.co/api/v2/pokemon/${payload}/`);
            // // const data = response.json();
            // const el = items.find(n => n.id === payload);

            return items.find(n => n.id === payload);
        // return data;


        //    Image .sprites.front_default
        //    id
        //    type types[0].type.name
        //    name
        //    height
        //    weight



            
            // const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${payload}/`);
            // const data = await response.json();
            // const el = items.find(n => n.id === payload);
            // return data;

        }

        default:
            return state;
    }
}

export default reducer;
