import * as ActionsType from './../action/ActionsType'

export default (state = 0, action) => {

    switch(action.type){
        case ActionsType.INC:
            return state + 1
            break;
        case ActionsType.DEC:
            return state - 1
            break;
        default:
            return state
    }
}