import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

import Menu from '../components/MenuComponent';

class Dishdetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
    	comments: []
    };
  }

  render() {
    return (
      <div>
        <h4>Comments</h4>
        <p>Imagine all the eatables, living in Confusion!</p>
      </div>
    );
  }
}

export default Dishdetail;
