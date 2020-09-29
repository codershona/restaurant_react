import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

// import Menu from '../components/MenuComponent';

class DishDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
    	comments: []
    };
  }



  render() {
    return (
      <div class="container col-12 col-md-5 m-1">
      <Card>
        <CardBody>
         <CardTitle><h4>Comments</h4></CardTitle>
         <CardText>
         <ul class="list-unstyled">
         <li>Imagine all the eatables, living in conFusion!</li>
         <br/>
     <li>-- John Lemon, Oct 17, 2012</li>
     <br/>
  <li>Sends anyone to heaven, I wish I could get my mother-in-law to eat it!</li>
  <br/>
  <li>-- Paul McVites, Sep 06, 2014</li>
  <br/>
  <li>Eat it, just eat it!</li>
  <br/>
  <li>Michael Jaikishan, Feb 14, 2015</li>


  <br/>

  <li>Ultimate, Reaching for the stars!</li>
  <br/>
  <li>-- Ringo Starry, Dec 03, 2013</li>
  <br/>
  <li>It's your birthday, we're gonna party!</li>
  <br/>
  <li>-- 25 Cent, Dec 03, 2011</li>

  <br/>
 

</ul>

</CardText>

    </CardBody>
    </Card>
      </div>
    );
  }
}

export default DishDetail;


{/* {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} */}
