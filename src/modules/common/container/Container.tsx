import React from "react";
import {PropsBase} from "../../../models/ui/data/PropsBase";

const Container = ({children}: PropsBase) => {
    return <div className="app__container">
        {children}
    </div>
}

export default Container;