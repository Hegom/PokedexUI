import { type as findResultsType } from '../actions/findResults';
import React, { useEffect } from 'react';
import items from '../../data/items';

 const defaultState = [];
  
//      const [result, setResult] = React.useState([]);
//      const [poke, setPoke] = React.useState([]);
//      const [load, setLoad] = React.useState('true');
//      const arr = [];


function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case findResultsType: {
            if (!payload) {
                return [];
            }

            const regex = new RegExp(`^${payload}` , 'i');

            // console.log(items);

            return items.filter(n => regex.test(n.title));
            


//         fetch('https://pokeapi.co/api/v2/pokemon/?limit=50')
//             .then((response) => response.json())
//             .then((data) => 
//               data.results.map((item) => {
//                 fetch(item.url)
//                   .then((response) => response.json())
//                 .then((allpokemon) => arr.push(allpokemon));
//                   return arr;
//               },
//             ));

//  return arr;


            // const pokem = PokeData();

            // return pokem;

            //return poke;
        }

        default:
            return state;
    }
}




export default reducer;
