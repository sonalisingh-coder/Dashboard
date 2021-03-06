import React, { Fragment } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import DataTable from 'react-data-table-component';
import {groupData} from "./group-data";



const Productlist = () => {

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
      <Breadcrumb title="Group Classification" />
      <Container fluid={true}>

        <Row>
          <Col sm="12">
            <Card>
              {/* <CardHeader>
                                <h5>{"Ticket Classification"} </h5>
                            </CardHeader> */}
              <CardBody>

                {/* <input
                  type="file"
                  accept=".csv,.xlsx,.xls"


                  onChange={handleFileUpload}
                /> */}
                {/* <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    columns={columns}
                    data={data}
                    pagination
                    highlightOnHover
                    customStyles={customStyles}
                  />
                </div> */}

                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    columns={tableColumns}
                    data={groupData}
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


