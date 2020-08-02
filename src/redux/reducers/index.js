let defaultState={
    item:{},
    list:[]
}

const mainReducer=(state=defaultState,action)=>{

    switch (action.type) {
        case "FIND_ITEM": { 
            return{
                ...state,
                item:action.item
            }
        }
        case "GET_LIST": { 
            return{
                ...state,
                list:action.list
            }
        }
        default:
            return{
                        ...state
            }
    }
}

export default mainReducer;