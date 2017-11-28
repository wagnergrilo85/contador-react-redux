import React, {Component} from 'react'
import { connect } from 'react-redux'
import ContadorAction from './../action/ContadorAction'

class ContadorComponent extends Component{

    constructor(props){
        
        super(props)
        this.handleIncrementar = this.handleIncrementar.bind(this)
        this.handleDecrementar = this.handleDecrementar.bind(this)
    }

    handleIncrementar(){
        this.props.onIncrementar()
    }

    handleDecrementar(){
        this.props.onDecrementar()
    }

    render(){

        const { valor } = this.props

        return(
            <div>
                <p> clicado { valor } vezes </p>
                <button onClick={this.handleIncrementar}>Incrementar</button>
                <button onClick={this.handleDecrementar}>Decrementar</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        valor: state.contadorReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementar: (valor) => dispatch(ContadorAction.incrementar(valor)),
        onDecrementar: (valor) => dispatch(ContadorAction.decrementar(valor))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContadorComponent)