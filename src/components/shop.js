import React, { Component } from 'react'
import './shop.css'
// import JewelryCard from './jewelry/JewelryCard'
// import GemCard from './gems/GemCard'
// import ClientCard from './clients/ClientCard'
// import DesignerCard from './designer/DesignerCard'
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"

class Shop extends Component {
    render() {
      return (
        <>
          <NavBar />
          <ApplicationViews />
        </>
      )
    }
  }

export default Shop;