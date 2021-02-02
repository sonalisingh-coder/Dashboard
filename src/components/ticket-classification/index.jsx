import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import ReactFileReader from 'react-file-reader';
import { CsvToHtmlTable } from 'react-csv-to-table';
import Papa from 'papaparse';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'
import DataTable from 'react-data-table-component';
import { productData, productColumns } from '../../data/product-list'
import csvFile from "./ticket_classi_pred.csv"

const sampleData = `
Chrysler Imperial,14.7,8,440,230,3.23,5.345,17.42,0,0,3,4
Fiat 128,32.4,4,78.7,66,4.08,2.2,19.47,1,1,4,1
`;

let tableData = null;
Papa.parse(csvFile, {
    download: true,
    complete: function (input) {
        const records = input.data;
    },
    step: function (row) {
         tableData=row.data;
        //  console.log(row.data);
    }
});

class Productlist extends React.Component {
    state = {
        csvData: null
    };


    render() {
        return <Fragment>
            <Breadcrumb parent="Dashboard" title="Ticket List" />
            <Container fluid={true}>
                <ReactFileReader
                    multipleFiles={false}
                    fileTypes={[".csv"]}

                    handleFiles={this.handleFiles}>
                    <button className='btn'>Upload</button>
                </ReactFileReader>


                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>{"Ticket Classification"} </h5><span>{""}</span>
                            </CardHeader>
                            <CardBody>
                                <div className="table-responsive product-table">
                                    <CsvToHtmlTable
                                        data={this.state.csvData || sampleData}
                                        csvDelimiter=","
                                        tableClassName="table table-striped table-hover"
                                    />

                                    {/* <DataTable
                                        noHeader
                                        columns={productColumns}
                                        data={productData}
                                        pagination
                                        highlightOnHover
                                        persistTableHead
                                    /> */}
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>

    }




    handleFiles = files => {
        var reader = new FileReader();
        reader.onload = (e) => {
            // Use reader.result
            this.setState({
                csvData: reader.result
            })
        }
        console.log(files[0])
        reader.readAsText(files[0]);
    }

}
// const Productlist = (data) => {
//   const [csvData , setCsvData] = useState({});

//   const handleFiles = files => {
//     var reader = new FileReader();
//     reader.onload = () => {
//         // Use reader.result
//         setCsvData({
//           csvData: reader.result
//         })
//       }
//       reader.readAsText(files[0]);
// }

//     return (
//   <Fragment>
//   <Breadcrumb parent="ECommerce" title="Product List"/>
//   <Container fluid={true}>



//     <Row>
//         <Col sm="12">
//             <Card>
//                 <CardHeader>
//                     <h5>{"ProductListTitle"} </h5><span>{"ProductListDesc"}</span>
//                 </CardHeader>
//                 <CardBody>
//                     <div className="table-responsive product-table">
//                         <DataTable
//                             noHeader
//                             columns={productColumns}
//                             data={productData}
//                             pagination
//                             highlightOnHover
//                             persistTableHead
//                         />
//                     </div>
//                 </CardBody>
//             </Card>
//         </Col>
//     </Row>
//    </Container>
//    </Fragment>

//     )

//   }



export default Productlist


