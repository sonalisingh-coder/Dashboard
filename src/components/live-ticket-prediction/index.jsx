import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import CountUp from 'react-countup';


const ManageProjects = () => {

    let [desc, setDesc] = useState({ name: '' });
    let [data] = useState({});
    const postData = (e) => {
        e.preventDefault();
        console.log(desc);


      

        fetch('https://heroku-aws-deploy.herokuapp.com/predict', {
            method: 'POST',
            mode: "cors",
            body: JSON.stringify(desc)
        }).then(function (response) {
           console.log(response);
            return response.json();
        }).then(res => {
            console.log(res)
            data = res
        })
            .catch(err => console.log(err));


    }


    return (
        <Fragment>
            <Breadcrumb  title="Live Ticket Prediction" />
            <Container fluid={true}>
                <Row>
                    {console.log(data)}

                    <Col >
                        <Card >
                            {/* <CardHeader>
                                <h5>{"Live Ticket Prediction"}</h5>
                                <span>{""}</span>
                            </CardHeader> */}
                            <CardBody >
                                <Row >
                                    <Col md={{ size: 6, offset: 3 }} >
                                        <Form onSubmit={postData} >
                                    
                                            <FormGroup>
                                                <Label className="col-form-label mr-2">{"Ticket Description"}</Label>
                                                <Input className="form-control" type="text" name="item_cat" placeholder="Category" value={desc.value} onChange={(event) => setDesc({ [event.target.name]: event.target.value })} autoComplete="off" />
                                            </FormGroup>
                                            <FormGroup className="text-center">
                                                <Button type="submit" color="primary" onClick={postData}>{"Predict"}</Button>
                                            </FormGroup>
                                        </Form>
                                    </Col>
                                </Row>
                                <Row >
                                    <Col md={{ size: 6, offset: 3 }} className="xl-50 box-col-6">
                                        <Card className="social-widget-card" style={{ marginTop: "20px" }}>
                                            <CardBody>
                                                <div className=" redial-social-widget radial-bar-70" data-label="50%">
                                                    <i className="fa font-primary"></i></div>

                                                <h5 className="b-b-light">{"Predicted Class : 1"}</h5>




                                                <Row >
                                                    <Col className="text-center" style={{ color: "#EE4646" }}><span>{"Class 1"}</span>
                                                        <h4 className="counter mb-2">
                                                        </h4>
                                                    </Col>
                                                    <Col className="text-center">
                                                        <CountUp end={4369} />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col className="text-center" style={{ color: "#EE4646" }}><span>{"Class 2"}</span>
                                                        <h4 className="counter mb-2">
                                                        </h4>
                                                    </Col>
                                                    <Col className="text-center">
                                                        <CountUp end={4369} />
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Col className="text-center" style={{ color: "#EE4646" }}><span>{"Class 3"}</span>
                                                        <h4 className="counter mb-2">
                                                        </h4>
                                                    </Col>
                                                    <Col className="text-center">
                                                        <CountUp end={4369} />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col className="text-center" style={{ color: "#EE4646" }}><span>{"Class 4"}</span>
                                                        <h4 className="counter mb-2">
                                                        </h4>
                                                    </Col>
                                                    <Col className="text-center">
                                                        <CountUp end={4369} />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col className="text-center" style={{ color: "#EE4646" }}><span>{"Class 5"}</span>
                                                        <h4 className="counter mb-2">
                                                        </h4>
                                                    </Col>
                                                    <Col className="text-center">
                                                        <CountUp end={4369} />
                                                    </Col>
                                                </Row>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default ManageProjects;