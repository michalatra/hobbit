import React from "react";
import {PropsBase} from "../../../models/ui/data/PropsBase";

const ContentContainer = ({children}: PropsBase) => {
    return <div className="app__global-content-container">
        {children}
    </div>
}

export default ContentContainer;