import { Container,Col,Tab, Row, Nav } from "react-bootstrap";
import { ExperienceCard } from "./ExperienceCard";
import colorSharp2 from "../assets/img/color-sharp2.png";

import projImg2 from "../assets/img/coursera-logo.png";
import projImg3 from "../assets/img/konrat-logo.png";
import projImg4 from "../assets/img/edx-logo.png";
import infomation4Img from "../assets/img/u_cordoba.png";
import infomationufpsImg from "../assets/img/ufps_logo.png";

import infomation3Img from "../assets/img/logo-exp2.png";
import education2Img from "../assets/img/logo_exp.png";
import infomationImg from "../assets/img/informationImg.png";
import React from 'react';



export const Experience = () => {
    
    const formalEducation =[
        {
            title:"Bachelor Degree in Civil Engineering",
            description: "Universidad Francisco de Paula Santander (2014-2020)",
            imgUrl: infomationufpsImg,
        },
        {
            title:"Web Developer",
            description: "Universidad Nacional de Cordoba - Mundos E (2022-2023)",
            imgUrl: infomation4Img,
        },

    ];

    const  experience = [

        {
            title:"Data Scientist, Ofinow",
            description: "Tecnología : Python 3, scikit-learn y TensorFlow, Data lake(Noviembre-2023 - Marzo-2024)",
            imgUrl: infomation3Img,
        },       
        {
            title:"Data Scientist, Stradata AML",
            description: "Tecnología: Python3, KNIME, R, PyTorch, scikit-learn, PowerBi(Agosto-2023 - Noviembre-2023)",
            imgUrl: education2Img,
        },
    ];      
    
    const complementaryCourses = [
        {
            title:"Neural Networks and Deep Learning",
            description: "Online course offered by deeplearning.ai ",
            imgUrl: projImg2,
        },
        {
            title:"Mathematics for Machine Learning Specialization",
            description: "Online specialization program offered Imperial College London. Linear Algebra,Multivariate Calculus and PCA.",
            imgUrl: projImg2,
        },
        {
            title:"Cycle of Special Courses",
            description: "Fundación Universitaria Konrad Lorenz, Bogotá. Machine Learning Fundamentals and Natural Language Processing for Decision Making in Organizations",
            imgUrl: projImg3,
        },
        {
            title:"Introduction to Computer Science and Programming Using Python,",
            description: "Online course offered by Massachusetts Institute of Technology in the edx platform.",
            imgUrl: projImg4,
        },

    ];
    



    return(
        <section className="project" id="information">
            <Container>
                <row>
                <Col size={12}>                  
                        
                        <img src={infomationImg} alt="Information Img"></img>
                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center flex-sm-row" id="pills-tab">
                            
                            <Nav.Item>
                            <Nav.Link eventKey="first">Education</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Experience</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">Courses</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content id="slideInUp" className="imagen">
                            <Tab.Pane eventKey="first" >
                            <Row>
                                {
                                formalEducation.map((formalEducation, index) => {
                                    return (
                                    <ExperienceCard
                                        key={index}
                                        {...formalEducation}
                                        />
                                    )
                                })
                                }
                            </Row>                            
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <Row>
                                {
                                experience.map((experience, index) => {
                                    return (
                                    <ExperienceCard
                                        key={index}
                                        {...experience}
                                        />
                                    )
                                })
                                }
                            </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            <Row>
                                {
                                complementaryCourses.map((complementaryCourses, index) => {
                                    return (
                                    <ExperienceCard
                                        key={index}
                                        {...complementaryCourses}
                                        />
                                    )
                                })
                                }
                            </Row>                          
                            
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>

                </Col>
                </row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt=""></img>


        </section>


    )
}