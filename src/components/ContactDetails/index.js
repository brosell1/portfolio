import React, { Component } from 'react';

import "./style.css";

import GridItemGradient from "../GridItemGradient";

class ContactDetails extends Component {
  render() {
    return(
      <div  className="contactDetails gridItem">
        <h3>Height: 180cm</h3>
        <h3>Favourite Animal: Crab</h3>
        <h3>Favourite Food: Butter</h3>
        <h3>Star Sign: Capricorn</h3>
        <GridItemGradient />
      </div>
    )
  }
}

export default ContactDetails;
