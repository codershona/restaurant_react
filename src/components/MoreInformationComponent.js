import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderPromotion({ promotion }) {
    return(

        <Card>
        <div key={promotion.id} className="col-12 mt-5">
       
            <Media tag="li">
                <Media left middle>
                    <Media object src={promotion.image} alt={promotion.name} />
                </Media>
                <Media body className="col-12">
                    <Media heading>{promotion.name} <label>{promotion.label}</label></Media>
                    
                    <p>{promotion.description}</p>

                    <h1>{promotion.price}</h1>
                </Media>    
            </Media>
            
        </div>

        </Card>
    );
}



function MoreInfo(props) {

    const promotions = props.promotions.map((promotion) => {
        return (
            <RenderPromotion promotion={promotion} />
        );
    });


    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>More Information</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>More Information</h3>
                    <hr />
                </div>                
            </div>
       
            <div className="row row-content">
                <div className="col-12">
                    <h2>Weekend Discounts</h2>
                </div>
                <div className="col-12">
                    <Media list>
                      
                       {promotions}

                    </Media>
                </div>
            </div>
        </div>
    );
}

export default MoreInfo;    