import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function CustomCard(props) {
  return (
    <Card className="card-view">
      <Card.Img variant="top" src={props.imgPath} height={250} alt="card-img" />
      <Card.Body>
        <Card.Title><strong className="dark-purple">{props.title}</strong></Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
           {props.description}
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Project"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default CustomCard;
