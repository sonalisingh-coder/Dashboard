import React, { Fragment, useEffect, useState } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import Knob from "knob";
import {solutionClasses} from "./solution-classes"
import configDB from '../../data/customizer/config';
const primary = localStorage.getItem('default_color') || configDB.data.color.primary_color;

const CategoryPrediction = () => {

    let [desc, setDesc] = useState("");
    let [predictedClass, setClass] = useState(null);
    let [loader, setLoader] = useState(false);
    let [result, setResult] = useState([]);
    let [sortResult, setSortResult] = useState([]);
    let [fillValue, setFillValue] = useState(0);

    const solutionData = solutionClasses.map(val => val["Solutions"]);

    useEffect(() => {
        if (!loader) {

            var displayInputDisable = Knob({
                className: "review",
                thickness: 0.1,
                fgColor: primary,
                bgColor: '#f6f7fb',
                lineCap: 'round',
                displayPrevious: false,
                value: predictedClass !== null ? Math.floor(sortResult[0][0] * 100) : 0
            })
            document.getElementById('displayInputDisable').appendChild(displayInputDisable);
        }

    }, [loader, predictedClass])

    const postData = (e) => {
        e.preventDefault();

        fetch("https://model-for-solution.herokuapp.com/predict_api", {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ "item_cat": ["\"" + desc + "\""] }),
        })
            .then((response) => {
                console.log(response)
                return response.json()
            })
            .then(res => {
              
                res = JSON.parse(res)
                
                const outputData = res["data"]["0"];
                setResult(outputData[2]);

                const arr = outputData[2];
                for (let i = 0; i < arr.length; i++) {
                    arr[i] = [arr[i], i];
                }

                setSortResult(arr.sort((left, right) => right[0] - left[0]).slice(0, 5));
                console.log(sortResult);
                console.log(outputData);
                setClass(outputData[1])
                setLoader(false)
            })
            .catch(err => console.log(err));


    }


    return (
        <Fragment>
            <Breadcrumb title="Live Solution Prediction" />
            <Container fluid={true}>
                <Row>


                    <Col >
                        <Card >

                            <CardBody >
                                <Row >
                                    <Col md={{ size: 6, offset: 3 }} >
                                        <Form onSubmit={postData} >

                                            <FormGroup>
                                                <Label className="col-form-label mr-2">{"Category Description"}</Label>
                                                <Input className="form-control" type="text" name="item_cat" placeholder="Description" value={desc} onChange={(event) => setDesc(event.target.value)} autoComplete="off" />
                                            </FormGroup>
                                            <FormGroup className="text-center">
                                                <Button type="submit" color="primary"
                                                    onClick={(e) => {
                                                        setLoader(true)
                                                        postData(e)
                                                    }} >{"Predict"}</Button>
                                            </FormGroup>
                                        </Form>
                                    </Col>
                                </Row>
                                <Row >
                                    <Col md={{ size: 6, offset: 3 }} className="xl-50 box-col-6">
                                        <Card className="social-widget-card" style={{ marginTop: "20px" }}>
                                            <CardBody>

                                                {
                                                    loader ?
                                                        <div className="loader-box">
                                                            <div className="loader-17"></div>
                                                        </div>

                                                        :
                                                        <div>
                                                            <div className="knob-block text-center">
                                                                <div className="knob text-center" id="displayInputDisable" style={{ position: "relative" }}>

                                                                </div>
                                                            </div>

                                                            <h5 className="b-b-light" >Predicted Category : {predictedClass != null ? "Class " + predictedClass : ""} </h5>



                                                            {sortResult.map((value, i) => {
                                                                return <Row key={i}>
                                                                    <Col style={{ color: "#EE4646" }}><span>{solutionData[value[1]]}</span>
                                                                        <h4 className="counter mb-2">
                                                                        </h4>
                                                                    </Col>
                                                                    <Col className="text-center">
                                                                        {(value[0] * 100).toFixed(1) + "%"}
                                                                    </Col>
                                                                </Row>
                                                            })}


                                                        </div>
                                                }


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

export default CategoryPrediction;