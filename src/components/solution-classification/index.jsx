import React, { Fragment, useEffect, useState } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import DataTable from 'react-data-table-component';
//import csvFile from "./ticket-data.csv";
import {solutionData} from "./solution-data.js";
import * as XLSX from 'xlsx';


const Productlist = () => {


  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);



  const tableColumns = [
    {
      name: "Description",
      selector: 'Description',
      wrap: "true",
      center: "true"
    },
    {
      name: "Actual Category",
      selector: 'Actual_cate',
      wrap: "true",
      center: "true"
    },
    {
      name: "Predicted Category",
      selector: 'Predicted_cate',
      wrap: "true",
      center: "true"
    }

  ];

 

  const customStyles = {
    rows: {
      style: {
        minHeight: '72px',
        // override the row height
      }
    },
    headCells: {
      style: {
        borderRight: "1px solid #eee",
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
      },
    },
    cells: {
      style: {
        borderRight: "1px solid #eee",
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
      },
    },
  };


  return (
    <Fragment>
      <Breadcrumb title="Solution Classification" />
      <Container fluid={true}>

        <Row>
          <Col sm="12">
            <Card>
              {/* <CardHeader>
                                <h5>{"Ticket Classification"} </h5>
                            </CardHeader> */}
              <CardBody>


                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    columns={tableColumns}
                    data={solutionData}
                    pagination
                    highlightOnHover
                    customStyles={customStyles}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>

  )

}




export default Productlist


