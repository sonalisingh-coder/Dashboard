import React, { Fragment, useEffect, useState } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import DataTable from 'react-data-table-component';
//import csvFile from "./ticket-data.csv";
import {productData} from "./ticket_prediction";
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

  // process CSV data
  // const processData = dataString => {
  //   const dataStringLines = dataString.split(/\r\n|\n/);
  //   const headers = dataStringLines[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);

  //   const list = [];
  //   for (let i = 1; i < dataStringLines.length; i++) {
  //     const row = dataStringLines[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
  //     if (headers && row.length === headers.length) {
  //       const obj = {};
  //       for (let j = 0; j < headers.length; j++) {
  //         let d = row[j];
  //         if (d.length > 0) {
  //           if (d[0] === '"')
  //             d = d.substring(1, d.length - 1);
  //           if (d[d.length - 1] === '"')
  //             d = d.substring(d.length - 2, 1);
  //         }
  //         if (headers[j]) {
  //           obj[headers[j]] = d;
  //         }
  //       }

  //       // remove the blank rows
  //       if (Object.values(obj).filter(x => x).length > 0) {
  //         list.push(obj);
  //       }
  //     }
  //   }

  //   // prepare columns list from headers
  //   const columns = headers.map(c => ({

  //     name: c,
  //     selector: c,
  //     wrap: "true",
  //     center: "true"
  //   }));

  //   console.log(list);
  //   console.log(columns);
  //   setData(list);
  //   setColumns(columns);
  // }




  // const ticketsData = new File([__dirname + `${csvFile}`], "ticket-data.csv", { type: "text/csv" })
  // let reader = new FileReader();
  // reader.onload = function (e) {
  //   let blob = new Blob([new Uint8Array(e.target.result)], { type: ticketsData.type });
  //   console.log(blob);
  // };
 
  // reader.readAsText(ticketsData);


  // handle file upload
  // const handleFileUpload = e => {
 
  //   console.log(ticketsData);
  //   const file = e.target.files[0];
  //   const reader = new FileReader();
  //   reader.onload = (evt) => {
   

  //     const bstr = evt.target.result;
  //     const wb = XLSX.read(bstr, { type: 'binary' });
   
  //     const wsname = wb.SheetNames[0];
  //     const ws = wb.Sheets[wsname];
      
  //     const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
  //     processData(data);
  //   };
  //   reader.readAsText(file);
  // }

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
      <Breadcrumb title="Ticket Classification" />
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
                    data={productData}
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


