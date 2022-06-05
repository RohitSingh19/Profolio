import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import CustomCard from '../CustomCard/CustomCard';

function MediumBlogs () {
  const [mediumData, setMediumData] = useState([]);

  const getData = async () => {
    const res = await axios.get(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@rohitsinghwd1993"
    );
    setMediumData(res.data.items);
  };
  
  useEffect(() => {
    getData();
  }, []);


    const blogItmes = mediumData.map((d) => (
      <Col md={4} className="project-card">
        <CustomCard
          imgPath={d.thumbnail}
          isBlog={true}
          title={d.title}
          link={d.link}
        />
      </Col>
    ));

    return (
        <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            <strong className="purple">Blogs </strong>
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {blogItmes}
          </Row>
        </Container>
      </Container>
    )
};

export default MediumBlogs;