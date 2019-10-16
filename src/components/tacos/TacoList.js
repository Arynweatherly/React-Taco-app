import React, { Component } from 'react'
import TacoCard from './TacoCard';
import apiManager from '../../modules/apiManager';

class TacoList extends Component {
    state = {
        tacos: []
    }

    componentDidMount(){
        apiManager.getAllTacos()
        .then((tacos) => {
            this.setState({
                tacos: tacos
            })
        })
    }


    render() {
        return(
        <>
        <h2>This is TACO LIST </h2>
            {this.state.tacos.map(taco =>
                 <TacoCard key={taco.id} taco={taco} userId={this.props.userId} getOrders={this.props.getOrders} />
        )})

        </>
        )
    }
}





export default TacoList;