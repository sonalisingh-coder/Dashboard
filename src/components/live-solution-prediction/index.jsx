import React, { Fragment, useEffect, useState } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap'
//import {groupName} from "./group-assign";
//import {radialChart} from "../charts-data";
import Chart from 'react-apexcharts'
import Knob from "knob";
import configDB from '../../data/customizer/config';
const primary = localStorage.getItem('default_color') || configDB.data.color.primary_color;

const CategoryPrediction = () => {

    let [desc, setDesc] = useState("");
    let [predictedClass, setClass] = useState(null);
    let [loader, setLoader] = useState(false);
    let [value0, setValue0] = useState("-");
    let [value1, setValue1] = useState("-");
    let [value2, setValue2] = useState("-");
    let [value3, setValue3] = useState("-");
    let [value4, setValue4] = useState("-");
    let [radialChart , setRadialChart] = useState({});

    useEffect(() => {
        if (!loader) {

            // let values = [value0, value1, value2, value3, value4];

            // var displayInputDisable = Knob({
            //     className: "review",
            //     thickness: 0.1,
            //     fgColor: primary,
            //     bgColor: '#f6f7fb',
            //     lineCap: 'round',
            //     displayPrevious: false,
            //     value: predictedClass !== null ? Math.floor(values[predictedClass] * 100) : 0
            // })
            // document.getElementById('displayInputDisable').appendChild(displayInputDisable);



            setRadialChart({
                series: [70],
                options: {
                    chart: {
                        height: 350,
                        type: 'radialBar',
                    },
                    plotOptions: {
                        radialBar: {
                            hollow: {
                                margin: 15,
                                size: '70%',
                                image: require('../../assets/images/other-images/success.png'),
                                imageWidth: 64,
                                imageHeight: 64,
                                imageClipped: false
                            },
                            dataLabels: {
                                name: {
                                    show: false,
                                    color: '#fff'
                                },
                                value: {
                                    show: true,
                                    color: primary,
                                    offsetY: 70,
                                    fontSize: '22px'
                                }
                            }
                        }
                    },
                    fill: {
                        type: 'image',
                        image: {
                            src: [require('../../assets/images/user-card/5.jpg')],
                        }
                    },
                    stroke: {
                        lineCap: 'round'
                    },
                    labels: ['Volatility'],
                }
            } )
        }

    }, [loader, predictedClass])

    const postData = (e) => {
        e.preventDefault();
        console.log(desc);
        fetch("https://model-for-solution.herokuapp.com/predict_api", {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ "item_cat": ["\"" + desc + "\""] }),
        })
            .then((response) => {
                console.log(response)
                return response.text()
            })
            .then(res => {

                // res = JSON.parse(res)
                // let obj = res.data[0]

                console.log(res)
                // console.log(typeof(obj[1]))
                // console.log(typeof(obj[2][0]))
                // setClass(obj[1])
                // setValue0(obj[2][0])
                // setValue1(obj[2][1])
                // setValue2(obj[2][2])
                // setValue3(obj[2][3])
                // setValue4(obj[2][4])
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
                                                            
                                                             {console.log(radialChart.options)}
                                                            {/* <div id="chart-widget5">
                                                                <Chart options={radialChart.options} series={[70]} height="340" type="radialBar" />
                                                            </div> */}

                                                            <h5 className="b-b-light" >Predicted Category : {predictedClass != null ? "Class " + predictedClass : ""} </h5>

                                                            <Row >
                                                                <Col className="text-center" style={{ color: "#EE4646" }}><span>{"Class 0"}</span>
                                                                    <h4 className="counter mb-2">
                                                                    </h4>
                                                                </Col>
                                                                <Col className="text-center">
                                                                    {value0}
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col className="text-center" style={{ color: "#EE4646" }}><span>{"Class 1"}</span>
                                                                    <h4 className="counter mb-2">
                                                                    </h4>
                                                                </Col>
                                                                <Col className="text-center">
                                                                    {value1}
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