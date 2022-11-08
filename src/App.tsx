import React, {useEffect} from 'react';
import Navbar from "./modules/common/navbar/Navbar";
import ContentContainer from "./modules/common/contentContainer/ContentContainer";
import {Outlet, useNavigate} from "react-router-dom";
import {Subscribe} from "@react-rxjs/core";
import GlobalContainer from "./modules/common/globalContainer/GlobalContainer";
import {navigateEvent$} from "./services/NavigationService";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const subscription = navigateEvent$
        .subscribe(path => navigate(path));

    return () => subscription.unsubscribe();
  }, [])

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
