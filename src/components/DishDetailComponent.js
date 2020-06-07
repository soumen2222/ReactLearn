import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  render() {
    const dish = this.props.dish;
    if (dish == null) {
      return <div></div>;
    }
    return (
      <div className="container">
        <div className="row">
          {this.renderDish(dish)}
          {this.renderComments(dish.comments)}
        </div>
      </div>
    );
  }

  renderDish(dishItem) {
    if (dishItem != null)
      return (
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg top src={dishItem.image} alt={dishItem.name} />
            <CardBody>
              <CardTitle>{dishItem.name}</CardTitle>
              <CardText>{dishItem.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    else return <div></div>;
  }

  renderComments(comments) {
    const commentMenu = comments.map((comment) => {
      return (
        <li key={comment.id}>
          <p>{comment.comment}</p>
          <p>
            -- {comment.author}, &nbsp;
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            }).format(new Date(comment.date))}
          </p>
        </li>
      );
    });

    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">{commentMenu}</ul>
      </div>
    );
  }
}

export default DishDetail;
