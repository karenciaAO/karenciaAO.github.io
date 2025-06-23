import meter1 from "../assets/img/meter1.png";
import meter2 from "../assets/img/meter2.png";
import meter3 from "../assets/img/meter3.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from 'react';



export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Programming Languages: Python, R, Java 8+, SQL 
<br></br>Databases SQL: MySQL, PostgreSQL
<br></br>Tools: Selenium, Google Colab, PowerBi
<br></br> Technologies, Frameworks, Libraries: Pytorch, Tensorflow, Django, FastAPI, Spring Boot, Docker</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>Java 8+</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>R</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>SQL</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}