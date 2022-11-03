import React from 'react';
import Navbar from "./modules/common/navbar/Navbar";
import ContentContainer from "./modules/common/contentContainer/ContentContainer";
import {Outlet} from "react-router-dom";
import {Subscribe} from "@react-rxjs/core";

const App = () => {
  return <React.Fragment>
    <Subscribe>
      <Navbar />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </Subscribe>
  </React.Fragment>
}

export default App;
