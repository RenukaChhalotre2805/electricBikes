import img1 from "./CarouselImage/img1.jpg";
import img2 from "./CarouselImage/img2.jpg";
import img3 from "./CarouselImage/img3.jpg";

import { Carousel } from "antd";
import { Image } from "semantic-ui-react";
const contentStyle = {
  height: "560px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  display: "block",
  margin: "auto",
  width: "98%",
};

const app1 = () => (
  <Carousel effect="scrollx fade">
    <div>
      <Image alt="im1" style={contentStyle} src={img1} />
    </div>
    <div>
      <Image alt="im2" style={contentStyle} src={img2} />
    </div>
    <div>
      <Image alt="im3" style={contentStyle} src={img3} />
    </div>
  </Carousel>
);
export default app1;
