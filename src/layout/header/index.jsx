import React, { Fragment,useState } from 'react';
import {Row} from 'reactstrap'
import {MENUITEMS} from '../sidebar/menu'
import LeftHeader from './leftbar'
import RightHeader from './rightbar'


const Header = () => {

  // eslint-disable-next-line
  const [] = useState(MENUITEMS);
  
  // eslint-disable-next-line
  const [] = useState(false);
  // eslint-disable-next-line
  const [] = useState(false);
  
  

  return (
      <Fragment>
      <div className="page-header">
      <Row className="header-wrapper m-0 d-flex justify-content-between" >
      <LeftHeader/>
      <RightHeader/>
      </Row>
    </div>
    </Fragment>
  );
}

export default Header;