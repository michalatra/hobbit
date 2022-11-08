import React from "react";
import {PropsBase} from "../../../models/ui/data/PropsBase";

const ContainerGrow = ({children}: PropsBase) => {
    return <div className="app__container--grow">
        {children}
    </div>
}

export default ContainerGrow;