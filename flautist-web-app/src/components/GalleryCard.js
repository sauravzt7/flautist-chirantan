import { Col } from "react-bootstrap";
import "./Gallery.css";

export const GalleryCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="gallery-imgbx">
        <img src={imgUrl} />
        <div className="gallery-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
