import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import CustomCard from '../CustomCard/CustomCard';


function Blogs () {
  const [blogsData, setblogsData] = useState([]);
  
   
  
  const getBlogsData = async () => {
    const devDataPromise = await axios.get("https://dev.to/api/articles?username=rohitsingh09");
    const mediumDataPromise = await axios.get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@rohitsinghwd1993");

    Promise.all([devDataPromise, mediumDataPromise])
    .then(response => {
         let data = [];
         let devBlogs = response[0].data;
         let mediumBlogs = response[1].data.items;
         data = devBlogs.concat(mediumBlogs);
         console.log(data);
         let blogData = [];
         if(data) {
             data.map(d => {
                 blogData.push({
                    title:d.title,
                    imgPath: d.thumbnail ?? d.social_image,
                    link: d.url ?? d.link
                 });
             });
         };
         setblogsData(blogData);
    });
  };
  
  useEffect(() => {
    getBlogsData();
  }, []);

  const blogItmes = blogsData.map((d) => (
    <Col md={4} key={d.link} className="project-card">
      <CustomCard
        imgPath={d.imgPath}
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
}

export default Blogs;
