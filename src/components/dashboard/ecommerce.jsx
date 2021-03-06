import React, { Fragment,useState } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import ApexCharts from 'react-apexcharts'
import Chart from 'react-apexcharts'
import { Currentlysale ,  areaSpaline} from './chartsData/apex-charts-data'
import {Container,Row,Col,Card,CardBody,CardHeader} from 'reactstrap' 
import CountUp from 'react-countup';
import {  Bar} from 'react-chartjs-2';
import { GoogleDonutChart,barChartData , barChartOptions,} from './chartsData/chartist-charts-data';
import { Database, Layers,Lock, ArrowUp } from 'react-feather';

const Ecommerce = () => {
    // eslint-disable-next-line
    const[location] = useState({ address: false,
      mapPosition: {
        lat: 18.5204, lng: 73.8567
        },
        markerPosition: {
        lat: 18.5204, lng: 73.8567
        }
    })


    return (
        <Fragment>
            <Breadcrumb parent="" title="Dashboard" />
            <Container fluid={true}>
            <Row >
            <Col xl="8 xl-100" className="dashboard-sec box-col-12">
            <Card className="earning-card">
              <CardBody className="p-0">
                <Row className="m-0">
                  <Col xl="3" className="earning-content p-0">
                    <Row className="m-0 chart-left">
                      <Col xl="12" className="p-0 left_side_earning">
                        <h5>Dashboard</h5>
                        <p className="font-roboto">{"Overview of last month"}</p>
                      </Col>
                      <Col xl="12" className="p-0 left_side_earning">
                        <h5>{"550"} </h5>
                        <p className="font-roboto">{"This Month Tickets"}</p>
                      </Col>
                    
                      <Col xl="12" className="p-0 left_side_earning">
                        <h5>{"20% "}<ArrowUp className="icon-xs " style={{marginBottom:-4, color:'#f73164'}}/></h5>
                        <p className="font-roboto">{"This Month Growth"}</p>
                      </Col>
                      <Col xl="12" className="p-0 left_side_earning">
                        <h5>{"5% "} <ArrowUp className="icon-xs" style={{marginBottom:-4, color: '#f73164'}} /></h5>
                        <p className="font-roboto">{"This Week Growth"}</p>
                      </Col>
                    
                    </Row>
                  </Col>
                  <Col xl="9" className="p-0">
                    <div className="chart-right">
                      <Row className="m-0 p-tb">
                        <Col xl="9" md="9" sm="9" className="col-12 p-0">
                          <div className="inner-top-left">
                            <ul className=" list-unstyled">
                              
                              <li className="active">{"Last 7 days report"}</li>
                              
                            </ul>
                          </div>
                        </Col>
                        <Col xl="3" md="3" sm="3" className="col-12 p-0 ">
                          <div className="inner-top-right">
                            <ul className=" list-unstyled ">
                              <li>{"Network"}</li>
                              <li>{"Server"}</li>
                              <li>{"Application"}</li>
                            </ul>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col xl="12">
                          <CardBody className="p-0">
                            <div className="current-sale-container">
                              <ApexCharts id="chart-currently" options={Currentlysale.options} series={Currentlysale.series} type='area' height={240} />
                            </div>
                          </CardBody>
                        </Col>
                      </Row>
                    </div>
                   
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
            <Col sm="12" xl="4">
                <Card>
                  <CardHeader>
                    <h5>Tickets By Categories <span className="digits"></span></h5>
                  </CardHeader>
                  <CardBody className="chart-block" >
                  <GoogleDonutChart/>
                  </CardBody>
                </Card>
              </Col>

             
         
         
          <Col  lg="4" >
            <Card className="o-hidden">
              <CardBody className="bg-primary b-r-4 card-body">
                <div className="media static-top-widget">
                  <div className="align-self-center text-center"><Database /></div>
                  <div className="media-body"><span className="m-0">{"Total Tickets"}</span>
                    <h4 className="mb-0 counter"><CountUp end={6659} /></h4><Database className="icon-bg" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col  lg="4" >
            <Card className="o-hidden">
              <div className="bg-secondary b-r-4 card-body">
                <div className="media static-top-widget">
                  <div className="align-self-center text-center"><Layers/></div>
                  <div className="media-body"><span className="m-0">{"Open Tickets"}</span>
                    <h4 className="mb-0 counter"><CountUp end={9856} /></h4><Layers className="icon-bg" />
                  </div>
                </div>
              </div>
            </Card>
          </Col>
          <Col  lg="4" >
            <Card className="o-hidden">
              <CardBody className="bg-primary b-r-4">
                <div className="media static-top-widget">
                  <div className="align-self-center text-center"><Lock /></div>
                  <div className="media-body"><span className="m-0">{"Closed Tickets"}</span>
                    <h4 className="mb-0 counter"><CountUp end={893} /></h4><Lock className="icon-bg" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col sm="12" xl="12">
            <Card>
              <CardHeader>
                <h5>{"Area Spaline Chart"} </h5>
              </CardHeader>
              <CardBody>
                <Chart options={areaSpaline.options} series={areaSpaline.series} height="350" type="area" />
              </CardBody>
            </Card>
          </Col>  

<Col xl="6" md="12">
            <Card>
              <CardHeader>
                <h5>{"Tickets By Urgency"}</h5>
              </CardHeader>
              <CardBody className="chart-block">
                  <Bar data={barChartData} options={barChartOptions} width={778} height={410} />
              </CardBody>
            </Card>
          </Col>
         

              <Col xl="6 xl-50" className="news box-col-6">
            <Card>
              <CardHeader>
                <div className="header-top">
                  <h5 className="m-0">{"News Update"}</h5>
                  <div className="card-header-right-icon">
                    <select className="button btn btn-primary">
                      <option>{"Today"}</option>
                      <option>{"Tomorrow"}</option>
                      <option>{"Yesterday"}</option>
                    </select>
                  </div>
                </div>
              </CardHeader>
              <CardBody className="p-0">
                <div className="news-update">
                  <h6>{"Windows update is due on 28 Feb."}</h6><span>{"New windows update is coming soon."}</span>
                </div>
                <div className="news-update">
                  <h6>{"Server A1.007 is Down for 6 hours"}</h6><span> {"Server team is working to solve this issue"}</span>
                </div>
                <div className="news-update">
                  <h6>{"Network is down for India Location - Pune."}</h6><span>{"Network team is resolving this issue"}</span>
                </div>
              </CardBody>
              <div className="card-footer" style={{padding:30}}>
                <div className="bottom-btn"><a href="#javascript">{"More..."}</a></div>
              </div>
            </Card>
          </Col>
             
            </Row>
          </Container>
        </Fragment>
    );
}

export default Ecommerce;