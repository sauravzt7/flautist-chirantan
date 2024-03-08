import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../assets/img/img1.jpeg";
import image2 from "../assets/img/img2.jpeg";
import image3 from "../assets/img/img3.jpeg";
import image4 from "../assets/img/img4.jpeg";
import "./Bio.css";

export const Bio = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="bio" id="bio">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="bio-bx wow zoomIn">
              <h2>Bio</h2>
              <p>
                <strong>Embark on an odyssey</strong> of musical excellence from
                the tender age of <strong>8 years</strong>. With unwavering{" "}
                <strong>support from his parents</strong> and the mentorship of{" "}
                <strong>Sri Akkandi Vamadeva Gavayi</strong>, he delved into the
                depths of <strong>Hindustani classical singing</strong>. The
                melodious tunes of his father's flute ignited a lifelong
                passion, leading him to master the art under the guidance of{" "}
                <strong>Sri Ambanna Kopparad</strong>, a disciple of{" "}
                <strong>Pandit Puttaraj Gavayi</strong>.
              </p>
              <p>
                By the age of <strong>10</strong>, the stage became his second
                home, showcasing his talent on{" "}
                <strong>prestigious platforms</strong> like Hampi Utsav and
                Gavisiddeshwara Jatra Mahotsav Koppala, among others. His
                journey took a pivotal turn as he embraced the dual disciplines
                of <strong>vocal and flute</strong>, further honed under the
                tutelage of <strong>Pandit Parameshwar Hegde</strong>. He not
                only expanded the scope of his repertoire under his tutelage,
                but his performance and technique also saw notable advancements.
              </p>
              <p>
                Recognition followed, as evidenced by a{" "}
                <strong>senior division fellowship</strong> from the Karnataka
                Sangeeta Academy. His commitment to sharing his art led to the
                founding of <strong>Gaana Yaana Sangeet Academy</strong>, a
                sanctuary for aspiring musicians to learn Hindustani classical
                flute, vocals, and harmonium, adhering to the{" "}
                <strong>Guru-Shishya parampara</strong>. This academy now
                commands a global presence, with students from{" "}
                <strong>India, USA, Canada, UK, Dubai</strong>, and beyond.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme bio-slider">
                <div className="item">
                  <img src={image1} alt="Achievement" />
                  <h5></h5>
                </div>
                <div className="item">
                  <img src={image2} alt="Brand Identity" />
                  {/* <h5>Cultural Heritage</h5> */}
                </div>
                <div className="item">
                  <img src={image3} alt="Logo Design" />
                  {/* <h5>Inspiring Mentorship</h5> */}
                </div>
                <div className="item">
                  <img src={image4} alt="Web Development" />
                  {/* <h5>Artistic Excellence</h5> */}
                </div>
              </Carousel>
              <p className="mt-4">
                His life's work is a testament to the{" "}
                <strong>power of tradition</strong> and the{" "}
                <strong>innovation of modern teaching methods</strong>. Join us
                in celebrating a journey that transcends borders, fostering a
                global community united by the universal language of music.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
