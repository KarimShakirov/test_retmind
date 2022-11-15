import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import infoImg from "../../../assets/img/e5fc935b60035305099554810357012a.webp";
import './Detail.css';

const Details = ({dtls}) => {
    return (
        <section className="details__section">
            <Container>
                <Row className="detail__wrapper">
                    <Col lg="6" md="6">
                        <div className="details__img">
                            <img src={dtls.cards.banner_image_url} alt="" className="w-100"/>
                        </div>
                    </Col>

                    <Col lg='6' md='6'>
                        <div className="details__content">
                            <h2>NFTs <span>information</span></h2>
                            <p>{dtls.cards.description}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Details;