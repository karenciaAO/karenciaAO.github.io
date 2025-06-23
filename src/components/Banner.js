import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.png";
import React from 'react';
import { scrollToContact } from "../utils/scrollToContact"; 


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Civil Engineer", " Data Scientist", "Software Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300-Math.random()*100);
    const period = 2000;

    useEffect(()=> {
        let ticker = setInterval(() =>{
            tick();

        },delta)

        return() => {clearInterval(ticker)};

    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText= isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }

    }


    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>{`Hi I'm Karen Araque `}<span className="wrap" >{text}</span></h1>
                        <p>Specialist in Machine Learning with Python and R | Expert in Data Analysis and Databases (MySQL, PostgreSQL) | Website Development with JavaScript and Python (FastAPI, Django) | Knowledge of AWS Cloud Foundations | Skills in Agile Methodologies (SCRUM) and GIT Version Control.</p>
                        <button className="vvd" onClick={scrollToContact}>
                            <span>Let's connect <ArrowRightCircle size={25} /></span>
                        </button>
                    </Col>    
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" onClick={scrollToContact} style={{ cursor: 'pointer' }} />
                    </Col>               
                </Row>
            </Container>
        </section>
    )
    

}