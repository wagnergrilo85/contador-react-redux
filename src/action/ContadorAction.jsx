import * as ActionsType from './ActionsType'

const incrementar = (val) => {

    return{
        type: ActionsType.INC,
        payload:{
            val
        }
    }
}

const decrementar = (val) => {
    
    return{
        type: ActionsType.DEC,
        payload:{
            val
        }
    }
}

export default {
    incrementar,
    decrementar
}