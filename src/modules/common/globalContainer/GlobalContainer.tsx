import React from "react";
import {PropsBase} from "../../../models/ui/data/PropsBase";

const GlobalContainer = ({children}: PropsBase) => {
    return <div className="app__global-container">
        {children}
    </div>
}

export default GlobalContainer;