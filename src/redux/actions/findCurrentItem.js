import axios from "axios";

export function findItem(itemId) {
    return (dispatch) => {
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${itemId}/`).then((response) => {
            dispatch(findCurrentItem(response.data));
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