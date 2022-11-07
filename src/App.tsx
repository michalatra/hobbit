import React from 'react';
import Navbar from "./modules/common/navbar/Navbar";
import ContentContainer from "./modules/common/contentContainer/ContentContainer";
import {Outlet} from "react-router-dom";
import {Subscribe} from "@react-rxjs/core";
import GlobalContainer from "./modules/common/globalContainer/GlobalContainer";

const App = () => {
  return <React.Fragment>
    <Subscribe>
      <GlobalContainer>
        <Navbar />
        <ContentContainer>
          <Outlet />
        </ContentContainer>
      </GlobalContainer>
    </Subscribe>
  </React.Fragment>
}

export default App;
