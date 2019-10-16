import React, { Component } from 'react';
import apiManager from '../../modules/apiManager';



class TacoCard extends Component {
    state = {

    }

    handleClick = () => {
        console.log("what are the props of this component", this.props)
        const newOrderObj = {
          userId: this.props.userId,
          tacoId: this.props.taco.Id
        }
apiManager.orderTaco(newOrderObj)
.then(() => {
  this.props.getOrders()
  //call getOrders from the OrderView
})
    }
    render() {

        return (
            <>
                <h2>{this.props.taco.name}</h2>
                <button type="button" onClick={this.handleClick}>Order Me</button>
            </>
        )
    }
}

export default TacoCard;