import React, { Fragment, useState, useLayoutEffect, useEffect } from 'react';
import { Sliders } from 'react-feather'
import { Link } from 'react-router-dom'
const Leftbar = () => {

  const [, setBonusUI] = useState(false)

  const [sidebartoggle, setSidebartoggle] = useState(true)
  const [, setMegaboxtoggle1] = useState(true)
  const [, setMegaboxtoggle2] = useState(true)
  const [, setMegaboxtoggle3] = useState(true)
  const [, setMegaboxtoggle4] = useState(true)
  const width = useWindowSize()

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }


  useEffect(() => {

    var ignoreClick_On_Out_side_Element = document.getElementById('out_side_click');
    var ignoreClick_On_Main_Nav_Element = document.getElementById('sidebar-menu');
    document.addEventListener('click', function(event) {
        var isClickOutSideElement = ignoreClick_On_Out_side_Element.contains(event.target);
        var isClickMainNavElement = ignoreClick_On_Main_Nav_Element.contains(event.target);
        if (window.innerWidth <= 991 && !isClickOutSideElement && !isClickMainNavElement) {
            //Do something click is outside specified element
            document.querySelector(".page-header").className = "page-header close_icon";
            document.querySelector(".sidebar-wrapper").className = "sidebar-wrapper close_icon "
        }
    });

    if (width <= 767) {
      setMegaboxtoggle1(true)
      setMegaboxtoggle2(true)
      setMegaboxtoggle3(true)
      setMegaboxtoggle4(true)
    } else {
      setMegaboxtoggle1(false)
      setMegaboxtoggle2(false)
      setMegaboxtoggle3(false)
      setMegaboxtoggle4(false)
    }

  }, [width])



  const responsive_openCloseSidebar = (toggle) => {
    if(width <= 991){
      setBonusUI(false)
      document.querySelector(".page-header").className = "page-header";
      document.querySelector(".sidebar-wrapper").className = "sidebar-wrapper "
    }else{
      if (toggle) {
        setSidebartoggle(!toggle);
        document.querySelector(".page-header").className = "page-header close_icon";
        document.querySelector(".sidebar-wrapper").className = "sidebar-wrapper close_icon "
        document.querySelector(".mega-menu-container").classList.remove("d-block")
      } else {
        setSidebartoggle(!toggle);
        document.querySelector(".page-header").className = "page-header";
        document.querySelector(".sidebar-wrapper").className = "sidebar-wrapper "
      }
    }
  };




  return (
    <Fragment>
      <div className="header-logo-wrapper" id="out_side_click">
        <div className="logo-wrapper">
          <Link to={`/dashboard`}>
            <img className="img-fluid for-light" src={require("../../assets/images/logo/logo.png")} alt="" />
            <img className="img-fluid for-dark" src={require("../../assets/images/logo/logo_dark.png")} alt="" />
          </Link>
        </div>
        <div className="toggle-sidebar" onClick={() => responsive_openCloseSidebar(sidebartoggle)} style={window.innerWidth <= 991 ? {display:"block"} : {display:"none"}}>
          <Sliders className="status_toggle middle sidebar-toggle" id="sidebar-toggle" />
        </div>
      </div>
      
    </Fragment>
  );
}

export default Leftbar;