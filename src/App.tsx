import React from 'react';
import Navbar from "./modules/common/navbar/Navbar";
import ContentContainer from "./modules/common/navbar/ContentContainer";
import {Outlet} from "react-router-dom";

function App() {
  return <React.Fragment>
    <Navbar />
    <ContentContainer>
      <Outlet />
    </ContentContainer>
  </React.Fragment>
}

export default App;
