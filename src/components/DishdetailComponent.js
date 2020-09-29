import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, CardImg } from 'reactstrap';

// import Menu from '../components/MenuComponent';

class DishDetail extends Component {

 
  componentDidMount() {
    console.log('DishDetail component componentDidMount invoked!');
  }
   componentDidUpdate() {
    console.log('DishDetail component componentDidUpdate invoked!');
  }



  renderDish(dish) {
    return (
      <div class="col-12 col-md-5 m-1">
      <Card>
      <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
         <CardTitle>{dish.name}</CardTitle>
         <CardText>
         {dish.description}
       </CardText>

    </CardBody>
  
    </Card>
      </div>
    );
  }

    renderComments(comments) {

      if(comments != null)

        return(
          <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <ul className="list-unstyled">
           {comments.map((comment) => {
            return(
              <li key={comment.id}>
            <p>{comment.comment}</p>
            <p>--- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} 
            </p>
            </li>
       );
    })}

     </ul>

          </div>

          );

     else
      return(
        <div></div>
        );
  }

  render() {

    console.log('dishdetail component component render invoked');

    if (this.props.dish != null)
      return (
        <div class="container">
        <div className="row">

        {this.renderDish(this.props.dish)}
        {this.renderComments(this.props.dish.comments)}

        </div>
        </div>
        );
     else 
      return(

        <div></div>

        );
  }

}

export default DishDetail;
