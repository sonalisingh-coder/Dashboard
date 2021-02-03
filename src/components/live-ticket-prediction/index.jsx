import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap'



const ManageProjects = () => {

    let [desc, setDesc] = useState("");
    let [predictedClass, setClass] = useState("-");
    let [value1 , setValue1] = useState("-");
    let [value2 , setValue2] = useState("-");
    let [value3 , setValue3] = useState("-");
    let [value4 , setValue4] = useState("-");
    let [value5 , setValue5] = useState("-");
   
    const postData = (e) => {
        e.preventDefault();
        console.log(desc);
        fetch("https://heroku-aws-deploy.herokuapp.com/predict_api", {
            method: 'POST',
            headers : {
               "content-type" : "application/json"
            },
            body: JSON.stringify({"item_cat":["\"" + desc + "\"" ]}),
        })
        .then((response) => response.json() )
       .then(res => {
            
           res= JSON.parse(res)
         let obj =  res.data[0]
            // console.log(typeof(obj[1]))
            // console.log(typeof(obj[2][0]))
            setClass(obj[1])
            setValue1(obj[2][0])
            setValue2(obj[2][1])
            setValue3(obj[2][2])
            setValue4(obj[2][3])
            setValue5(obj[2][4])
          
        
        })
            .catch(err => console.log(err));


    }


    return (
        <Fragment>
            <Breadcrumb  title="Live Ticket Prediction" />
            <Container fluid={true}>
                <Row>
                   

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
                                                <Input className="form-control" type="text" name="item_cat" placeholder="Category" value={desc} onChange={(event) => setDesc(event.target.value )} autoComplete="off" />
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

                                                <h5 className="b-b-light">Predicted Class : {predictedClass}</h5>




                                                <Row >
                                                    <Col className="text-center" style={{ color: "#EE4646" }}><span>{"Class 1"}</span>
                                                        <h4 className="counter mb-2">
                                                        </h4>
                                                    </Col>
                                                    <Col className="text-center">
                                                       { value1}
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col className="text-center" style={{ color: "#EE4646" }}><span>{"Class 2"}</span>
                                                        <h4 className="counter mb-2">
                                                        </h4>
                                                    </Col>
                                                    <Col className="text-center">
                                                        {value2} 
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Col className="text-center" style={{ color: "#EE4646" }}><span>{"Class 3"}</span>
                                                        <h4 className="counter mb-2">
                                                        </h4>
                                                    </Col>
                                                    <Col className="text-center">
                                                        {value3} 
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col className="text-center" style={{ color: "#EE4646" }}><span>{"Class 4"}</span>
                                                        <h4 className="counter mb-2">
                                                        </h4>
                                                    </Col>
                                                    <Col className="text-center">
                                                       {value4} 
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col className="text-center" style={{ color: "#EE4646" }}><span>{"Class 5"}</span>
                                                        <h4 className="counter mb-2">
                                                        </h4>
                                                    </Col>
                                                    <Col className="text-center">
                                                       {value5} 
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