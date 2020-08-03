import axios from "axios";

export function findItem(itemId) {
    return (dispatch) => {
        var data = {};
        var evoChain = [];
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${itemId}/`).then((response) => {
            data = response.data;
            axios.get(response.data.species.url).then((response) => {
                axios.get(response.data.evolution_chain.url)
                .then(response => {
                    var evoData = response.data.chain;
                    do {       
                        evoChain.push({
                            "name": evoData.species.name,
                        });                
                        evoData = evoData.evolves_to[0];                    
                    } while (!!evoData && evoData.hasOwnProperty('evolves_to'));
                    data.evolution_chain = evoChain;
                    dispatch(findCurrentItem(data));
                });
            });            
        })
    }
}

export function findCurrentItem(item) {
    return {
        type: "FIND_ITEM",
        item: item
    }
}

export function getAllPoke() {
    return (dispatch) => {
        const arr = [];
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=50')
            .then(response => {
                response.data.results.map((data) => {
                    axios.get(data.url).then((response) => {                        
                        arr.push(response.data);
                    });
                    dispatch(getList(arr));
                }
                )
            })
    }
}

export function getList(list) {
    return {
        type: "GET_LIST",
        list: list
    }
}