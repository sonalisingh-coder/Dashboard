import React, { Fragment, useEffect, useState } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import {groupName} from "./group-assign";
import Knob from "knob";
import configDB from '../../data/customizer/config';
const primary = localStorage.getItem('default_color') || configDB.data.color.primary_color;

const CategoryPrediction= () => {

    let [desc, setDesc] = useState("");
    let [predictedClass, setClass] = useState(null);
    let [loader, setLoader] = useState(false);
    let [result, setResult] = useState([]);
    let [show , setShow] = useState(false)
    const grpNames=  groupName.map((obj)=>obj[0]);

    useEffect(() => {
        if(!loader && show ){
      
        var displayInputDisable = Knob({
            className: "review",
            thickness: 0.1,
            fgColor: primary,
            bgColor: '#f6f7fb',
            lineCap: 'round',
            displayPrevious: false,
            value: predictedClass !== null ? Math.floor(result[0] * 100) : 0
        })
        document.getElementById('displayInputDisable').appendChild(displayInputDisable);
    }

    }, [loader,show, predictedClass])
 
    const postData = (e) => {
        e.preventDefault();
        console.log(desc);
        fetch("https://group-assigned.herokuapp.com/predict_api", {
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
                 const outputData= res["data"]["0"];
                const arr =  outputData[2].sort((left, right) => right - left)
                 setResult(arr);

                //  console.log(outputData[2])
                //  console.log(result);
                 setClass(outputData[1])
                
                setLoader(false)

            })
            .catch(err => console.log(err));


    }


    return (
        <Fragment>
            <Breadcrumb title="Live Group Prediction" />
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
                                                        setShow(true)
                                                        setLoader(true)
                                                        postData(e)
                                                    }} >{"Predict"}</Button>
                                            </FormGroup>
                                        </Form>
                                    </Col>
                                </Row>
                                {show ? <Row >
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
                                                            <div className="knob " id="displayInputDisable" style={{ position: "relative" }}>
                                                                {/* <img src={img} /> */}
                                                            </div>
                                                        </div>

                                                        <h5 className="b-b-light" >Predicted Category : { predictedClass !=null ? predictedClass : ""} </h5>
                                                        
                                                      {result.map((value, i) => {
                                                         
                                                 return  <Row  key={i}>
                                                          <Col style={{ color: "#EE4646" }}><span>{grpNames[i]}</span>
                                                              <h4 className="counter mb-2">
                                                              </h4>
                                                          </Col>
                                                          <Col className="text-center">
                                                              {(value*100).toFixed(1)+ "%"}
                                                          </Col>
                                                      </Row>
                                                      })}
                                                      
                                                       
                                                       
                                                    </div>
                                                }


                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row> : " " }

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default CategoryPrediction;