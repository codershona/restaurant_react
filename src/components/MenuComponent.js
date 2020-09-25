import React, { Component } from 'react';
import { CardDeck, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

 
import Dishdetail from '../components/DishdetailComponent';

class Menu extends Component {

	constructor(props) {
		super(props);

		  this.state = {

        selectedDish: null
             
        }

        console.log('Menu Component constructor is invoked!!!');
	}

  componentDidMount() {

    console.log('Menu Component componentDidMount is invoked!!!');

  }

  onDishSelect(dish) {

    this.setState({ selectedDish: dish });

  }



  renderDish(dish) {

    if (dish != null) {

      return(

        <CardDeck>
      <Card>
         <CardImg width="100%" object src={dish.image} alt={dish.name} />
         <CardBody>

          <CardTitle>
                       {dish.name}
              </CardTitle>
                      <CardText> <p>{dish.description}</p> </CardText>

                       
         </CardBody>

         </Card> 

         {/* <Card className="col-sm-12 col-4">

         <CardBody>
         <Dishdetail/>
         </CardBody>
         </Card>  */}

        

        </CardDeck>




      );

    } else {
      return(
       <div></div>
      );
    }

  }


	render() {

		const menu = this.props.dishes.map((dish) => {

			return (
		 <div key={dish.id} className="col-12 col-md-5 m-1">
				<Card onClick={() => this.onDishSelect(dish)}>
				
				      <CardImg width="100%" object src={dish.image} alt={dish.name} />
                    

                     <CardImgOverlay>
                       <CardTitle>
                       {dish.name}
                      
                       </CardTitle>

                     </CardImgOverlay>

                     
                   </Card>
				</div>
			);

	});

    console.log('Menu Component render is invoked!!!');

		return (
			<div className="container">
			  <div className="row">
                
                     {menu}

			 </div>

       <div className="row">
        <div  className="col-12 col-md-5 m-1">
                
                {this.renderDish(this.state.selectedDish)}

          </div>

          <div  className="col-12 col-md-5 m-1">
                
                <Dishdetail/>

          </div>
       </div>
		</div>


		);
	}


}



export default Menu;
