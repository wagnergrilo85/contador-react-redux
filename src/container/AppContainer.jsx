import React, {Component} from 'react'
import ContadorComponent from './../component/ContadorComponent'

class AppContainer extends Component{

    constructor(props){

        super(props)
    }

    render(){

        return(
            <div>
                <h1>Contador - react com redux </h1>
                <ContadorComponent />
            </div>
        )
    }
}

export default AppContainer